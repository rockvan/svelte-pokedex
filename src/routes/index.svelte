<script context="module">
	export async function load({ params }) {
		const url = 'https://pokeapi.co/api/v2/pokemon?limit=500,';
		const res = await fetch(url);
		const data = await res.json();
		const loadedPokemon = data.results.map((data, index) => {
			return {
				name: data.name,
				id: index + 1,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
					index + 1
				}.svg`
			};
		});

		return { props: { pokemon: loadedPokemon } };
	}
</script>

<script>
	import PokemanCard from '../components/pokemanCard.svelte';

	export let pokemon;

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		console.log(searchTerm);
		if (searchTerm) {
			filteredPokemon = pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...pokemon];
		}
	}
</script>

<svelte:head>
	<title>Sveltekit Pokedex</title>
</svelte:head>

<div>
	<h1 class="text-4xl text-center my-8 uppercase">Sveltekit Pokedex</h1>

	<input
		class="w-full roundedmd text-lg p-4 border-2 border-gray-200 text-black"
		type="text"
		bind:value={searchTerm}
		placeholder="Search"
	/>

	<div class="grid gap-4 md:grid-cols-2 grid-col-1 py-4">
		{#each filteredPokemon as pokeman}
			<PokemanCard {pokeman} />
		{/each}
	</div>
</div>

<style>
</style>
