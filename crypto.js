const tablecrypt = {
    'a': 'j', 'b': 'w', 'c': 'q', 'd': 'a', 'e': 'h',
    'f': 'i', 'g': 'c', 'h': 'x', 'i': 'm', 'j': 'u',
    'k': 'g', 'l': 'z', 'm': 'v', 'n': 'd', 'o': 'y',
    'p': 'l', 'q': 't', 'r': 'o', 's': 'k', 't': 'p',
    'u': 'r', 'v': 'f', 'w': 'n', 'x': 's', 'y': 'b', 'z': 'e'
};
const revtablecrypt = {
    'j': 'a', 'w': 'b', 'q': 'c', 'a': 'd', 'h': 'e',
    'i': 'f', 'c': 'g', 'x': 'h', 'm': 'i', 'u': 'j',
    'g': 'k', 'z': 'l', 'v': 'm', 'd': 'n', 'y': 'o',
    'l': 'p', 't': 'q', 'o': 'r', 'k': 's', 'p': 't',
    'r': 'u', 'f': 'v', 'n': 'w', 's': 'x', 'b': 'y', 'e': 'z',
}

function crypter() {
    let texteinput = document.getElementById('normal').value;
    let texteoutput = '';
    console.log('bonjour');
    for (let char of texteinput) {
        let mappedChar = tablecrypt[char.toLowerCase()] ?? char;
        texteoutput += char === char.toUpperCase() ? mappedChar.toUpperCase() : mappedChar;
    }
    document.getElementById('resultat').innerText = texteoutput;
}

function decrypter() {
    let texteinput = document.getElementById('crypte').value;
    let texteoutput = '';
    console.log('bonsoir');
    for (let char of texteinput) {
        let mappedChar = revtablecrypt[char.toLowerCase()] ?? char;
        texteoutput += char === char.toUpperCase() ? mappedChar.toUpperCase() : mappedChar;
    }
    document.getElementById('resultat').innerText = texteoutput;
}

function clearnormal(){
    document.getElementById('normal').value = '';
}
function clearcrypte(){
    document.getElementById('crypte').value = '';
}