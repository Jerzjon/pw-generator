function getRandomPositonInArray(arrayLength) {
  
  var randomNumber=Math.random()
  var randomValue=randomNumber*arrayLength;
  return Math.floor(randomValue);

}

function generateRandomLowerCaseLetter(passLength) {
var passwordArray = []

for (var i = 0; i < passLength; i++) {
    var randomPosition =getRandomPositionInArray(lowerCaseLetters.length);
    var randomLetter = lowerCaseLetters[randomPosition]
    passwordArray.push(randomLetter);

}
console.log(passwordArray.join(""))



}


function generatePassword() {
var length = window.prompt("How many characters would you like to use?")
console.log(length)
generateRandomLowerCaseLetter(length)
}
generatePassword()


function generateRandomUpperCaseLetter() {
  
  var upperCaseLetters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
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

function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  }

// write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}      







}
return password;
}
console.log(generateRandomPassword())
console.log(generateRandomPassword())
console.log(generateRandomPassword())
console.log(generateRandomPassword())
console.log(generateRandomPassword())
