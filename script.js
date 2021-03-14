// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declare a new function
function generatePassword() {
  // Create a variable to store our generated password
  var password = "";

  // Logic would go here
  let passwordLength = parseInt(
    prompt(
      "How long do you want your password to be? Please select between 8 and 128"
    )
  );
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(
      prompt("Invalid input! Please put a number between 8 and 128")
    );
  }

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
