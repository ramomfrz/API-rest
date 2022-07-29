export default class ValidacoesService{

    /**
     * 
     * @param {string} nome 
     * @returns boolean
     */
     static validaId(id){
        return id
    }

    /**
     * @param {string} numeroQuarto
     * @returns boolean
     */

    //recebe parametro numeroQuarto que vai receber true pra validar que o numeroQuarto foi inserido
    static validaNumeroQuarto(numeroQuarto){
        if(numeroQuarto.length >= 1 && numeroQuarto.length <= 3){
            return numeroQuarto
        }
    }

    /**
     * @param {string} controle
     * @returns boolean
     */

    //recebe parametro controle que vai receber true pra validar se a limpeza está feita
    static validaControle(controle){
        const limpou = controle
        if(limpou === 0){
            return false
        }else{
            return true
        }
    }

    /**
     * @param {string} id_funcionario
     * @returns boolean
     */

    //recebe parametro id_funcionario que vai receber true pra verificar se o id_funcionario é válido
    static validaIdFuncionario(id_funcionario){
        return id_funcionario.length >= 1
    }

    /**
     * 
     * @param {string} numeroQuarto 
     * @param {string} controle 
     * @param {string} id_funcionario 
     * @returns boolean
     */

    static ehValido(numeroQuarto, controle, id_funcionario){
        return this.validaNumeroQuarto(numeroQuarto) && this.validaControle(controle) && this.validaIdFuncionario(id_funcionario)
    }

}