import DAO from "./DAO.js"

class DatabaseHospedesMetodos extends DAO {

  static async createTableHospedes() {
    const query = `
    CREATE TABLE IF NOT EXISTS hospedes(
      cpf VARCHAR PRIMARY KEY NOT NULL,
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

  static async listarHospedePorCPF(cpf) {
    const query = `SELECT * FROM hospedes WHERE cpf = ?`
    
    const response = await this.listarHospede(cpf, query)
    return response
  }

  static async atualizarHospedesPorCPF(cpf, entidade) {
    const query = `UPDATE hospedes SET cpf = ?, nome = ?, numeroQuarto = ?, telefone = ?  WHERE cpf = ?`

    const response = await this.atualizarHospede(cpf, entidade, query)
    return response
  }

  static async deletaHospedePorCPF(cpf) {
    const query = `DELETE FROM hospedes WHERE cpf = ?`
    const response = await this.deletaPorCPF(query, cpf)
    return response
  }


}

export default DatabaseHospedesMetodos