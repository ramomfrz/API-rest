import DAO from "./DAO.js"

class DatabaseHospedesMetodos extends DAO {

  static async createTableHospedes() {
    const query = `
    CREATE TABLE IF NOT EXISTS hospedes(
      cpf INTEGER PRIMARY KEY NOT NULL,
      nome VARCHAR NOT NULL,
      numeroQuarto VARCHAR NOT NULL,
      telefone VARCHAR NOT NULL
    )`

    const response = await this.createTable(query)
    return response
  }

  static async registrarHospede(hospede) {
    const query = `
    INSERT INTO hospedes (cpf, nome, numeroQuarto, telefone) VALUES (?,?,?,?)`

    const response = await this.inserir(hospede, query)
    return response
  }

  static async listarHospedes() {
    const query = `SELECT * FROM hospedes`
    const response = await this.listarTodas(query)
    return response
  }
}

export default DatabaseHospedesMetodos