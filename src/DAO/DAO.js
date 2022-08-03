import Database from "../database/database.js";

class DAO {

    static async ativaForeignKeys() {

        const query = 'PRAGMA foreign_keys = ON'

        Database.run(query, error => {

            if (error) {
                console.log(error)
            } else {
                console.log("Chaves estrangeiras funcionando")
            }
        })
    }

    static createTable(query) {

        return new Promise((resolve, reject) => {

            Database.run(query, (error) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve("Tabela criada")
                }
            })
        })
    }

    //  LISTAR TODOS  //

    static listarTodas(query) {

        return new Promise((resolve, reject) => {

            Database.all(query, (error, res) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve(res)
                }
            })
        })
    }

    //  LISTAR POR ID //

    static listarPorId(id, query) {

        return new Promise((resolve, reject) => {

            Database.get(query, id, (error, res) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve(res)
                }
            })
        })
    }

    static listarReserva(id, query) {
        return new Promise((resolve, reject) => {
            Database.get(query, id, (error, resultado) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    static listarHospede(cpf, query) {
        return new Promise((resolve, reject) => {
            Database.get(query, cpf, (error, resultado) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    static listFuncionario(id, query) {
        return new Promise((resolve, reject) => {
            Database.get(query, id, (error, resultado) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    //  INSERIR  //

    static inserir(entidade, query) {

        const body = Object.values(entidade)

        return new Promise((resolve, reject) => {

            Database.run(query, [...body], (error) => {
                if (error) {
                    reject({ error: true, message: error.message })
                } else {
                    resolve({ Mensagem: "Registro incluído no sistema com sucesso!" })
                }
            })
        })
    }

    //  ATUALIZAR //

    static update(entidade, id, query) {
        const body = Object.values(entidade)

        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (error) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({ Mensagem: "Dados atualizados." })
                }
            })
        })
    }

    static atualizarHospede(cpf, entidade, query) {
        const body = Object.values(entidade)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body, cpf], (error) => {
                if (error) {
                    reject({ error: true, message: error.message })
                } else {
                    resolve({ error: false, message: `Hospede cpf ${cpf} atualizado com sucesso.` })
                }
            })
        })
    }

    static reservaAtualizada(entidade, id, query) {
        const body = Object.values(entidade)

        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], function () {
                if (this.changes == 1) {
                    return resolve({ Mensagem: "Os dados da reserva foram atualizados." })
                }
                return reject({ message: "Erro na atualização de reserva, ID não encontrado." })
            })
        })
    }

    static atualizarQuarto(id, entidade, query) {
        const body = Object.values(entidade);

        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (error) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({ Mensagem: "Quarto atualizado com sucesso!" })
                }
            })
        })
    }

    //  DELETAR //

    static delete(id, query) {
        return new Promise((resolve, reject) => {
            Database.run(query, id, (error) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({ Mensagem: `Registro do Id ${id} removido com sucesso` })
                }
            })
        })
    }

    static deletaReserva(id, query) {
        return new Promise((resolve, reject) => {
            Database.run(query, id, function () {
                if (this.changes == 0) {
                    reject({ message: "Falha ao deletar a reserva, ID não encontrado." })
                } else {
                    resolve({ Mensagem: "Registro de reserva deletado." })
                }
            })
        })
    }

    static deletarQuarto(id, query) {

        return new Promise((resolve, reject) => {
            Database.run(query, id, (error) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({ Mensagem: "Quarto deletado com sucesso!" })
                }
            })
        })
    }

    static deletaPorCPF(query, cpf) {
        return new Promise((resolve, reject) => {
            Database.run(query, cpf, (error) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({ erro: false, message: `Registro com cpf ${cpf} apagado com sucesso!` })
                }
            })
        })
    }
}

export default DAO