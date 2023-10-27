<script lang="ts">
	import type { Player } from "$lib/types/tic-tac-toe";
	import { createEventDispatcher } from "svelte";

	// Definition of all events this element can dispatch. We only use
	// the click event for this element, and it has no additional data.
	interface Event {
		click: {};
	}

	// Svelte event dispatcher is used to communicate to the game board that the element has been clicked.
	const dispatch = createEventDispatcher<Event>();

	/**
	 * Setting this property to true disables placing in this square even if the square is empty.
	 */
	export let disableAnyway: boolean;

	/**
	 * Piece to display inside the element.
	 */
	export let inner: Player | undefined;

	// OnClick event. This allows the Tic Tac Toe page to listen for clicks.
	const onClick = () => {
		dispatch("click", {});
	};
</script>

<button
	class="h-full w-full border-2 border-black bg-white"
	disabled={inner ? true : disableAnyway ? true : false}
	on:click={onClick}
	on:keypress={onClick}
>
	<p class="text-6xl md:text-8xl">{inner ? inner : ""}</p>
</button>
