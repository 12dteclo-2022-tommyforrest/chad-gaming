<script lang="ts">
	import * as gameData from "$lib/data/games.json";
	import GameCard from "./GameCard.svelte";

	const data = gameData.games;
</script>

<div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
	{#each data as { description, img, title }}
		<GameCard {img} {description} {title} />
	{/each}
</div>
