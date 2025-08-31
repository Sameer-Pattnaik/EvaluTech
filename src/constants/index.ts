import { Clock, Phone, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Phone,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      cpp: `class Solution{
      public:
        vector<int> twoSum(vector<int>& nums, int target) {
         // Write your solution here

        }
};`,
      python: `def two_sum(nums, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 104",
      "-109 ≤ nums[i] ≤ 109",
      "-109 ≤ target ≤ 109",
      "Only one valid answer exists.",
    ],
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    starterCode: {
      cpp: `class Solution{
      public:
        void reverseString(vector<char>& s) {
      // Write your solution here

        }
};`,
      python: `def reverse_string(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    description:
      "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\n\nAn integer is a palindrome when it reads the same forward and backward.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation:
          "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
      },
    ],
    starterCode: {
      cpp: `class Solution{
      public:
        bool isPalindrome(int x) {
        // Write your solution here


        }
};`,
      python: `def is_palindrome(x):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "fibonacci-series",
    title: "Fibonacci Series",
    description:
      "Given an integer `n`, return the first `n` numbers of the Fibonacci series as an array. The Fibonacci series is defined as: F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2) for n > 1.",
    examples: [
      {
        input: "n = 5",
        output: "[0,1,1,2,3]",
      },
      {
        input: "n = 8",
        output: "[0,1,1,2,3,5,8,13]",
      },
    ],
    starterCode: {
      cpp: `class Solution{
      public:
        vector<int> fibonacciSeries(int n) {
          // Write your solution here

        }
};`,
      python: `def fibonacci_series(n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int[] fibonacciSeries(int n) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "1 ≤ n ≤ 50",
    ],
  },
  {
    id: "duplicate-elements",
    title: "Find Duplicate Elements",
    description:
      "Given an array of integers `nums`, return all elements that appear more than once in the array. The result should be sorted in ascending order.",
    examples: [
      {
        input: "nums = [4,3,2,7,8,2,3,1]",
        output: "[2,3]",
      },
      {
        input: "nums = [1,1,2]",
        output: "[1]",
      },
    ],
    starterCode: {
      cpp: `class Solution{
      public:
        vector<int> findDuplicates(vector<int>& nums) {
          // Write your solution here

        }
};`,
      python: `def find_duplicates(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "1 ≤ nums.length ≤ 10^4",
      "1 ≤ nums[i] ≤ 10^5",
    ],
  },
  {
    id: "kadane-algorithm",
    title: "Kadane's Algorithm (Maximum Subarray Sum)",
    description:
      "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum = 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
    ],
    starterCode: {
      cpp: `class Solution{
      public:
        int maxSubArray(vector<int>& nums) {
          // Write your solution here

        }
};`,
      python: `def max_sub_array(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "1 ≤ nums.length ≤ 10^5",
      "-10^4 ≤ nums[i] ≤ 10^4",
    ],
  },
  {
    id: "merge-sort",
    title: "Merge Sort",
    description:
      "Implement the merge sort algorithm to sort an array of integers `nums` in ascending order.",
    examples: [
      {
        input: "nums = [5,2,3,1]",
        output: "[1,2,3,5]",
      },
      {
        input: "nums = [4,1,6,2]",
        output: "[1,2,4,6]",
      },
    ],
    starterCode: {
      cpp: `class Solution{
      public:
        void mergeSort(vector<int>& nums) {
          // Write your solution here

        }
};`,
      python: `def merge_sort(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void mergeSort(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "1 ≤ nums.length ≤ 10^4",
      "-10^5 ≤ nums[i] ≤ 10^5",
    ],
  },
  {
    id: "quick-sort",
    title: "Quick Sort",
    description:
      "Implement the quick sort algorithm to sort an array of integers `nums` in ascending order.",
    examples: [
      {
        input: "nums = [3,6,8,10,1,2,1]",
        output: "[1,1,2,3,6,8,10]",
      },
      {
        input: "nums = [5,4,3,2,1]",
        output: "[1,2,3,4,5]",
      },
    ],
    starterCode: {
      cpp: `class Solution{
      public:
        void quickSort(vector<int>& nums) {
          // Write your solution here

        }
};`,
      python: `def quick_sort(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void quickSort(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "1 ≤ nums.length ≤ 10^4",
      "-10^5 ≤ nums[i] ≤ 10^5",
    ],
  },
  {
    id: "anagram-check",
    title: "Check Two Strings Are Anagram",
    description:
      "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An anagram is a word formed by rearranging the letters of another.",
    examples: [
      {
        input: "s = 'anagram', t = 'nagaram'",
        output: "true",
      },
      {
        input: "s = 'rat', t = 'car'",
        output: "false",
      },
    ],
    starterCode: {
      cpp: `class Solution{
      public:
        bool isAnagram(string s, string t) {
          // Write your solution here

        }
};`,
      python: `def is_anagram(s, t):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isAnagram(String s, String t) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "1 ≤ s.length, t.length ≤ 10^5",
      "s and t consist of lowercase English letters.",
    ],
  },
  {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    description:
      "Write a function to find the longest common prefix string amongst an array of strings `strs`. If there is no common prefix, return an empty string.",
    examples: [
      {
        input: "strs = ['flower','flow','flight']",
        output: "'fl'",
      },
      {
        input: "strs = ['dog','racecar','car']",
        output: "''",
      },
    ],
    starterCode: {
      cpp: `class Solution{
      public:
        string longestCommonPrefix(vector<string>& strs) {
          // Write your solution here

        }
};`,
      python: `def longest_common_prefix(strs):
    # Write your solution here
    pass`,
      java: `class Solution {
    public String longestCommonPrefix(String[] strs) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "1 ≤ strs.length ≤ 200",
      "0 ≤ strs[i].length ≤ 200",
      "strs[i] consists of only lowercase English letters.",
    ],
  },
  {
    id: "coin-change",
    title: "Coin Change Problem",
    description:
      "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the fewest number of coins needed to make up that amount. If that amount cannot be made up by any combination of the coins, return -1.",
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
        explanation: "11 = 5 + 5 + 1",
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
      },
    ],
    starterCode: {
      cpp: `class Solution{
      public:
        int coinChange(vector<int>& coins, int amount) {
          // Write your solution here

        }
};`,
      python: `def coin_change(coins, amount):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int coinChange(int[] coins, int amount) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "1 ≤ coins.length ≤ 12",
      "1 ≤ coins[i] ≤ 2^31 - 1",
      "0 ≤ amount ≤ 10^4",
    ],
  },

];

export const LANGUAGES = [
  { id: "cpp", name: "C++", icon: "/cpp.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    cpp: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];