const A = 65;
const Z = 90;

class VigenereCipheringMachine {

    constructor(isDirect = true) {
        this.isDirect = isDirect;

        //create vigenere table;
        const alphabetArr = Array.from(Array(Z + 1).keys());
        const alphabetStr = alphabetArr.join('');

        const matrix = Array.from(Array(Z + 1).keys());
        // populate the first row of our Vigenere table
        matrix[A] = alphabetArr;

        // populate the rest of our Vigenere table
        for (let i = 0; i < alphabetArr.length; i++) {
            matrix[i + A] = alphabetStr.substr(i).concat(alphabetStr.substring(0, i));
        }

        this.matrix = matrix;
    }

    encrypt(message, key) {
        if (typeof message == 'undefined' || typeof key == 'undefined') {
            throw new Error;
        }
        const upperMessage = message.toUpperCase();
        const upperKey = key.toUpperCase();

        let repeatedKey = upperKey;
        while (repeatedKey.length < upperMessage.length) {
            repeatedKey += upperKey;
        }
        repeatedKey = repeatedKey.substring(0,upperMessage.length);

        let result = '';
        for(let i=0; i< upperMessage.length; i++ ) {
            const messageCharCode = upperMessage.charCodeAt(i);
            const keyCharCode = repeatedKey.charCodeAt(i);
            let encryptedStr = upperMessage.charAt(i);
            if(messageCharCode>=A && messageCharCode<=Z){
                encryptedStr = String.fromCharCode(this.matrix[messageCharCode][keyCharCode]);
            }
            result += encryptedStr;
        }

        return result;

    }

    decrypt() {
        if (typeof message == 'undefined' || typeof key == 'undefined') {
            throw new Error;
        }
    }
}

module.exports = VigenereCipheringMachine;
