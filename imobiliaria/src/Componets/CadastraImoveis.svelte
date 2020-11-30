
<script>

    import Nav from '../Nav.svelte' 
    import Footer from './Footer.svelte'
    import Imoveis from '../Imoveis.svelte'

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

    function cadastraImovel(){
        fetch(URLIMOVEL,{
        method: 'POST',
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
            'Accept-Encoding': 'deflate, gzip;q=1.0, *;q=0.5'
            //'Authorization': 'Token ' + $user
        },
        body: JSON.stringify(
            {

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
            }
        )
      })
      .then((response) =>{
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
  <main class="top-10 p-10 m-10 ">

    <div class="bg-white border border-solid border-gray-800 border-3 shadow-3xl rounded-lg mx-auto lg:h-full px-8 pt-10 pb-10 mb-4">
        <h2 class='text-center text-2xl font-mono font-bold text-black'>Dados do Imóvel</h2> 
          
    </div>
    

    <div class="bg-white shadow-2xl border-solid border-gray-800 border-3 rounded-lg px-8 mx-auto lg:w-3/4 pt-6 pb-8 mb-4 flex flex-col">
      
    <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="title">
          Nome Imóvel
        </label>
        <input
          bind:value={title}
          class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker"
          id="title"
          type="text"
          placeholder="Nome para o  imovel" />
      </div>
   
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="description">
          Descrição
        </label>
        <textarea
          bind:value={description}
          class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker"
          id="description"
          type="text"
          placeholder="Descrição do imóvel" />
      </div>

      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="amount">
          Valor do Imóvel
        </label>
        <input
          bind:value={amount}
          class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker"
          id="amount"
          type='number'
          placeholder="Valor do imóvel" />
      </div>
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="typeIm">
          Tipo do Imovel
        </label>
        <input
          bind:value={typeIm}
          class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker"
          id="typeIm"
          type='text'
          placeholder="apartamento, casa ..." />
      </div>

      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="condominium">
          Condominio
        </label>
        <input
          bind:value={condominium}
          class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker"
          id="condominium"
          type='number'
          placeholder="Valor do condominio. Se não tiver = 0" />
      </div>

      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="photo">
          Foto do Imóvel
        </label>
        <input
          bind:value={photo}
          class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker"
          id="photo"
          type='file'
          accept="image/*"
           />
      </div>

      <div class="bg-white border border-solid border-gray-800 border-3 shadow-3xl rounded-lg mx-auto lg:h-full  px-8 pt-6 pb-8 mb-4">
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
            <label class="block text-grey-darker text-sm font-bold mb-2" for="state">
                Estado
            </label>
            <input bind:value={state} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="state" type="tel" placeholder="RS">
            <p class="text-red text-xs italic">Estado ex: RS</p>  
        </div>

        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="city">
                Cidade
            </label>
            <input bind:value={city} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="city" type="text" placeholder="Cidade">
            <p class="text-red text-xs italic">Cidade...</p>  
        </div>

        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="neighborhood">
                Bairro
            </label>
            <input bind:value={neighborhood} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="neighborhood" type="tel" placeholder="Bairro">
            <p class="text-red text-xs italic">Bairro...</p>  
        </div>

        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="street">
                Rua
            </label>
            <input bind:value={street} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="street" type="text" placeholder="Rua">
            <p class="text-red text-xs italic">Rua...</p>  
        </div>

        <div class="mb-6 m-1 p-1">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="number">
                Número
            </label>
            <input bind:value={number} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="number" type="number" placeholder="000">
            <p class="text-red text-xs italic">Nº</p>  
        </div>
 
    </div>
    
    </div>
    <div class="flex items-center justify-between">
        <button on:click={CadastraImovel}  class="bg-blue-300 hover:bg-blue-600 text-white font-bold hover:text-black py-2 px-4 rounded-md" type="button">
          Cadastrar Imóvel
        </button>
      </div>
</main>

<Footer/>