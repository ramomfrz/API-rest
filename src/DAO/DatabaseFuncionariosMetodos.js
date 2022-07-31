
//import Database from "../database/Database.js"
import funcionariosDAO from "./funcionariosDAO.js"

class DatabaseFuncionariosMetodos extends funcionariosDAO {
    static async createTableFuncionarios(){

        const query = `
        CREATE TABLE IF NOT EXISTS funcionarios(
            id  VARCHAR PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR NOT NULL,
            data_admissao VARCHAR NOT NULL

        )
        `
        const response = await this.createTable(query)
        return response
    }

    static async insertFuncionarios(funcionario){
        const query = `INSERT INTO funcionarios(id, nome, data_admissao) VALUES (?,?,?)`
        const response = await this.insert(funcionario, query)
        return response
    }

    static async listAllFuncionarios(){
        const query = `SELECT * FROM funcionarios`
        const response = await this.listAll(query)
        return response
    }//confirmar se está correto

    static async listFunconariosById(id){
        const query = `SELECT * FROM funcionarios WHERE id = ?`
        const response = await this.listFuncionario(id, query)
        return response
    }//confirmar se está certo

    static async updateFuncionarios(id){
        const query = `UPDATE funcionarios SET nome ?, data_admissao ? WHERE id=?`
        const response = await this.update(id, nome, query)
        return response
    }

    static async deleteFuncionario(id){
        const query = `DELETE FROM funconarios WHERE id=?`
        const response = await this.delete(id, query)
        return response
    }
}

export default DatabaseFuncionariosMetodos 
