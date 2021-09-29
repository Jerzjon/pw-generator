// Assignment code here

function pwdPrompt() {
  var pwdLength=window.prompt("Please choose a password length 8-128 characters.")

  if(pwdLength < 8) {
    window.alert("Password is too short.")

    
  } else if(pwdLength > 128) {
      window.alert("Password is too long.")
  }
}
 
var lowerCase = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special= ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

var lowerCasePrompt = window.prompt("Would you like lowercase letters? (yes or no)")
var uowerCasePrompt = window.prompt("Would you like uppercase letters? (yes or no)")
var numberPrompt = window.prompt("Would you like numbners? (yes or no)")
var specialPrompt = window.prompt("Would you like special symbols? (yes or no)")


function charPrompt() {
  var pwdChar=window.prompt("Please choose which types of characters should be used in the password."
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", pwdPrompt); 