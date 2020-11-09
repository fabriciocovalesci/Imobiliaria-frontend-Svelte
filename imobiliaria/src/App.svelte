

<script>
	import { Router, Link, Route } from "svelte-routing";
	import Login from './Login.svelte'
	import Register from './Register.svelte'
	import Home from './Home.svelte'

export let url = "";
</script>

  
  <Router url="{url}">
	<nav>
	  <Link to="/">Home</Link>
	  <Link to="login">Login</Link>
	</nav>
	<div>
	  <Route path="login" component="{Login}" />
	  <Route path="register" component="{Register}" />
	  <Route path="/"><Home /></Route>
	</div>
  </Router>

