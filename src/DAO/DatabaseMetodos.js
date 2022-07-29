import Database from "../database/Database.js";

class DatabaseMetodos{
    static activePragma(){
        const pragma = "PRAGMA foreign_keys = ON"

        Database.run(pragma, (e)=>{
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras estão ativas")
            }
        })
    }

    static createTable(){
        
        this.activePragma();

        const query = `
        CREATE TABLE IF NOT EXISTS quartos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            numero VARCHAR,
            nome_hospedes VARCHAR,
            controle_limpeza VARCHAR,
            telefone VARCHAR
        )
        `
        return new Promise((resolve, reject)=>{
            Database.run(query, (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela quartos criada com sucesso!")
                }
            })
        })
    };

    static listarQuartos(){
        const query = `SELECT * FROM quartos`;

        return new Promise((resolve, reject) => {
            Database.all(query, (e, result) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    };
    
    static listarQuarto(id){
        const query = `SELECT * FROM quartos WHERE id=?`;

        return new Promise((resolve, reject) => {
            Database.all(query, id, (e, result) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    };

    static inserirQuarto(quarto){
        const query = `INSERT INTO quartos (numero, nome_hospedes, controle_limpeza, telefone) VALUES (?,?,?,?)`
        
        const body = Object.values(quarto);

        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (error) => {
                if(error){
                    reject(error.message)
                } else {
                    resolve({message: "Quarto adcionado com sucesso!"})
                }
            })
        })
    };

    static atualizarQuarto(id, quarto){
        const query = `UPDATE quartos SET numero=?, nome_hospedes=?, controle_limpeza=?, telefone=? WHERE id=?`;

        const body = Object.values(quarto);

        return new Promise((resolve, reject)=>{
            Database.run(query, [...body, id], (error) => {
                if(error){
                    reject(error.message)
                } else {
                    resolve({message: "Quarto atualizado com sucesso!"})
                }
            })
        })
    };

    static deletarQuarto(id){
        const query = `DELETE FROM quartos WHERE id=?`;

        return new Promise((resolve, reject) => {
            Database.run(query, id, (error) => {
                if(error){
                    reject(error.message)
                } else {
                    resolve({message: "Quarto deletado com sucesso!"})
                }
            })
        })
    };
}

export default DatabaseMetodos;