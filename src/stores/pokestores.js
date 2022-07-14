/* import { writable } from 'svelte/store';

export const pokemen = writable([]);

const fetchPokemon = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
	const res = await fetch(url);
	const data = await res.json();
	const Pokemen = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});

	pokemon.set(Pokemen);
};
fetchPokemon();
 */
