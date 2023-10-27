<script lang="ts">
	import * as gameData from "$lib/data/games.json";
	import GameCard from "./GameCard.svelte";

	const data = gameData.games;
</script>

<div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
	<!-- Iterate through JSON game data and create a card for each game. -->
	{#each data as { description, img, title, url }}
		<GameCard {img} {description} {title} {url} />
	{/each}
</div>
