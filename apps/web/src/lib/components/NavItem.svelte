<script lang="ts">
	/**
	 * Text displayed for the navigation item.
	 */
	export let name: string;

	/**
	 * The link that the user is sent to when the anchor is clicked.
	 */
	export let to: string;
</script>

<li class="block px-2 py-1 md:inline">
	<a class="text-lg font-semibold text-gray-200 hover:text-gray-300 hover:underline" href={to}>{name}</a>
</li>
