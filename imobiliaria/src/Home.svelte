<script>

import Nav from './Nav.svelte'

// var options = {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 40
// };

// var typed = new Typed('#text', options);
// var content = 'Imobiliária Blockchain.';
// var text = document.getElementById('#text');

// var speed = 190;
// var cont = 0;

// function typeWriter () {
//   if(cont < content.length){
//     text.textContent += content.charAt(cont);
//     cont++;
//     setTimeout(typeWriter, speed);
//   }else{
//     text.textContent = '';
//     cont = 0;
//     typeWriter();
//   }
// }

// typeWriter();




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

    <div class="absolute lg:w-auto lg:h-scream p-10 m-20 py-5 bg-white opacity-75 rounded-lg">
        <p id='text' class='font-serif text-black font-bold'></p>
    </div>

</div>
</main>