
<script>
    import { Router, Link, links } from "svelte-routing";
    import { navigate } from "svelte-routing";
    import TestandoTail from './TestandoTail.svelte'
    import Nav from './Nav.svelte'
    import Perfil from './Perfil.svelte'

    import {user, userId} from './auth.js';
    import Authguard from './Authguard.svelte';

    let URL = 'https://apimobiliaria.herokuapp.com/api/v1/login/'
    let URLOCAL = 'http://127.0.0.1:8000/api/v1/login/'
    let username, password;
   
    function login(){
      fetch(URLOCAL,{
        method: 'POST',
        headers: {
          'Accept': "application/json",
        "Content-Type": "application/json"
        },
        body: JSON.stringify({"username" : username, "password" : password})
      })
      // .then((response) =>{
      //   if(response.status != 200 || response.body == null){
      //     console.log("ERROR: sem acesso ao sistema " + response.status );
      //     alert("Usuarico com senha/user incorreto ou sem cadastro")
      //   }
      // })
      .then(response => response.json())
      .then(data => {
      $user = data.token
      $userId = data.id
      navigate("/perfil", { replace: true })
      })
    }


  </script>


<Nav/>
<main class=''>
  <div class='container top-10 m-10 p-10'>
  <!-- <div class='container top-10 m-10 p-10 '>
    <Authguard>
    <div  slot="authed">
      <Router path="/login/*" redirect="/"/>
      <Router path="/home"><h1>It is User's profile page</h1></Router>
    </div>
  </Authguard> -->
    
  <div class="border bg-indigo-100 border-solid border-gray-800 border-3 shadow-3xl rounded-lg mx-auto lg:h-full lg:w-1/2 px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Usuário
        </label>
        <input bind:value={username} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Usuário">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Senha
        </label>
        <input bind:value={password} class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
        <p class="text-red text-xs italic">Informe sua senha.</p>
      </div>
      <div class="flex items-center justify-between">
        <button on:click={()=>{$user=true&&login()}} class="bg-blue-300 hover:bg-blue-600 text-white font-bold hover:text-black py-2 px-4 rounded-md" type="button">
          Entrar
        </button>
        
        <Router>
          <a href="/register" class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-900 hover:underline" use:links Register>Crie uma conta</a>
        </Router>

      </div>
  </div>
</div>
</main>