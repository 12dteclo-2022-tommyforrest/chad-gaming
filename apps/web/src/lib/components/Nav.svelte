<script lang="ts">
	import NavList from "$lib/components/NavList.svelte";
	import logo from "$lib/assets/logo.png";

	let open = false;

	// Simplifies transition logic with a reactive boolean
	$: shouldTransition = open && window.innerWidth < 768;

	const toggleOpen = () => {
		open = !open;
	};
</script>

<nav class="row-auto grid grid-cols-11 md:grid-cols-20 md:shadow-sm md:shadow-slate-700">
	<!-- Container for shadow on hamburger menu, switches to flexbox to center logo on medium screens -->
	<div
		class="col-span-full grid grid-cols-11 p-4 shadow-sm shadow-slate-700 md:col-span-1 md:flex md:items-center md:justify-center
			md:p-0 md:pl-4 md:shadow-none"
	>
		<!-- Logo - links back to home page -->
		<a class="col-span-1" href="/">
			<img class="h-fit w-8" src={logo} alt="Chad Gaming logo." />
		</a>

		<!-- Hamburger menu, manually created with 3 divs and an overarching container that handles interactivity -->
		<div class="col-start-12 block md:hidden" data-testid="hamburger">
			<div
				class="mt-0.5 cursor-pointer md:hidden"
				on:click={toggleOpen}
				on:keypress={toggleOpen}
			>
				<div
					class="mb-2 h-1 w-9 bg-slate-950 transition-all duration-300"
					class:barOneOpen={open}
				/>
				<div
					class="mb-2 h-1 w-9 bg-slate-950 transition-all duration-300"
					class:opacity-0={open}
				/>
				<div
					class="h-1 w-9 bg-slate-950 transition-all duration-300"
					class:barThreeOpen={open}
				/>
			</div>
		</div>
	</div>

	<NavList {open} transition={shouldTransition}>
		<slot />
	</NavList>
</nav>

<style lang="postcss">
	.barOneOpen {
		transform: rotate(45deg) translate(8px, 11px);
	}

	.barThreeOpen {
		transform: rotate(-45deg) translate(5px, -10px);
	}
</style>
