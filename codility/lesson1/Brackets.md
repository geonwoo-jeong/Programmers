# Brackets
https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/

## Task Description

```
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
```

## First

https://app.codility.com/demo/results/trainingQBYGDR-CK2/

```js
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const stack = []
    let count = { "(": 0, "{": 0, "[": 0, "}": 0, "]": 0, ")": 0 }
    const lastWord = S.slice(-1)
    let result = 1
    
    if (S.length < 1) return 1
    if (lastWord === "(" || lastWord === "{" || lastWord ==="[") return 0
    
    Array.from(S).some(value => {
        count[value]++
        
        if (value === "(" || value === "{" || value ==="[")
            stack.push(value)
        else
            if (value ===")" && stack.pop() !== "(") {
                result = 0                
                return true
            }
            if (value ==="}" && stack.pop() !== "{") {
                result = 0   
                return true
            }
            if (value ==="]" && stack.pop() !== "[") {
                result = 0
                return true
            }
    })
    
    if (count["("] !== count[")"] || count["{"] !== count["}"] || count["["] !== count["]"])
        return 0
    

    return result
}
```
