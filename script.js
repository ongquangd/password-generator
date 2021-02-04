// Assignment Code
var generateBtn = document.querySelector("#generate");
let  specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789"; 
// Prompt user for password length
let passwordlength = parseInt (prompt("how many characters in password?"));
console.log ("passwordlength",passwordlength);
// Check if the password provided is a valued number
if (isNaN(passwordlength)=== true){
  alert ("passwordlength must be a number"); 
}
// Check if password length meets minimum of 8 
if (passwordlength < 8){
  alert ("passwordlength must be greater than 8 characters");
}
// Check for password length not greater than 128 characters
if (passwordlength> 128){
  alert ("passwordlength must be less than 129 characters");
}

// Confirm from the user if they want lower case characters and store it in haslc
let haslc = confirm("click ok to confirm including lower case characters in password");

// Confirm from the user if they want upper case characters and store it in hasuc
let hasuc = confirm("click ok to confirm including upper case chasracters in password");

// Confirm from the user if they want numeral characters and store it in hasnmc
let hasnmc = confirm("click ok to confirm including lower case characters in password");

// Confirm from the user if they want special characters and store it in hasspc
let haspc = confirm("click ok to confirm including upper case characters in password");

// Check to see atleast one character type is selected to be included into the password

if (haslc === false &&  hasuc === false && hasnmc === false && haspc === false ){
  alert("Must include atleast one character type");
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
