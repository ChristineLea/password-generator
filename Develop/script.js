// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = "1234567890";
var specialCharacters = "!@#$%&*_";

var randomPasswordString = "";
var length = 0;

function generatePassword() {
	window.alert(
		"Choose at LEAST ONE of the following four password criteria, then enter password LENGTH when prompted. \n\nClick OK to Start"
	);

	var passwordLowerCase = window.confirm(
		"\nInclude lowercase letters? \nOK for Yes or Cancel for No"
	);
	if (passwordLowerCase) {
		randomPasswordString = randomPasswordString.concat(lowerCase);
		// console.log(randomPasswordString);
	}

	var passwordUpperCase = window.confirm(
		"\nInclude UPPERCASE letters? \nOK for Yes or Cancel for No"
	);
	if (passwordUpperCase) {
		randomPasswordString = randomPasswordString.concat(upperCase);
		// console.log(randomPasswordString);
	}

	var passwordNumbers = window.confirm(
		"\nInclude Numbers? \nOK for Yes or Cancel for No"
	);
	if (passwordNumbers) {
		randomPasswordString = randomPasswordString.concat(numbers);
		// console.log(randomPasswordString);
	}

	var passwordSpecialCharacters = window.confirm(
		"\nInlcude Special Characters? \n\nOK for Yes or Cancel for No"
	);
	if (passwordSpecialCharacters) {
		randomPasswordString = randomPasswordString.concat(specialCharacters);
		// console.log(randomPasswordString);
	} else {
		alert("Did not meet password criteria. Please start again.");
		return;
	}

	var passwordLength = window.prompt(
		"\nPassword length must be between 8 - 128 characters. \nEnter Password Length:"
	);

	if (passwordLength >= 8 && passwordLength <= 128) {
		length = +passwordLength;
	} else {
		alert(
			"Password length must be a minimum of 8 characters and maximum of 128 characters. Please start again."
		);
		return;
	}

  for (var i = 0; i < randomPasswordString.length; i++) {
		var generateRandomPassword = randomPasswordString.charAt(
			Math.random() * length + 1
		);
		// randomPasswordString.charAt(i);
	}
	return generateRandomPassword;
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
