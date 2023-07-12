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
			<GalleryBox {...image} />
		{/each}
	</div>
</div>

<!-- End Gallery -->

<style>
	.main-title {
		margin: 0 auto 80px;
		width: fit-content;
		text-transform: uppercase;
		font-size: 30px;
		border: 2px solid black;
		padding: 10px 20px;
		position: relative;
		z-index: 1;
		transition: 0.3s;
	}
	.main-title:hover {
		color: white;
		border: 2px solid white;
		transition-delay: 0.5s;
	}
	.main-title::before,
	.main-title::after {
		content: '';
		position: absolute;
		width: 12px;
		height: 12px;
		background-color: #2196f3;
		right: -30px;
		top: 50%;
		transform: translateY(-50%);
		border-radius: 50%;
	}
	.main-title:hover::before {
		animation: right-move 0.5s linear forwards;
		z-index: -1;
	}
	.main-title::after {
		left: -30px;
		right: 0;
	}
	.main-title:hover::after {
		animation: left-move 0.5s linear forwards;
		z-index: -1;
	}

	.gallery {
		background-color: #ececec;
		padding-top: 100px;
		padding-bottom: 100px;
		position: relative;
	}
	.gallery > .container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 40px;
	}
	@keyframes left-move {
		50% {
			left: 0;
			width: 12px;
			height: 12px;
		}
		100% {
			left: 0;
			height: 100%;
			width: 100%;
			border-radius: 0;
		}
	}
	@keyframes right-move {
		50% {
			right: 0;
			width: 12px;
			height: 12px;
		}
		100% {
			right: 0;
			width: 100%;
			height: 100%;
			border-radius: 0%;
		}
	}
</style>
