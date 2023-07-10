<script type="ts">
	import Awseom from './Awseom.svelte';
	import Boxes from './Boxes.svelte';
	import Features from './Features.svelte';
	import Gallery from './Gallery.svelte';
	import Landing from './Landing.svelte';
	import RequestOpinion from './RequestOpinion.svelte';
	import Services from './Services.svelte';
	import Skills from './Skills.svelte';
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
	@import './../css/all.min.css';
</style>
