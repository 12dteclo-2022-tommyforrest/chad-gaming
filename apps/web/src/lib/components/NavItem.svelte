<script lang="ts">
	export let name: string;
	export let to: string;
</script>

<li class="block px-2 py-1 md:inline">
	<a class="font-semibold hover:text-sky-800 hover:underline" href={to}>{name}</a>
</li>
