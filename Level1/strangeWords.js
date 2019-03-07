const solution = s =>
  s
    .toUpperCase()
    .replace(/(\w)(\w)/g, a => a[0].toUpperCase() + a[1].toLowerCase());
