

# PROJETO DO MÓDULO 4 API REST HOTEL🦖

Projeto do curso de desenvolvimento web full stack da Resília que consiste em criar uma API Rest utilizando CRUD e a estrutura de organização MVC. Tem como finalidade armazenar e gerenciar informações de um hotel.  


## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.JS](https://nodejs.org/en/)
- [Express](http://expressjs.com/pt-br/)
- [SQLite](https://www.sqlite.org/index.html)
- [Insomnia](https://insomnia.rest/download)

## ♟️ Dependências:

São as dependências necessárias para o funcionamento do projeto

```
  "dependencies": {
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "path": "^0.12.7",
    "sqlite3": "^5.0.10",
    "url": "^0.11.0"
  }
```

## ♟️ Dependências de desenvolvimento:

São as dependências utilizadas no desenvolvimento do projeto

```
  "devDependencies": {
    "jest": "^28.1.3",
    "nodemon": "^2.0.19"
```

## 🎫 Como instalar:

Clone o projeto

```bash
  git clone https://github.com/ramomfrz/ProjetoM4Resilia.git

```

Entre no diretório do projeto

```bash
  cd ProjetoM4Resilia
```

Instale as dependências

```bash
  npm i
```

Inicie o servidor

```bash
  npm run start
```

## 🚪 Porta:
O servidor está como padrão para rodar na porta 3000, porém se for necessário é possivel alterar no .env.


## 👣 Rotas:

O projeto utiliza os verbos HTTP (GET, POST, PUT, DELETE) nas 5 entidades criadas para esta API. Elas estão dividdidas em: QUARTOS, RESERVAS, FUNCIONÁRIOS, HOSPEDES e LIMPEZA. Cada entidade possui 5 rotas que são:

* GET: URL_DA_API / *"nome da entidade"*  
* GET: URL_DA_API / *"nome da entidade"/* {id} 
* POST: URL_DA_API / *"nome da entidade"*
* PUT: URL_DA_API / *"nome da entidade"/* {id}
* DELETE: URL_DA_API / *"nome da entidade"/* {id}

A entidade HOSPEDES utiliza o cpf no lugar do id:

* GET: URL_DA_API / hospedes/ {CPF}
* PUT: URL_DA_API / hospedes/ {CPF}
* DELETE: URL_DA_API / hospedes/ {CPF}
* 
## 🕹️ Exemplos (GET)

## GET: URL_DA_API/quartos/

### Resposta: 

```
[
	{
		"id": 1,
		"numeroQuarto": "115",
		"nomeHospedes": "Exemplo",
		"controle": 1,
		"telefone": "664317425"
	},
	{
		"id": 2,
		"numeroQuarto": "123",
		"nomeHospedes": "Exemplo",
		"controle": 0,
		"telefone": "231247425"
	}
]

```

## GET: URL_DA_API/quartos/1

```
[
	{
		"id": 1,
		"numeroQuarto": "115",
		"nomeHospedes": "Exemplo",
		"controle": 1,
		"telefone": "664317425"
	}
]

```

## GET: URL_DA_API/funcionario/

### Resposta:

```
[
	{
		"id": 1,
		"nome": "Mariana Silva",
		"data_admissao": "15/05/2022"
	},
	{
		"id": 2,
		"nome": "João Silva",
		"data_admissao": "20/05/2022"
	},
	{
		"id": 3,
		"nome": "Jane Doe",
		"data_admissao": "25/05/2022"
	}
]
```
## GET: URL_DA_API/funcionario/3

```
{
	"id": 3,
	"nome": "Jane Doe",
	"data_admissao": "25/05/2022"
}
```
## GET: URL_DA_API/hospedes/
```
[
	{
		"cpf": "12345678912",
		"nome": "José Silva",
		"numeroQuarto": "4",
		"telefone": "199874671"
	},
	{
		"cpf": "12345678913",
		"nome": "João Pedro",
		"numeroQuarto": "6",
		"telefone": "199874622"
	},
	{
		"cpf": "12345678928",
		"nome": "Joana Almeida",
		"numeroQuarto": "5",
		"telefone": "199874627"
	}
]
```

## GET: URL_DA_API/hospedes/12345678928
### Resposta: 
```
{
	"cpf": "12345678928",
	"nome": "Joana Almeida",
	"numeroQuarto": "5",
	"telefone": "199874627"
}
```
## GET: URL_DA_API/reservas/
```
[
	{
		"id": 1,
		"CPF": "12345678912",
		"nome": "Ramom Silva",
		"numeroQuarto": "4",
		"dataEntrada": "01/01/22",
		"dataSaida": "10/01/22"
	},
	{
		"id": 2,
		"CPF": "12345678918",
		"nome": "Rita Silva",
		"numeroQuarto": "8",
		"dataEntrada": "01/01/22",
		"dataSaida": "10/01/22"
	},
	{
		"id": 3,
		"CPF": "12345678928",
		"nome": "Teresa Silva",
		"numeroQuarto": "10",
		"dataEntrada": "01/01/22",
		"dataSaida": "10/01/22"
	}
]
```
## GET: URL_DA_API/reservas/1
```
{
	"id": 1,
	"CPF": "12345678912",
	"nome": "Ramom Silva",
	"numeroQuarto": "4",
	"dataEntrada": "01/01/22",
	"dataSaida": "10/01/22"
}
```
## 🕹️ Exemplo (POST)

## POST: URL_DA_API/quartos/

```
{
	"numeroQuarto": 115,
	"nomeHospede": "Exemplo",
	"controle": 1,
	"telefone": "664317425"
}
```

### Resposta: 

``` 
{
	"Mensagem": "Registro incluído no sistema com sucesso!"
}

```

## POST URL_DA_API/funcionario/

```
{
	"nome": "Mariana Silva",
	"data_admissao": "15/05/2022"
}
```
### Resposta:
```
{
	"Mensagem": "Registro incluído no sistema com sucesso!"
}
```

## POST: URL_DA_API/hospedes/
```
{
    "cpf": "12345678912",
    "nome": "José Silva",
    "numeroQuarto": 4,
    "telefone": "199874671"
}
```
### Resposta:
```
{
	"Mensagem": "Registro incluído no sistema com sucesso!"
}
```
## POST: URL_DA_API/reservas/
```
{
    "CPF":"12345678912",
    "nome": "Ramom Silva",
    "numeroQuarto": 4,
    "dataEntrada": "01/01/22",
    "dataSaida": "10/01/22"
}
```
### Resposta:
```
{
	"Mensagem": "Registro incluído no sistema com sucesso!"
}
```


## 🕹️ Exemplo (PUT)

## PUT: URL_DA_API/quartos/1

```
{
	"numeroQuarto": 200,
	"nomeHospede": "ExemploAtualizado",
	"controle": 0,
	"telefone": "664317425"
}
```
### Resposta: 

```
{
	"Mensagem": "Dados atualizados."
}
```

## PUT: URL_DA_API/funcionario/2

```
{
	"nome": "João da Silva",
	"data_admissao": "25/05/2022"
}
```
### Resposta:
```
{
	"Mensagem": "Dados atualizados."
}
```
## PUT: URL_DA_API/hospedes/12345678928
```
{
    "cpf": "12345678928",
    "nome": "Joana Almeida",
    "numeroQuarto": 8,
    "telefone": "199874627"
}
```
### Resposta:
```
{
	"error": false,
	"message": "Hospede cpf 12345678928 atualizado com sucesso."
}
```
## PUT: URL_DA_API/reservas/1
```
{
	"CPF": "12345678912",
	"nome": "Ramom Silva",
	"numeroQuarto": 4,
	"dataEntrada": "01/01/22",
	"dataSaida": "12/01/22"
}
```
### Resposta:

```
{
	"Mensagem": "Os dados da reserva foram atualizados."
}

```

## 🕹️ Exemplo (DELETE)

## DELETE: URL_DA_API/quartos/1

### Resposta: 

```
{
	"Mensagem": "Registro do Id 1 removido com sucesso"
}
```

## DELETE: URL_DA_API/funcionario/1

### Resposta:
```
{
	"Mensagem": "Registro do Id 1 removido com sucesso"
}
```

## DELETE: URL_DA_API/hospedes/12345678913

### Resposta:
```
{
	"erro": false,
	"message": "Registro com cpf 12345678913 apagado com sucesso!"
}
```
## DELETE: URL_DA_API/hospedes/1

### Resposta:
```
{
	"Mensagem": "Registro de reserva deletado."
}
```

## Autores

- [Allan Barboza](https://github.com/AllanBarbozaG)
- [Carolina Souza](https://github.com/carolinadesouzasilva)
- [Letícia Martins](https://github.com/letxns)
- [Ramom Ferraz](https://github.com/ramomfrz)
- [Raphael Gomes](https://github.com/RaaphaelGomesS)
