<script>

	import Nav from '../Nav.svelte'
	import Home from '../Home.svelte'
    import { Router, Link, Route, links } from "svelte-routing";
    import { imoveis, indice, imoveilAlow, dataIm, dataClient, dataSale } from '../imoveis.js'
 //   import { ethStore, web3, selectedAccount, connected } from 'svelte-web3';

	import Web3 from '../web3.js'

    const web3 = new Web3('HTTP://127.0.0.1:7545');

    let accounts;

    web3.eth.getAccounts().then(act => {
		accounts = act;
		console.log(accounts);
	});
	

    let abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recebendo",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "valor",
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
		"name": "get",
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
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contrato = new web3.eth.Contract(abi, '0x68Dbf24D9F642a2FDd0a899c3F2988ab97c0c1c1');

	function pagarImovel(){
		let valor = 5.000000000000000000;

       let account = '0x2FC2A6876f384378882700f3125621fDA6C88b2f';

        contrato.methods
		.pagamentoImovel(account, valor)
		.send({ from: account }, (error, tranfer) => {
			console.log("Sucess " + tranfer)
			console.log("Error: " + error)
		})

	}
	
	function ola() {
		console.log("ola")
	}

 
        // function ethEnabled() {
        //     if (window.ethereum !== 'undefined') {
        //         window.ethereum.enable()
        //         // .then(response => response.json())
        //         // .then(data => console.log(data))
        //         return true;
        //     }else{
        //         alert("Falhou")
        //         return false;
        //     }
        // }


</script>

<Nav/>
<main>
    <h2>ok..acabou</h2>

<p>imoveis</p>



<p>cliente</p>


    <button on:click={ola} class='bg-blue-600 text-lg text-white font-medium m-2 p-1 hover:bg-teal-300 hover:text-gray-700  border border-gray-900 inline-block rounded-md' type='button'>Pagar Imovel</button>


<p>venda</p>



</main>

