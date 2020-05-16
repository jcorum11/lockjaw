

// function to generate password string
var generatePassword = function() {
  

  // character pools to be added together based on user input
  var mainCharacterPool = "abcdefghijklmnopqrstuvwxyz"
  var uppercasePool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numberPool = "0123456789"
  var specialCharPool = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  var password = '';
  
  
  // user inputs
  var askNumCharacters = "";
  // while loop to check for falsy or negative inputs (non-numeric values passed to Number() will return NaN)
  while (!askNumCharacters || askNumCharacters < 8 || askNumCharacters > 128) {
    askNumCharacters = Number(window.prompt("How many characters do you want in your password?"));
  }
  var askUppercase = confirm("Do you want UPPERCASE LETTERS in your password?");
  var askNumbers = confirm("Do you want NUMBERS in your password?");
  var askSpecialChars = confirm("Do you want SPECIAL CHARACTERS in your password?")

  
  // what pools to add to mainCharacterPool based on user input
  if (askUppercase) {
    mainCharacterPool += uppercasePool;
  }
  if (askNumbers) {
    mainCharacterPool += numberPool;
  }
  if (askSpecialChars) {
    mainCharacterPool += specialCharPool;
  }

  
  // loop that randomly pulls characters from mainCharacterPool
  for (var i = 0; i < askNumCharacters; i++) {
    password += mainCharacterPool[Math.floor(Math.random() * mainCharacterPool.length)];
  }
  return password;


}; // end of function




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
