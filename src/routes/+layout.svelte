<script>
	import '../app.postcss';
	import { searchLayer } from '$lib/stores';

	function searchOnClick() {
		$searchLayer = false;
	}
</script>

{#if $searchLayer}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="w-screen h-full z-20 absolute bg-white" on:click={searchOnClick}>
		<input class="p-6 text-xl" type="text" placeholder="Search..." />
	</div>
{/if}
<div class="relative container mx-auto px-4">
	<slot />
</div>
