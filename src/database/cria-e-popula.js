import DatabaseLimpezasMetodos from "../DAO/DatabaseLimpezasMetodos.js";
import DatabaseReservasMetodos from "../DAO/DatabaseReservasMetodos.js";
import DatabaseHospedesMetodos from "../DAO/DatabaseHospedesMetodos.js";
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

const hospede = {
    cpf: '12345678912',
    nome: 'José Alves',
    numeroQuarto: 4,
    telefone: '1998746712'    
}

try {

    await DAO.ativaForeignKeys()

    const limpezas = await DatabaseLimpezasMetodos.createTableLimpezas()
    console.log(limpezas, "Limpezas")

    const reservas = await DatabaseReservasMetodos.createTableReservas()
    console.log(reservas, "Criada Reservas")

    const hospedes = await DatabaseHospedesMetodos.createTableHospedes()
    console.log(hospedes, "Tabela de hospedes criada.")

    const criouLimpeza = await DatabaseLimpezasMetodos.inserirLimpeza(limpeza)
    console.log(criouLimpeza)

    const reservaRegistrada = await DatabaseReservasMetodos.inserirReserva(reserva)
    console.log(reservaRegistrada, "Reserva registrada com sucesso.")

    const hospedeRegistrado = await DatabaseHospedesMetodos.registrarHospede(hospede)
    console.log(hospedeRegistrado, "Hospede registrado com sucesso.")

} catch (error) {
    console.log("Error: ", error)
}
