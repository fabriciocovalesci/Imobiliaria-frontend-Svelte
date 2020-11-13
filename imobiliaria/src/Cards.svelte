<script>
    import Nav from './Nav.svelte'
    import Perfil from './Perfil.svelte'
    import CardsL from './Componets/CardsL.svelte'
    import { Router, Link, links } from "svelte-routing";


</script>

    <div class="max-w-sm rounded border border-black border-solid border-2 overflow-hidden shadow-lg">
        <img class="w-full" src="https://i.picsum.photos/id/998/6016/4016.jpg?hmac=Y8UPKinJhmRWK9I1x0CDmHdAF0LpucNG9XhKmJ5qbME" alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley      </p>
            </div>
        <div class="px-6 pt-4 pb-2">
            <p class='text-lg text-left p-2 inline-block'>R$ 500,00</p>
            <Router>
                <!-- <a href="/imovelID" class="inline-block text-black font-bold no-underline hover:text-gray-800 hover:text-underline py-2 px-4" use:links ImovelID>Home</a> -->
                <a href="/imovelID"    use:links ImovelID><button class='bg-blue-600 text-lg text-white font-medium m-2 p-1 hover:bg-teal-300 hover:text-gray-700  border border-gray-900 inline-block rounded-md' type='button'>Confira</button></a>
            </Router>
        </div>
    </div>
