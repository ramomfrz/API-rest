import ValidacoesService from "../services/ValidacoesService.js";

test("Validar se o CPF tem 11 números", () => {
  expect(ValidacoesService.validaCPF(12365478989)).toBe(true)
});

test("Validar se o CPF tem 11 números", () => {
  expect(ValidacoesService.validaCPF(1234567898)).toBe(false)
});

test("Validar se o CPF tem 11 números", () => {
  expect(ValidacoesService.validaCPF(123654789987)).toBe(false)
});

test("Validar se o telefone possui no máximo 9 dígitos em formato de string", () => {
  expect(ValidacoesService.validaTelefone("123456789")).toBe(true)
});

test("Validar se o telefone possui no máximo 9 dígitos em formato de string", () => {
  expect(ValidacoesService.validaTelefone("1234567890")).toBe(false)
});

test("Validar se o telefone possui no máximo 9 dígitos em formato de string", () => {
  expect(ValidacoesService.validaTelefone("12365487")).toBe(true)
});

test("Validar se o telefone possui no máximo 9 dígitos em formato de string", () => {
  expect(ValidacoesService.validaTelefone(123546987)).toBe(false)
});

test("Validar se o hospede está de acordo com todos os requisitos", () => {
  expect(ValidacoesService.validaHospede(12345678998, "Teste da Silva", 9, "123456789")).toBe(true)
});

test("Validar se o hospede está de acordo com todos os requisitos", () => {
  expect(ValidacoesService.validaHospede(1254789548, "Teste da Silva", 7, "58745698")).toBe(false)
});

test("Validar se o hospede está de acordo com todos os requisitos", () => {
  expect(ValidacoesService.validaHospede(45878965214, "", 2, "12478456")).toBe(false)
});

test("Validar se o hospede está de acordo com todos os requisitos", () => {
  expect(ValidacoesService.validaHospede(54789541236, "Teste da Silva", "10", "1254874")).toBe(false)
});

test("Validar se o hospede está de acordo com todos os requisitos", () => {
  expect(ValidacoesService.validaHospede(98745874154, "Teste da Silva", 33, "")).toBe(false)
});

