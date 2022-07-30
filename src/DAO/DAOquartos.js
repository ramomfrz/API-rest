import Database from "../database/Database.js";

class DAOquartos {

    static async ativaForeignKeys(){

        const query = 'PRAGMA foreign_keys = ON'

        Database.run(query, error => {
            if(error){
                console.log(error)
            }else{
                console.log("Chaves estrangeiras funcionando")
            }
        })    
    }

    static createTable(query){

        return new Promise((resolve, reject) => {
            Database.run(query, (error) => {
                if(error){
                    reject(error.message)
                }else{
                    resolve("Tabela quartos criada com sucesso!")
                }
            })
        })
    }

    static listarQuartos(query){
        return new Promise((resolve, reject) => {
            Database.all(query, (error, resultado) => {
                if(error){
                    reject(error.message)
                }else{
                    resolve(resultado)
                }
            })
        })
    }

    static listarQuarto(id, query){
        return new Promise((resolve, reject) => {
            Database.all(query, id, (error, resultado) => {
                if(error){
                    reject(error.message)
                }else{
                    resolve(resultado)
                }
            })
        })
    }

    static inserirQuarto(entidade, query){
        const body = Object.values(entidade);

        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (error) => {
                if(error){
                    reject(error.message)
                }else{
                    resolve({message: "Quarto adcionado com sucesso!"})
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

export default DAOquartos;