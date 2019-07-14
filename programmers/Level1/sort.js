const solution = (strings, n) => strings.sort((p, c) => p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n]))
