import Database from "../database/Database.js";

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

    static inserir(entidade, query) {
        const body = Object.values(entidade)

        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (error) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({ error: false, message: "Cadastrou" })
                }
            })
        })
    }


    static listarTodas(query) {
        return new Promise((resolve, reject) => {
            Database.all(query, (error, resultado) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    static listarLimpeza(id, query) {
        return new Promise((resolve, reject) => {
            Database.all(query, id, (error, resultado) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve(resultado)
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

    static reservaAtualizada(entidade, id, query) {
        const body = Object.values(entidade)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (error, resultado) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    static deletaReserva(id, query) {
        return new Promise((resolve, reject) => {
            Database.run(query, id, (error, resultado) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({ message: "Reserva deletada com sucesso!" })
                }
            })
        })
    }

    static atualizarHospede(cpf, entidade, query) {
        const body = Object.values(entidade)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body, cpf], (error) => {
                if (error) {
                    console.log(`erro na promise: ${error}`)
                    reject(error.message)
                } else {
                    resolve("Hospede atualizado!")
                }
            })
        })
    }

}

export default DAO