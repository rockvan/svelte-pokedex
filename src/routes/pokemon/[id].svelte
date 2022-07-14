<script context="module">
	export async function load({ params }) {
		const id = params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokeman = await res.json();
		return { props: { pokeman } };
	}
</script>

<script>
	export let pokeman;
	const type = pokeman.types[0].type.name;
</script>

<div class="flex flex-col items-center gap-5">
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong> | Weight:
		<strong>{pokeman.weight}</strong>
	</p>

	<div class="grid grid-cols-2 gap-x-3">
		<div class="inline-block align-middle">
			<p>Special Abilities:</p>
		</div>
		<div>
			{#each pokeman.abilities as specialSkills}
				<li class=" list-decimal">
					<strong>
						{specialSkills.ability.name}
					</strong>
				</li>
			{/each}
		</div>
	</div>

	<img
		class="card-image"
		src={pokeman.sprites.other.dream_world.front_default}
		alt={pokeman.name}
	/>

	<p><strong>Skills:</strong></p>
	<div class="grid grid-cols-5 gap-x-10">
		{#each pokeman.moves as skills}
			<li class="list-disc h-7">{skills.move.name}</li>
		{/each}
	</div>
</div>
