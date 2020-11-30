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

    <div class="max-w-md mx-auto bg-white rounded-xl border border-black border-solid border-2 shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-56 w-full object-cover md:w-48" src={$imoveilAlow.photo} alt="">
          </div>
          <div class="p-8">
            <div class="uppercase text-center tracking-wide text-sm text-indigo-500 font-semibold">{$imoveilAlow.title}</div>
            <p class="block mt-1 text-lg text-center leading-tight font-medium text-black">ETH {$imoveilAlow.amount}</p>
            <p class="mt-2 text-center text-gray-800">{$imoveilAlow.description}</p>
          </div>
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
</main>
<Footer />
