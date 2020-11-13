
<script>
    import Nav from './Nav.svelte'
    import ImovelID from './ImovelID.svelte'
    import { Router, Link, links } from "svelte-routing";
    import Cards from './Cards.svelte'
    import Carousel from './Componets/Carousel.svelte'

</script>


<Nav/>
<main class='top-10 m-10 p-10'>
    <Carousel/>
  <div class="flex flex-wrap m-5 mx-auto">

    <div class="w-full overflow-hidden p-2 m-2 p-2 m-2 mx-auto xl:my-2 xl:px-2 xl:w-1/3">
       <Cards/>
    </div>
  
    <div class="w-full overflow-hidden p-2 m-2 mx-auto xl:my-2 xl:px-2 xl:w-1/3">
       <Cards/>
    </div>
  
    <div class="w-full overflow-hidden p-2 m-2 mx-auto xl:my-2 xl:px-2 xl:w-1/3">
       <Cards/>
    </div>
</div>
</main>