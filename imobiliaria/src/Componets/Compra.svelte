<script>
    import { Router, Link, links } from "svelte-routing";
    import Sucesso from './Sucesso.svelte'
</script>

<main>

    <h1>
        comprar
    </h1>
    <Router>
        <a href="/finalizado"    use:links Sucesso><button class='bg-blue-600 text-lg text-white font-medium m-2 p-1 hover:bg-teal-300 hover:text-gray-700  border border-gray-900 inline-block rounded-md' type='button'>Finalizar</button></a>
    </Router>
</main>