<script>

    import Nav from '../Nav.svelte'
    import { Router, Link, Route, links } from "svelte-routing";
    import { imoveis, indice, imoveilAlow, dataIm, dataClient, dataSale } from '../imoveis.js'

</script>

<Nav/>
<main>
    <h2>ok..acabou</h2>

<p>imoveis</p>
{JSON.stringify($imoveilAlow)}


<p>cliente</p>
{JSON.stringify($dataClient)}


<p>venda</p>
{JSON.stringify($dataSale)}


</main>

