<script>
  let username, email, password;
  import Nav from './Nav.svelte'
  import {user, userId} from './auth.js';
  import Login from './Login.svelte'
  import { navigate } from "svelte-routing";

  //curl -d '{"username":"carlos", "email":"carlos@bol.com", "password":"carlos1"}' -H "Content-Type: application/json" -X POST https://apimobiliaria.herokuapp.com/api/v1/register/

  let URL = "https://apimobiliaria.herokuapp.com/api/v1/register/";
  let URLOCAL = "http://127.0.0.1:8000/api/v1/register/";


  function register(){
      fetch(URLOCAL,{
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


<Nav/>

<div class="min-h-screen flex items-center  justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8 border border-gray-600 border-solid p-2 rounded-md shadow-2xl">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Registar
      </h2>
    </div>
    <div class="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Usuário</label>
          <input bind:value={email} id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email">
        </div>
        <div>
          <label for="username" class="sr-only">Usuário</label>
          <input bind:value={username} id="username" name="text" type="text" autocomplete="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Usuário">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input bind:value={password} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
        </div>
      </div>
      <div>
        <button on:click={register} type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Criar conta
        </button>
      </div>
    </div>
  </div>
</div>