// Assignment code here
var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var specials = "!@#$%^&*()-+_=><`~/[]{}',.";
var numbers = "1234567890";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  let pwchars = prompt("how many characters do you want? Min 8, max 128");

  if (pwchars < 8 | pwchars > 128){
    alert("password must be atleast 8 characters and less than 128 characters. Refresh the browser and try again.");
    return
  };
  //Not a Number, causing an alert when something other than the password length is entered
  if (isNaN(pwchars) === true){
    alert("please use a valid number! Refresh the browser and try again.")
  };

  let lower = confirm ("Do you want your new password lower case letters?");
  let capital = confirm ("Do you want your new password to use upper case letters?");
  let numbs = confirm("Do you want your new password to use numbers?");
  let specs = confirm("Do you want your new password to have special characters?");

  //statements that will check what characters to add to the random password, from user input
  if(lower == false){
    characters = characters.concat(low);
  } 
  if(capital == false){
    characters = characters.concat(cap);
  }
  if(numbs == false){
    characters = characters.concat(num);
  }
  if (specs = false){
    characters = characters.concat(spe);
  }
  if(characters.length == 0){
    alert("must choose character types");
  }
  else {
      for (let i = 0; i < pwchars; i++){
        let generatePassword = Math.floor(Math.random() * characters.length);
        password = password + characters[generatePassword];
    }
  }
  return password;
}

//use the split string method to split all strings into substrings
var cap = capLetters.split("");
var low = lowLetters.split("");
var spe = specials.split("");
var num =numbers.split("");

var characters = [];
var password= "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
