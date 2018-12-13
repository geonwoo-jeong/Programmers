const solution = (participant, completion) => {
    const sortedParticipart = participant.sort(),
          sortedCompletion = completion.sort();
    
    return sortedParticipart.find((participant, index) => participant !== sortedCompletion[index])
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"]);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
