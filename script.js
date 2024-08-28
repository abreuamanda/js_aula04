function solicitarNumero(primeiroNumero, segundoNumero) {
    if (primeiroNumero % segundoNumero === 0) {
        return `${primeiroNumero} é múltiplo de ${segundoNumero}`;
    } else {
        return `${primeiroNumero} não é múltiplo de ${segundoNumero}`;
    }
}

const primeiroNumero = parseInt(prompt("Insira o primeiro número:"));
const segundoNumero = parseInt(prompt("Insira o segundo número:"));

const resultado = solicitarNumero(primeiroNumero, segundoNumero);
console.log(resultado);