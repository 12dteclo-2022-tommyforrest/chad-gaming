<script lang="ts">
	export let img: string;
	export let title: string;
	export let description: string;
</script>

<a href="/">
	<div
		class="rounded-xl bg-zinc-200 p-4 shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:transition-shadow"
	>
		<img class="mx-auto" src={img} alt={title} />
		<h3 class="text-center text-xl font-semibold">{title}</h3>
		<p class="text-center text-lg">{description}</p>
	</div>
</a>
