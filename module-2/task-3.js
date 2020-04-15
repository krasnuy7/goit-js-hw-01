const findLongestWord = function (string) {
  const arrays = string.split(" ");
  let longerWord = 0;
  let word = "";
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > longerWord) {
      longerWord = arrays[i].length;
      word = arrays[i];
    }
  }
  return word;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
