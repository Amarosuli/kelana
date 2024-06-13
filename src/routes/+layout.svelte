<script lang="ts">
	import '../app.postcss';
	import { searchLayer } from '$lib/stores';
	import { scale } from 'svelte/transition';
	
	function searchOnClick() {
		$searchLayer = false;
	}
</script>

{#if $searchLayer}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div transition:scale="{{ duration: 300}}" class="w-screen h-full z-20 absolute bg-white" on:click="{searchOnClick}">
		<input class="p-6 text-xl" type="text" placeholder="Search..." />
	</div>
{/if}

<div class="relative inset-0 h-screen container justify-center items-center mx-auto px-4">
	<slot></slot>
</div>