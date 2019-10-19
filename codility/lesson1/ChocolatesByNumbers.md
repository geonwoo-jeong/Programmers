# ChocolatesByNumbers

## First (75%)
https://app.codility.com/demo/results/trainingZBM3KS-YEP/

```js
function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    let array = {}
    let result = 0
    
    for (let i = 0; i < N; i++) {
        const ate = i * M % N
        
        if (array[ate]) {
            break      
        }
        
        array[ate] = true
        result++
    }
    
    return result
}
```


## Second (85%)
https://app.codility.com/demo/results/trainingKD3PS5-BR9/

```js
function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    let array = {}
    let result = 0
    
    if (M % N === 1) return N 
    
    for (let i = 0; i < N; i++) {
        const ate = i * M % N
        if (array[ate]) break      
        array[ate] = true
        result++
    }
    
    return result
}
```
