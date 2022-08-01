import ValidacoesService from "../services/ValidacoesService";

test("Validar se o numero do quarto é maior que 1 e menor que 9999", () => {
    expect(ValidacoesService.validaNumeroQuarto(5)).toBe(true)
});

test("Validar se o numero do quarto é maior que 1 e menor que 9999", () => {
    expect(ValidacoesService.validaNumeroQuarto(67)).toBe(true)
});

test("Validar se o numero do quarto é maior que 1 e menor que 999", () => {
    expect(ValidacoesService.validaNumeroQuarto(64789)).toBe(false)
});

test("Validar se foi inserida uma opção válida de limpeza: foi feita", () => {
    expect(ValidacoesService.validaControle(1)).toBe(true)
});

test("Validar se foi inserida uma opção válida de limpeza: não foi feita", () => {
    expect(ValidacoesService.validaControle(0)).toBe(true)
});

test("Validar se foi inserida uma opção válida de limpeza", () => {
    expect(ValidacoesService.validaControle(24)).toBe(false)
});

test("Verificar funcionário responsável pela limpeza", () => {
    expect(ValidacoesService.validaIdFuncionario("569")).toBe(true)
});

test("Verificar funcionário responsável pela limpeza", () => {
    expect(ValidacoesService.validaIdFuncionario("2467")).toBe(true)
});

test("Verificar funcionário responsável pela limpeza", () => {
    expect(ValidacoesService.validaIdFuncionario(4687914)).toBe(false)
});