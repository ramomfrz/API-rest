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
     * @param {string} numeroQuarto
     * @returns boolean
     */

    //recebe parametro numeroQuarto que vai receber true pra validar que o numeroQuarto foi inserido
    static validaNumeroQuarto(numeroQuarto) {
        if (numeroQuarto.length >= 1 && numeroQuarto.length <= 3) {
            return numeroQuarto
        }
    }

    static validaCPF(CPF) {
        const regexCPF = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/
        return regexCPF.test(CPF)
    }


    /**
     * @param {string} controle
     * @returns boolean
     */

    //recebe parametro controle que vai receber true pra validar se a limpeza está feita
    static validaControle(controle) {
        const limpou = controle
        if (limpou === 0) {
            return false
        } else {
            return true
        }
    }

    /**
     * @param {string} id_funcionario
     * @returns boolean
     */

    //recebe parametro id_funcionario que vai receber true pra verificar se o id_funcionario é válido
    static validaIdFuncionario(id_funcionario) {
        return id_funcionario.length >= 1
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
        return this.validaNumeroQuarto(numeroQuarto) && this.validaCPF(cpfCliente)
    }

/**
     * @param {string} nome 
     * @returns boolean
     */
 static ValidarNome(nome){
    return nome.length >= 3
}

static validaDataAdmissao(data_admissao){
    const regexData = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        return regexData.test(data_admissao)
}

    static validarFuncionario(nome,){
        return this.ValidarNome(nome) && this.validaId(id) && this.validaDataAdmissao(data_admissao)
    }

}