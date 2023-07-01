<script lang="ts">
	export let img: string;
	export let title: string;
	export let description: string;
</script>

<div>
	<img src={img} alt={title} />
	<h3>{title}</h3>
	<p>{description}</p>
</div>
