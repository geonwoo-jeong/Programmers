const solution = s => {
    const array = s.split(" ");
    return [Math.min(...array), Math.max(...array)].join(" ");
}
