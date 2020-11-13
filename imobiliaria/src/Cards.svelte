<script>

    import { Router, Link, links } from "svelte-routing";
    import { user } from './auth.js'

    let URLimoveis = 'https://apimobiliaria.herokuapp.com/api/v1/immobile/'

   export let description, title, photo;

</script>

    <div class="max-w-sm rounded border border-black border-solid border-2 overflow-hidden shadow-lg">
        <img class="w-full" src={photo} alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{title}</div>
            <p class="text-gray-700 text-base">
                {description}
            </div>
        <div class="px-6 pt-4 pb-2">
            <Router>
                <!-- <a href="/imovelID" class="inline-block text-black font-bold no-underline hover:text-gray-800 hover:text-underline py-2 px-4" use:links ImovelID>Home</a> -->
                <a href="/imovelID"    use:links ImovelID><button class='bg-blue-600 text-lg text-white font-medium m-2 p-1 hover:bg-teal-300 hover:text-gray-700  border border-gray-900 inline-block rounded-md' type='button'>Confira</button></a>
            </Router>
        </div>
        
    </div>
