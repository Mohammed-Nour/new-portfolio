<script type="ts">
	import Awesome from '$lib/components/Awesome.svelte';
	import Boxes from '$lib/components/Boxes.svelte';
	import Features from '$lib/components/Features.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Landing from '$lib/components/Landing.svelte';
	import RequestOpinion from '$lib/components/RequestOpinion.svelte';
	import Services from '$lib/components/Services.svelte';
	import Skills from '$lib/components/Skills.svelte';
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
<Awesome />
<RequestOpinion />

<style>
</style>
