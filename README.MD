# Projeto de Automação de testes no Framework Cypress construído no curso Cypress Discovery - QAcademy

## 🔖 Requisitos funcionais


| Campos      | Descrição                             | Tipo     | Obrigatório |
| ------      | :------------------------------------ | -------- | ----------- |
| Nome        | Nome completo do usuário              | Text     | Sim         |
| CPF         | CPF do usuário                        | Text     | Sim         |
| Email       | Email do usuário                      | Text     | Sim         |
| Whatsapp    | Whatsapp do usuário                   | Text     | Não         |
| CEP         | CEP do usuário                        | Text     | Sim         |
| Número      | Número do endereço do usuário         | Text     | Sim         |
| Complemento | Complemento do endereço               | Text     | Não         |



### Test case 01 - Cadastro com moto

- [X] Usuário deve se tornar entregador Moto

### Test case 02 - Cadastro com bicicleta

- [X]Usuário deve se tornar entregador Bicicleta

### Test case 03 - Cadastro com Van/Carro

- [X]Usuário deve se tornar entregador Van/Carro

### Test case 04 - CPF inválido

- [X] Deve verificar alerta de CPF inválido

### Test case 05 - E-mail inválido

- [X] Deve verificar alerta de e-mail inválido

### Test case 06 - Campos obrigatórios

- [X] Deve verificar alerta de campos obrigatórios

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Javascript] - linguagem de programação universal
- [Cypress] - framework de testes automatizados

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Abra o Prompt de comandos como Administrador e ative o Yarn por meio [do Corepack](https://nodejs.org/dist/latest/docs/api/corepack.html) executando o comando abaixo:

```sh
corepack enable
```

Execute os comandos abaixo para instalar das dependências do projeto e execução dos testes(executar os comandos dentro da pasta do projeto):

```sh
yarn install
npx cypress open
```

---

Curso Cypress Discovery do [QAcademy](https://www.linkedin.com/company/qacademybr/) e [Fernando Papito](https://www.linkedin.com/in/papitoio/)