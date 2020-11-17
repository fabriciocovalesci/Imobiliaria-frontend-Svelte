

<script>
    import Nav from './Nav.svelte'
    import Compra from './Componets/Compra.svelte'
    import { Router, Link, Route, links } from "svelte-routing";
    import {imoveis} from  './imoveis'

</script>


<Nav/>
<main class='top-10 m-10 p-10'>
<div class='grid grid-flow-col'>
    <div>
        <div class='justify-center m-0 p-1 rounded-md border border-white'>
            <img class='rounded-md' src="https://i.picsum.photos/id/998/6016/4016.jpg?hmac=Y8UPKinJhmRWK9I1x0CDmHdAF0LpucNG9XhKmJ5qbME" alt="" srcset="">
        </div>
    </div>
    <div class='justify-center m-0 p-1'>
        <div class='m-3 p-3'>
            <h2 class='font-hairline font-bold text-orange-800 text-center p-2'>CASA EM ALVENARIA DE DOIS PISOS</h2>
            <p class='font-hairline text-black text-justify p-2'>Casa de alvenaria, composta de parte superior: 01 suíte com closet, 02 dormitórios, banho social, sala com lareira, varanda e escritório com recepção e sala. Parte inferior: sala com 03 ambientes e lareira, hall de entrada e lavabo, cozinha, garagem para 04 carros e salão de festas com churrasqueira, área de serviço externa, com depósito e banheiro</p>
        </div>
        <div class='flex flex-row'>

        
        <div  class='ml-6 p-1 '>
            <h3>Endereço</h3>
            <ul class="">
                <li>Rua Virgínio Mendes Nº 90</li>
                <li>Bairro Casa Caiada</li>
                <li>Erechim</li>
                <li>RS</li>
            </ul>
        </div>
        {JSON.stringify($imoveis)}
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