function inverterString(s) {
    let stringInvertida = '';
    for (let i = s.length - 1; i >= 0; i--) {
        stringInvertida += s[i];
    }
    return stringInvertida;
}


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma string para inverter: ', (entradaUsuario) => {
    console.log('String invertida:', inverterString(entradaUsuario));
    rl.close();
});

