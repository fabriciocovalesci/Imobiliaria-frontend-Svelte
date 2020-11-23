<script>

    export let salesman = {};
</script>

<div class="grid xl:grid-flow-col lg:grid-flow-col mx-auto  m-2 p-1">
    <div class="">
        <h2>{salesman.cpf}</h2>
        <p class="text-justify"></p>
        <div class="flex">
            <p class="text-gray-900 text-2xl text-green-800">
                Account 
                {salesman.account}
            </p>
        </div>
    </div>
</div>
