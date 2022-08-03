import DAO from "./DAO.js";

class DatabaseReservasMetodos extends DAO {
    static async createTableReservas() {

        const query = `CREATE TABLE IF NOT EXISTS reservas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        CPF VARCHAR NOT NULL,
        nome VARCHAR NOT NULL,
        numeroQuarto VARCHAR NOT NULL,
        dataEntrada DATE NOT NULL,
        dataSaida DATE NOT NULL
    )`
        const response = await this.createTable(query)
        return response
    }

    static async inserirReserva(reserva) {
        const query = `INSERT INTO reservas (CPF, nome, numeroQuarto, dataEntrada, dataSaida) VALUES (?,?,?,?,?)`
        const response = await this.inserir(reserva, query)
        return response
    }
    static async listarReservas() {
        const query = `SELECT * FROM reservas`
        const response = await this.listarTodas(query)
        return response
    }
    static async listarReservasPorID(id) {
        const query = `SELECT * FROM reservas WHERE id = ?`
        const response = await this.listarReserva(id, query)
        return response
    }
    static async atualizarReserva(id, valores) {
        const query = `UPDATE reservas SET CPF = ?, nome = ?, numeroQuarto = ?, dataEntrada = ?, dataSaida = ? WHERE id = ?`
        const response = await this.reservaAtualizada(valores, id, query)
        return response
    }
    static async excluirReserva(id) {
        const query = `DELETE FROM reservas WHERE id = ?`
        const response = await this.deletaReserva(id, query)
        return response
    }

}

export default DatabaseReservasMetodos