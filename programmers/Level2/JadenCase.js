const solution = s =>
  s.split(" ").map(value => 
    value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
  ).join(" ");
