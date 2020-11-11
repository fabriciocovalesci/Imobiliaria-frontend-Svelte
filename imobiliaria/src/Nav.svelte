
<script>
	import { Router, links } from "svelte-routing";
	import Login from './Login.svelte';
	import Imoveis from './Imoveis.svelte'
	import Home from './Home.svelte'

</script>

<nav id="header" class="fixed w-full z-30 top-0 p-5 m-5 text-black">
	<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
		<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				<li class="mr-3">
					<Router>
						<a href="/" class="inline-block text-black font-bold no-underline hover:text-gray-800 hover:text-underline py-2 px-4" use:links Home>Home</a>
					  </Router>
				</li>

				<li class="mr-3">
					<Router>
						<a href="/imoveis" class="inline-block text-black font-bold no-underline hover:text-gray-800 hover:text-underline py-2 px-4" use:links Imoveis>Imóveis</a>
					  </Router>
				</li>

				<li class="mr-3">
					<Router>
					<a href="/login" class="inline-block text-black font-bold no-underline hover:text-gray-800 hover:text-underline py-2 px-4" use:links Login>Login</a>
				</Router>
				</li>
			</ul>
		</div>
	</div>
</nav>