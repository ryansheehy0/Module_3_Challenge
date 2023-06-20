// Assignment code here
function generatePassword() {
	let password_length = prompt("Password length from 8 to 128.");
	let prompt_canceled = password_length === null ? true : false
	password_length = parseInt(password_length)
	while(prompt_canceled === false || Number.isNaN(password_length) || (password_length < 8) || (password_length > 128)){
	console.log(password_length)
		if(Number.isNaN(password_length)){
			password_length = parseInt(prompt("Password length from 8 to 128.\nInput has to be a number."));
		}else if((password_length < 8) || (password_length > 128)){
			password_length = parseInt(prompt("Password length from 8 to 128.\nInput has to be from 8 to 128."));
		}
	}



	return password_length
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
