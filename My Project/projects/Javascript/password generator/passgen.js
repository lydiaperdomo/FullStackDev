

var generateBtn = document.getElementById('generate-btn');
var passwordDisplay = document.getElementById('passwordDisplay');
var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var symbols = "#$%*!@^&";
var numbers = "0123456789";
var passwordLength = 12;

var includeNumbers = document.getElementById('include-numbers');
var includeSymbols = document.getElementById('include-symbols');


generateBtn.addEventListener('click', () => {
    passwordDisplay.innerText = "Generating...";

    setTimeout(() => {  
        let password = "";
        let chars = possibleCharacters; 
        if (includeNumbers.checked) chars += numbers;
        if (includeSymbols.checked) chars += symbols;

        for (let i = 0; i < passwordLength; i++) {
            let randomIndex = Math.floor(Math.random() * chars.length);
            let randomChar = chars[randomIndex];
            password += randomChar;
        }

        passwordDisplay.innerText = password;
    }, 100);
});


var copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordDisplay.innerText);
    copyBtn.innerText = "Copied!";

setTimeout(() => {
    copyBtn.innerText = "Copy Password";
}, 2000);

});


