const fs = require('fs');

function lerFaturamento() {
    const dados = fs.readFileSync('faturamento.json', 'utf8');
    return JSON.parse(dados);
}

function calcularMenorMaiorFaturamento(faturamento) {
    let menor = Math.min(...faturamento);
    let maior = Math.max(...faturamento);
    return { menor, maior };
}

function calcularDiasAcimaDaMedia(faturamento) {
    const somaTotal = faturamento.reduce((total, valor) => total + valor, 0);
    const mediaMensal = somaTotal / faturamento.length;

    let diasAcimaDaMedia = 0;
    for (let valor of faturamento) {
        if (valor > mediaMensal) {
            diasAcimaDaMedia++;
        }
    }

    return { mediaMensal, diasAcimaDaMedia };
}

const faturamentoMensal = lerFaturamento();

const diasComFaturamento = faturamentoMensal.filter(d => d.valor > 0).map(d => d.valor);

const { menor, maior } = calcularMenorMaiorFaturamento(diasComFaturamento);

const { mediaMensal, diasAcimaDaMedia } = calcularDiasAcimaDaMedia(diasComFaturamento);

console.log(`Menor valor de faturamento: R$${menor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maior.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
console.log(`Média mensal de faturamento: R$${mediaMensal.toFixed(2)}`);
