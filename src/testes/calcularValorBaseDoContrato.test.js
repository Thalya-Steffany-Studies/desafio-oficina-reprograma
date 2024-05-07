const calcularValorBaseDoContrato = require("../calcularValorBaseDoContrato");

test("Deve retornar o valor base do contrato como 224 reais, caso o total de horas seja 32 e o preço da profissional por hora seja 7", () => {
  const totalDeHoras = 32;
  const precoPorHora = 7;
  const valorBaseEsperado = 224;
  const resultado = calcularValorBaseDoContrato(totalDeHoras, precoPorHora);
  expect(resultado).toBe(valorBaseEsperado);
});
