const calcularTotalDeHoras = require("./calcularTotalDeHoras");
const calcularValorBaseDoContrato = require("./calcularValorBaseDoContrato");
const { TAXAS_CONTRATUAIS_POR_PACOTE } = require("./constantes");
const obterPacoteDeAcordoComTotalDeHoras = require("./obterPacoteDeAcordoComTotalDeHoras");

function calcularValorTotalDoProjeto(funcionalidades, salarioPorHora) {
  const qtdHoras = calcularTotalDeHoras(funcionalidades);
  const pacote = obterPacoteDeAcordoComTotalDeHoras(qtdHoras);
  const valorBase = calcularValorBaseDoContrato(qtdHoras, salarioPorHora);
  const total = valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacote];
  return Math.round(total);
}

module.exports = calcularValorTotalDoProjeto;
