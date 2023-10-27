<script lang="ts">
	// Clsx is used here to conditionally add css stypes to an element. Here we use it to apply the display: block style when the element is open.
	import { clsx } from "clsx";
	import { slide } from "svelte/transition";

	export let open: boolean;
	export let transition = false;
</script>

{#if transition}
	<!-- Navigation menu with a slide transition. Good for mobile. -->
	<ul
		class={clsx(
			"col-span-full list-none px-4 py-2 align-middle shadow-sm shadow-slate-700 md:col-[span_19] md:block md:shadow-none",
			{
				block: open,
				hidden: !open,
			}
		)}
		transition:slide={{ duration: 250 }}
	>
		<slot />
	</ul>
{:else}
	<!-- Navigation menu with no transition. Good for desktop. This variant also does not hide the navigation bar when hamburger menu is not open. -->
	<ul
		class={clsx(
			"col-span-full hidden list-none px-4 py-2 align-middle shadow-sm shadow-slate-700 md:col-[span_19] md:block md:shadow-none",
			{
				block: open,
			}
		)}
	>
		<slot />
	</ul>
{/if}
