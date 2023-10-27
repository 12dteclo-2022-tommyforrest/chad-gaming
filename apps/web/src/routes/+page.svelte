<script lang="ts">
	import GameList from "$lib/components/GameList.svelte";
</script>

<!-- Operates on the HTML head element -->
<svelte:head>
	<title>Home | Chad Gaming</title>
</svelte:head>

<h1 class="text-center text-5xl">Chad Gaming</h1>
<h2 class="text-center text-3xl text-stone-700">Play games online</h2>

<!-- Line division to prevent cramped design -->
<br />

<h2 class="text-center text-3xl">Our Games</h2>
<GameList />