// // Assignment Code: what I want to accomplish -
//     // (done) When I select generate password, then a list of criteria display
//     // (done) and a box for the length of the pasword is displayed
//     // when no criteria is selected then red text appears asking them to check at least one box
//     // If no length is provided then have a warning appear asking them to provide a length
//     // If a whole number isn't entered then an altert pops up asking them to provide a whole number
//     // If they enter less then 8, then an altert appears saying they need to enter a higher number
//     // If they enter a number more than 128 then an alert appears telling them they need to enter a shorter length
//     // Once at least one criteria is provided and a length is selected then a password automatically appears
//     // when a new check box is selected then the password chnages
//     // when the length is chnaged then the password length chnages

// // Add event listener to generate button

var generatecrit = document.getElementById('generatecrit');

generatecrit.addEventListener("click", function(){
  document.getElementById('textInput').className = "show";
});


// calling all variables
var passwordresult = document.getElementById('password');
var passwordlength = document.getElementById('length');
var uppercaseDOM = document.getElementById('uppercase');
var numbersDOM = document.getElementById('numbers');
var symbolsDOM = document.getElementById('symbols');
var generatebtn = document.getElementById('generate');


// Password Generating Function
function genPassword () {
  let chars = "abcdefghijklmnopqrstuvwxyz";
  if (numbersDOM.checked == true && symbolsDOM.checked == false && uppercaseDOM.checked == false) chars = "0123456789";
  if (numbersDOM.checked == true && symbolsDOM.checked == true && uppercaseDOM.checked == false) chars = "0123456789!@#$%^&*()";
  if (numbersDOM.checked == true && symbolsDOM.checked == false && uppercaseDOM.checked == true) chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbersDOM.checked == true && symbolsDOM.checked == true && uppercaseDOM.checked == true) chars = "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbersDOM.checked == false && symbolsDOM.checked == true && uppercaseDOM.checked == true) chars = "!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbersDOM.checked == false && symbolsDOM.checked == true && uppercaseDOM.checked == false) chars = "!@#$%^&*()";
  if (numbersDOM.checked == false && symbolsDOM.checked == false && uppercaseDOM.checked == true) chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // if (symbolsDOM.checked) chars = "!@#$%^&*()";
  // if (uppercaseDOM.checked) chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = passwordlength.value;
  var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
  document.getElementById("password").value = password;
 }