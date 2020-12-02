
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
                                placeholder="Address"
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

