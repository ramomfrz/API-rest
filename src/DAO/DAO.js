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

    static listarLimpeza(id, query) {

        return new Promise((resolve, reject) => {

            Database.all(query, id, (error, res) => {
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
                    reject(error.message)
                    throw new Error("Cadastro mal sucedido")
                } else {
                    resolve({message: "Cadastrou" })
                }
            })
        })
    }

    //  ATUALIZAR //

    static update( entidade, id, query) {
        const body = Object.values(entidade)
    
        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (error) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({message: "Dados atualizados." })
                }
            })
        })
    }

    static atualizarLimpeza(entidade, id, query){
        const body = Object.values(entidade)

        return new Promise((resolve, reject) => {

            Database.run(query, [...body, id], (error) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({ error: false, message: "Dados de limpeza atualizados." })
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

    static reservaAtualizada(entidade, id, query) {
        const body = Object.values(entidade)

        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (error) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({ error: false, message: "Dados da reserva atualizados." })
                }
            })
        })
    }

    static atualizarQuarto(id, entidade, query){
        const body = Object.values(entidade);

        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (error) => {
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "Quarto atualizado com sucesso!"})
                }
            })
        })
    }

    //  DELETAR //

    static deletar(query, id) {

        return new Promise((resolve, reject) => {
            Database.run(query, id, (error) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({message: `Registro ${id} deletado!`})
                }
            })
        })
    }

    static delete(id, query) {
        return new Promise((resolve, reject) => {
            Database.run(query, id, (error) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({message: `Registro do Id ${id} removido com sucesso`})
                }
            })
        })
    }

    static deletaReserva(id, query) {
        return new Promise((resolve, reject) => {
            Database.run(query, id, (error) => {
                if (error) {
                    reject(error.message)
                } else {
                    resolve({ message: "Reserva deletada com sucesso!" })
                }
            })
        })
    }

    static deletarQuarto(id, query){

        return new Promise((resolve, reject) => {
            Database.run(query, id, (error) => {
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "Quarto deletado com sucesso!"})
                }
            })
        })
    }
}


export default DAO