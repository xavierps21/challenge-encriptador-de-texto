let textInput = document.getElementsByClassName('text-input')[0];
let textOutput = document.getElementsByClassName('text-output')[0];
let outputEmpty = document.getElementsByClassName('container-output-empty')[0];
let outputResult = document.getElementsByClassName('container-output-result')[0];
let encryptButton = document.getElementsByClassName('encrypt-button')[0];
let decryptButton = document.getElementsByClassName('decrypt-button')[0];
let dialog = document.getElementsByClassName('alert')[0];
let dialogClose = document.getElementsByClassName('alert-close')[0];
let copyButton = document.getElementsByClassName('copy-button')[0];

let isValid = (text) => {
    return !/([^ a-z])/.test(text);
};

let encrypt = (text) => {
    let replacements = /(e)|(i)|(a)|(o)|(u)/g;
    let encryptedText = text.replace(replacements, (match, g1, g2, g3, g4, g5) => {
        if (g1) return 'enter';
        if (g2) return 'imes';
        if (g3) return 'ai';
        if (g4) return 'ober';
        if (g5) return 'ufat';
        return '';
    });

    return encryptedText;
};

let decrypt = (text) => {
    let replacements = /(enter)|(imes)|(ai)|(ober)|(ufat)/g;
    let decryptedText = text.replace(replacements, (match, g1, g2, g3, g4, g5) => {
        if (g1) return 'e';
        if (g2) return 'i';
        if (g3) return 'a';
        if (g4) return 'o';
        if (g5) return 'u';
        return '';
    });

    return decryptedText;
};

encryptButton.addEventListener('click', () => {
    let text = textInput.value;

    if (!isValid(text)) {
        dialog.showModal();
    } else {
        if (!text) {
            outputEmpty.style.display = 'block';
            outputResult.style.display = 'none';
        } else {
            outputEmpty.style.display = 'none';
            outputResult.style.display = 'block';
        }

        let encryptedText = encrypt(text);
        textOutput.textContent = encryptedText;
    }
});

decryptButton.addEventListener('click', () => {
    let text = textInput.value;

    if (!isValid(text)) {
        dialog.showModal();
    } else {
        if (!text) {
            outputEmpty.style.display = 'block';
            outputResult.style.display = 'none';
        } else {
            outputEmpty.style.display = 'none';
            outputResult.style.display = 'block';
        }

        let decryptedText = decrypt(text);
        textOutput.textContent = decryptedText;
    }
});

dialogClose.addEventListener('click', () => {
    dialog.close();
});

copyButton.addEventListener('click', () => {
    let text = textOutput.textContent;
    navigator.clipboard.writeText(text);
});