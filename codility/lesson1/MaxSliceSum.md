https://app.codility.com/demo/results/trainingW3UKVM-3V5/

```js
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = A[0]
    
    A.reduce((acc, cur, index) => {
        acc = Math.max(cur, acc + cur)
        result = Math.max(result, acc)
        
        return acc        
    }, 0)
    
    return result
}
```
