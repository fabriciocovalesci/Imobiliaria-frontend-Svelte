

<script>
	import { Router, Link, Route } from "svelte-routing";
	import Login from './Login.svelte'
	import Register from './Register.svelte'
	import Home from './Home.svelte'
	import TestandoTail from './TestandoTail.svelte'
	import Imoveis from './Imoveis.svelte'

	export let url = "";
</script>

  
  <Router url="{url}">
	<nav>
	  <Link to="/">Home</Link>
	  <Link to="/tail">Tailwind</Link>
	  <Link to="login">Login</Link>
	</nav>
	<div>
	  <Route path="login" component="{Login}" />
	  <Route path="register" component="{Register}" />
	  <Route path="imoveis" component="{Imoveis}" />
	  <Route path="tail" component="{TestandoTail}" />
	  <Route path="/"><Home /></Route>
	</div>
  </Router>

