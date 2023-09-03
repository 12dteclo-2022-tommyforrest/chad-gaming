<script lang="ts">
	export let img: string;
	export let title: string;
	export let description: string;
	export let url: string;

	import tempimg from "$lib/assets/tic-tac-toe.png";
</script>

<a href={url}>
	<div
		class="rounded-xl bg-zinc-400 p-4 shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:transition-shadow"
	>
		<img class="mx-auto aspect-square h-36 w-fit" src={tempimg} alt={title} />
		<h3 class="text-center text-xl font-semibold">{title}</h3>
		<p class="text-center text-lg">{description}</p>
	</div>
</a>
