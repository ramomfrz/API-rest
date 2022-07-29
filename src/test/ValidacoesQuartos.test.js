import ValidacoesQuartos from "../services/ValidacoesQuartos.js";

test("Validar se o numero do quarto é igual a 3", () => {
    expect(ValidacoesQuartos.validaNome("123")).toBe(true)
});

test("Validar se o nome tem mais de 3 letras", () => {
    expect(ValidacoesQuartos.validaNome("Raphael")).toBe(true)
});

test("Validar se o nome tem mais de 3 letras", () => {
    expect(ValidacoesQuartos.validaNome("oi")).toBe(false)
});

test("Validar se os paramentros para limpeza estão corretos", () => {
    expect(ValidacoesQuartos.validaNome("limpo")).toBe(true)
});

