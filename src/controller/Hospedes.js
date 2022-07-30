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

    // app.get("/hospedes/:cpf", (req, res) => {

    // })
  }

  
}


export default Hospedes