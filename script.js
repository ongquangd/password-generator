// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){


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
  return "not generated";
}
// Check for password length not greater than 128 characters
if (passwordlength> 128){
  alert ("passwordlength must be less than 129 characters");
  return "not generated";
}

// Confirm from the user if they want lower case characters and store it in haslc
let haslc = confirm("click ok to confirm including lower case characters in password");

// Confirm from the user if they want upper case characters and store it in hasuc
let hasuc = confirm("click ok to confirm including upper case characters in password");

// Confirm from the user if they want numeral characters and store it in hasnmc
let hasnmc = confirm("click ok to confirm including numeric characters in password");

// Confirm from the user if they want special characters and store it in hasspc
let haspc = confirm("click ok to confirm including special characters in password");

// Check to see atleast one character type is selected to be included into the password

if (haslc === false &&  hasuc === false && hasnmc === false && haspc === false ){
  alert("Must include atleast one character type");
  return "not generated";
}
console.log("going to generate password");
let possiblecharacters = "";
let generatedpassword = "";
let count = 0;
if (haslc) {
possiblecharacters = lowerCase;
generatedpassword += lowerCase[Math.floor(Math.random() * lowerCase.length  )];
count++;
}

if (hasuc) {
  possiblecharacters = upperCase;
  generatedpassword += upperCase[Math.floor(Math.random() * upperCase.length  )];
  count++;
  }

  if (hasnmc) {
    possiblecharacters = numbers;
    generatedpassword += numbers[Math.floor(Math.random() * numbers.length  )];
    count++;
    }

    if (haspc) {
      possiblecharacters = specialChars;
      generatedpassword += specialChars[Math.floor(Math.random() * specialChars.length  )];
      count++;
      }
    
  // Let us generate the rest of the password 
  for (; count < passwordlength; count++){
    generatedpassword += possiblecharacters [Math.floor(Math.random() * possiblecharacters.length  )];
  }
  console.log ("generatedpassword",generatedpassword);
   return generatedpassword;
  

}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
