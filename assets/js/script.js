// Assignment code here

//declared variables for use in passcode
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var specChars = "!@#$%^&*()-+][{}/.,<>`~";
var numbers = "1234567890";

//use the split string method to split all strings into substrings
var low = lowercase.split("");
var up = uppercase.split("");
var numb = numbers.split("");
var spec = specChars.split("");

var characters = [];
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//function to generate whole passoword
function generatePassword(){
  let passwordchars = prompt("How many characters would you like in your password? Minimum of 8, maximum of 128.");

  //requires user to input usable parameters for password length
  if (passwordchars < 8 | passwordchars > 128){
    alert("password must be at least 8 characters and no more than 128 characters long! Refresh the browser and try again!");
    return
  };

//Not a Number, forcing the browser to display an alert if something other than a number is input
  if (isNaN(passwordchars) === true){
    alert("please use a a valid number and refresh your browser to try again.");
    return
  };

  //comfirm windows to take true or false values for user input of password criteria
  let downers = confirm("Do you want your password to use lowercase letters?");
  let uppers = confirm("Do you want your password to use uppercase letters?");
  let numbers = confirm("Do you want your password to have numbers?");
  let specials = confirm("Do you want your password to have special characters?");

//if statements to see what password criteria user wants for their generated pw
if (downers === true){
  characters = characters.concat(low);
}
if (uppers === true){
  characters = characters.concat(up);
}
if (numbers === true){
  characters = characters.concat(numb);
}
if (specials === true){
  characters = characters.concat(spec);
}
if (characters.length === 0){
  alert ("must choose character types to include in your password.");
}
  else {
    for (let i = 0; i < passwordchars; i++){
      let generatePassword = Math.floor(Math.random() * characters.length);
      password = password + characters[generatePassword];
    }
  }
    return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
