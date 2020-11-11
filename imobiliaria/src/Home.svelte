<script>

import Nav from './Nav.svelte'
</script>

<Nav/>
<main class='container'>
<div class='relative'>
    <picture class='absolute sm:w-screen sm:h-screen md:w-screen md:h-screen lg:w-screen lg:h-screen xl:w-screen xl:h-screen'>
        <img class='sm:flex-shrink-0 mx-auto' src="https://i.picsum.photos/id/864/4912/2760.jpg?hmac=zoHrShB1zRnlOSyNUnFQ8hcaQiZ2vJrrfvnJ3MvEsVg" alt="" srcset="">
    </picture>
    <div class="absolute lg:w-auto lg:h-scream p-10 m-20 py-5 bg-white opacity-75 rounded-lg">
        <h2 class='text-3xl font-medium font-bold text-gray-900 text-center'>Venha nos visitar</h2>
        <h3 class='text-2xl font-medium font-bold text-gray-700 font-thin text-justify block'>Comprar</h3>
        <h3 class='text-2xl font-medium font-bold text-gray-700 font-thin text-justify block'>Vender</h3>
        <h3 class='text-2xl font-medium font-bold text-gray-700 font-thin text-justify block'>Alugar</h3> 
    </div>
</div>
</main>