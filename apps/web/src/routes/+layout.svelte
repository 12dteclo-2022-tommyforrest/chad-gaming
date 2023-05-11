<script>
	import Nav from "$lib/components/Nav.svelte";
	import NavItem from "$lib/components/NavItem.svelte";
	import "../app.css";
</script>

<header class="mb-4 bg-white">
	<Nav>
		<NavItem name="Home" to="/" />
		<NavItem name="Other Home" to="/" />
	</Nav>
</header>

<slot />
