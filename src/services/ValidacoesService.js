export default class ValidacoesService{

    /**
     * 
     * @param {integer} id 
     * @returns boolean
     */
    static validaId(id){
        return id
    }

    /**
     * @param {string} numeroQuarto
     * @returns boolean
     */

    static validaNumeroQuarto(numeroQuarto){
        const numQuarto = numeroQuarto
        return numQuarto.length >= 1 && numQuarto.length <= 3
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
        return id_funcionario.length >= 0 && id_funcionario.length <= 3
    }

    /**
     * 
     * @param {string} numeroQuarto 
     * @param {tinyint} controle 
     * @param {string} id_funcionario 
     * @returns boolean
     */

    static ehValido(numeroQuarto, controle, id_funcionario){
        return this.validaNumeroQuarto(numeroQuarto) && this.validaControle(controle) && this.validaIdFuncionario(id_funcionario)
    }

}