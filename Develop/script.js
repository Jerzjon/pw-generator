var generateBtn = document.querySelector("#generate");

// Main password function
function generatePassword() {
  var passwordLengthConf = prompt("Choose a password length: 8-128 characters.");

// Password length selector by user input
    
  if (passwordLengthConf < 8 || passwordLengthConf > 128) {
      alert("Please enter a number between 8-128.");
      passwordLengthConf = 0; 
      return generatePassword();

};

// Confirm Prompts
var selectLowercase = confirm("Would you like to include lowercase letters?");
var selectUppercase = confirm("Would you like to include uppercase letters?");
var selectNumberChar = confirm("Would you like to include numbers?")
var selectSpecialChar = confirm("Would you like to include special characters?");

// Console loggin the user input
console.log(passwordLengthConf);
console.log(selectLowercase);
console.log(selectUppercase);
console.log(selectNumberChar);
console.log(selectSpecialChar);

// Variables for user input
function generateRandomPassword() {
  var includeSpecialChar=selectSpecialChar;
  var includeUppercaseLetters=selectUppercase;
  var includeLowercaseLetters=selectLowercase;
  var includeNumberChar=selectNumberChar;
  var passwordLength=passwordLengthConf;
  
  var password="";

// Character randomizer
function getRandomPositonInArray(arrayLength) {
  
  var randomNumber=Math.random()
  var randomValue=randomNumber*arrayLength;
  return Math.floor(randomValue);

};

// Arrays for password characters
function generateRandomUpperCaseLetter() {
  
  var selectUppercase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var randomPosition=getRandomPositonInArray(selectUppercase.length);
  return selectUppercase[randomPosition];

};

function generateRandomNumberChar() {
    
  var selectNumberChar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var randomPosition=getRandomPositionInArray(selectNumberChar.length);
  return selectNumberChar[randomPosition];
  
};

function generateRandomLowerCaseLetter() {

  var selectLowercase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var randomPosition=getRandomPositonInArray(selectLowercase.length);
  return selectLowercase[randomPosition];

};


function generateRandomSpecialChar() {

  var selectSpecialChar=['/','[','!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}',';',':','"','|',',','.','<','>','?',']','+'];
  var randomPosition=getRandomPositonInArray(selectSpecialChar.length);
  return selectSpecialChar[randomPosition];

};


function generateRandomAll() {
    
  var specialChar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var randomPosition=getRandomPositionInArray(specialChar.length);
  return specialChar[randomPosition];

};

function generateRandomNumberLower() {
    
  var specialChar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var randomPosition=getRandomPositionInArray(specialChar.length);
  return specialChar[randomPosition];
  
};

function generateRandomNumberUpper() {
    
  var specialChar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var randomPosition=getRandomPositionInArray(specialChar.length);
  return specialChar[randomPosition];
  
};

function generateRandomSpecialNumberLower() {
    
  var specialChar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var randomPosition=getRandomPositionInArray(specialChar.length);
  return specialChar[randomPosition];
  
};

function generateRandomSpecialNumberUpper() {
    
  var specialChar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var randomPosition=getRandomPositionInArray(specialChar.length);
  return specialChar[randomPosition];
  
};

function generateRandomSpecialCharAndUppercase() {
    
  var specialChar=["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var randomPosition=getRandomPositionInArray(specialChar.length);
  return specialChar[randomPosition];
  
};

// If/Else statements for user input

  if(includeSpecialChar) {
    password+=generateRandomSpecialChar();
  }
  
  if(includeUppercaseLetters) {
    password+=generateRandomUppercaseLetter();
  } 
  
  if(includeLowercaseLetters) {
    password+=generateRandomLowercaseLetter();
  }
  
  if(includeNumberChar) {
    password+=generateRandomNumberChar();
  }

  // Loop determining password length
  for(var i = password.length; i < passwordLength; i++){
      var typeOfCharacterToGenerate=true

      // Possible parameters
      if(typeOfCharacterToGenerate===selectSpecialChar && typeOfCharacterToGenerate===selectNumberChar && typeOfCharacterToGenerate===selectUppercase && typeOfCharacterToGenerate===selectLowercase){
        password+=generateRandomAll();
      }
      else if(typeOfCharacterToGenerate===selectSpecialChar && typeOfCharacterToGenerate===selectNumberChar && typeOfCharacterToGenerate===selectUppercase){
        password+=generateRandomSpecialNumberUpper();
      }
      else if(typeOfCharacterToGenerate===selectSpecialChar && typeOfCharacterToGenerate===selectNumberChar && typeOfCharacterToGenerate===selectLowercase){
        password+=generateRandomSpecialNumberLower();
      }
      else if(typeOfCharacterToGenerate===selectSpecialChar && typeOfCharacterToGenerate===selectUppercase){
        password+=generateRandomSpecialCharAndUppercase();
      }
      else if(typeOfCharacterToGenerate===selectSpecialChar && typeOfCharacterToGenerate===selectLowercase){
        password+=generateRandomSpecialCharAndUppercase();
      }
      else if(typeOfCharacterToGenerate===selectSpecialChar && typeOfCharacterToGenerate===selectNumberChar){
        password+=generateRandomSpecialCharAndUppercase();
      }
      else if(typeOfCharacterToGenerate===selectNumberChar && typeOfCharacterToGenerate===selectUppercase){
        password+=generateRandomNumberUpper();
      }
      else if(typeOfCharacterToGenerate===selectNumberChar && typeOfCharacterToGenerate===selectLowercase){
        password+=generateRandomNumberLower();
      }
      else if(typeOfCharacterToGenerate===selectUppercase){
        password+=generateRandomUppercaseLetter();
      }
      else if(typeOfCharacterToGenerate===selectLowercase){
        password+=generateRandomLowerCaseLetter();
      }
      else if(typeOfCharacterToGenerate===selectNumberChar){
        password+=generateRandomNumberChar();
      }
      else if(typeOfCharacterToGenerate===selectSpecialChar){
        password+=generateRandomSpecialChar();
      }
  }
  
  return password;

} 

  // Write password to the #password input
  function writePassword() {
    var password = generateRandomPassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);