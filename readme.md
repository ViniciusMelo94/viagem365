
# Instruções do projeto

O Viagem365 serve para facilitar o planejamento de viagens, e também enriquece a experiência do usuário ao fornecer acesso a informações confiáveis e experiências compartilhadas por uma comunidade de viajantes.

## Tecnologias utilizadas:

`Linguagem: Javascript`
`Framework ORM: Sequelize `
`Banco de Dados: PostgreSQL`
`Testes: Postman`

## Gestão de Tarefas com Kanban no Trello
A metodologia Kanban foi adotada para organizar tarefas e cards no Trello, as colunas do quadro representam diferentes estágios do fluxo de trabalho:

### Backlog: 
Tarefas planejadas, mas não iniciadas.
### Doing: 
Tarefas em andamento.
### Done: 
Tarefas concluídas.

## Rodar o repositório:

### Na primeira vez é necessário instalar as dependencias:
1. `npm install`
2. Se for em ambiente local: `npm install --dev`
3. `cp .env_example .env`

### Para rodar o repositório 
1. `nodemon src server.js`

### Rodar a migration. Opções:
1. Opção nº 1: `sequelize db:migrate`
2. Opção nº 2: `npx sequelize db:migrate`

### Criar valores iniciais no banco de dados:
1. `sequelize db:seed:all`
2. `npx sequelize db:seed:all`

## Acessar o Swagger

`http://localhost:3000/docs/`

## Bibliotecas utilizadas:

### instalar o sequelize
`npm install sequelize` 
### instalar o driver do PostgreSQL
`npm install pg` 
### instalar o CLI do sequelize
`npm install -g sequelize-cli` 
### instalar o dotenv
`npm install dotenv`
### instalar o JsonWebToken ( JWT )
`npm install jsonwebtoken`
### instalar o axios
`npm install axios`
### instalar o Swagger UI
`npm install swagger-ui-express`
### instalar o Swagger AutoGen para gerar o documento Swagger de forma automatica.
`npm install swagger-autogen`

## Melhorias:

Como melhoria podemos incluir uma interface de interação onde o usuário possa compartilhar mídias sobre suas viagens.

Implementar a integração com avaliações e recomendações de hospedagens, restaurantes e atividades turísticas por parte dos usuários. Isso permitiria que os viajantes compartilhassem suas opiniões e experiências sobre diferentes estabelecimentos e serviços relacionados a viagens.

Permitir a atualização e deleção de um usuário: Permitir a atualização e deleção de usuários proporciona maior flexibilidade na gestão de dados e na correção de informações incorretas.