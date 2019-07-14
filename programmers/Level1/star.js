process.stdin.setEncoding("utf8");
process.stdin.on("data", data => {
  const n = data.split(" ");
  const [a, b] = [Number(n[0]), Number(n[1])];
  const answer = Array(b)
    .fill()
    .map(() => "*".repeat(a))
    .join("\n");
  console.log(answer);
});
