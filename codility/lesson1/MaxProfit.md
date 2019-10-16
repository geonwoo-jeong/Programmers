
## First
https://app.codility.com/demo/results/trainingBC7MN6-R76/

```js
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let minValue = 0
    let result = 0
    
    A.reduceRight((maxValue, currentValue, index) => {
        const difference = maxValue - currentValue
        
        if (difference > result) result = difference
        if (currentValue > maxValue) maxValue = currentValue

        return maxValue
    },0)

    
    return result
    
}
```
