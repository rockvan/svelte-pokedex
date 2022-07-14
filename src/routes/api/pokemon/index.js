export async function get() {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=500';
	const res = await fetch(url);
	const data = await res.json();
	const pokemon = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
				index + 1
			}.svg`
		};
	});

	return {
		status: 200,
		body: pokemon
	};
}
