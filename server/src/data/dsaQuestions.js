export const dsaQuestions = [
  {
    title: 'Two Sum',
    difficulty: 'Easy',
    tags: ['Array', 'Hash Map'],
    problem: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    examples: [{ input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'nums[0] + nums[1] equals 9.' }],
    constraints: ['2 <= nums.length <= 10000', '-1000000000 <= nums[i] <= 1000000000'],
    solutionApproach: 'Use a hash map to store numbers already seen. For each number, check whether target - number exists.',
    solutionCode: 'function twoSum(nums, target) {\n  const seen = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const need = target - nums[i];\n    if (seen.has(need)) return [seen.get(need), i];\n    seen.set(nums[i], i);\n  }\n  return [];\n}'
  },
  {
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    tags: ['Stack', 'String'],
    problem: 'Given a string containing brackets, determine if the input string is valid.',
    examples: [{ input: 's = "()[]{}"', output: 'true', explanation: 'Every bracket closes in the correct order.' }],
    constraints: ['1 <= s.length <= 10000'],
    solutionApproach: 'Push opening brackets on a stack. When a closing bracket appears, it must match the top of the stack.',
    solutionCode: 'function isValid(s) {\n  const stack = [];\n  const pairs = { ")": "(", "}": "{", "]": "[" };\n  for (const ch of s) {\n    if (ch === "(" || ch === "{" || ch === "[") stack.push(ch);\n    else if (stack.pop() !== pairs[ch]) return false;\n  }\n  return stack.length === 0;\n}'
  },
  {
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    tags: ['String', 'Sliding Window'],
    problem: 'Given a string s, find the length of the longest substring without repeating characters.',
    examples: [{ input: 's = "abcabcbb"', output: '3', explanation: 'The answer is abc.' }],
    constraints: ['0 <= s.length <= 50000'],
    solutionApproach: 'Use a sliding window and remember the last seen index of each character.',
    solutionCode: 'function lengthOfLongestSubstring(s) {\n  const last = new Map();\n  let left = 0;\n  let best = 0;\n  for (let right = 0; right < s.length; right++) {\n    if (last.has(s[right])) left = Math.max(left, last.get(s[right]) + 1);\n    last.set(s[right], right);\n    best = Math.max(best, right - left + 1);\n  }\n  return best;\n}'
  },
  {
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    tags: ['Array', 'Dynamic Programming'],
    problem: 'Given an array prices where prices[i] is the price of a stock on day i, return the maximum profit from one buy and one sell.',
    examples: [{ input: 'prices = [7,1,5,3,6,4]', output: '5', explanation: 'Buy at 1 and sell at 6 for profit 5.' }],
    constraints: ['1 <= prices.length <= 100000', '0 <= prices[i] <= 10000'],
    solutionApproach: 'Track the lowest price seen so far and update the best profit at each day.',
    solutionCode: 'function maxProfit(prices) {\n  let minPrice = Infinity;\n  let best = 0;\n  for (const price of prices) {\n    minPrice = Math.min(minPrice, price);\n    best = Math.max(best, price - minPrice);\n  }\n  return best;\n}'
  },
  {
    title: 'Contains Duplicate',
    difficulty: 'Easy',
    tags: ['Array', 'Hash Map'],
    problem: 'Given an integer array nums, return true if any value appears at least twice, otherwise return false.',
    examples: [{ input: 'nums = [1,2,3,1]', output: 'true', explanation: 'The number 1 appears twice.' }],
    constraints: ['1 <= nums.length <= 100000'],
    solutionApproach: 'Store seen numbers in a Set. If a number is already present, a duplicate exists.',
    solutionCode: 'function containsDuplicate(nums) {\n  const seen = new Set();\n  for (const num of nums) {\n    if (seen.has(num)) return true;\n    seen.add(num);\n  }\n  return false;\n}'
  },
  {
    title: 'Product of Array Except Self',
    difficulty: 'Medium',
    tags: ['Array', 'Prefix Product'],
    problem: 'Given an integer array nums, return an array answer such that answer[i] is the product of all elements except nums[i] without using division.',
    examples: [{ input: 'nums = [1,2,3,4]', output: '[24,12,8,6]', explanation: 'Each position contains the product of every other number.' }],
    constraints: ['2 <= nums.length <= 100000'],
    solutionApproach: 'Build prefix products in the result, then multiply by suffix products while scanning from right to left.',
    solutionCode: 'function productExceptSelf(nums) {\n  const result = Array(nums.length).fill(1);\n  let prefix = 1;\n  for (let i = 0; i < nums.length; i++) {\n    result[i] = prefix;\n    prefix *= nums[i];\n  }\n  let suffix = 1;\n  for (let i = nums.length - 1; i >= 0; i--) {\n    result[i] *= suffix;\n    suffix *= nums[i];\n  }\n  return result;\n}'
  },
  {
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    tags: ['Array', 'Dynamic Programming'],
    problem: 'Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.',
    examples: [{ input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: 'The subarray [4,-1,2,1] has sum 6.' }],
    constraints: ['1 <= nums.length <= 100000'],
    solutionApproach: 'Use Kadane\'s algorithm: keep the best subarray ending here and the global best.',
    solutionCode: 'function maxSubArray(nums) {\n  let current = nums[0];\n  let best = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    current = Math.max(nums[i], current + nums[i]);\n    best = Math.max(best, current);\n  }\n  return best;\n}'
  },
  {
    title: 'Valid Anagram',
    difficulty: 'Easy',
    tags: ['String', 'Hash Map'],
    problem: 'Given two strings s and t, return true if t is an anagram of s.',
    examples: [{ input: 's = "anagram", t = "nagaram"', output: 'true', explanation: 'Both strings contain the same character counts.' }],
    constraints: ['1 <= s.length, t.length <= 50000'],
    solutionApproach: 'Count characters from s, subtract characters from t, and ensure every count returns to zero.',
    solutionCode: 'function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const count = new Map();\n  for (const ch of s) count.set(ch, (count.get(ch) || 0) + 1);\n  for (const ch of t) {\n    if (!count.has(ch)) return false;\n    count.set(ch, count.get(ch) - 1);\n    if (count.get(ch) === 0) count.delete(ch);\n  }\n  return count.size === 0;\n}'
  },
  {
    title: 'Group Anagrams',
    difficulty: 'Medium',
    tags: ['String', 'Hash Map'],
    problem: 'Given an array of strings strs, group the anagrams together.',
    examples: [{ input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]', explanation: 'Words with matching sorted characters are grouped.' }],
    constraints: ['1 <= strs.length <= 10000'],
    solutionApproach: 'Sort each word to form a signature key and collect words with the same signature in a map.',
    solutionCode: 'function groupAnagrams(strs) {\n  const groups = new Map();\n  for (const word of strs) {\n    const key = word.split("").sort().join("");\n    if (!groups.has(key)) groups.set(key, []);\n    groups.get(key).push(word);\n  }\n  return Array.from(groups.values());\n}'
  },
  {
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    tags: ['Linked List'],
    problem: 'Given the head of a singly linked list, reverse the list and return the new head.',
    examples: [{ input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]', explanation: 'The links are reversed in place.' }],
    constraints: ['0 <= number of nodes <= 5000'],
    solutionApproach: 'Iterate through the list while redirecting each node\'s next pointer to the previous node.',
    solutionCode: 'function reverseList(head) {\n  let prev = null;\n  let curr = head;\n  while (curr) {\n    const next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n  }\n  return prev;\n}'
  },
  {
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    tags: ['Linked List', 'Recursion'],
    problem: 'Given the heads of two sorted linked lists, merge them into one sorted linked list.',
    examples: [{ input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]', explanation: 'Nodes are merged in sorted order.' }],
    constraints: ['0 <= list length <= 50'],
    solutionApproach: 'Use a dummy head and repeatedly attach the smaller current node from either list.',
    solutionCode: 'function mergeTwoLists(list1, list2) {\n  const dummy = new ListNode(0);\n  let tail = dummy;\n  while (list1 && list2) {\n    if (list1.val <= list2.val) {\n      tail.next = list1;\n      list1 = list1.next;\n    } else {\n      tail.next = list2;\n      list2 = list2.next;\n    }\n    tail = tail.next;\n  }\n  tail.next = list1 || list2;\n  return dummy.next;\n}'
  },
  {
    title: 'Linked List Cycle',
    difficulty: 'Easy',
    tags: ['Linked List', 'Two Pointers'],
    problem: 'Given head, determine if the linked list has a cycle.',
    examples: [{ input: 'head = [3,2,0,-4], pos = 1', output: 'true', explanation: 'The tail connects back to node index 1.' }],
    constraints: ['0 <= number of nodes <= 10000'],
    solutionApproach: 'Use Floyd\'s slow and fast pointers. If they meet, a cycle exists.',
    solutionCode: 'function hasCycle(head) {\n  let slow = head;\n  let fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}'
  },
  {
    title: 'Min Stack',
    difficulty: 'Medium',
    tags: ['Stack', 'Design'],
    problem: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
    examples: [{ input: 'push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()', output: '[-3,0,-2]', explanation: 'The stack tracks current minimum values.' }],
    constraints: ['Operations must run in O(1) time'],
    solutionApproach: 'Maintain one stack for values and another stack where each entry is the minimum at that depth.',
    solutionCode: 'class MinStack {\n  constructor() {\n    this.stack = [];\n    this.minStack = [];\n  }\n  push(val) {\n    this.stack.push(val);\n    const min = this.minStack.length ? Math.min(val, this.getMin()) : val;\n    this.minStack.push(min);\n  }\n  pop() {\n    this.minStack.pop();\n    return this.stack.pop();\n  }\n  top() {\n    return this.stack[this.stack.length - 1];\n  }\n  getMin() {\n    return this.minStack[this.minStack.length - 1];\n  }\n}'
  },
  {
    title: 'Daily Temperatures',
    difficulty: 'Medium',
    tags: ['Array', 'Stack', 'Monotonic Stack'],
    problem: 'Given daily temperatures, return how many days you would have to wait until a warmer temperature for each day.',
    examples: [{ input: 'temperatures = [73,74,75,71,69,72,76,73]', output: '[1,1,4,2,1,1,0,0]', explanation: 'Each value is the distance to the next warmer day.' }],
    constraints: ['1 <= temperatures.length <= 100000'],
    solutionApproach: 'Keep a decreasing stack of indices. When a warmer temperature appears, resolve earlier indices.',
    solutionCode: 'function dailyTemperatures(temperatures) {\n  const answer = Array(temperatures.length).fill(0);\n  const stack = [];\n  for (let i = 0; i < temperatures.length; i++) {\n    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {\n      const prev = stack.pop();\n      answer[prev] = i - prev;\n    }\n    stack.push(i);\n  }\n  return answer;\n}'
  },
  {
    title: 'Binary Search',
    difficulty: 'Easy',
    tags: ['Array', 'Binary Search'],
    problem: 'Given a sorted array nums and a target, return the index of target or -1 if it does not exist.',
    examples: [{ input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4', explanation: '9 exists at index 4.' }],
    constraints: ['1 <= nums.length <= 10000'],
    solutionApproach: 'Repeatedly compare the target with the middle element and discard half of the search space.',
    solutionCode: 'function search(nums, target) {\n  let left = 0;\n  let right = nums.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}'
  },
  {
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    tags: ['Array', 'Binary Search'],
    problem: 'Given a rotated sorted array nums and a target, return the target index or -1.',
    examples: [{ input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4', explanation: '0 is found at index 4.' }],
    constraints: ['1 <= nums.length <= 5000'],
    solutionApproach: 'At each step, identify which half is sorted and decide whether the target lies inside that half.',
    solutionCode: 'function searchRotated(nums, target) {\n  let left = 0;\n  let right = nums.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[left] <= nums[mid]) {\n      if (nums[left] <= target && target < nums[mid]) right = mid - 1;\n      else left = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[right]) left = mid + 1;\n      else right = mid - 1;\n    }\n  }\n  return -1;\n}'
  },
  {
    title: 'Maximum Depth of Binary Tree',
    difficulty: 'Easy',
    tags: ['Tree', 'DFS'],
    problem: 'Given the root of a binary tree, return its maximum depth.',
    examples: [{ input: 'root = [3,9,20,null,null,15,7]', output: '3', explanation: 'The longest path from root to leaf has 3 nodes.' }],
    constraints: ['0 <= number of nodes <= 10000'],
    solutionApproach: 'Recursively compute the depth of left and right subtrees and take the larger value plus one.',
    solutionCode: 'function maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}'
  },
  {
    title: 'Validate Binary Search Tree',
    difficulty: 'Medium',
    tags: ['Tree', 'DFS', 'Binary Search Tree'],
    problem: 'Given the root of a binary tree, determine if it is a valid binary search tree.',
    examples: [{ input: 'root = [2,1,3]', output: 'true', explanation: 'Left values are smaller and right values are larger.' }],
    constraints: ['1 <= number of nodes <= 10000'],
    solutionApproach: 'DFS with lower and upper bounds for each subtree.',
    solutionCode: 'function isValidBST(root) {\n  function dfs(node, low, high) {\n    if (!node) return true;\n    if (node.val <= low || node.val >= high) return false;\n    return dfs(node.left, low, node.val) && dfs(node.right, node.val, high);\n  }\n  return dfs(root, -Infinity, Infinity);\n}'
  },
  {
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    tags: ['Dynamic Programming'],
    problem: 'You can climb 1 or 2 steps at a time. Given n steps, return the number of distinct ways to reach the top.',
    examples: [{ input: 'n = 3', output: '3', explanation: 'The ways are 1+1+1, 1+2, and 2+1.' }],
    constraints: ['1 <= n <= 45'],
    solutionApproach: 'The number of ways follows Fibonacci recurrence: ways(n) = ways(n - 1) + ways(n - 2).',
    solutionCode: 'function climbStairs(n) {\n  let one = 1;\n  let two = 1;\n  for (let i = 2; i <= n; i++) {\n    const current = one + two;\n    two = one;\n    one = current;\n  }\n  return one;\n}'
  },
  {
    title: 'Coin Change',
    difficulty: 'Medium',
    tags: ['Dynamic Programming', 'Array'],
    problem: 'Given coins of different denominations and an amount, return the fewest number of coins needed to make that amount, or -1 if impossible.',
    examples: [{ input: 'coins = [1,2,5], amount = 11', output: '3', explanation: '11 = 5 + 5 + 1.' }],
    constraints: ['1 <= coins.length <= 12', '0 <= amount <= 10000'],
    solutionApproach: 'Use bottom-up DP where dp[x] stores the minimum coins needed for amount x.',
    solutionCode: 'function coinChange(coins, amount) {\n  const dp = Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let value = 1; value <= amount; value++) {\n    for (const coin of coins) {\n      if (value >= coin) dp[value] = Math.min(dp[value], dp[value - coin] + 1);\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}'
  }
];