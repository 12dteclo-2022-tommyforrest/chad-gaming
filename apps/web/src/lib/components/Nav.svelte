<script lang="ts">
	let open = false;

	const barTwoOpen = "opacity-0";

	const toggleOpen = () => {
		open = !open;
	};
</script>

<nav class="grow inline align-middle">
	<ul class="list-none hidden align-middle md:block">
		<slot />
	</ul>

	<div
		class="cursor-pointer mt-0.5 float-right md:hidden"
		on:click={toggleOpen}
		on:keypress={toggleOpen}
	>
		<div
			class="w-9 h-1 bg-slate-950 mb-2 transition-all duration-300"
			class:barOneOpen={open}
		/>
		<div
			class={`w-9 h-1 bg-slate-950 mb-2 transition-all duration-300 ${open && barTwoOpen}`}
		/>
		<div class="w-9 h-1 bg-slate-950 transition-all duration-300" class:barThreeOpen={open} />
	</div>
</nav>

<style lang="postcss">
	.barOneOpen {
		transform: rotate(45deg) translate(8px, 11px);
	}

	.barThreeOpen {
		transform: rotate(-45deg) translate(5px, -10px);
	}
</style>
