<script lang="ts">
	/**
	 * Image URL of the image to display for the card. Not currently respected, see temporary hack below.
	 */
	export let img: string;

	/**
	 * Title of the game displayed in the card.
	 */
	export let title: string;

	/**
	 * Description of the game displayed in the card.
	 */
	export let description: string;

	/**
	 * URL the user is directed to when the card is interacted with.
	 */
	export let url: string;

	// Tempotary hack: dynamic imports seem to fail on Vercel, so the Tic Tac Toe image is used as a placeholder.
	import tempimg from "$lib/assets/tic-tac-toe.webp";
</script>

<a href={url}>
	<div
		class="rounded-xl bg-gray-200 p-4 shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:transition-shadow"
	>
		<!-- Main elements of the card -->
		<img class="mx-auto aspect-square h-36 w-fit" src={tempimg} alt={title} />
		<h3 class="text-center text-xl font-semibold">{title}</h3>
		<p class="text-center text-lg">{description}</p>
	</div>
</a>
