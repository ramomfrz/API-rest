import FuncionarioModel from "../models/funcionarioModel.js"
import ValidacoesService from "../services/ValidacoesService.js"
import DatabaseFuncionariosMetodos from "../DAO/DatabaseFuncionariosMetodos.js"
import Database from "../database/database.js"

DatabaseFuncionariosMetodos.createTableFuncionarios()

class Funcionarios{
    static rotas(app){
        app.get('/funcionario', async (req, res) => {
            const response = await
            DatabaseFuncionariosMetodos.listAllFuncionarios()
            res.status(200).json(response)
        })

        app.get('/funcionario/:id', async (req, res) => {
            try{
                const funcionario = await DatabaseFuncionariosMetodos.listFuncionariosById(req.params.id)
                if(!funcionario){
                    throw new Error("Funcionário não encontrado no sistema")
                }
                res.status(200).json(funcionario)
            }catch(error){
                res.status(404).json(error.message)
            }
        })

        app.post('/funcionario', async (req, res) => {
            const validarFuncionario = ValidacoesService.validarFuncionario(...Object.values(req.body))
            try{
                if(validarFuncionario){
                    const funcionario = new FuncionarioModel(...Object.values(req.body))
                    const response = await DatabaseFuncionariosMetodos.insertFuncionarios(funcionario)
                    res.status(201).json(response)
                }else{
                    throw new Error("Revise a requisição")
                }
            }catch(error){
                res.status(400).json(error.message)
            }
        })

        app.put('/funcionario/:id', async (req, res) => { 
            const validarFuncionario = ValidacoesService.validarFuncionario(...Object.values(req.body))
            const encontrarFuncionario = await DatabaseFuncionariosMetodos.listFuncionariosById(req.params.id)
            try{
            if(validarFuncionario){
                if(!encontrarFuncionario){
                    throw new Error("Não foi encontrado um funcionario com esse ID")
                }
                const funcionario = new FuncionarioModel(...Object.values(req.body))
                const responde = await DatabaseFuncionariosMetodos.updateFuncionarios(req.params.id, funcionario)
                res.status(200).json(responde)
            }else {
                throw new Error("Falha ao atualizar o funcionario, confira os dados.")
            }
        }catch(error){
            res.status(400).json(error.message)
        }
    })

        app.delete('/funcionario/:id', async (req, res) => {
            try{
                const encontrarFuncionario = await DatabaseFuncionariosMetodos.listFuncionariosById(req.params.id)
                if(!encontrarFuncionario){
                    throw new Error("Funcionário não encontrado no sistema")
                }else{
                    const funcionario = await DatabaseFuncionariosMetodos.deleteFuncionario(req.params.id)
                    res.status(200).json(funcionario)
                }
            }catch(error){
                res.status(404).json(error.message)
            }
        })
    }
}


export default Funcionarios
