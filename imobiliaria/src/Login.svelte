
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
<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
      <p class="text-red text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
        Entrar
      </button>
      
      <Router>
        <a href="/register" class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" use:links Register>Crie uma conta</a>
      </Router>

    </div>
</div>
</main>