

// function to generate password string
var generatePassword = function() {
  

  // character pools to be added together based on user input
  var mainCharacterPool = "";
  var lowercasePool = "abcdefghijklmnopqrstuvwxyz"
  var uppercasePool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberPool = "0123456789";
  var specialCharPool = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var password = '';
  
  
  // prompt user to select character type, checks for at least one selection
  while (true) {
    var askLowercase = confirm("Do you want LOWERCASE LETTERS in your password?");
    var askUppercase = confirm("Do you want UPPERCASE LETTERS in your password?");
    var askNumbers = confirm("Do you want NUMBERS in your password?");
    var askSpecialChars = confirm("Do you want SPECIAL CHARACTERS in your password?");
    if (askLowercase || askUppercase || askNumbers || askSpecialChars) {
      break;
    }
    else {
      alert("Have you ever made a password before??? 🤦‍♂️");
    }
  };


  // prompt user for password length, checks for falsy or negative inputs (non-numeric values passed to Number() will return NaN)
  while (true) {
    var askNumCharacters = "";
    if (askNumCharacters && askNumCharacters > 8 && askNumCharacters < 128) {
      break;
    }
    else if (!askNumCharacters) {
      alert("If you tried at things maybe people would like you better 😠");
      askNumCharacters = Number(window.prompt("How many characters do you want in your password?"));
    }
    else if (askNumCharacters < 8) {
      alert("I don't know if you're aware, hackers love it when you make new accounts 😫");
      askNumCharacters = Number(window.prompt("How many characters do you want in your password?"));
    }
    else if (askNumCharacters < 128) {
      alert("I hope you fell asleep on your keyboard because you're input was embarassing 😪");
    }
    else {
      alert("You did it! You hit rock bottom! There's nowhere else to go but up from here 😁")
    }
  }

  
  // add pools to mainCharacterPool based on user input
  if (askLowercase) {
    mainCharacterPool += lowercasePool;
  }
  if (askUppercase) {
    mainCharacterPool += uppercasePool;
  }
  if (askNumbers) {
    mainCharacterPool += numberPool;
  }
  if (askSpecialChars) {
    mainCharacterPool += specialCharPool;
  }


  
  // randomly pull characters from mainCharacterPool
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
