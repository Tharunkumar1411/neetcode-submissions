class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        let arr = [...map];

        arr.sort((a,b) => b[1] - a[1]);

        let result = arr.slice(0,k).map((item) => item[0]);

        return result;
    }
}
