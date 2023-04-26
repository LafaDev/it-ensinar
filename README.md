<p align="center">
  <a href="" rel="noopener">
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--goETGOXU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/x3x5w638kkixi9s3h3vw.gif" />
</p>

<h3 align="center">Estudo de caso: Ensinar</h3>

<div align="center">

<p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
</p>
</div>

---

<p align="center">  aplicação de cadastro de alunos
    <br> 
</p>

<br>

## 📝 Links

- [Sobre](#about)
- [Features](#feats)
- [Instruções](#inst)
- [Tecnologias usadas](#built_using)

<br>

# Sobre o projeto <a name = "about"></a>
<br>
O projeto consistiu na construção de uma aplicação web em ReactJS utilizando TypeScript, que permite cadastrar, alterar, visualizar e remover alunos em uma suposta plataforma de ensino chamada "Ensinar". <br>
A solução foi desenvolvida atraves de uma tabela responsiva, onde um admnistrador teria acesso a um CRUD dos alunos cadastrados na plataforma.<br>
A tabela e demais partes dos componentes foram criados utilizando os componentes do Material-UI.

## 🏁 Features <a name = "feats"></a>
* Edição dinâmica dos estudantes utilizando uma tabela responsiva para modificar os dados no service
* Validação do formulário utilizando RegEx, estado e opções dos componentes
* Criação do rotas utilizando react-router-dom
  * Tratamento de rotas inexistente ("página não encontrada") 
* Utilização de react context para gerenciamento de estado
* Componentização de elementos de formulários
* Dois arquivos de service foram criados e podem atualmente ser alternados entre si:
  * students_inMemory
    * Salva os dados da tabela em cache, que desapareção quando a aplicação parar de rodar
  * students_inLocal
    * Salva os dados no localStorage, utilizando a persistencia de dados do navegador 
* tabela populada com dados ao inicar a aplicação
    * inMemory os dados foram pré codados para seeding
    * utilizando localStorage ele ira recuperar os dados salvos no navegador <br><br>

# Instruções <a name = "inst"></a>
Para começar, será necessario primeiro realizar o clone desse repositorio.<br>
Para fazer isso pelo terminal linux o seguinte comando pode ser utilizado:
```bash
git clone git@github.com:LafaDev/it-ensinar.git
```
depois que o repositorio for clonado, navegue até a raiz do projeto e instale as dependências:
```bash
npm install
```
### Rodando a aplicação
Para iniciar a aplicação, basta rodar o comando de desenvolvimento:
```bash
npm run dev
```
A aplicação foi desenvolvida utilizando a versão mais recente do node
<br>

# ⛏️ Tecnologias <a name = "built_using"></a>
- React.js - JavaScript Framework
  - React Hooks
  - React Router
  - React Context
 - Material UI
 - ViteJS
