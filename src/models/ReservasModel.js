// O numero do quarto deve ser passado como number. Sem a necessidade de string. "" //

class ModelReservas {
    constructor(CPF, nome, numeroQuarto, dataEntrada, dataSaida) {
        this.CPF = CPF
        this.nome = nome
        this.numeroQuarto = numeroQuarto
        this.dataEntrada = dataEntrada
        this.dataSaida = dataSaida
    }
}

export default ModelReservas
