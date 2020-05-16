

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
    var askLowercase = confirm("Do you want to use LOWERCASE LETTERS?");
    var askUppercase = confirm("Do you want to use UPPERCASE LETTERS?");
    var askNumbers = confirm("Do you want to use NUMBERS?");
    var askSpecialChars = confirm("Do you want to use SPECIAL CHARACTERS?");
    if (askLowercase || askUppercase || askNumbers || askSpecialChars) {
      break;
    }
    else {
      alert("Have you ever made a password before??? 🤦‍♂️");
    }
  };

  
  // prompt user for password length, checks for falsy or negative inputs (non-numeric values passed to Number() will return NaN)
  while (true) {
    askNumCharacters = Number(window.prompt("How many characters do you to use?"));
    if (askNumCharacters && askNumCharacters > 8 && askNumCharacters < 128) {
      break;
    }
    else if (!askNumCharacters) {
      alert("maybe use just numbers 😒");
    }
    else if (askNumCharacters <= 8) {
      alert("try using more than 8 numbers 🙄");
    }
    else if (askNumCharacters > 128) {
      alert("Yeah, less than 128 characters bud 😑");
    }
    else {
      alert("I don't know what you did wrong, and I don't think I really care at this point 😁")
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
