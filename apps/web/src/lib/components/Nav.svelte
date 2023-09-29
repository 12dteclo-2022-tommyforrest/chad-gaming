<script lang="ts">
	import { clsx } from "clsx";
	import NavList from "$lib/components/NavList.svelte";
	import logo from "$lib/assets/logo.svg";

	let open = false;

	// Simplifies transition logic with a reactive boolean
	$: shouldTransition = open && window.innerWidth < 768;

	const toggleOpen = () => {
		open = !open;
	};
</script>

<nav class="row-auto grid grid-cols-11 md:grid-cols-20 md:py-2 md:shadow-sm md:shadow-slate-700">
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
		<!-- The hamburger menu is made accessible by using a button in addition to ARIA properties -->
		<div class="col-start-12 block md:hidden" data-testid="hamburger">
			<button
				aria-expanded={open}
				aria-label="Navigation menu toggle"
				class="mt-0.5 cursor-pointer md:hidden"
				on:click={toggleOpen}
			>
				<div
					class={clsx("mb-2 h-1 w-9 bg-gray-200 transition-all duration-300", {
						"translate-y-3 rotate-45 rounded-sm": open,
					})}
				/>
				<div
					class={clsx("mb-2 h-1 w-9 bg-gray-200 transition-all duration-300", {
						"opacity-0": open,
					})}
				/>
				<div
					class={clsx("h-1 w-9 bg-gray-200 transition-all duration-300", {
						"-translate-y-3 -rotate-45 rounded-sm": open,
					})}
				/>
			</button>
		</div>
	</div>

	<NavList {open} transition={shouldTransition}>
		<slot />
	</NavList>
</nav>
