const solution = s => {
    let stack = 0;
    for (let o of s.split('')) {
        stack += o === '(' ? 1 : -1;
        if (stack < 0) return false;
    }
    return stack === 0;
}
