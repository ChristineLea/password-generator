// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

var lowerCase = upperCase.toLowerCase();

var randomPasswordArray = [];

function generatePassword() {
	// variable to hold password criteria to select random

	// create character variable to store password length
	var passwordLength = window.prompt(
		"Password length must be between 8 - 128 characters. \nEnter Password Length:"
	);
	// check if a number data is returned

	// check if number returned is min 8 & max 128 (validate input)
	if (passwordLength >= 8 && passwordLength <= 128) {
		passwordLength = length; // NEED TO FIX THIS
		window.alert(
			"Thanks. The following prompts can set the type of characters to include in your password. \nPlease choose at least one of the following options."
		);
	} else if (passwordLength < 8 && passwordLength < 128) {
		return passwordLength;
		// If nothing is entered
	} else {
		return;
	}

	var passwordUpperCase = window.confirm(
		"Generate a password that includes: \nUPPERCASE letters? \nSelect OK for Yes or Cancel for No"
	);
	if (passwordUpperCase) {
    passwordUpperCase = upperCase;
    randomPasswordArray.push(upperCase);
	}


	var passwordLowerCase = window.confirm(
		"Generate a password that includes: \nlowercase letters? \nSelect OK for Yes or Cancel for No"
	);
	if (passwordLowerCase) {
    passwordLowerCase = lowerCase;
    randomPasswordArray.push(lowerCase);
	}


  var passwordNumbers = window.confirm(
		"Generate a password that includes: \nnumbers? \nSelect OK for Yes or Cancel for No"
  );

}


// window.confirm()  Generate a password that includes: \nspecial characters? \n('\u0021', '\u0023', '\u0024', '\n0025', '\u0026', '\u002A', '\u003F', '\u005F') \nSelect OK for Yes or Cancel for No
// validate at least one was chosen else alert(To generate a password you must select at least ONE option from the following prompts)

// create variables/arrays to hold each criteria (numbers, special, a-z & a-z.toLowercase)
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
