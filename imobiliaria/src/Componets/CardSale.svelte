<script>

    export let salesman = {};
</script>

<div class="grid xl:grid-flow-col lg:grid-flow-col mx-auto  m-2 p-1">
    <div class="">
        <h2 class='block mt-1 text-lg text-center leading-tight font-medium text-black'>CPF {salesman.cpf}</h2>
        <p class="text-justify"></p>
        <div class="flex">
            <p class="mt-2 text-center text-gray-800">
                Account 
                {salesman.account}
            </p>
        </div>
    </div>
</div>
