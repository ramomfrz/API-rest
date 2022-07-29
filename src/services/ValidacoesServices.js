class ValidacoesService{
    
    static validaNumero(numero){
        return numero.length > 2 && numero.length < 3;
    }

    static validaNome(nome){
        return nome.length >= 3;
    }

    static validaLimpeza(controleLimpeza){
        if(controleLimpeza === "limpo" || controleLimpeza === "sujo"){
            return true
        }
        
    }

    static validaTelefone(telefone){
        if(telefone.length > 8 && telefone.length < 9){
            const tel = parseInt(telefone)
            return tel == telefone
        };
    }
    
    static validaGeral(numero, nome, controleLimpeza, telefone){
        return this.validaNumero(numero) && this.validaNome(nome) && this.validaLimpeza(controleLimpeza) && this.validaTelefone(telefone)
    }
}

export default ValidacoesService;
