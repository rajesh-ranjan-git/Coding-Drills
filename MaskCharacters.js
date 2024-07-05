const str = "123456789987654321";

// Masking last 4 characters

// Method 1

// const maskingCharacters = () => {
//   let maskedStr = str.substring(0, str.length - 4);
//   for (let i = str.length - 1; i >= str.length - 4; i--) {
//     maskedStr += "#";
//   }

//   return maskedStr;
// };

// Method 2

// const maskingCharacters = () => {
//   return str.slice(0, str.length - 4) + "#".repeat(4);
// };

// Masking characters at even indexes

const maskingCharacters = () => {
  let maskedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      maskedStr += "#";
    } else {
      maskedStr += str[i];
    }
  }

  return maskedStr;
};

console.log(maskingCharacters());
