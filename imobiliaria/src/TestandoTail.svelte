<main>
    <button class="btn-blue">Entrar</button>

    <div class="container mx-auto p-4 my-4 bg-gray-800">
        <p>container</p>
    </div>


    <div class="container m-4 bg-gray-600 p-10 border-2 border-teal-500">
        <p>border box</p>
    </div>

    <div class="container m-4 bg-red-600 p-10 border-2 border-green-600">
        <p>box content</p>
    </div>



    <div class="container">
        <span class='block bg-red-300'>Nao sao elementos de bloco</span>
        <span class='block bg-red-800'>Nao sao elementos de bloco</span>
        <div class="bg-blue-300 inline-block">Block</div>
        <div class="bg-blue-300 inline-block">Block</div>
        
    </div>


    <div class="container mx-auto bg-gray-500 p-10 m-10">
        <div class="bg-blue-300 inline-block">Block 1</div>
        <div class="bg-red-300 inline-block">Block 2</div>
        <div class="bg-gray-400 inline-block">Block 3</div>
    </div>


    <div class="bg-gray-500 float-right">float rigth</div>
    <div class="bg-gray-500 float-left">float left</div>
    <div class="clearfix"></div>
    <div class="bg-gray-500 float-right">float rigth</div>
    <div class="bg-gray-500 float-left">float left</div>
    <div class="clearfix"></div>


    <div class="overflow-hidden bg-gray-700 m-10 h-10">
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
    </div>


    <!-- inserir scroll -->
    <div class="overflow-auto bg-red-700 m-10 h-10">
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
    </div>


    <div class="overflow-x-auto h-10 m-10 bg-gray-500">
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </div>


    <!-- scroll para cima-baixo maneira correta -->
    <div class="overflow-y-auto bg-red-700 m-10 h-40">
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        <p>test overflow</p>
        
    </div>



    <div class='relative container mx-auto bg-pink-900'>
        <p class='inline-block m-2 p-2 py-2'>Home</p>
        <p class='inline-block m-2 p-2 py-2'>Home</p>
        <p class='inline-block m-2 p-2 py-2'>Home</p>
        <div class="absolute top-0 rigth-0 bg-pink-200">
            
                    <p class='p-5'>teste</p>
                    <p class='p-5'>teste</p>
                    <p class='p-5'>teste</p>
                    <p class='p-5'>teste</p>
        </div>

    </div>

    <div class='relative container mx-auto bg-pink-900'>
        <div class="absolute top-0 rigth-0 bg-pink-200">
            <p class='inline-block m-2 p-2 py-2'>Home</p>
            <p class='inline-block m-2 p-2 py-2'>Home</p>
            <p class='inline-block m-2 p-2 py-2'>Home</p>
            
        </div>
        <p class='p-5'>teste</p>
        <p class='p-5'>teste</p>
        <p class='p-5'>teste</p>
        <p class='p-5'>teste</p>

    </div>

    <!-- invisivel -->
    <div class='container bg-red-600 invisible m-40'>
        oculto
    </div>


    <!-- z-index -->
    <div class="container relative ">
        <div class="absolute bg-red-600 h-20 w-20 p-6 z-10">na frente</div>
        <div class="absolute bg-red-600 h-20 w-20 p-6 m-4">atraz</div>

    </div>

    <p class='m-20'>espaco</p>
    <p class='m-20'>espaco</p>
    <p class='m-20'>espaco</p>


    <div class="container relative h-20">
        <div class="absolute bg-red-300 h-20 w-20 p-6 z-20">div 1</div>
        <div class="absolute bg-red-600 h-20 w-20 p-6 m-5 z-10">div 2</div>
        <div class="absolute bg-red-900 h-20 w-20 p-6 m-10 ">div 3</div>
    </div>


    <h1>home</h1>


    <div class='flex flex-row bg-red-500'>
        <div class='bg-gray-600 p-4 m-3'>1</div>
        <div class='bg-gray-600 p-4 m-3'>2</div>
        <div class='bg-gray-600 p-4 m-3'>3</div>

    </div>


    <div class='flex flex-col bg-blue-500'>
        <div class='bg-gray-600 p-4 m-3'>1</div>
        <div class='bg-gray-600 p-4 m-3'>2</div>
        <div class='bg-gray-600 p-4 m-3'>3</div>

    </div>

    <div class='flex flex-row-reverse bg-pink-500'>
        <div class='bg-green-600 p-4 m-3'>1</div>
        <div class='bg-green-600 p-4 m-3'>2</div>
        <div class='bg-green-600 p-4 m-3'>3</div>

    </div>


    <div class='flex flex-col w-1/2 mx-auto h-100 bg-blue-400 shadow-2xl rounded-md'>
        <div class='bg-red-600 m-5 p-5 py-5'>layout</div>
        <div class='bg-blue-600 m-5 p-5 py-5'>layout</div>
        <div class='bg-green-600 m-5 p-5 py-5'>layout</div>
        <div class='bg-white m-5 p-5 py-5 text-gray-900'>layout</div>
        <div class='bg-pink-600 m-5 p-5 py-5'>layout</div>
        <div class='bg-gray-600 m-5 p-5 py-5'>layout</div>
    </div>


    <div class="bg-red-400 flex flex-wrap">
        <div class='bg-red-600 m-5 p-5 py-5'>layout</div>
        <div class='bg-blue-600 m-5 p-5 py-5'>layout</div>
        <div class='bg-green-600 m-5 p-5 py-5'>layout</div>
        <div class='bg-white m-5 p-5 py-5 text-gray-900'>layout</div>
        <div class='bg-pink-600 m-5 p-5 py-5'>layout</div>
        <div class='bg-gray-600 m-5 p-5 py-5'>layout</div>
    </div>

    <div class='bg-blue-300 flex container mx-auto p-8'>
        <div class='flex-1 bg-red-200'>1</div>
        <div class='flex-1 bg-red-300'>2</div>
        <div class='flex-1 bg-red-400'>3</div>
        <div class='flex-none bg-red-500'>4</div>
    </div>


    <div class="bg-blue-800 flex flex-wrap">
        <div class='bg-red-600 m-5 p-5 py-5 order-last '>layout 1</div>
        <div class='bg-blue-600 m-5 p-5 py-5 order-4'>layout 2</div>
        <div class='bg-green-600 m-5 p-5 py-5 order-3'>layout 3</div>
        <div class='bg-white m-5 p-5 py-5 text-gray-900 order-2'>layout 4</div>
        <div class='bg-pink-600 m-5 p-5 py-5'>layout 5</div>
        <div class='bg-gray-600 m-5 p-5 py-5 order-first'>layout 6</div>
    </div>


    <div class="flex bg-pink-300 p-6">
        <div class='flex bg-gray-900 p-4 m-4 lg:order-3'>1</div>
        <div class='flex bg-gray-600 p-4 m-4 lg:order-2'>2</div>
        <div class='flex bg-gray-300 p-4 m-4 lg:order-1'>3</div>
    </div>

</main>