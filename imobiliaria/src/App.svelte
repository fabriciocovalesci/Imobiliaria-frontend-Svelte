

<script>
	import { Router, Link, Route } from "svelte-routing";
	import Login from './Login.svelte'
	import Register from './Register.svelte'
	import Home from './Home.svelte'
	import TestandoTail from './TestandoTail.svelte'
	import Imoveis from './Imoveis.svelte'
	import ImovelID from './ImovelID.svelte'
	import Perfil from './Perfil.svelte'
	import Cards from './Cards.svelte'
	import Compra from './Componets/Compra.svelte'
	import FinalSale from './Componets/FinalSale.svelte'
	import Checkout from './Componets/Checkout.svelte'
	import CadastraImoveis from './Componets/CadastraImoveis.svelte'
	import Alugar from './Componets/Alugar.svelte'

	export let url = "";
</script>

  
  <Router url="{url}">
	<!-- <nav>
	  <Link to="/">Home</Link>
	  <Link to="/tail">Tailwind</Link>
	  <Link to="login">Login</Link>
	</nav> -->
	<div>
	  <Route path="login" component="{Login}" />
	  <Route path="register" component="{Register}" />
	  <Route path="imoveis" component="{Imoveis}" />
	  <Route path="tail" component="{TestandoTail}" />
	  <Route path="imovelID/:id" component="{ImovelID}" />
	  <Route path="perfil" component="{Perfil}" />
	  <Route path="perfil" component="{Cards}" />
	  <Route path="compra" component="{Compra}" />
	  <Route path="final" component="{FinalSale}" />
	  <Route path="checkout" component="{Checkout}" />
	  <Route path="cadastraimoveis" component="{CadastraImoveis}" />
	  <Route path="alugar" component="{Alugar}" />
	  <Route path="/"><Home /></Route>
	</div>
  </Router>

