/*
if password button is clicked 
  ask user how many characters they want (between 8 and 128 chars)
    put input into for loop
  ask user if they want uppercase letters
    if yes then add characterPool and uppercase and pull from that
    if no only use characterPool
  ask user if they want numbers 
    if yes then add characterPool and numbers and pull from that
    if no only use characterPool
  ask user if they want special characters
      if yes then add characterPool and specialChars and pull from that
      if no only use characterPool
*/



// generate password string
var generatePassword = function() {
  var characterPool = "abcdefghijklmnopqrstuvwxyz"
  var uppercasePool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbersPool = "0123456789"
  var specialCharsPool = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  var password = '';
  // user inputs
  var askNumCharacters = parseInt(window.prompt("How many characters do you want in your password?"));
  var askUppercase = confirm("Do you want UPPERCASE LETTERS in your password?");
  var askNumbers = confirm("Do you want NUMBERS in your password?");
  var askSpecialChars = confirm("Do you want SPECIAL CHARACTERS in your password?")
  if (askUppercase) {
    characterPool += uppercasePool;
  }
  if (askNumbers) {
    characterPool += numbersPool;
  }
  if (askSpecialChars) {
    characterPool += specialCharsPool;
  }
  for (var i = 0; i < askNumCharacters; i++) {
    password += characterPool[Math.floor(Math.random() * characterPool.length)];
  }
  return password;
};

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
