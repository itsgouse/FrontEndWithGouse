Dynamic Programming (DP) in JavaScript, just like in other languages, is a powerful technique for solving problems by breaking them into smaller, overlapping subproblems and storing the results to avoid redundant calculations. It's ideal for problems exhibiting **Optimal Substructure** and **Overlapping Subproblems**.

In JavaScript, you typically use `Objects` or `Maps` for memoization and `Arrays` for tabulation.

---

### **Dynamic Programming: Memoization (Top-Down Approach) in JavaScript**

**Approach:**
Memoization in JavaScript involves writing a recursive function that calculates the solution for a given input. Before performing the actual computation, it checks a cache (usually a `Map` or a plain `Object`) to see if the result for that input has already been computed and stored. If it has, the cached value is returned immediately. Otherwise, the computation is performed, and its result is stored in the cache before being returned.

**How it works (JavaScript perspective):**

1.  **Define the recursive relation:** Same as general DP.
2.  **Base Cases:** Same as general DP.
3.  **Cache (`memo`):** Use a `Map` or an `Object` to store computed results.
    * `const memo = {};` or `const memo = new Map();`
    * Initialize it empty.
    * Keys of the cache correspond to the input parameters of the subproblem. Values are the computed results.
    * For multi-parameter subproblems (e.g., `dp(i, j)`), you might use string keys like `memo[\`${i}-${j}\`]` or a nested `Map` (`memo.get(i)?.get(j)`).
4.  **Check Cache:** At the beginning of your recursive function, check if `memo` already contains the result for the current input.
    * `if (memo[key] !== undefined) return memo[key];` (for objects)
    * `if (memo.has(key)) return memo.get(key);` (for Maps)
5.  **Compute and Store:** If not in cache, perform the calculation. Store the result in the cache *before* returning it.
    * `memo[key] = result;`
    * `memo.set(key, result);`

**JavaScript Example (Memoization for Fibonacci):**

```javascript
function fibMemo(n, memo = {}) {
    // Base Cases
    if (n <= 1) {
        return n;
    }

    // Check cache
    if (memo[n] !== undefined) { // Or memo.has(n) for Map
        return memo[n];
    }

    // Compute and store
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

console.log(fibMemo(10)); // 55
console.log(fibMemo(50)); // Works efficiently
```

---

### **Dynamic Programming: Tabulation (Bottom-Up Approach) in JavaScript**

**Approach:**
Tabulation in JavaScript involves building up the solution iteratively, typically by populating an array (or a 2D array for problems with two changing parameters). You start with the base cases and then use loops to compute solutions for larger subproblems based on already computed smaller subproblems, filling the `dp` table as you go.

**How it works (JavaScript perspective):**

1.  **Define the `dp` table:** Create an array(s) to store the solutions.
    * `const dp = new Array(n + 1).fill(0);` (for 1D problems)
    * `const dp = Array(rows).fill(0).map(() => new Array(cols).fill(0));` (for 2D problems)
    * Use `fill(0)` or `fill(false)` or `fill(Infinity)` based on what your values represent and initial state.
2.  **Initialize Base Cases:** Set the known starting values in your `dp` array.
    * `dp[0] = 0;`
    * `dp[1] = 1;`
3.  **Iterative Computation:** Use `for` loops to iterate through the `dp` table. Ensure your loops process subproblems in an order that guarantees their dependencies are already met.
4.  **Final Result:** The answer will be at a specific index in your `dp` array.

**JavaScript Example (Tabulation for Fibonacci):**

```javascript
function fibTabulation(n) {
    if (n <= 1) {
        return n;
    }

    // Create DP table
    const dp = new Array(n + 1);

    // Initialize base cases
    dp[0] = 0;
    dp[1] = 1;

    // Fill the table iteratively
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // Return final result
    return dp[n];
}

console.log(fibTabulation(10)); // 55
console.log(fibTabulation(50)); // Works efficiently
```

---

### **15 LeetCode Problems for Dynamic Programming (JS-friendly)**

The following 15 problems are classic DP challenges and are perfectly suited for implementation in JavaScript using either Memoization or Tabulation.

**Easy/Foundational:**

1.  **Climbing Stairs (LeetCode 70)**
    * **Link:** [https://leetcode.com/problems/climbing-stairs/](https://leetcode.com/problems/climbing-stairs/)
    * **JS approach:** `dp[i] = dp[i-1] + dp[i-2]`. Easily space-optimized to just two variables.

2.  **Fibonacci Number (LeetCode 509)**
    * **Link:** [https://leetcode.com/problems/fibonacci-number/](https://leetcode.com/problems/fibonacci-number/)
    * **JS approach:** Direct memoization or tabulation.

3.  **N-th Tribonacci Number (LeetCode 1137)**
    * **Link:** [https://leetcode.com/problems/n-th-tribonacci-number/](https://leetcode.com/problems/n-th-tribonacci-number/)
    * **JS approach:** Similar to Fibonacci, but `dp[i] = dp[i-1] + dp[i-2] + dp[i-3]`.

4.  **House Robber (LeetCode 198)**
    * **Link:** [https://leetcode.com/problems/house-robber/](https://leetcode.com/problems/house-robber/)
    * **JS approach:** `dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])`.

5.  **Min Cost Climbing Stairs (LeetCode 746)**
    * **Link:** [https://leetcode.com/problems/min-cost-climbing-stairs/](https://leetcode.com/problems/min-cost-climbing-stairs/)
    * **JS approach:** `dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])`.

**Medium:**

6.  **Coin Change (LeetCode 322)**
    * **Link:** [https://leetcode.com/problems/coin-change/](https://leetcode.com/problems/coin-change/)
    * **JS approach:** `dp[i] = Math.min(dp[i], dp[i - coin] + 1)`. Initialize `dp` with `Infinity`.

7.  **Longest Increasing Subsequence (LeetCode 300)**
    * **Link:** [https://leetcode.com/problems/longest-increasing-subsequence/](https://leetcode.com/problems/longest-increasing-subsequence/)
    * **JS approach:** `dp[i]` is length of LIS ending at `nums[i]`. `dp[i] = 1 + max(dp[j])` for `j < i` and `nums[j] < nums[i]`.

8.  **Word Break (LeetCode 139)**
    * **Link:** [https://leetcode.com/problems/word-break/](https://leetcode.com/problems/word-break/)
    * **JS approach:** `dp[i]` is `true` if `s.substring(0, i)` can be segmented. `dp[i] = dp[j] && wordDict.includes(s.substring(j, i))`.

9.  **Unique Paths (LeetCode 62)**
    * **Link:** [https://leetcode.com/problems/unique-paths/](https://leetcode.com/problems/unique-paths/)
    * **JS approach:** 2D DP `dp[i][j] = dp[i-1][j] + dp[i][j-1]`.

10. **Decode Ways (LeetCode 91)**
    * **Link:** [https://leetcode.com/problems/decode-ways/](https://leetcode.com/problems/decode-ways/)
    * **JS approach:** DP with careful handling of single-digit and two-digit decodings.

11. **Longest Common Subsequence (LeetCode 1143)**
    * **Link:** [https://leetcode.com/problems/longest-common-subsequence/](https://leetcode.com/problems/longest-common-subsequence/)
    * **JS approach:** 2D DP `dp[i][j]` is LCS of `text1[0...i-1]` and `text2[0...j-1]`.

12. **Partition Equal Subset Sum (LeetCode 416)**
    * **Link:** [https://leetcode.com/problems/partition-equal-subset-sum/](https://leetcode.com/problems/partition-equal-subset-sum/)
    * **JS approach:** Boolean DP array `dp[sum]` indicating if `sum` is possible.

**Hard/More Complex:**

13. **Wildcard Matching (LeetCode 44)**
    * **Link:** [https://leetcode.com/problems/wildcard-matching/](https://leetcode.com/problems/wildcard-matching/)
    * **JS approach:** 2D DP. The `'*'` character makes this particularly tricky, requiring careful state transitions.

14. **Edit Distance (LeetCode 72)**
    * **Link:** [https://leetcode.com/problems/edit-distance/](https://leetcode.com/problems/edit-distance/)
    * **JS approach:** 2D DP. `dp[i][j]` is min ops to transform `word1[0...i-1]` to `word2[0...j-1]`.

15. **Maximum Subarray Sum with One Deletion (LeetCode 1186)**
    * **Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/)
    * **JS approach:** Requires two DP arrays, one for max sum ending at `i` without deletion, another for max sum ending at `i` with at most one deletion.

**General JS Tips for DP:**

* **`Map` vs. `Object` for Memoization:** `Map` is generally preferred when keys are not simple strings or numbers (e.g., objects as keys, or numerical keys that might conflict with `Object` prototype properties), or when you need better performance for large numbers of key-value pairs. For simple integer keys, a plain object (`{}`) is often sufficient and slightly faster for small caches.
* **Array Initialization:** `new Array(n).fill(value)` is useful for creating `dp` arrays.
* **`Infinity` for Minimum Problems:** When looking for a minimum value, initialize your `dp` table entries with `Number.MAX_SAFE_INTEGER` or `Infinity` to ensure any valid path is smaller.
* **Modular Arithmetic:** For problems that ask for results modulo a large number (e.g., `10^9 + 7`), remember to apply the `% MOD` operation at each step of addition/multiplication to prevent integer overflow. JavaScript numbers are 64-bit floats, so large integers can lose precision. For very large integer problems, you might need to use `BigInt` or a custom large number library. However, most competitive programming problems with `MOD` are designed such that intermediate results fit within standard integer limits if modulo is applied frequently.

Happy coding!