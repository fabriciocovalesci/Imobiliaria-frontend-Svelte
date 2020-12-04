<script>
    import CardImovel from "./CardImovel.svelte";
    import CardClient from "./CardClient.svelte";
    import CardSale from "./CardSale.svelte";
    import Checkout from "./Checkout.svelte";
    import Footer from "./Footer.svelte";

    import Nav from "../Nav.svelte";
    import { Router, Link, Route, links } from "svelte-routing";
    import { IdImovel } from '../checkout.js'
    import {
        imoveis,
        indice,
        imoveilAlow,
        dataIm,
        dataClient,
        dataSale,
    } from "../imoveis.js";
    import { onMount } from "svelte";

    let URLIM = "http://127.0.0.1:8000/api/v1/immobile/"+$IdImovel;

    let URLSALE = "http://localhost:8000/api/v1/saleBuy/";

    let URLCLIENT = "http://localhost:8000/api/v1/profile/1";

    let URLSALEMAN = "http://localhost:8000/api/v1/profile/1";

    onMount(async () => {
        let res = await fetch(URLIM);
        res = await res.json();
        $dataIm = res;
        // console.log($imoveilAlow);
    });

    onMount(async () => {
        let resp = await fetch(URLCLIENT);
        resp = await resp.json();
        $dataClient = resp;
        // console.log($imoveilAlow);
    });

    onMount(async () => {
        let response = await fetch(URLSALEMAN);
        response = await response.json();
        $dataSale = response;
        // console.log($imoveilAlow);
    });
</script>


{$indice}
<Nav />
<main class="top-10 m-10 p-10">
    <div class="boder border-indigo-600 border-2 ">
        <div class="grid grid-flow-col">
            <div class="bg-indigo-600 m p-3" />
        </div>
        <h1 class="text-3xl text-black text-center">
            Revise os dados da Compra
        </h1>

        <div class="flex flex-wrap overflow-hidden lg:-mx-px xl:-mx-2">
            <div
                class="w-full overflow-hidden p-2 m-2 p-2 m-2 mx-auto xl:my-2 xl:px-2 xl:w-1/3">
                <h2
                    class="uppercase text-center tracking-wide text-lg text-indigo-800 font-semibold">
                    Imóvel
                </h2>
                <CardImovel data={$dataIm} />
                {$indice}
            </div>

            <div
                class="w-full overflow-hidden p-2 m-2 p-2 m-2 mx-auto xl:my-2 xl:px-2 xl:w-1/3">
                <h2
                    class="uppercase text-center tracking-wide text-lg text-indigo-800 font-semibold">
                    Vendedor
                </h2>
                <CardSale salesman={$dataSale} />
            </div>

            <div
                class="w-full overflow-hidden p-2 m-2 p-2 m-2 mx-auto xl:my-2 xl:px-2 xl:w-1/3">
                <h2
                    class="uppercase text-center tracking-wide text-lg text-indigo-800 font-semibold">
                    Cliente
                </h2>
                <CardClient DataClient={$dataClient} />
            </div>
        </div>

        <div class='flex  justify-center m-1'>
            <Router>
                <a href="/checkout" use:links Checkout><button
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        type="button">Finalizar compra</button></a>
            </Router>
        </div>
    </div>
</main>
<Footer />
