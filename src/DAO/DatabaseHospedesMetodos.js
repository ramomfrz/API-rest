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

  
}