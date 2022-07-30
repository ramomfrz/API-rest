class ValidacoesService{
    
    static validaNumero(numeroQuarto){
        if(numeroQuarto.length >= 1 && numeroQuarto.length <= 3){
            return numeroQuarto
        }
    }

    static validaNome(nome){
        return nome.length >= 3;
    }

    static validaControle(controle){
        const limpou = controle
        if(limpou === 0){
            return false
        }else{
            return true
        }
    }

    static validaTelefone(telefone){
        if(telefone.length >= 8){
            const tel = parseInt(telefone)
            return tel == telefone
        };
    }
    
    static validaGeral(numeroQuarto, nome, controle, telefone){
        return this.validaNumero(numeroQuarto) && this.validaNome(nome) && this.validaControle(controle) && this.validaTelefone(telefone)
    }
}

export default ValidacoesService;
