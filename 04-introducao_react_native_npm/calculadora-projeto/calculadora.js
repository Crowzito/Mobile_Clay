function soma(numA, numB) {
  let resultado = numA + numB;
  return `${numA} + ${numB} = ${resultado}`;
}

function subtracao(valorA, valorB) {
  let resultado = valorA - valorB;
  return `${valorA} - ${valorB} = ${resultado}`;
}

function multiplicacao(fatorA, fatorB) {
  let resultado = fatorA * fatorB;
  return `${fatorA} x ${fatorB} = ${resultado}`;
}

function divisao(dividendo, divisor) {
  let resto = dividendo / divisor;
  return `${dividendo} / ${divisor} = ${resto}`;
}

export { soma, subtracao, multiplicacao, divisao };
