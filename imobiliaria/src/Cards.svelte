<script>
    import { Router, Link, links } from "svelte-routing";
    import { navigate } from "svelte-routing";
    import { user } from "./auth.js";
    import ImmovelID from "./ImovelID.svelte";
    import { imoveis, indice } from "./imoveis";

    //export let photo, description, title
    export let imovelData = {};

    const imovelIDC = () => {
        $indice = 0;
        $indice = imovelData.id;
    };
</script>

<div
    class="min-h-screen flex items-center  justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-1">
    <div
        class="max-w-md w-full space-y-8 border border-gray-600 border-solid p-2 rounded-md shadow-2xl">
        <div>
            <img class="lg:w-screen rounded-md" src={imovelData.photo} alt="" />
        </div>
        <div class="mt-8 space-y-6">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">
                    {imovelData.title}
                </div>
                <p class="text-gray-700 text-base lg:container">
                    {imovelData.description}
                </p>
            </div>
        </div>

        <div class="flex items-center justify-between">
            <div class="text-sm" />
        </div>

        <div>
            <Router>
                <a
                    href="/imovelID/{imovelData.id}"
                    on:click={imovelIDC}
                    use:links
                    ImmovelID>
                    <button
                        type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span
                            class="absolute left-0 inset-y-0 flex items-center pl-3" />
                        Confira
                    </button></a>
            </Router>
        </div>
    </div>
</div>
