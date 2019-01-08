const solution = n => n ? solution((n - (n % 3 || 3)) / 3) + (n % 3 || 4): '';
