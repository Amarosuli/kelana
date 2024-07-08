<script lang="ts">
	import '../app.postcss';

	import { setContext, getContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { scale } from 'svelte/transition';

	setContext<{ isOpen: Writable<boolean> }>('searchLayer', { isOpen: writable(false) });

	let { isOpen }: { isOpen: Writable<boolean> } = getContext('searchLayer');

	function searchOnClick() {
		$isOpen = false;
	}
</script>

{#if $isOpen}
	<div transition:scale={{ duration: 300 }} class="absolute z-20 flex h-full w-screen flex-col items-center justify-center gap-12 bg-white">
		<input class="w-full border-b p-6 text-xl outline-none md:w-1/3" type="text" placeholder="Province, City, Food, Art, whatever..." />
		<button class="mt-8 rounded-xl bg-slate-700 px-6 py-3 text-slate-200 hover:bg-slate-600" on:click={searchOnClick}>Cancel</button>
		<p class="animate-pulse">By Amarosuli</p>
	</div>
{/if}

<div class="container relative inset-0 mx-auto h-screen items-center justify-center px-4">
	<div class="flex h-20 w-full items-center justify-between border-b border-biru px-10">
		<a href="/">
			<span class="text-2xl font-bold uppercase tracking-wider text-biru transition-colors ease-in-out">kelana</span>
			<p class="text-sm">It was all about Indonesia</p>
		</a>
		<div class="animate-pulse">
			<p>By Amarosuli</p>
		</div>
	</div>
	<slot></slot>
</div>
