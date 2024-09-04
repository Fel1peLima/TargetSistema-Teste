const readline = require('readline');

function isFibonacci(num) {
    if (num < 0) return false;

    let a = 0, b = 1;

    if (num === 0 || num === 1) {
        return true;
    }

    while (b <= num) {
        if (b === num) {
            return true;
        }
        let next = a + b;
        a = b;
        b = next;
    }

    return false;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número para verificar se ele pertence à sequência de Fibonacci: ', (input) => {
    let numero = parseInt(input);

    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
    } else {
        if (isFibonacci(numero)) {
            console.log(`${numero} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`${numero} não pertence à sequência de Fibonacci.`);
        }
    }

    rl.close();
});
