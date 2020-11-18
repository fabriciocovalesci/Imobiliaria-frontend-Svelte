<script>

    import { Router, Link, links } from "svelte-routing";
    import { navigate } from "svelte-routing";
    import { user } from './auth.js'
    import  ImmovelID  from './ImovelID.svelte'
    import {imoveis, indice} from  './imoveis'
    
    //export let photo, description, title
    export let imovelData = {};

        const imovelIDC = () => {
            $indice=0;
            $indice=imovelData.id
        }
 
</script>

    <div class="max-w-sm rounded border border-black border-solid border-2 overflow-hidden shadow-lg">
        <img class="w-full" src={imovelData.photo} alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{imovelData.title}</div>
            <p class="text-gray-700 text-base">
                {imovelData.description}
        </div>
        <div class="px-6 pt-4 pb-2">
           <Router>
                <a href='/imovelID/{imovelData.id}' on:click={imovelIDC} use:links ImmovelID><button class='bg-blue-600 text-lg text-white font-medium m-2 p-1 hover:bg-teal-300 hover:text-gray-700  border border-gray-900 inline-block rounded-md' type='button'>Confira</button></a>
            </Router> 
        </div>
        
    </div>
