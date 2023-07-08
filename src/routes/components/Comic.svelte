<script lang="ts">
	import { onMount } from 'svelte';
	import moment from 'moment';

	interface ComicData {
		safe_title: string;
		year: number;
		month: number;
		day: number;
		img: string;
		alt: string;
		formattedDate: string;
		formattedDateFromNow: string;
	}

	interface IdResponse {
		id: number;
	}

	let comicDfata: ComicData;

	onMount(() => {
		getId();
	});

	function getId() {
		const email = 'mo.shahin@innopolis.university';
		const params = new URLSearchParams();
		const apiUrl = `https://fwd.innopolis.university/api/hw2?`;
		params.append('email', email);
		fetch(apiUrl + params.toString())
			.then((response) => response.json())
			.then((idResponse: IdResponse) => {
				getData(idResponse);
			});
	}

	function getData(idResponse: IdResponse) {
		const params = new URLSearchParams();
		const apiUrl = `https://fwd.innopolis.university/api/comic?`;
		params.append('id', idResponse.toString());
		fetch(apiUrl + params.toString())
			.then((response) => response.json())
			.then((comicData: ComicData) => {
				comicDfata = {
					...comicData,
					formattedDate: moment({
						year: comicData.year,
						month: comicData.month - 1,
						day: comicData.day
					}).format('DD/MM/YYYY'),
					formattedDateFromNow: moment({
						year: comicData.year,
						month: comicData.month - 1,
						day: comicData.day
					}).fromNow()
				};
			});
	}
</script>

<!-- Start comic -->
<div id="container" class="comic-container">
	{#if comicDfata}
		<h2 class="main-title">{comicDfata.safe_title}</h2>
		<p class="comic-date" id="comic-date">{comicDfata.formattedDate}</p>
		<p class="comic-date" id="comic-date">Released {comicDfata.formattedDateFromNow}</p>
		<img id="comic-image" src={comicDfata.img} alt={comicDfata.alt} />
	{:else}
		<p>Loading...</p>
	{/if}
</div>

<!-- End comic -->

<style>
	@import '../../css/main.css';
	@import '../../css/comic.css';
	@import './../../css/Normalize.css';
	@import './../../css/all.min.css';
</style>
