// encrypt-email.js

function stringToCharCodes(string) {
    // Returns a list of the character codes of a string
    return [...string].map(c => c.charCodeAt(0));
}

function encrypt(string) {
    // String to character codes, encrypt (+1) and back to a string
    let charCodes = stringToCharCodes(string);
    let encrCharCodes = charCodes.map(e => e += 1);
    return String.fromCharCode(...encrCharCodes);
}

function decrypt(encrString) {
    // String to character codes, decrypt (-1) and back to a string
    let encrCharCodes = stringToCharCodes(encrString);
    let decrCharCodes = encrCharCodes.map(e => e -= 1);
    return String.fromCharCode(...decrCharCodes);
}
