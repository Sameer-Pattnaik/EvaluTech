
import { convexToJson, v } from "convex/values";
import { query, mutation } from "./_generated/server";
export const syncUser = mutation({
    args:{
        clerkId: v.string(),
        name: v.string(),
        email: v.string(),
        image: v.optional(v.string()),
    },
    handler: async(ctx, args)=>{
        const existingUser = await ctx.db.query("users")
        .filter(q => q.eq(q.field("clerkId"), args.clerkId)).first()

        if(existingUser) return; 

        return await ctx.db.insert("users", {
            ...args,
            role: "candidate",
        });
    }
});

export const getUsers = query({
    handler: async (ctx)=> {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("User is not authenticated");
        }
        const users = await ctx.db.query("users").collect();
        return users;
    }
});

export const getUserByClerkId = query({
    args: { clerkId: v.string() },
    handler: async (ctx, args) =>{
        const users = await ctx.db
        .query("users")
        .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
        .first();

        return users;
    },
});


