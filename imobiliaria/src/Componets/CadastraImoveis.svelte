
<script>

    import Nav from '../Nav.svelte' 
    import Footer from './Footer.svelte'
    import Imoveis from '../Imoveis.svelte'
    import AlertaError from './AlertaError.svelte'
    import { navigate } from "svelte-routing";
    import { Router, Link, links } from "svelte-routing";


    let URLIMOVEL = "http://localhost:8000/api/v1/immobile/"
    let CEP = 'https://cep.awesomeapi.com.br/json/'


    let title, description, amount , condominium, typeIm, photo, cep, state, city, neighborhood, street, number;

 
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
        state = data.state,
        city = data.city,
        neighborhood = data.district,
        street = data.address_name
        })
        .catch(error => {
        alert("CEP " + cep + " inválido !!")
        console.error('Error:', error)
        });
    }

    // function cadastraImovel(){
    //     fetch(URLIMOVEL,{
    //     method: 'POST',
    //     headers: {
    //         'Accept': "application/json",
    //         "Content-Type": "multipart/form-data;",
    //         'Accept-Encoding': 'deflate, gzip;q=1.0, *;q=0.5'
    //         //'Authorization': 'Token ' + $user
    //     },
    //     body: JSON.stringify(
    //         {

    //         'title': title,
    //         'description': description,
    //         'amount': amount,
    //         'condominium': condominium,
    //         'typeIm': {
    //             'typeIm': typeIm
    //         },
    //         'photo': photo,
    //         'address': {
    //             'state': {
    //                 'state': state
    //             },
    //             'city': {
    //                 'city': city
    //             },
    //             'neighborhood': {
    //                 'neighborhood': neighborhood
    //             },
    //             'street': street,
    //             'number': number,
    //             'cep': cep
    //         }
    //         }
    //     )
    //   })
    //   .then((response) =>{
    //     if(response.status != 200){
    //       console.log("ERROR: sem acesso ao sistema " + response.status );
    //       alert("ERROR: Verifique os dados informados " + response.statusText)
    //     }
    //     else{
    //       alert("Cadastro efetuado com sucesso !!!")
    //       console.log('solicitacao aceita: status code ' + response.status);
    //       navigate("/imoveis", { replace: true });
    //     }
    //   })
    // }


    async function CadastraImovel () {
		const res = await fetch(URLIMOVEL, {
            method: 'POST',
            headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
            'Accept-Encoding': 'deflate, gzip;q=1.0, *;q=0.5'
            },
			body: JSON.stringify({
                'title': title,
                'description': description,
                'amount': amount,
                'condominium': condominium,
                'typeIm': {
                    'typeIm': typeIm
                },
                'photo': photo,
                'address': {
                    'state': {
                        'state': state
                    },
                    'city': {
                        'city': city
                    },
                    'neighborhood': {
                        'neighborhood': neighborhood
                    },
                    'street': street,
                    'number': number,
                    'cep': cep
                }
			})
		})
        .then((response) => {
        if(response.status != 200){
          console.log("ERROR: sem acesso ao sistema " + response.status );
          alert("ERROR: Verifique os dados informados " + response.statusText)
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

<body class="bg-gray-400">
  <hr class="mb-6 border-t mt-3" />
  <div class="container mx-auto">
      <div class="flex justify-center px-6 my-12">
              <div class="w-full lg:w-8/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                  <h3 class="pt-4 text-2xl text-center">Cadastrar Imóvel</h3>
                  <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                      
                    <div class="mb-4 md:mr-2 md:mb-0">
                          <label class="block mb-2 text-sm  text-gray-900" for="imovel">
                              Nome Imóvel
                          </label>
                          <input bind:value={title}
                              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              id="imovel"
                              type="text"
                              placeholder="imovel"
                          />
                      </div>

                      <div class="mb-4 md:mr-2 md:mb-0">
                        <label class="block mb-2 text-sm  text-gray-900" for="description">
                            Descrição
                        </label>
                        <textarea bind:value={description}
                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="description"
                            type="text"
                            placeholder="descrição"
                        />
                      </div>


                      <div class="mb-4 md:flex md:justify-between">

                          <div class="md:ml-2">
                              <label class="block mb-2 text-sm  text-gray-900" for="amount">
                                Valor do Imóvel
                              </label>
                              <input bind:value={amount}
                                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                  id="amount"
                                  type="number"
                                  placeholder="valor ETH"
                              />
                        </div>

                        <div class="md:ml-2">
                          <label class="block mb-2 text-sm  text-gray-900" for="typeIm">
                            Tipo do Imovel
                          </label>
                          <input bind:value={typeIm}
                              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              id="typeIm"
                              type="text"
                              placeholder="apartamento, casa ..."
                          />
                        </div>

                        <div class="md:ml-2">
                              <label class="block mb-2 text-sm  text-gray-900" for="condominium">
                                Condominio
                              </label>
                              <input bind:value={condominium}
                                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                  id="condominium"
                                  type="number"
                                  placeholder="valor condominio"
                              />
                              <p class="text-red text-xs italic">Somente número</p> 
                        </div>
                    </div>

                      <div class="md:ml-2">
                          <label class="block mb-2 text-sm  text-gray-900" for="photo">
                            Foto do Imóvel
                          </label>
                          <input  bind:value={photo}
                              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              id="photo"
                              type="file"
                              accept="image/*"
                          />
                      </div>

                      <div class="mb-4 md:flex md:justify-between">
                          <div class="mb-6 m-1 p-1">
                              <label class="block mb-2 text-sm  text-gray-900" for="cep">
                                  CEP
                              </label>
                              <input bind:value={cep}  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="cep" type="text" placeholder="99711030">
                              <p class="text-red text-xs italic">CEP só números</p>  
                              <div class="flex items-center justify-between">
                              </div>
                              
                              <button on:click={getCep} class="w-full px-1 py-1 mb-1 flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button">
                                Válida CEP 
                              </button>
                          </div>
                      </div>


                      <div class="mb-4 md:flex md:justify-between">

                          <div class="md:ml-2">
                              <label class="block mb-2 text-sm  text-gray-900" for="state">
                                  Estado
                              </label>
                              <input bind:value={state}
                                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                  id="state"
                                  type="text"
                                  placeholder="RS, SC"
                              />
                          </div>

                          <div class="md:ml-2">
                              <label class="block mb-2 text-sm  text-gray-900" for="city">
                                  Cidade
                              </label>
                              <input bind:value={city}
                                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                  id="city"
                                  type="text"
                                  placeholder="cidade"
                              />
                          </div>
                      </div>

                      <div class="mb-4 md:flex md:justify-between">

                          <div class="md:ml-2">
                              <label class="block mb-2 text-sm  text-gray-900" for="neighborhood">
                                  Bairro
                              </label>
                              <input bind:value={neighborhood}
                                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                  id="neighborhood"
                                  type="text"
                                  placeholder="bairro"
                              />
                          </div>
                          
                          <div class="md:ml-2">
                              <label class="block mb-2 text-sm  text-gray-900" for="street">
                                  Rua
                              </label>
                              <input bind:value={street}
                                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                  id="street"
                                  type="text"
                                  placeholder="rua"
                              />
                          </div>
                      </div>

                      <div class="mb-4 md:flex md:justify-between">
                          <div class="md:ml-2">
                              <label class="block mb-2 text-sm  text-gray-900" for="number">
                                  Número
                              </label>
                              <input bind:value={number}
                                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                  id="number"
                                  type="number"
                                  placeholder="numero"
                              />
                          </div>
                      </div>



                      <div class="mb-6 text-center">
                          <button on:click={CadastraImovel}
                              class="w-full px-4 py-2  text-white bg-blue-700 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                              type="button"
                          >
                              Cadastrar imóvel
                          </button>
                      </div>
                      <hr class="mb-6 border-t" />
                  </form>
              </div>
      </div>
  </div>
</body>

<Footer/>