import { soma, divisao, multiplicacao, subtracao } from "./calculadora.js";
import moment from "moment";

console.log("Soma: ", soma(10, 5));
console.log("\nSubtração: ", subtracao(10, 5));
console.log("\nMutiplicação: ", multiplicacao(10, 5));
console.log("\nDivisão: ", divisao(10, 5));

const anoAtual = moment().year();

function calcularIdade(anoNascimento) {
  // receber o ano de nascimento e subtrair do ano atual
  let idade = anoAtual - anoNascimento;
  return idade;
}

const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento);
console.log(`\n\nIdade: ${idade} anos.`);
