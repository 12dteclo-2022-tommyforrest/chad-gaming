<script>
	import GameList from "$lib/components/GameList.svelte";
</script>

<!-- Operates on the HTML head element -->
<svelte:head>
	<title>Games | Chad Gaming</title>
	<meta name="description" content="List of games on Chad Gaming.">
</svelte:head>

<h1 class="text-center text-5xl">Games</h1>

<GameList />
