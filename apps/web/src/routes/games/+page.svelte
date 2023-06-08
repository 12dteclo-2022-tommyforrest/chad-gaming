<script>
	import GameCard from "$lib/components/GameCard.svelte";
	import GameList from "$lib/components/GameList.svelte";
</script>

<h1 class="text-center text-5xl">Games</h1>

<GameList>
	<GameCard
		img=""
		title="Tic Tac Toe (Local Multiplayer)"
		description="The classic game Tic Tac Toe, available to play with a friend on the same device."
	/>
</GameList>
