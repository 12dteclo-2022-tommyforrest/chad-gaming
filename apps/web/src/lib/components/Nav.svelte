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

<nav class="grid grid-cols-11 md:grid-cols-20 row-auto md:shadow-sm md:shadow-slate-700">
	<!-- Container for shadow on hamburger menu, switches to flexbox to center logo on medium screens -->
	<div
		class="col-span-full p-4 md:p-0 md:pl-4 md:col-span-1 grid grid-cols-11 md:flex md:justify-center md:items-center
			shadow-sm shadow-slate-700 md:shadow-none"
	>
		<!-- Logo - links back to home page -->
		<a class="col-span-1" href="/">
			<img class="w-8 h-fit" src={logo} alt="Chad Gaming logo." />
		</a>

		<!-- Hamburger menu, manually created with 3 divs and an overarching container that handles interactivity -->
		<div class="block col-start-12 md:hidden" data-testid="hamburger">
			<div
				class="cursor-pointer mt-0.5 md:hidden"
				on:click={toggleOpen}
				on:keypress={toggleOpen}
			>
				<div
					class="w-9 h-1 bg-slate-950 mb-2 transition-all duration-300"
					class:barOneOpen={open}
				/>
				<div
					class="w-9 h-1 bg-slate-950 mb-2 transition-all duration-300"
					class:opacity-0={open}
				/>
				<div
					class="w-9 h-1 bg-slate-950 transition-all duration-300"
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
