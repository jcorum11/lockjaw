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

var characterPool = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialChars = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"

// generate password string
var generatePassword = function() {
  var password = '';
  var numCharacters = parseInt(window.prompt("How many characters do you want in your password?"));
  for (var i = 0; i < numCharacters; i++) {
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
