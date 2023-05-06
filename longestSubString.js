function longestSubstring(str) {
  let substrings = {};
  let string = str;
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substring = string.slice(i, j);
      substring = removeRepeatingChars(substring);
      substrings[substring] = (substrings[substring] || 0) + 1;
    }
  }

  let result = Object.keys(substrings).map((key) => {
    return { key: key, value: substrings[key] };
  });
  result = result.filter((obj) => obj.key.length >= 3);

  return result;
}
function removeRepeatingChars(str) {
  const charSet = new Set(str);
  return [...charSet].join("");
}

console.log(longestSubstring("abcabcbb"));
