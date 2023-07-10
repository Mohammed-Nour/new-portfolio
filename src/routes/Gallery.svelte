<script lang="ts">
	import GalleryBox from './GalleryBox.svelte';
	import firstproject from '$lib/images/firstproject.png';
	import secondproject from '$lib/images/secondproject.png';
	import thirdproject from '$lib/images/thirdproject.png';
	import Fourthproject from '$lib/images/Fourthproject.png';
	import fifthproject from '$lib/images/fifthproject.png';
	import sixthproject from '$lib/images/sixthproject.png';

	interface GalleryImage {
		id: number;
		image: string;
		alt: string;
	}

	let galleryImages: GalleryImage[] = [
		{
			id: 1,
			image: firstproject,
			alt: 'firstproject'
		},
		{
			id: 2,
			image: secondproject,
			alt: 'secondproject'
		},
		{
			id: 3,
			image: thirdproject,
			alt: 'thirdproject'
		},
		{
			id: 4,
			image: Fourthproject,
			alt: 'Fourthproject'
		},
		{
			id: 5,
			image: fifthproject,
			alt: 'fifthproject'
		},
		{
			id: 6,
			image: sixthproject,
			alt: 'sixthproject'
		}
	];
</script>

<!-- Start Gallery -->
<div class="gallery" id="gallery">
	<h2 class="main-title">My Gallery</h2>
	<div class="container">
		{#each galleryImages as image (image.id)}
			<GalleryBox image={image.image} alt={image.alt} />
		{/each}
	</div>
</div>

<!-- End Gallery -->

<style>
</style>
