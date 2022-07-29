import Database from "../database/Database.js"

class DatabaseFuncionariosMetodos extends DAO {
    static async createTableFuncionarios(){

        const query = `
        CREATE TABLE IF NOT EXISTS funcionarios(
            id  INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR NOT NULL,
            data_admissao VARCHAR NOT NULL

        )
        `
        const response = await this.createTable(query)
        return response
    }

    static async insertFuncionarios(funcionario){
        const query = `INSERT INTO funcionarios(id, nome, data_admissao) VALUES (?,?,?)`
        const response = await this.insertFuncionarios(funcionario, query)
        return response
    }

    static async listAllFuncionarios(id){
        const query = `SELECT * FROM funcionarios`
        const response = await this.listAll(query)
        return response
    }//confirmar se está correto

    static async listFunconariosById(id, nome){
        const query = `SELECT * FROM funcionarios WHERE id = ?`
        const response = await this.listAllFuncionario(id, nome, query)
        return response
    }//confirmar se está certo

    static async updateFuncionarios(nome){
        const query = `UPDATE funcionarios SET nome ?, data_admissao ? WHERE id=?
        `
        const response = await this.updateFuncionarios(id, nome, query)
        return response
    }

    static async deleteFuncionario(id){
        const query = `DELETE FROM funconarios WHERE id=?`
        const response = await this.deleteFuncionario(id, query)
        return response
    }
}

export default DatabaseFuncionariosMetodos 
