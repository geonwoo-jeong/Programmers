function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const result = A.reduce((acc, cur) => {
        if (acc[cur])
            delete acc[cur]
        else
            acc[cur] = true
            
        return acc
    }, {})
    
    return parseInt(Object.keys(result)[0])
}
