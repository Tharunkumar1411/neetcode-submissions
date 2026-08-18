class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        let mapParenthesis = {
            "]" : "[",
            "}" : "{",
            ")" : "("
        };

        for(let char of s){
           console.log(char);

            if(char === "(" || char === "[" || char === "{"){
                stack.push(char);
            } else {
                if(stack.pop() !== mapParenthesis[char]) return false;
            }
        }

        return stack.length === 0;
    }
}
