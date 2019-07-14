const solution = arr => {
    const min = Math.min(...arr);
    const array = arr.filter(value=> value !== min);
    return arr.length !== 1 ? array :[-1];
}
