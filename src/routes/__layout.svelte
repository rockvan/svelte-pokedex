<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
</script>

<div class=" bg-slate-800 min-h-screen pt-10">
	<div class="p-10  max-w-6xl mx-auto bg-slate-800 text-white">
		<Nav />
		<slot />
	</div>
</div>

<style>
</style>
