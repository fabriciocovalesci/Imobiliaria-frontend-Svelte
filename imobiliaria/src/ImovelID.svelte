<script>
    import Nav from "./Nav.svelte";
    import Compra from "./Componets/Compra.svelte";
    import { Router, Link, Route, links } from "svelte-routing";
    import { imoveis, indice, imoveilAlow } from "./imoveis.js";
    import { IdImovel } from './checkout.js'
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

       
    onMount(async () => {
        let res = await fetch(URLIM);
        res = await res.json();
        $imoveilAlow = res;
        // console.log($imoveilAlow);
    });

    let jsonAD = $imoveilAlow.address;

    let jsonAddress = JSON.stringify($imoveilAlow.address);

    console.log(JSON.stringify(jsonAddress));
</script>

<Nav />

<div
    class="min-h-screen flex items-center   justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-1">
    <div
        class="max-w-md w-full  border border-gray-600 border-solid p-2 rounded-md shadow-2xl">
        <div class="md:flex">
            <div class="md:flex-shrink-0">
                <img
                    class="h-56 w-full object-cover md:w-48 rounded-md"
                    src={$imoveilAlow.photo}
                    alt="" />
            </div>
            <div class="p-8">
                <div
                    class="uppercase text-center tracking-wide text-sm text-indigo-500 font-semibold">
                    {$imoveilAlow.title}
                </div>
                <p
                    class="block mt-1 text-lg text-center leading-tight font-medium text-black">
                    ETH
                    {$imoveilAlow.amount}
                </p>
                <p class="mt-2 text-center text-gray-800">
                    {$imoveilAlow.description}
                </p>
            </div>
        </div>
            <Router>
                <div class=" p-5 m-5 bg-left">
                <a
                    href="/compra">
                    <button
                        type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span
                            class="absolute left-0 inset-y-0 flex items-center pl-3" />
                        Comprar
                    </button></a>
                </div>
            </Router>
    </div>
</div>
<Footer />
