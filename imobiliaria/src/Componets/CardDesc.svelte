<script>

    export let data = {};
</script>

<div class="grid xl:grid-flow-col lg:grid-flow-col mx-auto  m-2 p-1">
    <div class="">
        <h2>{data.title}</h2>
        <p class="text-justify">{data.description}</p>
        <div class="flex">
            <p class="text-gray-900 text-2xl text-green-800">
                ETH
                {data.amount}
            </p>
        </div>
    </div>
</div>
