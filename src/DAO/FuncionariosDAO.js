import Database from "../database/Database.js";

class funcionariosDAO {

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

    static insert(entidade, query) {
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


static listAll(query) {
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


static listFuncionario(id, query) {
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


static update(entidade, id, query) {
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


static delete(id, query) {
        return new Promise((resolve, reject) => {
            Database.run(query, id, (error, resultado) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({ message: "Registro removido do sistema!" })
                }
            })
        })
    }
}
export default funcionariosDAO