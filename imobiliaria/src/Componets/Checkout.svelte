<script>
    import Nav from "../Nav.svelte";
    import { Router, Link, Route, links } from "svelte-routing";
    import Footer from "./Footer.svelte";

    import Web3 from "../web3.js";

    import CardImovel from "./CardImovel.svelte";
    import CardClient from "./CardClient.svelte";
    import CardSale from "./CardSale.svelte";
    import { dataImovel, IdImovel } from '../checkout'
  

    import {
        imoveis,
        indice,
        imoveilAlow,
        dataIm,
        dataClient,
        newAddress,
        dataSale,
    } from "../imoveis.js";

    import { onMount } from "svelte";

    
    let URLIM = "http://127.0.0.1:8000/api/v1/immobile/1"

    let URLSALE = "http://localhost:8000/api/v1/saleBuy/";

    let URLCLIENT = "http://localhost:8000/api/v1/profile/4";

    let URLSALEMAN = "http://localhost:8000/api/v1/profile/1";

    const web3 = new Web3("HTTP://127.0.0.1:7545");

    
    const dadosImovelFor = {
        title : '',
        description: '',
        amount : ''
    }
    
    let dataDoImovel = []
    
    onMount(async () => {
        let response = await fetch(URLIM);
        const jsonI = await response.json();
        $dataIm = jsonI;
        //console.log(dataDoImovel.amount);
    });


    onMount(async () => {
        let response = await fetch(URLSALEMAN);
        response = await response.json();
        $dataSale = response;
        // console.log($imoveilAlow);
    });


    onMount(async () => {
        let resp = await fetch(URLCLIENT);
        resp = await resp.json();
        $dataClient = resp;
        // console.log($imoveilAlow);
    });

    let accounts;

    web3.eth.getAccounts().then((act) => {       
        accounts = act;
        console.log(accounts);
    })

    let abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_recebendo",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_valor",
				"type": "uint256"
			}
		],
		"name": "pagamentoImovel",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "pagador",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pgto",
				"type": "uint256"
			}
		],
		"name": "SaldoDevolvido",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cliente",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAddressVendedor",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAmountVendedor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "vendedor",
		"outputs": [
			{
				"internalType": "address",
				"name": "vendedorAccount",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

    let valorcasa = $dataSale.amount;

    console.log('valor ' + $dataSale.amount);

    // chama contrato por meio do web3
    const contrato = new web3.eth.Contract(
        abi,
        "0x4393Cc5076A2dd67E3242A9394bC25166C896ddd"
    );
   

    function pagarImovel() {
        let valorImovel = 5000000000000000000;
        let account = "0x2FC2A6876f384378882700f3125621fDA6C88b2f";
        let valorConta;

        if(!accounts){
            alert("Sem conexão com blockchain")
        }

        contrato.methods
            .pagamentoImovel(accounts[2], valorImovel)
            .send({
                 from: accounts[0], 
                 value : valorImovel,
                  gas: 1500001, gasPrice: "30000000000" },
                function (error, transaction) {
                    if (error) {
                        console.log("Error " + error);
                    }
                    console.log(transaction);
                    alert('Transação efetuada com sucesso !!\nHash da transação ' + transaction)

                    web3.eth.getBalance(accounts[2], function(error, result) {
                        console.log('2 - ' + result);
                    });

                    web3.eth.getBalance(accounts[0], function(error, result) {
                        console.log('0 - '  + result );
                    });
                    return transaction;
                }
            )
    }



    function ConnectMetaMask() {
        if (window.ethereum !== "undefined") {
            window.ethereum.enable().then((data) => {
                $newAddress = data;
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
                <CardImovel dataImovelCard={$dataIm} />
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
                <CardClient DataClient={$dataClient} Address={$newAddress} />
            </div>
        </div>

        <div class="flex  justify-center m-1">

            <button
                class=" py-2 px-4 border m-2 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="button"
                on:click={pagarImovel}>
                Finalizar Compra
            </button>

            <button
                class=" py-2 px-4 border m-2 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="button"
                on:click={ConnectMetaMask}>
                Abrir MetaMask
            </button>
        </div>
    </div>
</main>
<Footer />
