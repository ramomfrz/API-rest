import DAO from "./DAO.js"

class DatabaseFuncionariosMetodos extends DAO {
    static async createTableFuncionarios(){

        const query = `
        CREATE TABLE IF NOT EXISTS funcionarios(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR NOT NULL,
            data_admissao VARCHAR NOT NULL

        )
        `
        const response = await this.createTable(query)
        return response
    }

    static async insertFuncionarios(funcionario){
        const query = `INSERT INTO funcionarios (nome, data_admissao) VALUES (?,?)`
        const response = await this.inserir(funcionario, query)
        return response
    }

    static async listAllFuncionarios(){
        const query = `SELECT * FROM funcionarios`
        const response = await this.listarTodas(query)
        return response
    }

    static async listFuncionariosById(id){
        const query = `SELECT * FROM funcionarios WHERE id = ?`
        const response = await this.listarPorId(id, query)
        return response
    }

    static async updateFuncionarios(id, entidade){
        const query = `UPDATE funcionarios SET nome = ?, data_admissao = ? WHERE id = ?`
        const response = await this.update(entidade, id, query)
        return response
    }

    static async deleteFuncionario(id){
        const query = `DELETE FROM funcionarios WHERE id=?`
        const response = await this.delete(id, query)
        return response
    }
}

export default DatabaseFuncionariosMetodos 
