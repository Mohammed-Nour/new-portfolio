<script type="ts">
	import Awseom from './components/Awseom.svelte';
	import Boxes from './components/Boxes.svelte';
	import Features from './components/Features.svelte';
	import Gallery from './components/Gallery.svelte';
	import Landing from './components/Landing.svelte';
	import RequestOpinion from './components/RequestOpinion.svelte';
	import Services from './components/Services.svelte';
	import Skills from './components/Skills.svelte';
</script>

<svelte:head>
	<title>Portofolio</title>
	<meta name="description" content="Portofolio page" />
</svelte:head>

<Landing />
<Boxes />
<Gallery />
<Features />
<Services />
<Skills />
<Awseom />
<RequestOpinion />

<style>
	@import './../css/main.css';
	@import './../css/Normalize.css';
</style>
