const calcularTotalDeHoras = require("../calcularTotalDeHoras");

test("Deve retornar o total de 32 horas, caso as funcionalidades passadas sejam 'responsividade' e 'formulário'", () => {
  const funcionalidades = ["formulario", "responsividade"];
  const totalDeHorasEsperados = 32;
  const resultado = calcularTotalDeHoras(funcionalidades);

  expect(resultado).toBe(totalDeHorasEsperados);
});
