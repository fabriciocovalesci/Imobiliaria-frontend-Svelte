
<script>
    import { Router, Link, links } from "svelte-routing";
    import { navigate } from "svelte-routing";
    import TestandoTail from './TestandoTail.svelte'
    import Nav from './Nav.svelte'
    import Imoveis from './Imoveis.svelte'
    import Login from './Login.svelte'
    import { validate } from 'gerador-validador-cpf'
    import {user } from './auth.js';


    let URL = 'https://apimobiliaria.herokuapp.com/api/v1/profile/'
    let URLOCAL = 'http://127.0.0.1:8000/api/v1/register/'
    let CEP = 'https://cep.awesomeapi.com.br/json/'
    let CORS = 'https://cors-anywhere.herokuapp.com/'

    let username, email, cpf, telefone, account, cep, estado, cidade, bairro, rua, numero;

    let queryString = {
            cpf: cpf,
            account: account,
            cellphone: telefone,
            address: {
                state: {
                    state: estado
                },
                city: {
                    city: cidade
                },
                neighborhood: {
                    neighborhood: bairro
                },
                street: cidade ,
                number: numero,
                cep: cep
            },
            user: {
                username: username,
                email: email
            }
        }

    // valida CPF , falta implementar melhor !!
    // if(validate(cpf)){
    // }else{
    //     alert("CPF " + cpf + " informado inválido !!!")
    // }

    function getCep(){
        // valida cep antes de consulta
        let valid_cep = /^\d{5}-\d{3}$/;
        // if(!valid_cep.test(cep)){
        //     alert("CEP inválido !!\n Informe somente números\n Ex: 99711-030")
        // }
        fetch(`${CEP}${cep}`,{
        method: 'GET',
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json"
        },
      })
        .then(response => response.json())
        .then(data => {
        estado = data.state,
        cidade = data.city,
        bairro = data.district,
        rua = data.address_name
        })
        .catch(error => {
        alert("CEP " + cep + " inválido !!")
        console.error('Error:', error)
        });
    }

// Retorno API CEP
//address: "Rua Joaquim de Moura Faitão"
// address_name: "Joaquim de Moura Faitão"
// address_type: "Rua"
// cep: "99711030"
// city: "Erechim"
// city_ibge: "4307005"
// ddd: "54"
// district: "Espírito Santo"
// lat: "-27.6442505"
// lng: "-52.2850491"
// state: "RS"


   function perfil(){
    //   fetch(`${CORS}${URLO}`,{
        fetch(`${URLOCAL}`,{
        method: 'PUT',
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + $user
        },
        body: JSON.stringify(queryString)
      })
      .then((response) =>{
        if(response.status != 200){
          console.log("ERROR: sem acesso ao sistema " + response.status );
          alert("ERROR: Verifique os dados informados")
        }
        else{
          alert("Cadastro efetuado com sucesso !!!")
          console.log('solicitacao aceita: status code ' + response.status);
          navigate("/imoveis", { replace: true });
        }
      })
    }

  </script>


<Nav/>
<main class=''>
  <div class='container top-10 m-10 p-10'>
  <!-- <div class='container top-10 m-10 p-10 '>
    <Authguard>
    <div  slot="authed">
      <Router path="/login/*" redirect="/"/>
      <Router path="/home"><h1>It is User's profile page</h1></Router>
    </div>
  </Authguard> -->
    
  <div class="bg-white border border-solid border-gray-800 border-3 shadow-3xl rounded-lg mx-auto lg:h-full px-8 pt-6 pb-8 mb-4">
    <h2 class='text-center text-2xl font-mono font-bold text-black'>Perfil</h2>
    <div class='grid grid-cols-2'>
        <div class="mb-4 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
            Usuário
            </label>
            <input bind:value={username} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Usuário">
        </div>

        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
            Email
            </label>
            <input bind:value={email} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="email" type="email" placeholder="fulano@fulano.com">
        </div>

        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="cpf">
                CPF
            </label>
            <input bind:value={cpf} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="cpf" type="number" placeholder="somente numeros....">
            <p class="text-red text-xs italic">Somente número</p>  
        </div>

        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="telefone">
                Telefone
            </label>
            <input bind:value={telefone} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="telefone" type="tel" placeholder="5499999999">
            <p class="text-red text-xs italic">Somente número</p>  
        </div>

        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="account">
                Account
            </label>
            <input bind:value={account} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="account" type="text" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx">
            <p class="text-red text-xs italic">Sua Wallet</p>  
        </div>
    </div>
</div>

    <div class="bg-white border border-solid border-gray-800 border-3 shadow-3xl rounded-lg mx-auto lg:h-full px-8 pt-6 pb-8 mb-4">
        <h2 class='text-center text-2xl font-mono font-bold text-black'>Endereço</h2>
    <div class='grid grid-cols-2'>
        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="cep">
                CEP
            </label>
            <input bind:value={cep} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="cep" type="text" placeholder="99711030">
            <p class="text-red text-xs italic">CEP só números</p>  
            <div class="flex items-center justify-between">
                <button on:click={getCep} class="bg-blue-300 hover:bg-blue-600 text-white font-bold hover:text-black py-2 px-4 rounded-md" type="button">
                  Válida CEP 
                </button>
              </div>
        </div>

        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="estado">
                Estado
            </label>
            <input bind:value={estado} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="estado" type="tel" placeholder="RS">
            <p class="text-red text-xs italic">Estado ex: RS</p>  
        </div>

        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="cidade">
                Cidade
            </label>
            <input bind:value={cidade} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="cidade" type="text" placeholder="Cidade">
            <p class="text-red text-xs italic">Cidade...</p>  
        </div>

        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="bairro">
                Bairro
            </label>
            <input bind:value={bairro} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="bairro" type="tel" placeholder="Bairro">
            <p class="text-red text-xs italic">Bairro...</p>  
        </div>

        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="rua">
                Rua
            </label>
            <input bind:value={rua} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="rua" type="text" placeholder="Rua">
            <p class="text-red text-xs italic">Rua...</p>  
        </div>

        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="num">
                Número
            </label>
            <input bind:value={numero} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="num" type="number" placeholder="000">
            <p class="text-red text-xs italic">Nº</p>  
        </div>
 
    </div>
    <div class="flex items-center justify-between">
      <button on:click={perfil} class="bg-blue-300 hover:bg-blue-600 text-white font-bold hover:text-black py-2 px-4 rounded-md" type="button">
        Cadastrar 
      </button>
    </div>
</div>
</div>
</main>

<pre>
{$user}
{cpf} 
{account}
 {telefone} 
 {account} 
 {estado}
{cidade}
{bairro}
 {rua} 
 {numero} 
 {cep}
 {username} 
 {email}
        
</pre>



<!-- {
    "cpf": "21261049055",
    "account": "0x2FC2A6876f384378882700f3125621fDA6C88b2f",
    "cellphone": "54992436596",
    "address": {
        "state": {
            "state": "RS"
        },
        "city": {
            "city": "Erechim"
        },
        "neighborhood": {
            "neighborhood": "Bela Vista"
        },
        "street": "Carlos Angelo Arpini ",
        "number": "99",
        "cep": "99704032"
    },
    "user": {
        "username": "Fabricio",
        "email": " fabcovalesci@gmail.com"
    }
} -->

