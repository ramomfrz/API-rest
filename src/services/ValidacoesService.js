export default class ValidacoesService {

    /**
     * 
     * @param {string} id 
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
        if (numeroQuarto >= 1 && numeroQuarto <= 9999) {
            if (typeof (numeroQuarto) != "number") {
                return false
            } else {
                return true
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
     * @param {string} controle
     * @returns boolean
     * 0 = limpeza não foi feita; 1 = limpeza foi feita
     */

    static validaControle(controle) {
        const limpou = controle
        return limpou === 1 || limpou === 0
    }

    /**
     * @param {string} id_funcionario
     * @returns boolean
     */

    // static validaIdFuncionario(id_funcionario){
    //     id_funcionario.length > 0 && id_funcionario.length <= 3 ? true : false
    //     return id_funcionario
    // }


    static validaIdFuncionario(id_funcionario){
        if (id_funcionario >= 1 && id_funcionario < 9999) {
            if (typeof (id_funcionario) != "number") {
                return false
            } else {
                return true
            }
        }
    }

    static validaIdFuncionario(id_funcionario){        
        if (typeof (id_funcionario) != "number") {
            if (id_funcionario >= 1 && id_funcionario < 9999) {
                return id_funcionario
            } else {
                return true
            }
        }
    }


    /**
     * 
     * @param {string} numeroQuarto 
     * @param {string} controle 
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