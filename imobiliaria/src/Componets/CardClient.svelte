<script>
    export let DataClient = {};
    export let Address = {};
</script>

<div class="grid xl:grid-flow-col lg:grid-flow-col mx-auto  m-2 p-1">
    <div class="">
        <h2 class='block mt-1 text-lg text-center leading-tight font-medium text-black'>CPF {DataClient.cpf}</h2>
        <p class="text-justify"></p>
            <p class="mt-2 text-center text-gray-800">
                Account 
                {Address[0] ? Address[0] : DataClient.account}
            </p>
    </div>
</div>
