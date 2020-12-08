

<h1 align="center"> 
   Imobiliaria Frontend Svelte :house:
</h1>

 ### :link: Tecnologias


![Svelte](https://img.shields.io/badge/Svelte-v3.0.0-blue) 
![Tailwind](https://img.shields.io/badge/Tailwind-v1.9.6-blue) 
![Web3-eth](https://img.shields.io/badge/Web3eth-v1.3.0-blue)
![Solidity](https://img.shields.io/badge/Solidity-v0.4.25-blue) 


### Features

:heavy_check_mark: OK <br>
:heavy_exclamation_mark: Em análise <br>

:heavy_check_mark: Registrar / Login  <br>
:heavy_exclamation_mark: Perfil usuário  <br>
:heavy_exclamation_mark: Registar imóvel para venda ou aluguel  <br>
:heavy_check_mark: Exibir todos imóveis  <br>
:heavy_check_mark: Conectar com Meta Mask  <br>
:heavy_check_mark: Checkout da venda, com smart contract e Ganache no blockchain  <br>
:heavy_exclamation_mark: Checkout para aluguel, com smart contract e Ganache no blockchain  <br>




## Como rodar este projeto  :dart:


|           Descrição                  |                                      COMANDOS                                      |  
|--------------------------------------|------------------------------------------------------------------------------------|
|  Clonar o repositório                |  `git clone git@github.com:fabriciocovalesci/Imobiliaria-frontend-Svelte.git`      |   
|  Acessar a pasta com projeto         |  `cd Imobiliaria-frontend-Svelte`                                                  | 
|  Acessar a pasta com Imobiliaria     |  `cd Imobiliaria`                                                                  |   
|  Instalar as dependências            |  `npm install`                                                                     |   
|  Subir o servidor node               |  `npm run dev`                                                                     |   
|                                      |                                                                                    |  



Este projeto é um front end de uma *Imobiliária* que permite cada usuário um criar uma conta, efetuar login, cadastrar um imóvel,  comprar, vender e alugar.

Para o desenvolvimento foi utilizado o framework **Svelte.js** e para CSS, foi utilizado o framework **Tailwind**.

Este projeto conta também com um [Back end](https://github.com/fabriciocovalesci/API_Imobiliaria). Todas as requisição GET, POST, PUT, consomem os dados desta API desenvolvido em python.

No fim a transação do imóvel é gravada num blockchain de desenvolvimento, também foi desenvolvido um *smart contract* na linguagem Solidity, o este projeto pode ser acessado neste [link](https://github.com/fabriciocovalesci/Smart_Contract_Imobiliaria).

## Arquitetura do Projeto


![Arquitetura](https://user-images.githubusercontent.com/40548641/101282526-829e8580-37b4-11eb-8535-00bd85214344.png)
