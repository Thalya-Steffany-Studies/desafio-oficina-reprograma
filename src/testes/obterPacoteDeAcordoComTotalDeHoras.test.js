const obterPacoteDeAcordoComTotalDeHoras = require("../obterPacoteDeAcordoComTotalDeHoras");

describe("Nome do pacote", () => {
  test("Deve retornar o pacote_base, caso a quantidade total de horas seja menor ou igual a 50", () => {
    const qtdTotalDeHoras = 30;
    const nomeDoPacoteEsperado = "pacote_basico";
    const resultado = obterPacoteDeAcordoComTotalDeHoras(qtdTotalDeHoras);

    expect(resultado).toBe(nomeDoPacoteEsperado);
  });
});
