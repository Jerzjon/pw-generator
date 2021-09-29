// Assignment code here

function pwdPrompt() {
  var pwdLength=window.prompt("Please choose a password length 8-128 characters.")

  if(pwdLength < 8) {
    window.alert("Password is too short.")
    return(window.prompt)("Please choose a password length 8-128 characters.");
    
  } else if(pwdLength > 128) {
      window.alert("Password is too long.")
    }
    return(window.prompt)("Please choose a password length 8-128 characters.");
  }

  function charactersPrompt(){
    var characters= window.prompt("Please choose which characters should be contained in the password")
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