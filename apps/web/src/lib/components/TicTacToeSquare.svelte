<script lang="ts">
	import type { Player } from "$lib/types/tic-tac-toe";
	import { createEventDispatcher } from "svelte";

	interface Event {
		click: {};
	}

	const dispatch = createEventDispatcher<Event>();

	export let disableAnyway: boolean;
	export let inner: Player | undefined;

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
