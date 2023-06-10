// Access the button in HTML with ID of #generate
var generateBtn = document.querySelector("#generate");

// Variable to hold password criteria options
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = "1234567890";
var specialCharacters = "!@#$%&*_";

// Store the password criteria options to include as chosen by the user.
var randomPasswordString = "";
// Value will be updated when user has chosen length of password to generate.
var length = 0;

// 3. The generatePassword function is invoked.
function generatePassword() {
	window.alert(
		"PASSWORD GENERATOR: \n\nWhen prompted: \n\n1. Choose at least one password criteria to include. \n\n2. Enter password length (Min. 8 - Max. 128 characters) \n\nClick OK to Start"
	);

	var passwordSpecialCharacters = window.confirm(
		"\nPASSWORD CRITERIA \n\nInlcude Special Characters? \n\nOK for Yes or Cancel for No"
	);
	if (passwordSpecialCharacters) {
		randomPasswordString = randomPasswordString.concat(specialCharacters);
	
	}

	var passwordLowerCase = window.confirm(
		"\nPASSWORD CRITERIA \n\nInclude lowercase letters? \n\nOK for Yes or Cancel for No"
	);
	if (passwordLowerCase) {
		randomPasswordString = randomPasswordString.concat(lowerCase);

	}

	var passwordUpperCase = window.confirm(
		"\nPASSWORD CRITERIA \n\nInclude UPPERCASE letters? \n\nOK for Yes or Cancel for No"
	);
	if (passwordUpperCase) {
		randomPasswordString = randomPasswordString.concat(upperCase);

	}

	var passwordNumbers = window.confirm(
		"\nPASSWORD CRITERIA \n\nInclude Numbers? \n\nOK for Yes or Cancel for No"
	);
	if (passwordNumbers) {
		randomPasswordString = randomPasswordString.concat(numbers);

	} else {
		alert("Did not meet password criteria. Please start again.");
		return;
	}

	var passwordLength = window.prompt(
		"\nPassword length must be between 8 - 128 characters. \nEnter Password Length:"
	);

	if (passwordLength >= 8 && passwordLength <= 128) {
		+passwordLength;
		console.log(passwordLength);
		length = passwordLength;
	} else {
		alert(
			"Password length must be a minimum of 8 characters and maximum of 128 characters. Please start again."
		);
		return;
	}

	var generateRandomPassword = " ";
	const generatePasswordLength = randomPasswordString.length;
	for (var i = 0; i < length; i++) {
		generateRandomPassword += randomPasswordString.charAt(
			Math.floor(Math.random() * generatePasswordLength)
		);
	}
	return generateRandomPassword;
}

// 2. The writePassword function is invoked which then invokes the generatePassword function
function writePassword() {
	var password = generatePassword();
	// Write password to the #password input
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// 1. On click of HTML button, event listener will call the writePassword function
generateBtn.addEventListener("click", writePassword);
