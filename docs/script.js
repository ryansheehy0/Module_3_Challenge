// Assignment code here
function generatePassword() {
	// Get password length
		let password_length = prompt("Password length from 8 to 128 characters.");
		let prompt_canceled = password_length === null ? true : false // Check if cancel was pressed
		password_length = parseInt(password_length) // Convert to a number
		while( !prompt_canceled && ( Number.isNaN(password_length) || (password_length < 8) || (password_length > 128))){
			if(Number.isNaN(password_length)){ // If the user didn't put in a number
				password_length = prompt("Password length from 8 to 128 characters.\nInput has to be a number.")
			}else if((password_length < 8) || (password_length > 128)){ // If the number isn't in range.
				password_length = prompt("Password length from 8 to 128 characters.\nInput has to be from 8 to 128.")
			}
			prompt_canceled = password_length === null ? true : false // Check if cancel was pressed
			password_length = parseInt(password_length) // Convert to a number
		}
		// If prompt canceled then don't change Your Secure Password
		if(prompt_canceled){
			return null
		}

	// Get character types. 
		let lowercase = false
		let uppercase = false
		let number = false
		let special = false
		do{
			lowercase = confirm('Click "OK" to include lowercase characters.\nClick "Cancel" to not include lowercase characters.')
			uppercase = confirm('Click "OK" to include uppercase characters.\nClick "Cancel" to not include uppercase characters.')
			number = confirm('Click "OK" to include numbers.\nClick "Cancel" to not include numbers.')
			special = confirm('Click "OK" to include special characters.\nClick "Cancel" to not special characters.')
			if(!lowercase && !uppercase && !number && !special){ // If not at least one character types then tell the user.
				alert("You must select at least one.\nLowercase, uppercase, numbers, and/or special characters.")
			}
		}while(!lowercase && !uppercase && !number && !special)

	// Generate password
		const lowercase_chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		const uppercase_chars = lowercase_chars.map(letter => letter.toUpperCase()) // Converts lowercase to uppercase
		const number_chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
		const special_chars = [
			"~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "\\",
			":", ";", "'", "\"", "<", ">", ",", ".", "?", "/"
		];
		// Sets the password characters that can be used
		let password_chars = []
		if(lowercase){
			password_chars = password_chars.concat(lowercase_chars)
		}
		if(uppercase){
			password_chars = password_chars.concat(uppercase_chars)
		}
		if(number){
			password_chars = password_chars.concat(number_chars)
		}
		if(special){
			password_chars = password_chars.concat(special_chars)
		}

		// Randomly pics a character from the password_chars until it meats the specified password length
		let password = ""
		for(; 0 < password_length; password_length--){
			password += password_chars[Math.floor(Math.random() * (password_chars.length-1))]
		}

	return password
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
