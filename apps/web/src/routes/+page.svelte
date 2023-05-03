<script lang="ts">
	import Nav from "$lib/components/Nav.svelte";
	import NavItem from "$lib/components/NavItem.svelte";

	import logo from "$lib/assets/logo.png";
</script>

<header class="bg-white">
	<Nav>
		<NavItem name="Home" to="/" />
		<NavItem name="Other Home" to="/" />
	</Nav>
</header>

<h1 class="text-5xl text-center">Chad Gaming</h1>
<h2 class="text-3xl text-center text-stone-700">Play games online</h2>
