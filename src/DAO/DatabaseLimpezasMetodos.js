import DAO from "./DAO.js";

class DatabaseLimpezasMetodos extends DAO {
    
    static async createTableLimpezas(){

        const query = `
        CREATE TABLE IF NOT EXISTS limpezas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            numeroQuarto VARCHAR NOT NULL,
            controle TINYINT NOT NULL,
            id_funcionario VARCHAR NOT NULL,
            dataEntrada DATE NOT NULL
        )
        `

        const response = await this.createTable(query)
        return response
            
    }

    static async inserirLimpeza(limpeza){
        const query = `INSERT INTO limpezas (numeroQuarto, controle, id_funcionario, dataEntrada) VALUES (?,?,?,?)`
        const response = await this.inserir(limpeza, query)
        return response
    }

    static async listarTodasLimpezas(){
        const query = `SELECT * FROM limpezas`
        const response = await this.listarTodas(query)
        return response
    }

    static async listarLimpezaPorId(id){
        const query = `SELECT * FROM limpezas WHERE id = ?`
        const response = await this.listarPorId(id, query)
        return response
    }
    
    static async atualizarLimpezaPorId(id, valores) {
        const query = `UPDATE limpezas SET numeroQuarto = ?, controle = ?, id_funcionario = ?, dataEntrada = ? WHERE id = ?`
        const response = await this.update(valores, id, query)
        return response
    }

    static async deletarLimpezaPorId(id){
        const query = `DELETE FROM limpezas WHERE id=?`
        const response = await this.delete(id, query)
        return response
    }
}

export default DatabaseLimpezasMetodos