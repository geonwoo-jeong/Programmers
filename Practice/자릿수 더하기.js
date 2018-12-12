const solution = n => {
    return [...n + ""].reduce((acc,cur) => Number(acc) + Number(cur), 0) 
}
