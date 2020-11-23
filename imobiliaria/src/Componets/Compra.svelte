<script>
    import CardDesc from './CardDesc.svelte'
    import CardClient from './CardClient.svelte'
    import CardSale from './CardSale.svelte'
    import FinalSale from './FinalSale.svelte'


    import Nav from '../Nav.svelte'
    import { Router, Link, Route, links } from "svelte-routing";
    import { imoveis, indice, imoveilAlow, dataIm, dataClient, dataSale } from '../imoveis.js'
    import { onMount } from "svelte";
 
    let URLIM = "http://127.0.0.1:8000/api/v1/immobile/"+$indice

    let URLSALE = 'http://localhost:8000/api/v1/saleBuy/'

    let URLCLIENT = 'http://localhost:8000/api/v1/profile/1'

    let URLSALEMAN = 'http://localhost:8000/api/v1/profile/2'

    let imovelData
    const Imovelid = async () => {
        let res = await fetch(URLIM, {
            method: 'GET'
        })
        //navigate(`/imovelID/${imovelData.id}`, { replace: true })
    }

    let Resp = []

    onMount( async () => {
        let res = await fetch(URLIM);
        res = await res.json()
        $dataIm = res
       // console.log($imoveilAlow);
        })

    onMount( async () => {
        let resp = await fetch(URLCLIENT);
        resp = await resp.json()
        $dataClient = resp
       // console.log($imoveilAlow);
        })

    onMount( async () => {
        let response = await fetch(URLSALEMAN);
        response = await response.json()
        $dataSale = response
       // console.log($imoveilAlow);
        })


  
</script>

<Nav/>
<main class='top-10 m-10 p-10'>


    <div class='grid grid-flow-col'>
        <div class='bg-gray-400 m p-3'>
        </div>
    </div>
    <h1 class='text-3xl text-black text-center'>
        Revise dados da Compra
    </h1>

    <div class="flex flex-wrap overflow-hidden lg:-mx-px xl:-mx-2">
        <div
        class="w-full overflow-hidden p-2 m-2 p-2 m-2 mx-auto xl:my-2 xl:px-2 xl:w-1/3">
        <h2>Imóvel</h2>
        <!-- {#each $dataIm as dados} -->
          <CardDesc 
          data={$dataIm}/>
          <!-- {/each} -->
          {$indice}
        </div>
        
        <div
        class="w-full overflow-hidden p-2 m-2 p-2 m-2 mx-auto xl:my-2 xl:px-2 xl:w-1/3">
        <h2>Vendedor</h2>
          <CardSale 
          salesman={$dataSale}/>
        </div> 

        <div
        class="w-full overflow-hidden p-2 m-2 p-2 m-2 mx-auto xl:my-2 xl:px-2 xl:w-1/3">
        <h2>Cliente</h2>
          <CardClient 
          DataClient={$dataClient}/>
        </div>
      
     </div>


    <Router>
        <a href="/final" use:links FinalSale><button class='bg-blue-600 text-lg text-white font-medium m-2 p-1 hover:bg-teal-300 hover:text-gray-700  border border-gray-900 inline-block rounded-md' type='button'>Finalizar compra</button></a>
    </Router>


</main>

