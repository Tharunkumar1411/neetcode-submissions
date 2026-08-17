class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map();

        for(let i=0; i<=nums.length-1; i++){
            if(map.has(nums[i])){
                map.set(nums[i], (map.get(nums[i]) || 0) + 1);
            }else {
                map.set(nums[i], 1);
            }
        }

        for(const val of map.values()){
            if(val > 1) return true
        }

        return false;
    }
}
