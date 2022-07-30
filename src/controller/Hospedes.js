import DatabaseHospedesMetodos from "../DAO/DatabaseHospedesMetodos.js"
import ValidacoesService from "../services/ValidacoesService.js"
import Database from "../database/Database.js"


DatabaseHospedesMetodos.createTableHospedes()

class Hospedes {
  static rotas(app) {
    app.get("/hospedes", async (req, res) => {
      const response = await DatabaseHospedesMetodos.listarHospedes()
      res.status(200).json(response)
      
    })

    app.get("/hospedes/:cpf", async (req, res) => {
      try {
        const hospede = await DatabaseHospedesMetodos.listarHospedePorCPF(req.params.cpf)
        if (!hospede) {
          throw new Error("Hospede não encontrado. Verifique o CPF informado.")
        }
        res.status(200).json(hospede)
      } catch (error) {
        res.status(404).json(error.message)
      }
    })

   
  }

  
}


export default Hospedes