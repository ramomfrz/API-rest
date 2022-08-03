import LimpezaModel from "../models/LimpezaModel.js";
import ValidacoesService from "../services/ValidacoesService.js";
import DatabaseLimpezasMetodos from "../DAO/DatabaseLimpezasMetodos.js";

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
                if(limpeza){
                    res.status(200).json(limpeza)      
                }else{
                    throw new Error("Não foi possível encontrar o registro de limpeza")

                }
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
                    throw new Error("Revise o corpo da requisição")
                }  
            }catch(error){
                res.status(400).json(error.message)
            }            
        })

        app.put("/limpezas/:id", async (req, res) => {
            const ehValido = ValidacoesService.ehValido(...Object.values(req.body))
            try{
                if(ehValido){
                    const limpeza = new LimpezaModel(...Object.values(req.body))
                    const resposta = await DatabaseLimpezasMetodos.atualizarLimpezaPorId(req.params.id, limpeza)
                    res.status(200).json(resposta)
                }else{
                    throw new Error("Erro ao atualizar")
                }
            }catch(error){
                res.status(400).json(error.message)
            }
        })

        app.delete("/limpezas/:id", async (req, res) => {
            try{
                const limpeza = await DatabaseLimpezasMetodos.deletarLimpezaPorId(req.params.id)
                if(!limpeza){
                    throw new Error("Limpeza não encontrada")
                }
                res.status(200).json(limpeza)
            }catch(error){
                res.status(404).json(error.message)
            }
        })
    }
}

export default Limpezas