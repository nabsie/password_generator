// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare function for generate password
function generatePassword() {
  let upperCase = [
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
  let lowerCase = [
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
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let specialChar = ["?", "!", "$", "£", "%", "&", "@", "#", "<", "^", "<"];
  // Create a variable to store our generated password
  var password = "";
  let options = [];
  // Prompt for password length
  let passwordLength = parseInt(
    prompt(
      "How long do you want your password to be? Please select between 8 and 128"
    )
  );
  if (!passwordLength || passwordLength <= 8 || passwordLength >= 128) {
    passwordLength = parseInt(
      prompt("Invalid input! Please put a number between 8 and 128")
    );
  }

  if (passwordLength >= 8 || passwordLength <= 128) {
    let hasUppercase = confirm("Do you want uppercase letters?");
    let hasLowerCase = confirm("Do you want lowercase letters?");
    let hasSpecialChar = confirm("Do you want special characters?");
    let hasNumber = confirm("Do you want numbers?");

    if (hasUppercase) {
      options.push.apply(options, upperCase);
    }
    if (hasLowerCase) {
      options.push.apply(options, lowerCase);
    }
    if (hasSpecialChar) {
      options.push.apply(options, specialChar);
    }
    if (hasNumber) {
      options.push.apply(options, numbers);
    }
  }
  for (i = 0; i < passwordLength; i++) {
    let index = Math.floor(Math.random() * options.length);
    options[index];
  }

  // function upperCase() {
  //   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  // }

  // function lowerCase() {
  //   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  // }

  // function specialChar() {
  //   return String.fromCharCode(Math.floor(Math.random() * 14) + 33);
  // }

  // function numberChar() {
  //   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  // }

  // Return our created password
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
