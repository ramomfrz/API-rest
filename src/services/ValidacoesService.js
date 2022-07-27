export default class ValidacoesService{

/**
     * @param {string} id
     * @returns boolean
     */

    //recebe parametro id que vai receber true pra verificar se foi inserido um id
    static validaId(id){
        return id.length >= 0
    }

    /**
     * @param {string} numeroQuarto
     * @returns boolean
     */

    //recebe parametro numeroQuarto que vai receber true pra validar que o numeroQuarto foi inserido
    static validaNumeroQuarto(numeroQuarto){
        return numeroQuarto.length >= 0
    }

    /**
     * @param {string} controle
     * @returns boolean
     */

    //recebe parametro controle que vai receber true pra validar se a limpeza está feita
    static validaControle(controle){
        return true
    }

    /**
     * @param {string} id_funcionario
     * @returns boolean
     */

    //recebe parametro id_funcionario que vai receber true pra verificar se o id_funcionario é válido
    static validaIdFuncionario(id_funcionario){
        return id_funcionario >= 0
    }

    /**
     * 
     * @param {string} id 
     * @param {string} numeroQuarto 
     * @param {string} controle 
     * @param {string} id_funcionario 
     * @returns boolean
     */

    static ehValido(id, numeroQuarto, controle, id_funcionario){
        return this.validaId(id) && this.validaNumeroQuarto(numeroQuarto) && this.validaControle(controle) && this.validaIdFuncionario(id_funcionario)
    }

}