<script lang="ts">
	export let name: string;
	export let to: string;
</script>

<li class="block px-2 py-1 md:inline">
	<a class="text-lg font-semibold text-gray-200 hover:text-gray-300 hover:underline" href={to}>{name}</a>
</li>
