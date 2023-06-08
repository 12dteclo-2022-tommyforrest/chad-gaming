<script lang="ts">
	export let img: string;
	export let title: string;
	export let description: string;

	const imageData = import(img);
</script>

<div>
	{#await imageData then data}
		<img src={data} alt={title} />
	{/await}
	<h3>{title}</h3>
	<p>{description}</p>
</div>
