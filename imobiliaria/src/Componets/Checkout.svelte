<script>
    import Nav from "../Nav.svelte";
    import { Router, Link, Route, links } from "svelte-routing";
    import Footer from "./Footer.svelte";

    import Web3 from "../web3.js";

    import CardImovel from "./CardImovel.svelte";
    import CardClient from "./CardClient.svelte";
    import CardSale from "./CardSale.svelte";

    import {
        imoveis,
        indice,
        imoveilAlow,
        dataIm,
        dataClient,
        dataSale,
    } from "../imoveis.js";
    import { onMount } from "svelte";

    let URLIM = "http://127.0.0.1:8000/api/v1/immobile/" + $indice;

    let URLSALE = "http://localhost:8000/api/v1/saleBuy/";

    let URLCLIENT = "http://localhost:8000/api/v1/profile/1";

    let URLSALEMAN = "http://localhost:8000/api/v1/profile/1";

    const web3 = new Web3("HTTP://127.0.0.1:7545");

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

    let accounts;

    web3.eth.getAccounts().then((act) => {
        accounts = act;
        console.log(accounts);
    });

    let abi = [
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recebendo",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "valor",
                    type: "uint256",
                },
            ],
            name: "pagamentoImovel",
            outputs: [],
            stateMutability: "payable",
            type: "function",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "pagador",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "pgto",
                    type: "uint256",
                },
            ],
            name: "SaldoDevolvido",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "from",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "Transfer",
            type: "event",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            name: "balances",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "cliente",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "get",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "vendedor",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
    ];

    const contrato = new web3.eth.Contract(
        abi,
        "0x68Dbf24D9F642a2FDd0a899c3F2988ab97c0c1c1"
    );

    function pagarImovel() {
        let valor = 5.0;

        let account = "0x2FC2A6876f384378882700f3125621fDA6C88b2f";

        contrato.methods
            .pagamentoImovel(accounts[0], valor)
            .send(
                { from: accounts[1], gas: 1500001, gasPrice: "30000000000" },
                function (error, transaction) {
                    if (error) {
                        console.log("Error " + error);
                    }
                    return transaction;
                }
            );
    }

    function Seuendereco(endereco) {
        if (!endereco) {
            throw "Error ao capturar endereco " + endereco;
        }
        return endereco;
    }

    function ConnectMetaMask() {
        if (window.ethereum !== "undefined") {
            window.ethereum.enable().then((data) => {
                Seuendereco(data);
                console.log(data);
                alert("Sucesso na conexão com MetaMask\nSeu endereço " + data);
            });
            return true;
        } else {
            alert("Falhou a conexão com MetaMask");
            return false;
        }
    }
</script>

<Nav />

<main class="top-10 m-10 p-10">
    <div class="boder border-indigo-900 border-2 ">
        <div class="grid grid-flow-col">
            <div class="bg-indigo-900 m p-3" />
        </div>
        <h1 class="text-3xl text-black text-center">Checkout</h1>

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

        <div class="flex  justify-center">
            <Router>
                <a href="/checkout" use:links Checkout><button
                        class="bg-blue-600 text-lg text-white font-medium m-2 p-1 hover:bg-teal-300 hover:text-gray-700  border border-gray-900 inline-block rounded-md"
                        type="button">Finalizar compra</button></a>
            </Router>

            <button
                class="bg-blue-500 text-white p-2 rounded-md m-2"
                type="button"
                on:click={pagarImovel}>
                Finalizar Compra
            </button>

            <button
                class="bg-blue-500 text-white p-2 rounded-md m-2"
                type="button"
                on:click={ConnectMetaMask}>
                Abrir MetaMask
            </button>
        </div>
    </div>
</main>
<Footer />
