import LimpezaModel from "../models/LimpezaModel.js";
import ValidacoesService from "../services/ValidacoesService.js";
import DatabaseLimpezasMetodos from "../DAO/DatabaseLimpezasMetodos.js";
import Database from "../database/database.js";

DatabaseLimpezasMetodos.createTableLimpezas()

class Limpezas{
    static rotas(app){       
        app.get("/limpezas", async (req, res) => {

            const response = await DatabaseLimpezasMetodos.listarTodasLimpezas()
            res.status(200).json(response)
        })

        app.get("/limpezas/:id", async (req, res) => {

            try{
                const limpeza = await DatabaseLimpezasMetodos.listarLimpezaPorId(req.params.id)
                if(!limpeza){
                    throw new Error("Não foi possível encontrar o registro de limpeza")
                }
                res.status(200).json(limpeza)      
            }catch(error){
                res.status(404).json(error.message)
            }
        })
        
        app.post("/limpezas", async (req, res) => {

            const ehValido = ValidacoesService.ehValido(...Object.values(req.body))

            try{
                if(ehValido){
                    const limpeza = new LimpezaModel(...Object.values(req.body))
                    const resposta = await DatabaseLimpezasMetodos.inserirLimpeza(limpeza)
                    res.status(201).json(resposta)
                }else{
                    throw new Error("Revise a requisição")
                }  
            }catch(error){
                res.status(400).json(error.message)
            }
            
        })

        app.put("/limpezas/:id", (req, res) => {

            const ehValido = ValidacoesService.ehValido(...Object.values(req.body))

            try{
                if(ehValido){
                    const limpeza = new LimpezaModel(...Object.values(req.body))
                    const resposta = DatabaseLimpezasMetodos.atualizarLimpeza(req.params.id, limpeza)
                    res.status(201).json(resposta)
                }else{
                    throw new Error("Não é válido")
                }
            }catch(error){
                res.status(400).json(error.message)
            }
            
        })

        app.delete("/limpezas/:id", (req, res) => {

            try{
                if(ValidacoesService.validaId(req.params.id, Database.Limpezas)){
                    const limpeza = DatabaseLimpezasMetodos.deletarLimpeza(id)
                    res.status(200).json(limpeza)
                }else{
                    res.status(404).json({Error: "Limpeza não encontrada"})
                }
            }catch(error){
                res.status(404).json(error.message)
            }
            
        })
    }
}

export default Limpezas