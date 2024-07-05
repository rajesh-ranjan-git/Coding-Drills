let str = "The quick brown fox jumps over a lazy dog";
const vowels = "aeiou";
let result = "";

str = str.toLowerCase();

// Method 1

// let getStrWithNoVowels = () => {
//   for (let i = 0; i < str.length; i++) {
//     result += vowels.includes(str[i]) ? "" : str[i];
//   }

//   return result;
// };

// Method 2

let getStrWithNoVowels = () => {
  for (let char of str) {
    result += vowels.includes(char) ? "" : char;
  }

  return result;
};

console.log(getStrWithNoVowels());
