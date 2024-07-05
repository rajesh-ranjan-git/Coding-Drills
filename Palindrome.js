let str = "Rajesh";
str = str.toLowerCase();

// Method 1

// const strArray = str.split("");
// strArray.reverse();
// const reversedStr = strArray.join("");

// Method 2

// str = str.toLowerCase();
// const reversedStr = str.split("").reverse().join("");

// Method 3

const getReversedString = () => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
};

console.log(str === getReversedString() ? "Palindrome" : "Not Palindrome");
