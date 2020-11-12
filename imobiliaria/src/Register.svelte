<script>
  let username, email, password;
  import Nav from './Nav.svelte'
  import {user, userId} from './auth.js';
  import Login from './Login.svelte'
  import { navigate } from "svelte-routing";

  //curl -d '{"username":"carlos", "email":"carlos@bol.com", "password":"carlos1"}' -H "Content-Type: application/json" -X POST https://apimobiliaria.herokuapp.com/api/v1/register/

  let URL = "https://apimobiliaria.herokuapp.com/api/v1/register/";

  function register(){
      fetch(URL,{
        method: 'POST',
        headers: {
          'Accept': "application/json",
        "Content-Type": "application/json"
        },
        body: JSON.stringify({"username": username, "email": email, "password" : password})
      })
      .then(response => response.json())
      .then(data => {
      $user = data.token
      navigate("/login", { replace: true })
      })
      
      // .then((response) =>{
      //   if(response.status != 200){
      //     console.log("ERROR: sem acesso ao sistema " + response.status  + ' body: ' + response.body);
      //   }
      // })
    }

</script>

<!-- {#await authPromise}Loding...
  
{:then _}  -->
<Nav/>
<main class="top-10 p-10 m-10 ">
  <div
    class="bg-white shadow-2xl rounded-lg px-8 mx-auto lg:w-1/2 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
      <label
        class="block text-grey-darker text-sm font-bold mb-2"
        for="username">
        Usuário
      </label>
      <input
        bind:value={username}
        class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker"
        id="username"
        type="text"
        placeholder="Usuário" />
    </div>
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input
        bind:value={email}
        class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker"
        id="email"
        type="text"
        placeholder="email@.com" />
    </div>
    <div class="mb-6">
      <label
        class="block text-grey-darker text-sm font-bold mb-2"
        for="password">
        Senha
      </label>
      <input
        bind:value={password}
        class="shadow appearance-none border border-gray-900 rounded w-full py-2 px-3 text-grey-darker mb-3"
        id="password"
        type="password"
        placeholder="******************" />
      <p class="text-red text-xs italic">Por favor escolha uma senha.</p>
    </div>
    <div class="flex items-center justify-between">

      <button on:click={register} class="bg-blue-300 hover:bg-blue-600 text-white font-bold hover:text-black py-2 px-4 rounded-md" type="button">
        Criar conta
      </button>

    </div>
    <pre>
      {username}
      {email}
      {password}
      {$user}
      {$userId}
      </pre>
  </div>
</main>
<!-- {:catch err} Err! {err} {/await} -->

<!-- {
  "username":"carlos",
  "password" : "carlos1"
  } -->
