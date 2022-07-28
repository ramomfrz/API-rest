import DatabaseMetodos from "../../../ToDoAPI-T18/src/utils/DatabaseMetodos.js";
import LimpezaModel from "../models/limpezaModel.js";
import ValidacoesService from "../services/ValidacoesService.js";

//fazer importações de database

class Limpezas{
    static rotas(app){
        app.get("/limpeza", (req, res) => {
            const resposta = DatabaseMetodos.listarTodasLimpezas()
            res.status(200).json(resposta)
        })

        app.get("/limpeza/:id", (req, res) => {
            if(ValidacoesService.validaId(req.params.id, Database.Limpezas)){
                const limpeza = DatabaseMetodos.listarLimpezaporId(req.params.id)
                res.status(201).json(limpeza)
            }else{
                res.status(404).json({Error: "Não foi possível encontrar o registro de limpeza"})
            }
        })
        
        app.post("/limpezas", (req, res) => {
            const ehValido = ValidacoesService.ehValido(...Object.values(req.body))

            if(ehValido){
                const limpeza = new LimpezaModel(...Object.values(req.body))
                const resposta = DatabaseMetodos.inserirLimpeza(limpeza)
                res.status(201).json(resposta)
            }else{
                res.status(400).json({Error: "Não é válido"})
            }
        })

        app.put("limpezas/:id", (req, res) => {
            const ehValido = ValidacoesService.ehValido(...Object.values(req.body))

            if(ehValido){
                const limpeza = new LimpezaModel(...Object.values(req.body))
                const resposta = DatabaseMetodos.atualizarPorId(req.params.id, limpeza)
                res.status(201).json(resposta)
            }else{
                res.status(400).json({Error: "Não é válido"})
            }
        })

        app.delete("/limpezas/:id", (req, res) => {
            if(ValidacoesService.validaId(req.params.id, Database.Limpezas)){
            const limpeza = DatabaseMetodos.deletaLimpezaPorId(req.params.id)
            res.status(200).json(limpeza)
        }else{
            res.status(404).json({Error: "Limpeza não encontrada"})
        }
        })
    }
}

export default Limpezas