// Create random password
const button = document.getElementById("generate");
// Check the length of password. Password should be at least 8 characters and no more than 128 characters.
const passwordLength = ((MIN = 8), (MAX = 128));
// Function to ask user for password options
function createPasswordOptions(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  // Variable to ask the user about the length of password
  var length = parseInt(
    prompt("How many characters would you like your password contain?"),
    12
  );
  // Variable for inclusion of lowercase letters
  var hasLowerCasedLetters = confirm(
    "Click OK to confirm included lowercase letters"
  );
  // Variable for inclusion of uppercase letters
  var hasUpperCasedLetters = confirm(
    "Click OK to confirm included uppercase letters"
  );
  // Variable for inclusion of numbers
  var hasNumbers = confirm("Click OK to confirm included numbers");
  // Variable for inclusion of symbols
  var hasSpecialCharacters = confirm("Click OK to confirm included symbols");
  // Array of lowercase letters to be included in password
  const lowercaseChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // Array of uppercase letters to be included in password
  const uppercaseChars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  // Array of numbers to be included in password
  const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Array of special characters to be included in password
  const symbolChars = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "'",
    "(",
    ")",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "[",
    "\\",
    "]",
    "_",
    "`",
    '"',
    "{",
    "|",
    "}",
    "~",
  ];
  
  let allowedChars = "";
  let password = "";
  allowedChars += hasLowerCasedLetters ? lowercaseChars : "";
  allowedChars += hasUpperCasedLetters ? uppercaseChars : "";
  allowedChars += hasNumbers ? numberChars : "";
  allowedChars += hasSpecialCharacters ? symbolChars : "";

  if (length <= 0) {
    alert("password length must be at least 8");
  }
  if (length > 150) {
    alert("password length must be less than 128");
  }
  if (allowedChars.length === 0) {
    alert("At least 1 set of characters needs to be selected");
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}
// Boolean to check the inclusion of password
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;
const password = createPasswordOptions(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);
var generateBtn = document.querySelector("#generate");
// Function to type the #password input
function typePassword() {
  var password = createPasswordOptions();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add an event listener to generate button
generateBtn.addEventListener("click", typePassword);
