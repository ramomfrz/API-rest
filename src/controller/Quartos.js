import DatabaseQuartosMetodos from "../DAO/DatabaseQuartosMetodos.js";
import QuartosModel from "../models/QuartosModel.js";
import ValidacoesService from "../services/ValidacoesService.js";

DatabaseQuartosMetodos.create();

class Quartos{
    static rotas(app){
        
        app.get("/quartos", async (req, res) => {
            const response = await DatabaseQuartosMetodos.listar()
            res.status(200).json(response)
        })

        app.get("/quartos/:id", async (req, res) => {
            try{
                const quarto = await DatabaseQuartosMetodos.listarUm(req.params.id);
                if(!quarto){
                    throw new Error("Não foi encontrado um quarto com esse ID")
                }
                res.status(200).json(quarto)
            }catch(error){
                res.status(404).json(error.message)
            }
        })


        app.post("/quartos", async (req, res) => {
            const validaGeral =  ValidacoesService.validaGeral(...Object.values(req.body));
            try{
                if(validaGeral){
                    const quarto = new QuartosModel(...Object.values(req.body));
                    const response = await DatabaseQuartosMetodos.insere(quarto);
                    res.status(201).json(response)
                }else{
                    throw new Error("A requisição está incompleta, revise o corpo")
                }
            }catch(error){
                res.status(400).json(error.message)
            }
        });

        app.put("/quartos/:id", async (req, res) => {
            const validaGeral =  ValidacoesService.validaGeral(...Object.values(req.body));
            try{
                if(validaGeral){
                    const quarto = new QuartosModel(...Object.values(req.body));
                    const response = await DatabaseQuartosMetodos.atualizar(req.params.id, quarto);
                    res.status(200).json(response)
                }else{
                    throw new Error("Falha ao atualizar o quarto")
                }
            }catch(error){
                res.status(400).json(error.message)
            }
        });

        app.delete("/quartos/:id", async (req, res) => {
            try{
                const quarto = await DatabaseQuartosMetodos.deletar(req.params.id);
                if(!quarto){
                    throw new Error("Não foi encontrado um quarto com esse ID")
                }
                res.status(200).json(quarto)
            }catch(error){
                res.status(404).json(error.message)
            }
        })
    }
}

export default Quartos;
