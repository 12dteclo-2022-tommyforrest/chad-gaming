<script lang="ts">
	export let name: string;
	export let to: string;
</script>

<li class="block md:inline p-2">
	<a href={to}>{name}</a>
</li>
