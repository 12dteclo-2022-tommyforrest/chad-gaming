<script>
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import "../app.css";
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style lang="postcss">
	/* Keeps footer on the bottom of the page */
	:global(body) {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		/* bg-zinc-500 */
		background-color: rgb(255, 255, 255)
	}
</style>
