<script lang="ts">
	export let name: string;
	export let to: string;
</script>

<li class="block md:inline p-2">
	<a class="text-zinc-700 hover:text-sky-600 hover:underline" href={to}>{name}</a>
</li>
