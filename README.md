<div align="center">
  <img src="./public/images/logo.png" height="100px" alt="Next Controll"/>
</div>

<div align="center">

  # Next Controll
  Trata-se de uma aplicação que visa gerenciar os usuários de um possivel sistema.



  ![](https://img.shields.io/badge/autor-Maykon%20Sousa-brightgreen)
  ![](https://img.shields.io/badge/Language-Typescript-brightgreen)
  ![](https://img.shields.io/badge/Front--End-ReactJS-brightgreen)
  
</div> 

## Alguns recursos utilizados

- **NextJS** — Framework do React que utiliza Nodejs para fornecer ao browser a pagina já renderizada (SSR) permitindo a indexação do ite em motores de busca e ainda deixa a aplicação mais performática quanto á carregamento e roteamento das páginas
- **Context API** - Hook do React que nos permite compartilhar estados de forma global, deixando todas as informações disponíveis para ser acessada e atualizada em tempo real a partir de qualquer componente
- **Chakra-UI** — Recurso de design que nos permite construir uma aplicação de forma declarativa (estrutura e estilização juntos) e possui uma biblioteca muito bacana de componentes estilizados
- **SweetAlert** — Biblioteca para a construção de Alertas visuais estilizados
- **React Hook Form** - Biblioteca para gerenciamento de estados de formulários  
- **Axios** - Biblioteca para gerenciar o acesso às rotas da API


## Iniciando

1. Clone este  reposítório usando `git clone https://github.com/maykonsousa/nextcontroll.git`
2. acesse a pasta do projeto via terminal com o comando: `cd nextcontroll`<br />


## Iniciando a plataforma Web


2. Utilize o comando  `yarn` ou `npm install` para instalar as dependências<br />
3. Utilize o comando `yarn dev` para iniciar a aplicação no seu navegador

## Logando na aplicação:
A Api fornecida possui registros dinâmicos o que não permitiu manter um Login padrão, dessa forma, clique em registrar e faça o cadastro, logo será direcionado para a página de Login onde poderá acessar as informações com os dados cadastrados

## Listagem de usuários
A lista de usuários é exibida em forma de card e exibe exclusivamente os usuários cadastrados meio da aplicação. Não exibindo portanto, usuários que porventura estejam sendo criados por outra aplicação

## Sobre do cadastro
Um novo cadastro pode ser criado tanto pelo próprio usuário na tela de registro quanto por outro usuário administrador no Dashboard com algumas ressalvas.

Usuário cadastrado direto na página de registro, pode informar os dados de nome, email, profissão e senha.

Já um usuário cadastrado por um outro usuário logado, deverá informar Nome, email e profissão. Quanto a senha, será salva automaticamente com a sequência numérica `12345678` que poderá ser alterada posteriormente pelo próprio usuário, quando este se logar na aplicação.  

Não é possivel cadatrar usuários com emails duplicados.

## Edição de Usuários
- Somente é permitido para usuários Logados
- Usuários só podem alterar Nome e Profissão de outros usuários. Não podem Alterar dados de Login como email e senha
- Usuários logados podem alterar os próprios dados inclusive email e senha

## Exclusão de usuários
- Usuários logados podem excluir outros usuários
- Usuário Logado pode excluir a própria conta, nesse caso será redirecionado para a tela de login.

## Atualização de Atividades

[x] - Criação de telas  
[x] - Validação de formulários  
[x] - Integração com a api  
[x] - Login  
[x] - Próprio Cadastro   
[x] - Excluir usuários  
[x] - Alterar Usuarios  
[x] - Editar Perfil  
[x] - Excluir conta  
[x] - Alterar Senha  
[x] - Excluir a própria conta  
[ ] - Paginação   
[x] - Resposividade  

***



## CONTATOS
**website**:[http://maykonsousa.github.io](http://maykonsousa.github.io/)  
**LinkedIn**: [https://www.linkedin.com/in/maykonsousa](https://www.linkedin.com/in/maykonsousa/)  
**Whatsapp**: 61 992943297