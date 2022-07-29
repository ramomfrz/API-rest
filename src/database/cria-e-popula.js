import DatabaseLimpezasMetodos from "../DAO/DatabaseLimpezasMetodos.js";
import DAO from "../DAO/DAO.js"

const limpeza = {
    numeroQuarto: "4",
    controle: 0,
    id_funcionario: "2"
}

const reservas = {
    cpfCliente: "12345678912"
}

try {

    await DAO.ativaForeignKeys()
    const limpezas = await DatabaseLimpezasMetodos.createTableLimpezas()
    console.log(limpezas, "Limpezas")

    const criouLimpeza = await DatabaseLimpezasMetodos.inserirLimpeza(limpeza)
    console.log(criouLimpeza)

} catch (error) {
    console.log("Error: ", error)
}
