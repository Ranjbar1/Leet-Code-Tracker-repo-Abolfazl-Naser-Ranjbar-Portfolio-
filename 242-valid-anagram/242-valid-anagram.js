/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let lenA = s.length;
  let lenB = t.length;
  let map = {};

  if (lenA !== lenB) return false;

  for (let i = 0; i < lenA; i++) {
    if (!map[s[i]]) map[s[i]] = 0;
    map[s[i]]++;
  }

  for (let j = 0; j < lenB; j++) {
    if (!map[t[j]]) return false;
    map[t[j]]--;
  }

  return true;
};