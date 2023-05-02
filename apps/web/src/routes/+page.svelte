<script lang="ts">
	import Nav from "$lib/components/Nav.svelte";
	import NavItem from "$lib/components/NavItem.svelte";

	import logo from "$lib/assets/logo.png";
</script>

<header class="bg-slate-400">
	<Nav>
		<NavItem name="Home" to="/" />
		<NavItem name="Other Home" to="/" />
	</Nav>
</header>

<h1 class="text-5xl text-center">Chad Gaming</h1>
<h2 class="text-3xl text-center text-stone-700">Play games online</h2>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
