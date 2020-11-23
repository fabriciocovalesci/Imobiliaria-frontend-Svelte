

<script>
    import Nav from './Nav.svelte'
    import Compra from './Componets/Compra.svelte'
    import { Router, Link, Route, links } from "svelte-routing";
    import { imoveis, indice, imoveilAlow } from './imoveis.js'
    import Cards from "./Cards.svelte";
    import { onMount } from "svelte";
 
    let URLIM = "http://127.0.0.1:8000/api/v1/immobile/"+$indice

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
        $imoveilAlow = res
        Resp = res
       // console.log($imoveilAlow);
        })

        let jsonAD = $imoveilAlow.address

    let jsonAddress = JSON.stringify($imoveilAlow.address)
 
        console.log(JSON.stringify(jsonAddress));
     

</script>

<Nav/>
<main class='top-10 m-10 p-10'>
<div class='grid grid-flow-col'>
    <div>
        <div class='justify-center m-0 p-1 rounded-md border border-white'>
            <img class='rounded-md' src={($imoveilAlow.photo)} alt="" srcset="">
        </div>
    </div>
    <div class='justify-center m-0 p-1'>
        <div class='m-3 p-3'>
            <h2 class='font-hairline font-bold text-orange-800 text-center p-2'>{($imoveilAlow.title)}</h2>
            <p class='font-hairline text-black text-justify p-2'>{($imoveilAlow.description)}</p>
            <p class='font-hairline text-black text-justify p-2'>ETH {($imoveilAlow.amount)}</p>
        </div>
        <div class='flex flex-row'>

        <p></p>
        <div  class='ml-6 p-1 '>
            <h3>Endereço</h3>
            <ul class="">
                <!-- <li>{JSON.stringify($imoveilAlow.address['id'])}</li>  -->
                <!-- <li>{jsonResp.address.city.city}</li>
                <li>{jsonResp.address.neighborhood.neighborhood}</li>
                <li>{jsonResp.address.street.street}</li> -->
            </ul>
        </div>
        <Router>
            <div class=' p-5 m-5 bg-left'>
            <!-- <a href="/imovelID" class="inline-block text-black font-bold no-underline hover:text-gray-800 hover:text-underline py-2 px-4" use:links ImovelID>Home</a> -->
            <a href="/compra"    use:links Perfil><button class='bg-blue-600 text-lg text-white font-medium m-2 p-1 hover:bg-teal-300 hover:text-gray-700  border border-gray-900 inline-block rounded-md' type='button'>Comprar</button></a>
        </div>
        </Router>
    </div>
    </div>
</div>

</main>