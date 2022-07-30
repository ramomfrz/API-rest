const listaDeHospedes = [
  {
    cpf: '1245876980',
    nome: 'Jose aldo',
    numeroQuarto: '2',
    telefone: '140987464' 
  },
  {
    cpf: '4687980354',
    nome: 'Isaias gomes',
    numeroQuarto: '4',
    telefone: '1859786352' 
  }
]

class Hospedes {
  static rotas(app) {
    app.get("/hospedes", (req, res) => {
      res.send(listaDeHospedes)
    })

    // app.get("/hospedes/:cpf", (req, res) => {

    // })
  }

  
}

function buscarHospede()

export default Hospedes