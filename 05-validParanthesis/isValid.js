 let input="()"

 const paranthesis=["(",")","{","}","[","]"]

var isValid = function(s) {
    const stack=[]

    const pairs = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    for(let i=0;i<s.length;i++){
        console.log(pairs[s[i]]);
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
        } else {
            if(stack.length === 0 || stack.pop() !== pairs[s[i]]){
                return false
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid(input))