// Array of special characters to be included in password
var specialCharacters = ['@','%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// empty array to concate selected criteria
var masterArray;

// Assignment Code
var generateBtn = document.querySelector("#generate");

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
// user input varibles
var length
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;


// Write password to the #password input
function writePassword() {
//  Ask for user input
var options = getPassWordOptions(); 

function getPassWordOptions() {
   length = parseInt(prompt(" Please enter desired password Length 8-128"));
  // conditional statment to ensure user input
}
  if (!length) {
    alert("Press Generate to begin password process");
    // return (start over if invalid length)
    return
  
  } else if (length < 8 || length > 128) {
    length = parseInt(prompt("You must choose between 8 and 128"));
    // validate user input
    

  } else {
     // Continues once user input is validated
     confirmNumber = confirm("Will this contain numbers?");
     confirmCharacter = confirm("Will this contain special characters?");
     confirmUppercase = confirm("Will this contain Uppercase letters?");
     confirmLowercase = confirm("Will this contain Lowercase letters?");
 }; 


    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      masterArray = alert("You must choose a criteria!");

  }
  // First if statement that uses user input prompts to determine masterArray
  // Else if for 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

      masterArray = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      masterArray = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      masterArray = specialCharacters.concat(numericCharacters,lowerCasedCharacters);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      masterArray = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      masterArray = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  }
  // Else if for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
      masterArray = specialCharacters.concat(numericCharacters);

  } else if (confirmCharacter && confirmLowercase) {
      masterArray = specialCharacters.concat(lowerCasedCharacters);

  } else if (confirmCharacter && confirmUppercase) {
      masterArray = specialCharacters.concat(upperCasedCharacters);
  }
  else if (confirmLowercase && confirmNumber) {
      masterArray = lowerCasedCharacters.concat(numericCharacters);

  } else if (confirmLowercase && confirmUppercase) {
      masterArray = lowerCasedCharacters.concat(upperCasedCharacters);

  } else if (confirmNumber && confirmUppercase) {
      masterArray = numericCharacters.concat(upperCasedCharacters);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
      masterArray = specialCharacters;
  }
  else if (confirmNumber) {
      masterArray = numericCharacters;
  }
  else if (confirmLowercase) {
      masterArray = lowerCasedCharacters;
  }
    else if (confirmUppercase) {
      masterArray = upperCasedCharacters;
};
  // password variable is an array placeholder for user generated amount of length ( stores array)
  var password = [];

  // Start random selection variables:
  // Random selection for all variables: 
  for (var i = 0; i < length; i++) {
    var pickChoices = masterArray[Math.floor(Math.random() * masterArray.length)];
      password.push(pickChoices);
  }
  // This joins the password array and converts it to a string  
  var ps = password.join("");
  UserInput(ps);
  return ps;
  
}
// Changed function input to use textcontent
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}


