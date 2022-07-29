export default class ValidaReservas {
    static validaCPF(CPF) {
        const regexCPF = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
        return regexCPF.test(CPF)
    }
}