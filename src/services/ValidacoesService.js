export default class ValidacoesService {

    /**
     * 
     * @param {integer} id 
     * @returns boolean
     */
    
    static validaId(id) {
        return id
    }

    /**
     * 
     * @param {string} nome
     * @return boolean
     */
    static validaNome(nome) {
        return nome.length >= 2
    }

    /**
     * @param {string} numeroQuarto
     * @returns boolean
     */

    static validaNumeroQuarto(numeroQuarto) {
        if (numeroQuarto.length >= 1 && numeroQuarto.length <= 4) {
            const validaInt = parseInt(numeroQuarto)
            if (Number.isInteger(validaInt)) {
                return numeroQuarto
            } else {
                return "Numero do quarto inválido"
            }
        }
    }

    static validaCPF(CPF) {
        const regexCPF = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/
        return regexCPF.test(CPF)
    }

    static validaDataEntrada(dataEntrada) {
        const regexData = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        return regexData.test(dataEntrada)
    }

    static validaDataSaida(dataSaida) {
        const regexData = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        return regexData.test(dataSaida)
    }

    /**
     * @param {tinyint} controle
     * @returns boolean
     */

    static validaControle(controle){
        const limpou = controle
        return limpou === 1 ? true : false
    }

    /**
     * @param {string} id_funcionario
     * @returns boolean
     */

    static validaIdFuncionario(id_funcionario){
        return id_funcionario.length > 0 && id_funcionario.length <= 3
    }

    /**
     * 
     * @param {string} numeroQuarto 
     * @param {tinyint} controle 
     * @param {string} id_funcionario 
     * @returns boolean
     */

    static ehValido(numeroQuarto, controle, id_funcionario) {
        return this.validaNumeroQuarto(numeroQuarto) && this.validaControle(controle) && this.validaIdFuncionario(id_funcionario)
    }

    static reservaValidada(cpfCliente, numeroQuarto, dataEntrada, dataSaida) {
        return this.validaNumeroQuarto(numeroQuarto) && this.validaCPF(cpfCliente) && this.validaDataEntrada(dataEntrada) && this.validaDataSaida(dataSaida)
    }

    /**
     * 
     * @param {string} telefone
     * @returns boolean
     */
    static validaTelefone(telefone) {
        const telefoneValidado = parseInt(telefone)
        return telefoneValidado == telefone
    }

    /**
     * 
     * @param {number} cpf
     * @param {string} nome
     * @param {string} numeroQuarto
     * @param {string} telefone
     * @return boolean
     */
    static validaHospede(cpf, nome, numeroQuarto, telefone) {
        return this.validaCPF(cpf) &&
            this.validaNome(nome) &&
            this.validaNumeroQuarto(numeroQuarto) &&
            this.validaTelefone(telefone)
    }





}