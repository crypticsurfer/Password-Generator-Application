// Assignment Code
// Starting with the arrays for character sets I am using
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  //start by defining password length
  var passwordLength = window.prompt("Enter desired password length, between 8 and 128 characters.")
  if ((passwordLength < 7) || (passwordLength > 129)) {
    alert("Invalid Password")
    return
  }

  //promt user if a special character is required
  var specialCharacterRequired = window.confirm("If special character is required, click Ok. If no click Cancel.")
  //prompt if number required
  var numberRequired = window.confirm("If number is required, click Ok. If no click Cancel")
  //promt if lower case required
  var lowercaseRequired = window.confirm("If lower case required, click Ok. If no click Cancel")
  //promt if upper case required
  var uppercaseRequired = window.confirm("If upper case required, click Ok. If no click Cancel")
  //create an alert if none are selected that one must be selected
  if (!specialCharacterRequired && !numberRequired && !lowercaseRequired && !uppercaseRequired) {
    alert("Need to select at least one option.")
  }
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
