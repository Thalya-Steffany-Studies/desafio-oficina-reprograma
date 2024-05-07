const { MAX_HORAS_POR_PACOTE } = require("./constantes");
function obterPacoteDeAcordoComTotalDeHoras(totalDeHoras) {
  const nomePacote = Object.entries(MAX_HORAS_POR_PACOTE).find(
    ([_, qtdHorasPacote]) => totalDeHoras <= qtdHorasPacote,
  )[0];

  return nomePacote;
}
module.exports = obterPacoteDeAcordoComTotalDeHoras;
