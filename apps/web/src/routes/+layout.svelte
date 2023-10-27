<script>
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import "../app.css";
</script>

<svelte:head>
	<!-- Default title for when one is not specified -->
	<title>Chad Gaming</title>
</svelte:head>

<Header />
<main>
	<!-- Space for page-specific components to fit into the layout -->
	<slot />
</main>
<Footer />

<style lang="postcss">
	/* Keeps footer on the bottom of the page */
	:global(body) {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		/* Default background colour for colourscheme */
		background-color: rgb(255, 255, 255)
	}
</style>
