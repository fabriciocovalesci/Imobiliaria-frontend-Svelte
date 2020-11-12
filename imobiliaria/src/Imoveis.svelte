
<script>
    import Nav from './Nav.svelte'
    import ImovelID from './ImovelID.svelte'
    import { Router, Link, Route, links } from "svelte-routing";


</script>

<Nav/>
<main class='top-10 m-10 p-10'>
<div class='container mx-auto'>
    <div class='grid grid-cols-1 p-3 lg:grid-cols-3'>
        <div class="flex-grow bg-white shadow-2xl rounded-2xl border m-1 border-gray-300 p-8">
            <h2 class='text-lg text-center'>Casa de esquina</h2>
            <div class='justify-center m-0 p-1'>
                <img class='rounded-md' src="https://i.picsum.photos/id/998/6016/4016.jpg?hmac=Y8UPKinJhmRWK9I1x0CDmHdAF0LpucNG9XhKmJ5qbME" alt="" srcset="">
            </div>
            <p class='text-lg text-justify '>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div class='container relative'>
            <p class='text-lg text-left p-2 inline-block'>R$ 500,00</p>
            <Router>
                <!-- <a href="/imovelID" class="inline-block text-black font-bold no-underline hover:text-gray-800 hover:text-underline py-2 px-4" use:links ImovelID>Home</a> -->
                <a href="/imovelID"    use:links ImovelID><button class='bg-blue-600 text-lg text-white font-medium m-2 p-1 hover:bg-teal-300 hover:text-gray-700  border border-gray-900 inline-block rounded-md' type='button'>Confira</button></a>
            </Router>
            </div>
        </div>

        <div class="flex-grow bg-white shadow-2xl rounded-2xl border m-1 border-gray-300 p-8">
            <h2 class='text-lg text-center'>Casa de esquina</h2>
            <div class='justify-center m-0 p-1'>
                <img class='rounded-md' src="https://i.picsum.photos/id/998/6016/4016.jpg?hmac=Y8UPKinJhmRWK9I1x0CDmHdAF0LpucNG9XhKmJ5qbME" alt="" srcset="">
            </div>
            <p class='text-lg text-justify '>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div class='container relative'>
            <p class='text-lg text-left p-2 inline-block'>R$ 500,00</p>
            <Router>
                <!-- <a href="/imovelID" class="inline-block text-black font-bold no-underline hover:text-gray-800 hover:text-underline py-2 px-4" use:links ImovelID>Home</a> -->
                <a href="/imovelID"    use:links ImovelID><button class='bg-blue-600 text-lg text-white font-medium m-2 p-1 hover:bg-teal-300 hover:text-gray-700  border border-gray-900 inline-block rounded-md' type='button'>Confira</button></a>
            </Router>
            </div>
        </div> 
        

        <div class="flex-grow bg-white shadow-2xl rounded-2xl border m-1 border-gray-300 p-8">
            <h2 class='text-lg text-center'>Casa de esquina</h2>
            <div class='justify-center m-0 p-1'>
                <img class='rounded-md' src="https://i.picsum.photos/id/998/6016/4016.jpg?hmac=Y8UPKinJhmRWK9I1x0CDmHdAF0LpucNG9XhKmJ5qbME" alt="" srcset="">
            </div>
            <p class='text-lg text-justify '>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div class='container relative'>
            <p class='text-lg text-left p-2 inline-block'>R$ 500,00</p>
            <Router>
                <a href="/imovelID"    use:links ImovelID><button class='bg-blue-600 text-lg text-white font-medium m-2 p-1 hover:bg-teal-300 hover:text-gray-700  border border-gray-900 inline-block rounded-md' type='button'>Confira</button></a>
            </Router>            
        </div>
        </div>
    </div>
</div>
</main>