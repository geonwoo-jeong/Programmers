const solution = (participant, completion) => {
    const sortedParticipart = participant.sort(),
          sortedCompletion = completion.sort();
    
    return sortedParticipart.find((participant, index) => participant !== sortedCompletion[index])
}
