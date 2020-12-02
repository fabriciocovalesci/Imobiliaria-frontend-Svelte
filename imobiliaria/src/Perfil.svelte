
<script>
    import { Router, Link, links } from "svelte-routing";
    import { navigate } from "svelte-routing";
    import TestandoTail from './TestandoTail.svelte'
    import Nav from './Nav.svelte'
    import Imoveis from './Imoveis.svelte'
    import Login from './Login.svelte'
    import { validate } from 'gerador-validador-cpf'
    import {user } from './auth.js';
    import Footer from './Componets/Footer.svelte'


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

<!-- component -->
<body class="bg-gray-400">
    <!-- Container -->
    <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
            <!-- Row -->
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <!-- Col -->
                <div
                    class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                    style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"
                ></div>
                <!-- Col -->
                <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <h3 class="pt-4 text-2xl text-center">Perfil</h3>
                    <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                        <div class="mb-4 md:mr-2 md:mb-0">
                            <label class="block mb-2 text-sm  text-gray-700" for="usuario">
                                Usuário
                            </label>
                            <input bind:value={username}
                                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="usuario"
                                type="text"
                                placeholder="Usuário"
                            />
                        </div>

                        <div class="mb-4 md:flex md:justify-between">

                            <div class="md:ml-2">
                                <label class="block mb-2 text-sm  text-gray-700" for="cpf">
                                    CPF
                                </label>
                                <input bind:value={cpf}
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="cpf"
                                    type="number"
                                    placeholder="CPF"
                                />
                                <p class="text-red text-xs italic">Somente número</p> 
                            </div>
                            <div class="md:ml-2">
                                <label class="block mb-2 text-sm  text-gray-700" for="telefone">
                                    Telefone
                                </label>
                                <input bind:value={telefone}
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="telefone"
                                    type="tel"
                                    placeholder="telefone"
                                />
                                <p class="text-red text-xs italic">Somente número</p> 
                            </div>
                        </div>

                        <div class="md:ml-2">
                            <label class="block mb-2 text-sm  text-gray-700" for="account">
                                Account
                            </label>
                            <input bind:value={account}
                                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="account"
                                type="text"
                                placeholder="Address wallet"
                            />
                        </div>

                        <div class="mb-4">
                            <label class="block mb-2 text-sm  text-gray-700" for="email">
                                Email
                            </label>
                            <input bind:value={email}
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>


                        <div class="mb-4 md:flex md:justify-between">
                            <div class="mb-6 m-1 p-1">
                                <label class="block mb-2 text-sm  text-gray-700" for="cep">
                                    CEP
                                </label>
                                <input bind:value={cep} class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="cep" type="text" placeholder="99711030">
                                <p class="text-red text-xs italic">CEP só números</p>  
                                <div class="flex items-center justify-between">
                                </div>
                                
                                <button on:click={getCep} class="w-full px-3 py-2 mb-3 flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button">
                                  Válida CEP 
                                </button>
                            </div>
                        </div>


                        <div class="mb-4 md:flex md:justify-between">

                            <div class="md:ml-2">
                                <label class="block mb-2 text-sm  text-gray-700" for="estado">
                                    Estado
                                </label>
                                <input bind:value={estado}
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="estado"
                                    type="text"
                                    placeholder="RS, SC"
                                />
                            </div>

                            <div class="md:ml-2">
                                <label class="block mb-2 text-sm  text-gray-700" for="cidade">
                                    Cidade
                                </label>
                                <input bind:value={cidade}
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="cidade"
                                    type="text"
                                    placeholder="cidade"
                                />
                            </div>
                        </div>

                        <div class="mb-4 md:flex md:justify-between">

                            <div class="md:ml-2">
                                <label class="block mb-2 text-sm  text-gray-700" for="bairro">
                                    Bairro
                                </label>
                                <input bind:value={bairro}
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="bairro"
                                    type="text"
                                    placeholder="bairro"
                                />
                            </div>
                            
                            <div class="md:ml-2">
                                <label class="block mb-2 text-sm  text-gray-700" for="rua">
                                    Rua
                                </label>
                                <input bind:value={rua}
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="rua"
                                    type="text"
                                    placeholder="rua"
                                />
                            </div>
                        </div>

                        <div class="mb-4 md:flex md:justify-between">
                            <div class="md:ml-2">
                                <label class="block mb-2 text-sm  text-gray-700" for="numero">
                                    Número
                                </label>
                                <input bind:value={numero}
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="numero"
                                    type="number"
                                    placeholder="numero"
                                />
                            </div>
                        </div>



                        <div class="mb-6 text-center">
                            <button on:click={perfil}
                                class="w-full px-4 py-2  text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Registrar Conta
                            </button>
                        </div>
                        <hr class="mb-6 border-t" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
<Footer/>


<!--
    DADOS DA API
    {

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


<!-- component -->
<div class="w-screen h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full mx-auto">
      <!-- Title -->
      <h1 class="text-3xl text-center font-bold mb-6">Alert Component</h1>
      <!-- End Title -->
  
      <!-- Alert Success -->
      <div
           class="bg-green-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4"
           >
        <svg
             viewBox="0 0 24 24"
             class="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
             >
          <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                ></path>
        </svg>
        <span class="text-green-800"> Your account has been saved. </span>
      </div>
      <!-- End Alert Success -->
  
      <!-- Alert Error -->
      <div
           class="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4"
           >
        <svg
             viewBox="0 0 24 24"
             class="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
             >
          <path
                fill="currentColor"
                d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                ></path>
        </svg>
        <span class="text-red-800"> Your email address is invalid. </span>
      </div>
      <!-- End Alert Error -->
  
      <!-- Alert Warning -->
      <div
           class="bg-orange-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4"
           >
        <svg
             viewBox="0 0 24 24"
             class="text-yellow-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
             >
          <path
                fill="currentColor"
                d="M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"
                ></path>
        </svg>
        <span class="text-yellow-800">
          You are currently on the Free plan.
        </span>
      </div>
      <!-- End Alert Warning -->
  
      <!-- Alert Info -->
      <div
           class="bg-blue-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4"
           >
        <svg
             viewBox="0 0 24 24"
             class="text-blue-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
             >
          <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
                ></path>
        </svg>
        <span class="text-blue-800"> We've updated a few things. </span>
      </div>
      <!-- End Alert Info -->
    </div>
  </div>
