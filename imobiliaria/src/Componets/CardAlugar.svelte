<script>

    export let dataImovelCard = {};
</script>

<div class="grid xl:grid-flow-col lg:grid-flow-col mx-auto  m-2 p-1">
    <div class="">
        <h2 class='block mt-1 text-lg text-center leading-tight font-medium text-black'>{dataImovelCard.title}</h2>
        <p class="text-justify">{dataImovelCard.description}</p>
        <div class="flex">
            <p class="mt-2 text-center text-purple-700">
               Valor ETH
                {dataImovelCard.amount}
            </p>
        </div>
    </div>
</div>
