<script>

import Nav from './Nav.svelte'
</script>

<main class='container'>
    <Nav/>
<div class='relative'>
    <picture class='absolute sm:w-screen sm:h-screen md:w-screen md:h-screen lg:w-screen lg:h-screen xl:w-screen xl:h-screen'>
        <img class='sm:flex-shrink-0 mx-auto' src="https://i.picsum.photos/id/864/4912/2760.jpg?hmac=zoHrShB1zRnlOSyNUnFQ8hcaQiZ2vJrrfvnJ3MvEsVg" alt="" srcset="">
    </picture>
    <div class="absolute lg:w-auto lg:h-scream p-10 m-20 py-5 bg-white rounded-lg">
        <h2 class='text-3xl font-medium font-bold text-gray-700 text-center'>Venha nos visitar</h2>
        <h2 class='text-2xl font-medium font-bold text-gray-500 text-justify block'>Comprar</h2>
        <h2 class='text-2xl font-medium font-bold text-gray-500 text-justify block'>Vender</h2>
        <h2 class='text-2xl font-medium font-bold text-gray-500 text-justify block'>Alugar</h2> 
    </div>
</div>
</main>