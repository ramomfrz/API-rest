import ValidacoesService from "../services/ValidacoesService.js";

//  NUMERO  //

test("Validar se o numero do quarto menor de 9999", () => {
    expect(ValidacoesService.validaNumeroQuarto(123)).toBe(true)
});

test("Validar se o numero do passa de 9999", () => {
    expect(ValidacoesService.validaNumeroQuarto(10000)).toBe(false)
});

test("Validar se o numero do quarto está errado(test deve falhar)", () => {
    expect(ValidacoesService.validaNumeroQuarto("0")).toBe(true)
});

 // NOME  //

test("Validar se o nome tem mais de 3 letras", () => {
    expect(ValidacoesService.validaNome("Raphael")).toBe(true)
});

test("Validar se o nome tem menos de 3 letras", () => {
    expect(ValidacoesService.validaNome("oi")).toBe(false)
});

test("Validar se o nome está incorreto(test deve falhar)", () => {
    expect(ValidacoesService.validaNome("io")).toBe(true)
});

//  LIMPEZA  //

test("Validar se os paramentros para 'sujo' está correto", () => {
    expect(ValidacoesService.validaControle("0")).toBe(false)
});

test("Validar se os paramentros para 'limpo' está correto", () => {
    expect(ValidacoesService.validaControle(1)).toBe(true)
});

test("Validar se os paramentros para 'limpo' está incorreto(test deve falhar)", () => {
    expect(ValidacoesService.validaControle(1)).toBe(false)
});

// TELEFONE //

test("Validar se o número está correto", () => {
    expect(ValidacoesService.validaTelefone("123456789")).toBe(true)
});

test("Validar se o número está correto", () => {
    expect(ValidacoesService.validaTelefone(123456789)).toBe(false)
});

test("Validar se o número está incorreto(test deve falhar)", () => {
    expect(ValidacoesService.validaTelefone("12345678910")).toBe(true)
});

