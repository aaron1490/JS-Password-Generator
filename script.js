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


// Function to prompt user for password length and options
function getPasswordOptions() {
  var length = prompt("What password length would you like? (Must be between 8-128 characters)") // prompts user for a number of characters in password, then stores this in var length
 if (length < minLen || length > maxLen) { // password length must be between 8-128 characters in length, otherwise user will get returned an error stating password length has to fit these parameters
  alert("Password length has to be 8-128 characters in length!");
  return null
} else if (isNaN(length)) { // if user inputs anything other than a number, then they will be returned an error stating that a number is required
  alert("Please type a number!");
} 
// while (isNaN(length) && length < minLen && length > maxLen) {
//   var upperCase = confirm("Would you like to include upper case characters in your password?")
//   var lowerCase = confirm("Would you like to include lower case characters in your password?")
//   var number = confirm("Would you like to include numbers in your password?")
//   var special = confirm("Would you like to include special characters in your password?")
}
// }

getPasswordOptions() // call the getPasswordOptions function
















// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);