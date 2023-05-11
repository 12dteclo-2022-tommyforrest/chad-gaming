<script lang="ts">
	export let name: string;
	export let to: string;
</script>

<li class="block px-2 py-1 md:inline">
	<a class="font-semibold text-zinc-700 hover:text-sky-600 hover:underline" href={to}>{name}</a>
</li>
