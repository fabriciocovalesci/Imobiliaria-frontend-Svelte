<script>
    import Nav from "./Nav.svelte";
    import Compra from "./Componets/Compra.svelte";
    import { Router, Link, Route, links } from "svelte-routing";
    import { imoveis, indice, imoveilAlow } from "./imoveis.js";
    import Cards from "./Cards.svelte";
    import { onMount } from "svelte";
    import Footer from "./Componets/Footer.svelte";

    let URLIM = "http://127.0.0.1:8000/api/v1/immobile/" + $indice;

    let imovelData;
    const Imovelid = async () => {
        let res = await fetch(URLIM, {
            method: "GET",
        });
        //navigate(`/imovelID/${imovelData.id}`, { replace: true })
    };

    let Resp = [];

    onMount(async () => {
        let res = await fetch(URLIM);
        res = await res.json();
        $imoveilAlow = res;
        Resp = res;
        // console.log($imoveilAlow);
    });

    let jsonAD = $imoveilAlow.address;

    let jsonAddress = JSON.stringify($imoveilAlow.address);

    console.log(JSON.stringify(jsonAddress));
</script>

<Nav />
<main class="top-10 m-10 p-10">
    <div class="w-full lg:max-w-full lg:flex">
        <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"/>
            <img
            class="w-full"
            src={$imoveilAlow.photo}
            alt=""
            srcset="" />
        <div
            class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
                <div class="fill-current text-gray-500 w-3 h-3 mr-2">
                   
                </div>
                <div class="text-gray-900 font-bold text-center text-xl mb-2">
                    {$imoveilAlow.title}
                </div>
                <p class="text-gray-700 text-base">
                    {$imoveilAlow.description}
                </p>
                <p class="text-black text-base font-bold">ETH {$imoveilAlow.amount}</p>
            </div>
            <div class="flex items-center">
                <Router>
                    <div class=" p-5 m-5 bg-left">
                        <a href="/compra" use:links Perfil><button
                                class="bg-blue-600 text-lg text-white font-medium m-2 p-1 hover:bg-teal-300 hover:text-gray-700  border border-gray-900 inline-block rounded-md"
                                type="button">Comprar</button></a>
                    </div>
                </Router>
            </div>
        </div>
    </div>
</main>
<Footer />
