function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const length = A.length
    
    A.sort((a, b) => a - b)
    
    
    const result1 = A[length - 3] * A[length - 2] * A[length - 1]
    const result2 = A[0] * A[1] * A[length - 1]
    
    return result1 > result2 ? result1 : result2 
}
