import DatabaseLimpezasMetodos from "../DAO/DatabaseLimpezasMetodos.js";
import DatabaseReservasMetodos from "../DAO/DatabaseReservasMetodos.js";
import DAO from "../DAO/DAO.js"

const limpeza = {
    numeroQuarto: "4",
    controle: 0,
    id_funcionario: "2"
}

const reserva = {
    cpfCliente: "12345678912",
    numeroQuarto: "4",
    dataEntrada: "01/01/22",
    dataSaida: "10/01/22"
}

try {

    await DAO.ativaForeignKeys()

    const limpezas = await DatabaseLimpezasMetodos.createTableLimpezas()
    console.log(limpezas, "Limpezas")

    const reservas = await DatabaseReservasMetodos.createTableReservas()
    console.log(reservas, "Criada Reservas")

    const criouLimpeza = await DatabaseLimpezasMetodos.inserirLimpeza(limpeza)
    console.log(criouLimpeza)

    const reservaRegistrada = await DatabaseReservasMetodos.inserirReserva(reserva)
    console.log(reservaRegistrada, "Reserva registrada com sucesso.")

} catch (error) {
    console.log("Error: ", error)
}
