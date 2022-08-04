
# PROJETO DO MÓDULO 4 🦖

Projeto do curso de desenvolvimento web full stack da Resília que consiste em criar uma API Rest utilizando CRUD e a estrutura de organização MVC. Tem como finalidade armazenar e gerenciar informações de um hotel.  


## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.JS](https://nodejs.org/en/)
- [Express](http://expressjs.com/pt-br/)
- [SQLite](https://www.sqlite.org/index.html)

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


## 👣 Rotas:

O projeto possui 5 entidades são elas QUARTOS, RESERVAS, FUNCIONÁRIOS, HOSPEDES e LIMPEZA. Cada entidade possui 5 rotas que são:

* GET: URL_DA_API / *"nome da entidade"*  
* GET: URL_DA_API / *"nome da entidade"/* {id} 
* POST: URL_DA_API / *"nome da entidade"*
* PUT: URL_DA_API / *"nome da entidade"/* {id}
* DELETE: URL_DA_API / *"nome da entidade"/* {id}

A entidade HOSPEDES utiliza o cpf no lugar do id:

* GET: URL_DA_API / hospedes/ {CPF}
* PUT: URL_DA_API / hospedes/ {CPF}
* DELETE: URL_DA_API / hospedes/ {CPF}
## 🕹️ Exemplos (GET)

GET: URL_DA_API/quartos/

## Resposta: 

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

GET: URL_DA_API/quartos/1

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

## 🕹️ Exemplo (POST)

POST: URL_DA_API/quartos/

```
{
	"numeroQuarto": 115,
	"nomeHospede": "Exemplo",
	"controle": 1,
	"telefone": "664317425"
}
```

## Resposta: 

``` 
{
	"Mensagem": "Registro incluído no sistema com sucesso!"
}

```

## 🕹️ Exemplo (PUT)

PUT: URL_DA_API/quartos/1

```
{
	"numeroQuarto": 200,
	"nomeHospede": "ExemploAtualizado",
	"controle": 0,
	"telefone": "664317425"
}
```
## Resposta: 

```
{
	"Mensagem": "Dados atualizados."
}
```

## 🕹️ Exemplo (DELETE)

DELETE: URL_DA_API/quartos/1

## Resposta: 

```
{
	"Mensagem": "Registro do Id 1 removido com sucesso"
}
```
## Autores

- [@AllanBarbozaG](https://github.com/AllanBarbozaG)
- [@carolinadesouzasilva](https://github.com/carolinadesouzasilva)
- [@letxns](https://github.com/letxns)
- [@ramomfrz](https://github.com/ramomfrz)
- [@RaaphaelGomesS](https://github.com/RaaphaelGomesS)
