// Assignment Code
var generateBtn = document.querySelector("#generate");

// window.prompt("Password length must be between 8 - 128 characters. \nEnter Password Length:");
// check if number returned is < 8 & > 128 (validate input)
// create character variable to store password length

// window.alert() "Thanks. The following prompts can set the type of characters to include in your password. \nPlease choose at least one of the following options."

// window.confirm()  Generate a password that includes: \nlowercase letters? \nSelect OK for Yes or Cancel for No
// window.confirm()  Generate a password that includes: \nUPPERCASE letters? \nSelect OK for Yes or Cancel for No
// window.confirm()  Generate a password that includes: \nnumbers? \nSelect OK for Yes or Cancel for No
// window.confirm()  Generate a password that includes: \nspecial characters? \n('\u0021', '\u0023', '\u0024', '\n0025', '\u0026', '\u002A', '\u003F', '\u005F') \nSelect OK for Yes or Cancel for No
// validate at least one was chosen else alert(To generate a password you must select at least ONE option from the following prompts)


// create variables/arrays to hold each criteria (numbers, special, a-z & a-z.toUppercase)
// join arrays into one array based on criteria that returns true
// for loop to loop over array and randomly output array elements to match # of characters
// .toString() to convert into a string
// output password to generator
// clear password

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
