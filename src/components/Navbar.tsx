import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { LaptopMinimal } from "lucide-react";
import DashboardBtn from "./DashBoardBtn";
import { SignedIn, UserButton } from "@clerk/nextjs";

function Navbar(){
    return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <LaptopMinimal className="size-8 text-violet-500" />
          <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
            EvaluTech
          </span>
        </Link>

        <SignedIn>
            <div className="flex items-center space-x-4 ml-auto">
            <DashboardBtn/>
            <ModeToggle />
            <UserButton />
            </div>
        </SignedIn>
      </div>
    </nav>
    )
}
export default Navbar;