<script lang="ts">
	import Nav from "$lib/components/Nav.svelte";
	import NavItem from "$lib/components/NavItem.svelte";
</script>

<header class="mb-4 bg-blue-600">
	<Nav>
		<NavItem name="Home" to="/" />
		<NavItem name="Games" to="/games" />
	</Nav>
</header>
