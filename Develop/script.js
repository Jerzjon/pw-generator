// Assignment code here

function getRandomPositonInArray(arrayLength) {
  
    var randomNumber=Math.random()
    var randomValue=randomNumber*arrayLength;
    return Math.floor(randomValue);

}

function generateRandomUpperCaseLetter() {
    
    var upperCaseLetters=["A","B","C","D"];
    var randomPosition=getRandomPositonInArray(upperCaseLetters.length);
    return upperCaseLetters[randomPosition];
  
}
  
function generateRandomNumber(){
    
    var numbers=[0, 1, 2, 3, 4, 5,];
    var randomPosition=getRandomPositonInArray(numbers.length);
    return numbers[randomPosition];

}

function generateRandomPassword() {
    var includeSpecialCharacters=false;
    var includerUpperCaseLetters=true;
    var includeLowerCaseLetters=false;
    var includeNumbers=true;
    var passwordLength=10;
    
    var password="";

    if(includeSpecialCharacters) {
        password+=generateRandomSpecialCharacter();
    }

    if(includerUpperCaseLetters) {
        password+=generateRandomUpperCaseLetter();
    }
    
    if(includeLowerCaseLetters) {
        password+=generateRandomLowerCaseLetter();
    }

    if(includeNumbers) {
        password+=generateRandomNumber();
    }

    for(var i=password.length;i<passwordLength;i++) {
        var typeOfCharacterToGenerate="upper"

        if(typeOfCharacterToGenerate==="upper") {
            password+=generateRandomUpperCaseLetter();
        }
    
  }
  return password;
}
console.log(generateRandomPassword())
console.log(generateRandomPassword())
console.log(generateRandomPassword())
console.log(generateRandomPassword())
console.log(generateRandomPassword())



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