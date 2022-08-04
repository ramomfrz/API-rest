export default class ValidacoesService {

    static validaNome(nome) {
        return nome.length >= 2
    }

    // O numero do quarto deve ser passado como number. Sem a necessidade de string. //
    
    static validaNumeroQuarto(numeroQuarto) {
        if (numeroQuarto >= 1 && numeroQuarto <= 9999) {
            if (typeof (numeroQuarto) != "number") {
                return false
            } else {
                return true
            }
        } return numeroQuarto
    }
    
    static validaCPF(CPF) {
        const regexCPF = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/
        return regexCPF.test(CPF)
    }

    //  VALIDAR DATA  //

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
    static validaIdFuncionario(id_funcionario) {
        if (id_funcionario >= 1 && id_funcionario < 9999) {
            if (typeof (id_funcionario) != "number") {
                return false
            } else {
                return true
            }
        } return id_funcionario
    }

    static validaTelefone(telefone) {
        if(telefone.length <= 9){
        const telefoneValidado = parseInt(telefone)
        return telefoneValidado == telefone
        }else{
            return false
        }
    }

    static validarFuncionario(nome, dataEntrada) {
        return this.validaNome(nome) && this.validaDataEntrada(dataEntrada)
    }

    /**
     * 
     * @param {string} numeroQuarto 
     * @param {string} controle 
     * @param {string} id_funcionario 
     * @param {date} data
     * @returns boolean
     */

    static ehValido(numeroQuarto, controle, id_funcionario, dataEntrada) {
        return this.validaNumeroQuarto(numeroQuarto) && this.validaControle(controle) && this.validaIdFuncionario(id_funcionario) && this.validaDataEntrada(dataEntrada) 
    }

    static reservaValidada(cpfCliente, nome, numeroQuarto, dataEntrada, dataSaida) {
        return this.validaNumeroQuarto(numeroQuarto) && this.validaCPF(cpfCliente) && this.validaDataEntrada(dataEntrada) && this.validaDataSaida(dataSaida) && this.validaNome(nome)
    }

    static validaGeral(numeroQuarto, nomeHospedes, controle, telefone) {
        return this.validaNumeroQuarto(numeroQuarto) && this.validaNome(nomeHospedes) && this.validaControle(controle) && this.validaTelefone(telefone)
    }

    static validaHospede(cpf, nome, numeroQuarto, telefone) {
        return this.validaCPF(cpf) &&
            this.validaNome(nome) &&
            this.validaNumeroQuarto(numeroQuarto) &&
            this.validaTelefone(telefone)
    }

}
