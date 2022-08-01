import DatabaseLimpezasMetodos from "../DAO/DatabaseLimpezasMetodos.js";
import DatabaseReservasMetodos from "../DAO/DatabaseReservasMetodos.js";
import DatabaseFuncionariosMetodos from "../DAO/DatabaseFuncionariosMetodos.js";
import DAO from "../DAO/DAO.js"

const limpeza = {
    numeroQuarto: "4",
    controle: 1,
    id_funcionario: "2"
}

const reserva = {
    CPF: "12345678912",
    numeroQuarto: "4",
    dataEntrada: "01/01/22",
    dataSaida: "10/01/22"
}

const funcionarios = {
    nome: "Jane Doe",
    data_admissao: "05/05/2022"
}

const hospede = {
    cpf: '12345678912',
    nome: 'José Alves',
    numeroQuarto: 4,
    telefone: '1998746712'
}

const quarto = {
    numeroQuarto: "315",
    nomeHospedes: 'Rodinei',
    controle: 1,
    telefone: '113424252'
}

try {

    //  CRIA ENTIDADE //

    await DAO.ativaForeignKeys()

    const quartos = await DatabaseLimpezasMetodos.createTableLimpezas()
    console.log(quartos, "Tabela de Quartos criada.")

    const limpezas = await DatabaseLimpezasMetodos.createTableLimpezas()
    console.log(limpezas, "Limpezas")

    const reservas = await DatabaseReservasMetodos.createTableReservas()
    console.log(reservas, "Criada Reservas")

    const hospedes = await DatabaseHospedesMetodos.createTableHospedes()
    console.log(hospedes, "Tabela de hospedes criada.")

    const funcionario = await DatabaseFuncionariosMetodos.createTableFuncionarios()
    console.log(funcionario, "Registro criado")

//  INSERIR NA ENTIDADE //

    const criouLimpeza = await DatabaseLimpezasMetodos.inserirLimpeza(limpeza)
    console.log(criouLimpeza)

    const reservaRegistrada = await DatabaseReservasMetodos.inserirReserva(reserva)
    console.log(reservaRegistrada, "Reserva registrada com sucesso.")

    const funcionarioAdicionado = await DatabaseFuncionariosMetodos.inserir(funcionarios)
    console.log(funcionarioAdicionado, "Funcionário adicionado com sucesso.")

    const hospedesAdicionado = await DatabaseFuncionariosMetodos.inserir(hospede)
    console.log(hospedesAdicionado, "Hospede adicionado com sucesso.")

    const QuartoAdd = await DatabaseFuncionariosMetodos.inserir(quarto)
    console.log(QuartoAdd, "Quarto adicionado com sucesso.")
    
} catch (error) {
    console.log(error)
}
