// global variable for generating the criteria list
var generatecrit = document.getElementById('generatecrit');

// event lisener assisgned to clicking on the "Generate password" button that defines CSS class to "show" which displays the criteria
generatecrit.addEventListener("click", function(){
  document.getElementById('textInput').className = "show";
});


// calling all variables needed from HTML (HTML variables added to enable check boxes and length entry)
var passwordresult = document.getElementById('password');
var passwordlength = document.getElementById('length');
var uppercaseCheckbox = document.getElementById('uppercase');
var lowercaseCheckbox = document.getElementById('lowercase');
var numbersCheckbox = document.getElementById('numbers');
var symbolsCheckbox = document.getElementById('symbols');
var generatebtn = document.getElementById('generate');


// Password Generating Function
function genPassword () {
//  if functions below specify the set of variables that need to be used for a combination of checkboxes and provides characters
  let chars = "null";
  if (numbersCheckbox.checked == true && symbolsCheckbox.checked == false && uppercaseCheckbox.checked == false && lowercaseCheckbox.checked == false) chars = "0123456789";
  if (numbersCheckbox.checked == true && symbolsCheckbox.checked == true && uppercaseCheckbox.checked == false && lowercaseCheckbox.checked == false) chars = "0123456789!@#$%^&*()";
  if (numbersCheckbox.checked == true && symbolsCheckbox.checked == false && uppercaseCheckbox.checked == true && lowercaseCheckbox.checked == false) chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbersCheckbox.checked == true && symbolsCheckbox.checked == true && uppercaseCheckbox.checked == true && lowercaseCheckbox.checked == false) chars = "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbersCheckbox.checked == true && symbolsCheckbox.checked == true && uppercaseCheckbox.checked == true && lowercaseCheckbox.checked == true) chars = "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numbersCheckbox.checked == false && symbolsCheckbox.checked == true && uppercaseCheckbox.checked == true && lowercaseCheckbox.checked == false) chars = "!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbersCheckbox.checked == false && symbolsCheckbox.checked == true && uppercaseCheckbox.checked == false && lowercaseCheckbox.checked == false) chars = "!@#$%^&*()";
  if (numbersCheckbox.checked == false && symbolsCheckbox.checked == false && uppercaseCheckbox.checked == true&& lowercaseCheckbox.checked == false) chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbersCheckbox.checked == true && symbolsCheckbox.checked == false && uppercaseCheckbox.checked == false && lowercaseCheckbox.checked == true) chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  if (numbersCheckbox.checked == false && symbolsCheckbox.checked == true && uppercaseCheckbox.checked == false && lowercaseCheckbox.checked == true) chars = "!@#$%^&*()abcdefghijklmnopqrstuvwxyz";
  if (numbersCheckbox.checked == false && symbolsCheckbox.checked == false && uppercaseCheckbox.checked == true && lowercaseCheckbox.checked == true) chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numbersCheckbox.checked == false && symbolsCheckbox.checked == false && uppercaseCheckbox.checked == false && lowercaseCheckbox.checked == true) chars = "abcdefghijklmnopqrstuvwxyz";
  if (numbersCheckbox.checked == true && symbolsCheckbox.checked == true && uppercaseCheckbox.checked == false && lowercaseCheckbox.checked == true) chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
  if (numbersCheckbox.checked == true && symbolsCheckbox.checked == false && uppercaseCheckbox.checked == true && lowercaseCheckbox.checked == true) chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbersCheckbox.checked == false && symbolsCheckbox.checked == true && uppercaseCheckbox.checked == true && lowercaseCheckbox.checked == true) chars = "!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if ((numbersCheckbox.checked == false && symbolsCheckbox.checked == false && uppercaseCheckbox.checked == false && lowercaseCheckbox.checked == false)) chars = "";
  
  // if functions below set parameters for password generation + support no password definition when no boxes are checked or length is provided
  let passwordLength = passwordlength.value;
  if ((passwordLength < 8) || (passwordLength > 128)) chars = "";
  let password = "";
  if ((numbersCheckbox.checked == false && symbolsCheckbox.checked == false && uppercaseCheckbox.checked == false && lowercaseCheckbox.checked == false) || (passwordLength < 8)|| (passwordLength > 128)) password = "";
  
  // Password generating loop function based off of defined characters provided by ckeckboxes and if statements above; beginning initalizes loop (password input is subtracted by 1 to account for the 0 index); math floor and mathrandom provide a random string that is parsed out in the sub-string to generate a password with the accurate criteria used and length selected
  for (var i = 0; i <= (passwordLength - 1); i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber + 1);
  }

  //writes the password to the password box (console log to check for the value)
  document.getElementById("password").value = password;
  console.log(password)
  console.log(passwordLength)
  
  //defines alert messages when criteria boxes are not selected or length falls out of the range
  let charerror = "";
  if (numbersCheckbox.checked == false && symbolsCheckbox.checked == false && uppercaseCheckbox.checked == false && lowercaseCheckbox.checked == false) charerror = "Error: Select at least on character criteria";
  if (passwordLength < 8) charerror = "Error: Select at length of at least 8";
  if (passwordLength > 128) charerror = "Error: Select at length less than 129";
  if ((numbersCheckbox.checked == false && symbolsCheckbox.checked == false && uppercaseCheckbox.checked == false && lowercaseCheckbox.checked == false) || (passwordLength < 8) || (passwordLength > 128)) {
    alert(charerror)
  }
}