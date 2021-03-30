// Assignment Code
var generateBtn = document.querySelector("#generate");


//these are the variables for the character set
var UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LowerCase = 'abcdefghijklmnopqrstuvwxyz';
var Numbers = '1234567890'
var SymbolOptions = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

var Passlength;
var ConfirmLowerCase;
var ConfirmUpperCase;
var ConfirmSymbolOptions;
var ConfirmNum;
var User;




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function GeneratePassword(){
    Passlength = prompt("Choose between 8 - 128 Characters for your password...");

    console.log("The password length chosen is" + Passlength);

    if(!passwordLength) {
        alert("Required value");
    
      } else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("You must choose between 8 and 128");
        console.log("Password length " + passwordLength);
      
      } else { 
        ConfirmLowerCase = confirm("Do you want lower case letters in your password?");
        console.log("Lower case " + ConfirmLowerCase);

        ConfirmUpperCase = confirm("Do you want upper case letters in your password?");
        console.log("Upper case " + ConfirmUpperCase);

        ConfirmNum = confirm("Will Your Password Contain Numbers");
        console.log("Number " + ConfirmNum);

        ConfirmSymbolOptions = confirm("Will Your Password Contain Special Characters");
        console.log("Special Character " + ConfirmSymbolOptions);

  
};
// No answer then
if (!ConfirmLowerCase && !ConfirmUpperCase && !ConfirmNum && !ConfirmSymbolOptions) {
    User = alert("You have to chose at least one criteria to generate a password");
  
    //if user chooses all four options

  } else if (ConfirmLowerCase && ConfirmUpperCase && ConfirmNum && ConfirmSymbolOptions) {
    User = LowerCase.concat(UpperCase, Numbers, SymbolOptions);
    console.log(User);

  }
 // if user chooses three of the options
  else if (ConfirmLowerCase && ConfirmUpperCase && ConfirmNum) {
    User = LowerCase.concat(UpperCase, Numbers);
    console.log(User);

  }
  else if (ConfirmLowerCase && ConfirmUpperCase && ConfirmSymbolOptions) {
    User = LowerCase.concat(upperCase, SymbolOptions);
    console.log(User);

  }
  else if (ConfirmLowerCase && ConfirmNum && ConifrmSymbolOptions) {
    User = LowerCase.concat(numbers, SymbolOptions);
    console.log(User);

  }
  else if (ConfirmUpperCase && ConfirmNum && ConifrmSymbolOptions) {
    User = upperCase.concat(numbers, SymbolOptions);
    console.log(User);

  }
  // if user choses two of the options
  else if (ConfirmUpperCase && ConfirmLowerCase) {
    User = LowerCase.concat(UpperCase);
    console.log(User);

 }
  else if (ConfirmUpperCase && ConfirmNum) {
    User = UpperCase.concat(Numbers);
    console.log(User);

    

  }
  else if (ConfirmLowerCase && ConfirmNum) {
    User = LowerCase.concat(Numbers);
    console.log(User);

  }
  else if (ConfirmLowerCase && ConifrmSymbolOptions) {
    User = LowerCase.concat(SymbolOptions);
    console.log(User);


  }
  else if (ConfirmUpperCase && ConifrmSymbolOptions) {
    User = UpperCase.concat(SymbolOptions);
    console.log(User);

  }
  else if (ConfirmNum && ConifrmSymbolOptions) {
    User = numbers.concat(SymbolOptions);
    console.log(User);
  }
  //if user choses one options
  else if (ConfirmLowerCase) {
    User = LowerCase;
    console.log(User);

  }
  else if (ConfirmUpperCase) {
    User = blankUpper.concat(UpperCase);
    console.log(User);

  }
  else if (ConfirmNum) {
    User = Numbers;
    console.log(User);

  }
  else if (ConifrmSymbolOptions) {
    User = SymbolOptions;
    console.log(User);

  };


  var passwordBlank = [];
  

  for (var i = 0; i < Passlength; i++) {
    var allChoices = User[Math.floor(Math.random() * User.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  
  var password = passwordBlank.join("");
  console.log("Password Generate" + password);
  return password;
  
}
