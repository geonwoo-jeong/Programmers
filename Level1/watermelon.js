const solution = n => n % 2 ? "수".repeat(Math.ceil(n / 2)).split("").join("박") : "수박".repeat(n / 2);

