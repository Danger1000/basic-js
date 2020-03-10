class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    }
    encrypt(str, key) {
      this.validate(str, key);
      let letters = str.toUpperCase().split('');
      let keyLetters = key.toUpperCase().split('');
      let result = letters.map(letter => {
        let code = letter.charCodeAt(0) - 65;
        if (code < 0 || code > 25) {
          return letter;
        }
        let keyLetter = keyLetters.shift();
        let keyCode = keyLetter.charCodeAt(0) - 65;
        keyLetters.push(keyLetter);
        return String.fromCharCode((code + keyCode) % 26 + 65);
      });
      return this.prepareResult(result)
    }
    decrypt(str, key) {
      this.validate(str, key);
      let letters = str.toUpperCase().split('');
      let keyLetters = key.toUpperCase().split('');
      let result = letters.map(letter => {
        let code = letter.charCodeAt(0) - 65;
        if (code < 0 || code > 25) {
          return letter;
        }
        let keyLetter = keyLetters.shift();
        let keyCode = keyLetter.charCodeAt(0) - 65;
        keyLetters.push(keyLetter);
        return String.fromCharCode((code + 26 - keyCode) % 26 + 65);
      });
      return this.prepareResult(result)
    }
    validate(str, key) {
      if (str === undefined || key === undefined) {
        throw new Error()
      }
    }
    prepareResult(result) {
      return this.direct ? result.join('') : result.reverse().join('');
    }
}
module.exports = VigenereCipheringMachine;
