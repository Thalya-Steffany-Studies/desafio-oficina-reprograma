const calcularValorTotalDoProjeto = require("../calcularValorTotalDoProjeto");

test("Deve retornar o valor de 246, caso as funcionalidades sejam 'formulario' e 'responsividade'. E o valor cobrado pela profissional por hora for 7 reais", () => {
  const funcionalidades = ["formulario", "responsividade"];
  const precoPorHora = 7;
  const totalEsperado = 246;
  const resultado = calcularValorTotalDoProjeto(funcionalidades, precoPorHora);
  expect(resultado).toBe(totalEsperado);
});
