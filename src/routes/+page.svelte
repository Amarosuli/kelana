<script>
	import { searchLayer } from '$lib/stores';

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

<div class="w-full inline-flex justify-between h-20 items-center">
	<a href="/">
		<span class="text-xl font-semibold uppercase">kelana</span>
	</a>
	<div class="hidden">
		<input type="text" placeholder="search..." />
	</div>
</div>

<main class="w-full px-4 bg-white/30">
	<div class="absolute w-full items-center justify-center inline-flex -z-10">
		<img class="w-full lg:w-3/4 object-contain" src="./map.jpeg" alt="map" />
	</div>
	<div class="w-full inline-flex flex-col space-y-3 lg:pt-[48rem]">
		<h1 class="text-2xl">Mau kemana?</h1>
		<input class="py-4 px-6 bg-slate-200 w-full rounded-full" type="text" placeholder="Nyari apa?" on:click={searchOnClick} />
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-3 pt-3 gap-3">
		{#each kota as k}
			<div class="bg-sky-300 h-12 flex items-center justify-center rounded-full">
				<span>{k.name}</span>
			</div>
		{/each}
	</div>
</main>
