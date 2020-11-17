<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  import Nav from "./Nav.svelte";
  import ImovelID from "./ImovelID.svelte";
  import { Router, Link, links } from "svelte-routing";
  import Cards from "./Cards.svelte";
  import Carousel from "./Componets/Carousel.svelte";
  import { user } from "./auth.js";
  import App from "./App.svelte";
  import Authguard from "./Authguard.svelte";
  import {imoveis} from  './imoveis'
  
    let URLimoveis = "https://apimobiliaria.herokuapp.com/api/v1/immobile/";
    let URLOCAL = "http://127.0.0.1:8000/api/v1/immobile/";
    let descricao, titulo, foto;


  function getImovell() {
    fetch(`${URLOCAL}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Token " + $user,
      },
    })
      .then((response) => response.json())
      .then(({ results }) => {
        dataIm = results;
      });
  }

  async function fetchData() {
    const res = await fetch(`${URLOCAL}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Token " + $user,
      },
    });
    const data = await res.json();
    $imoveis = data;
    console.log($imoveis);
    if (res.ok) {
      return data;
    } else {
      throw new Error(data);
    }
  }
</script>

<Nav />
<main class="top-10 m-10 p-10">
  <Carousel />
  <div class="flex flex-wrap m-5 mx-auto">
 {#await fetchData()}
      <p>loading</p>
    {:then items}
      {#each items as item}
        <div
          class="w-full overflow-hidden p-2 m-2 p-2 m-2 mx-auto xl:my-2 xl:px-2 xl:w-1/3">
          <Cards
            description="{item.description},"
            title="{item.title},"
            photo={item.photo}
            id="{item.id}"/>
        </div>
      {/each}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}


  </div>
</main>
