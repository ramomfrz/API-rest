import DatabaseLimpezasMetodos from "../DAO/DatabaseLimpezasMetodos.js";
import DatabaseReservasMetodos from "../DAO/DatabaseReservasMetodos.js";
<<<<<<< HEAD
import DatabaseFuncionariosMetodos from "../DAO/DatabaseFuncionariosMetodos.js";
=======
import DatabaseHospedesMetodos from "../DAO/DatabaseHospedesMetodos.js";
>>>>>>> bdaa7661e4ee3d69775a3f157010b2b2fd643198
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

<<<<<<< HEAD
const funcionarios = {
    nome: "Jane Doe",
    data_admissao: "05/05/2022"

=======
const hospede = {
    cpf: '12345678912',
    nome: 'José Alves',
    numeroQuarto: 4,
    telefone: '1998746712'    
>>>>>>> bdaa7661e4ee3d69775a3f157010b2b2fd643198
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

<<<<<<< HEAD
   const funcionario = await DatabaseFuncionariosMetodos.createTableFuncionarios()
   console.log(funcionario, "Registro criado")
   
    const funcionarioAdicionado = await DatabaseFuncionariosMetodos.insert(funcionarios)
    console.log(funcionarioAdicionado, "Funcionário adicionado com sucesso.")
    
=======
    const hospedeRegistrado = await DatabaseHospedesMetodos.registrarHospede(hospede)
    console.log(hospedeRegistrado, "Hospede registrado com sucesso.")
>>>>>>> bdaa7661e4ee3d69775a3f157010b2b2fd643198

} catch (error) {
    console.log("Error: ", error)
}
