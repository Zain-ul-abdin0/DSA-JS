function findRepeatedSequences(s) {
    const substrings = {};
    const repeatedSubstrings = [];
    for (let i = 0; i <= s.length - 10; i++) {
      const substring = s.slice(i, i + 10);
      substrings[substring] = (substrings[substring] || 0) + 1;
      if (substrings[substring] === 2) {
        repeatedSubstrings.push(substring);
      }
    }
    return repeatedSubstrings;
  }
  
  const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
  const repeatedSequences = findRepeatedSequences(s);
  console.log(repeatedSequences);