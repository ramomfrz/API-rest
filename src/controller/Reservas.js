import ReservasModel from "../models/ReservasModel.js";
import ValidaReservas from "../services/ValidaReservas.js";
import Database from "../database/database.js"

class Reservas {
    static rotas(app) {
        app.get("/reservas", async (req, res) => {
            const resposta = await DatabaseReservasMetodos.listarReservas()
            res.status(200).json()
        })

        app.get("/reservas/:cpf", async (req, res) => {
            try {
                const reserva = await DatabaseReservasMetodos.listarReservaPorCpf(req.params.cpf)
                if (reserva) {
                    throw new Error("Reserva não encontrada para esse CPF")
                } res.status(200).json(reserva)
            } catch (error) {
                res.status(404).json(error.message)
            }
        })

        app.post("/reservas", async (req, res) => {
            const valido = ValidaReservas.validaCPF(...Object.values(req.body))
            try {
                if (valido) {
                    const reserva = new ReservasModel(...Object.values(req.body))
                    const response = await DatabaseReservasMetodos.inserirReserva(reserva)

                    res.status(201).json(response)
                } else {
                    throw new Error("Informações inválidas, confira os dados e tente novamente.")
                }
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.put("/reservas/:cpf", (req, res) => {
            const valido = ValidaReservas.validaCPF(...Object.values(req.body))
            if (valido) {
                const reserva = new ReservasModel(...Object.values(req.body))
                const response = DatabaseReservasMetodos.atualizarReserva(req.params.cpf, reserva)

                res.status(201).json(response)
            } else {
                res.status(400).json({ Erro: "Erro" })
            }
        })

        app.patch("/reservas/:cpf", (req, res) => {
            const response = DatabaseReservasMetodos.atualizaReserva(req.params.cpf, req.body)
            res.status(200).json(response)
        })
        app.delete("/reservas/:cpf", async (req, res) => {
            try {
                const reserva = await DatabaseReservasMetodos.deletaReserva(req.params.cpf)
                if (reserva) {
                    throw new Error("Reserva não encontrada, confira o CPF")
                }
                res.status(200).json(reserva)
            } catch (error) {
                res.status(404).json({ Error: error.message })
            }
        })
    }
}

export default Reservas;