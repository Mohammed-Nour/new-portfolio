<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	@import '../css/main.css';
	@import '../css/Normalize.css';
	@import './../css/all.min.css';
</style>
