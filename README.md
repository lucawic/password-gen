# password-gen

## Introduction

    This project was completed by July 4th, in the 3rd module of the UA online coding bootcamp.
To complete this challenge, developers were given starter code to provide an html and css layout for the password generating app. There were also some javascript elements included but this was really only an eventListener and the start of some functions. In order to meet Module 3's challenge criteria, one must be able to do all of the follow...GIVEN I need a new, secure password. 
WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria.
WHEN prompted for password criteria THEN I select which criteria to include in the password.
WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters.
WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters.
WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected.
WHEN all prompts are answered THEN a password is generated that matches the selected criteria.
WHEN the password is generated THEN the password is either displayed in an alert or written to the page.

## code samples

    Useful coding tools I used to help reach 100% completion of this challenge, include the following snippets...

//use of the split string method to split all strings into substrings. And then use these substrings to determine password criteria inputs from the user using if statements, linked to confirm windows.

var low = lowercase.split("");
var up = uppercase.split("");
var numb = numbers.split("");
var spec = specChars.split("");

//used the for statement to gerate random strings of variables, based on character limits that I set. Eventually, the password, created randomly within the perameters from the user, is returned to the display. 

  else {
    for (let i = 0; i < passwordchars; i++){
      let generatePassword = Math.floor(Math.random() * characters.length);
      password = password + characters[generatePassword];
    }
  }
    return password;
}

## Installation of application

The password generator can be viewed here: https://lucawic.github.io/password-gen/