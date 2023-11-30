<script>
	import { searchLayer } from '$lib/stores';
	import { scale } from 'svelte/transition';

	const kota = [
		{
			name: 'Jakarta'
		},
		{
			name: 'Samarinda'
		},
		{
			name: 'Balikpapan'
		},
		{
			name: 'Bengkulu'
		}
	];

	function searchOnClick() {
		$searchLayer = true;
	}
</script>

<div class="w-full flex border-b border-biru px-10 justify-between h-20 items-center">
	<a href="/">
		<span class="text-2xl font-bold tracking-wider uppercase text-biru transition-colors ease-in-out">kelana</span>
	</a>
	<div class="hidden">
		<input type="text" placeholder="search..." />
	</div>
</div>
<div class="flex w-full justify-center items-center border border-biru border-t-0">
	<img class="w-[900px]" src="./map.jpeg" alt="map" />
</div>

<section class="fixed bottom-10 left-0 p-4 justify-center items-center w-full flex flex-col">
	<div class="xl:w-1/2 w-full">
		<h1 class="w-full text-xl font-bold tracking-wider text-center xl:text-left text-biru pb-3">Mau Kemana Guys?</h1>
		<input class="w-full py-4 px-6 bg-slate-200 rounded-xl" type="text" placeholder="Ketik aja kota yang mau kamu lihat..." on:click={searchOnClick} />
		<div class="w-full grid grid-cols-2 lg:grid-cols-3 pt-3 gap-3">
			{#key kota}
				{#each kota as k}
					<div transition:scale={{ duration: 300 }} class="bg-sky-300 h-12 flex items-center justify-center rounded-xl">
						<span>{k.name}</span>
					</div>
				{/each}
			{/key}
		</div>
	</div>
</section>
