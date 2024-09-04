const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};


function calcularPercentuais(faturamento) {
    
    const totalFaturamento = Object.values(faturamento).reduce((total, valor) => total + valor, 0);


    const percentuais = {};
    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2) + '%';
    }

    return { totalFaturamento, percentuais };
}

const { totalFaturamento, percentuais } = calcularPercentuais(faturamentoPorEstado);


console.log(`Valor total de faturamento: R$${totalFaturamento.toFixed(2)}`);
for (const estado in percentuais) {
    console.log(`Percentual de representação de ${estado}: ${percentuais[estado]}`);
}
