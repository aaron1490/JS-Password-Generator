// Array of special characters to be included in password
var specialCharacters = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

// Define min and max password lengths
const minLen = 8;
const maxLen = 128;

function getPasswordOptions() {
  var length; 
do {  // do while loop used to reprompt user, if they aren't choosing a number between 8-128 chars long 
  length = prompt("What password length would you like? (Must be between 8-128 characters)") // prompts user for a number of characters in password, then stores this in var length
  if (length == null) {
    alert("Password Generation Aborted")
    return // alert shown to user when cancel is pressed
  } length = parseInt(length, 10); // converts the length variable from a string to a number
    if (length < minLen || length > maxLen ) { // password length must be between 8-128 characters in length, otherwise user will get returned an alert stating password length has to fit these parameters.
    alert("Password length has to be 8-128 characters in length!");
  } if (isNaN(length)) { // if user inputs anything other than a number, then they will be returned an alert stating that a number is required
        alert("Please type a number!");
      }
} while (length < minLen || length > maxLen || isNaN(length))
  var upperCase = confirm("Would you like to include upper case characters in your password?") // confirmation if user would like upper case in their password
  var lowerCase = confirm("Would you like to include lower case characters in your password?") // confirmation if user would like lower case in their password
  var number = confirm("Would you like to include numbers in your password?") // confirmation if user would like numbers in their password
  var special = confirm("Would you like to include special characters in your password?") // confirmation if user would like special characters in their password
  if (!upperCase && !lowerCase && !number && !special) { // if statement to check if at lease one of the character sets have been selected
    alert("You must select at least one or more of the character sets") // alert to user if none of the character sets haven't been selected
    return getPasswordOptions(); // re-prompt if user hasn't chosen at least one of the character sets
  } 
  return { length, upperCase, lowerCase, number, special };
}


// array that joins all the character sets that have been selected by the user
function userOptions(upper, lower, num, spec, finalOptions) {
  var { lowerCase, upperCase, number, special } = finalOptions;
  var userArray = [];
  if (upperCase) {
    userArray.push(...upper);
  } if (lowerCase) {
    userArray.push(...lower);
  } if (number) {
    userArray.push(...num);
  } if (special) {
    userArray.push(...spec);
  }
  console.log(userArray);
  return userArray
} 


// Function for getting a random element from an array
function getRandom(userArray) {
  return userArray[Math.floor( Math.random() * userArray.length)];
}


// Function to generate password with user input
function generatePassword(length, userArray) {
  let passwordArray = [];
  for (let i = 0; i < length; i++) {
    passwordArray.push(getRandom(userArray));
  }
  return passwordArray.join("");
};


// Write password to the #password input
function writePassword() {
  const finalOptions = getPasswordOptions();
  var userArray = userOptions( upperCasedCharacters, lowerCasedCharacters, numericCharacters, specialCharacters, finalOptions );
  const finalPassword = generatePassword(finalOptions.length, userArray);
  var password = finalPassword;
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button. This button calls the writePassword Function
generateBtn.addEventListener('click', writePassword);