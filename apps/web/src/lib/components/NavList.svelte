<script lang="ts">
	import { slide } from "svelte/transition";

	export let open: boolean;
	export let transition = false;
</script>

{#if transition}
	<ul
		class={`${
			open ? "block" : "hidden"
		} col-span-full list-none p-4 align-middle md:block md:col-[span_19] shadow-sm shadow-slate-700 md:shadow-none`}
		transition:slide={{ duration: 250 }}
	>
		<slot />
	</ul>
{:else}
	<ul
		class={`${
			open ? "block" : "hidden"
		} col-span-full list-none p-4 align-middle md:block md:col-[span_19] shadow-sm shadow-slate-700 md:shadow-none`}
	>
		<slot />
	</ul>
{/if}
