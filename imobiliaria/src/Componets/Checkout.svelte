
<script>
    import Nav from "../Nav.svelte";
    import { Router, Link, Route, links } from "svelte-routing";
    import Footer from './Footer.svelte'
    import Web3 from "../web3.js";

    const web3 = new Web3("HTTP://127.0.0.1:7545");

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
        let valor = 5.0000000000;

        let account = "0x2FC2A6876f384378882700f3125621fDA6C88b2f";

        contrato.methods
            .pagamentoImovel(accounts[0], valor)
            .send(
                { from: accounts[1], gas: 1500001, gasPrice: "30000000000" },
                function (error, transaction) {
                    if (error) {
                        console.log("Error " + error);
                    }
                    return transaction
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

    function handleClick() {
        alert(accounts);
    }
</script>

<Nav />
<main>
    <button on:click={handleClick}> Click me </button>

    <button
        class="bg-blue-500 text-white p-2 rounded-md m-2"
        type="button"
        on:click={pagarImovel}>
        Finalizar
    </button>

    <button
        class="bg-blue-500 text-white p-2 rounded-md m-2"
        type="button"
        on:click={ConnectMetaMask}>
        Abrir MetaMask
    </button>
</main>
<Footer/>