const { HORAS_POR_FUNCIONALIDADE } = require("./constantes");

function calcularTotalDeHoras(funcionalidades) {
  const listaDeHoras = funcionalidades.map(
    (funcionalidade) => HORAS_POR_FUNCIONALIDADE[funcionalidade],
  );
  const totalDeHoras = listaDeHoras.reduce(
    (valorAcumulado, hora) => valorAcumulado + hora,
    0,
  );

  return totalDeHoras;
}

module.exports = calcularTotalDeHoras;
