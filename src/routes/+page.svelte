<script lang="ts">
	import { getContext } from 'svelte';
	import { provinces } from '$lib/constant';
	import { scale } from 'svelte/transition';
	import type { Writable } from 'svelte/store';

	let { isOpen }: { isOpen: Writable<boolean> } = getContext('searchLayer');
</script>

<!-- <div class="flex w-full justify-center items-center border border-biru border-t-0">
	<img class="w-[900px]" src="./map.jpeg" alt="map" />
</div> -->

<section class="flex flex-col w-full justify-center items-center mt-6 gap-4">
	<h1 class="font-extrabold text-3xl">Indonesia</h1>
	<!-- TODO: p tag bellow should kind of slider images, but it's quick info -->
	<p class="w-1/3 text-center text-biru">Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.</p>
</section>

<section class="fixed bottom-10 left-0 flex w-full flex-col items-center justify-center p-4">
	<div class="w-full xl:w-1/2">
		<h1 class="w-full pb-3 text-center text-xl font-bold tracking-wider text-biru xl:text-left">Mau Kemana Guys?</h1>
		<input class="w-full rounded-xl bg-slate-200 px-6 py-4" type="text" placeholder="Ketik aja kota yang mau kamu lihat..." on:click={() => ($isOpen = true)} />
		<div class="grid w-full grid-cols-2 gap-3 pt-3 lg:grid-cols-3">
			<!-- TODO: this should only show top country, food, or something like that -->
			{#key provinces}
				{#each provinces as province}
					<div transition:scale={{ duration: 300 }} class="flex h-12 items-center justify-center rounded-xl bg-sky-300">
						<span>{province.name}</span>
					</div>
				{/each}
			{/key}
		</div>
	</div>
</section>
