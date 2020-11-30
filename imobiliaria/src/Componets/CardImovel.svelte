<script>

    export let data = {};
</script>

<div class="grid xl:grid-flow-col lg:grid-flow-col mx-auto  m-2 p-1">
    <div class="">
        <h2 class='block mt-1 text-lg text-center leading-tight font-medium text-black'>{data.title}</h2>
        <p class="text-justify">{data.description}</p>
        <div class="flex">
            <p class="mt-2 text-center text-purple-700">
               Valor ETH
                {data.amount}
            </p>
        </div>
    </div>
</div>
