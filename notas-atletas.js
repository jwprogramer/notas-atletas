let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    let notasObtidas = atleta.notas.join(',');
    let ordernar = [...atleta.notas].sort((a, b) => a - b);
    let validaNotas = ordernar.slice(1, -1);
    let soma = validaNotas.reduce((soma, nota) => soma + nota, 0);
    let mediaValida = soma / validaNotas.length;
    let mediaFormatada = Number(mediaValida.toFixed(6)).toString().replace('.', ',');
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasObtidas}`);
    console.log(`Média Válida: ${mediaFormatada}`);
    console.log('');
}