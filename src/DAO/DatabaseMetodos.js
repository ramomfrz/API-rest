import DAOquartos from "./DAOquartos.js";

class DatabaseMetodos extends DAOquartos {
    
    static async create(){

        const query = `
        CREATE TABLE IF NOT EXISTS quartos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            numeroQuarto VARCHAR NOT NULL,
            nomeHospedes VARCHAR NOT NULL,
            controle TINYINT NOT NULL,
            telefone VARCHAR NOT NULL
        )
        `
        const response = await this.createTable(query)
        return response
            
    }

    static async listar(){
        const query = `SELECT * FROM quartos`;
        const response = await this.listarQuartos(query)
        return response
    }

    static async listarUm(id){
        const query = `SELECT * FROM quartos WHERE id = ?`;
        const response = await this.listarQuarto(id, query)
        return response
    }

    static async inserir(entidade){
        const query = `INSERT INTO quartos (numeroQuarto, nomeHospedes, controle, telefone) VALUES (?,?,?,?)`;
        const response = await this.inserirQuarto(entidade, query)
        return response
    }


    static async atualizar(id, entidade){
        const query = `UPDATE quartos SET numeroQuarto=?, nomeHospedes=?, controle=?, telefone=? WHERE id=?`;
        const response = await this.atualizarQuarto(id, entidade, query)
        return response
    }

    static async deletar(id){
        const query = `DELETE FROM quartos WHERE id = ?`;
        const response = await this.deletarQuarto(id, query)
        return response
    }
}

export default DatabaseMetodos;