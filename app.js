const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

let charLengthEl = document.getElementById("numchar");
let passwordEl = document.getElementById("password");
let generateEL = document.getElementById("generate");

let password = "";

generateEL.addEventListener('click', () => {
    const charLength = +charLengthEl.value;

    passwordEl.innerText = generatePassword(
        charLength
    );
});

function generatePassword(charLength) {
    for (let i = 0; i < charLength; i++) {
        let randomPass = Math.floor(Math.random() * characters.length);
        password += characters[randomPass];
    }
    return password;
};

function generatePasswords() {
    function reset() {
        password = "";
    }
    reset();
    passwordEl.textContent = generatePassword();
};

clipboard.addEventListener('click', () => {
    const textarea = document.createElement("textarea");
    const password = passwordEl.innerText;

    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
});

function outFunc() {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}