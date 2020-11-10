
<script>
    import { Router, links } from "svelte-routing";
    import Register from './Register.svelte'

  </script>

<main>
    <!-- <div class="flex">
    <label class="" for="user">Usuario</label> <br/>
    <input class='border border-gray-900 rounded-md' type="text" id="user"> <br/>
    <label for="psswd">Senha</label> <br/>
    <input class='border border-gray-900 rounded-md'  type="password" id="psswd"> <br/>
    <button class="border border-black p-1 rounded-md" type="submit">Entrar</button>
    
    <a href="#">Não tem cadastro?</a>
</div> -->
<!-- component -->
<div class="bg-white shadow-2xl rounded-lg mx-auto lg:h-full lg:w-1/2 px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Usuário
      </label>
      <input class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Usuário">
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Senha
      </label>
      <input class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
      <p class="text-red text-xs italic">Informe sua senha.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-300 hover:bg-blue-600 text-white font-bold hover:text-black py-2 px-4 rounded-md" type="button">
        Entrar
      </button>
      
      <Router>
        <a href="/register" class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" use:links Register>Crie uma conta</a>
      </Router>

    </div>
</div>
</main>