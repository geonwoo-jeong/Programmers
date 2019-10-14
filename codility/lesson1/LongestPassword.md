// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
```
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxLength = -1
    

    S.split(" ").forEach(word => {
        if (/[^\w]|_/g.test(word)) {
            return
        }
        
        const some = [...word + ""].reduce((acc, cur) => {
            if (/^[a-zA-Z]+$/.test(cur)) {
                acc['alphabet']++
            } else {
                acc['numeric']++
            }
            
            return acc
        }, {
            'numeric': 0,
            'alphabet': 0
        })

        if (Math.abs(some['alphabet'] % 2) === 1) {
            return            
        }
        
        if ((some['numeric'] % 2) === 0) {
            return    
        }
        
        if (maxLength < word.length) {
            maxLength = word.length
        }
    })
    
    return maxLength
}
```
