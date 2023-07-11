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

	let resultComicData: ComicData;
	let loading = true;
	let error = '';

	onMount(() => {
		getComicData();
	});

	async function getComicData() {
		try {
			const idResponse = await getId();
			const comicData = await getData(idResponse);
			resultComicData = {
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
		} catch (err) {
			error = 'Error fetching comic data.';
		} finally {
			loading = false;
		}
	}

	async function getId(): Promise<IdResponse> {
		const email = 'mo.shahin@innopolis.university';
		const params = new URLSearchParams();
		const apiUrl = `https://fwd.innopolis.university/api/hw2?`;
		params.append('email', email);
		const response = await fetch(apiUrl + params.toString());
		if (!response.ok) {
			throw new Error('Error fetching ID.');
		}
		const idResponse: IdResponse = await response.json();
		return idResponse;
	}

	async function getData(idResponse: IdResponse): Promise<ComicData> {
		const params = new URLSearchParams();
		const apiUrl = `https://fwd.innopolis.university/api/comic?`;
		params.append('id', idResponse.toString());
		const response = await fetch(apiUrl + params.toString());
		if (!response.ok) {
			throw new Error('Error fetching comic data.');
		}
		const comicData: ComicData = await response.json();
		return comicData;
	}
</script>

<!-- Start comic -->
<div id="container" class="comic-container">
	{#if loading}
		<p>Loading...</p>
	{:else if error}
		<p>{error}</p>
	{:else if resultComicData}
		<h2 class="main-title">{resultComicData.safe_title}</h2>
		<p class="comic-date" id="comic-date">{resultComicData.formattedDate}</p>
		<p class="comic-date" id="comic-date">Released {resultComicData.formattedDateFromNow}</p>
		<img id="comic-image" src={resultComicData.img} alt={resultComicData.alt} />
	{/if}
</div>

<!-- End comic -->

<style>
	.comic-container {
		width: 500px;
		margin: 0 auto;
		padding: 20px;
		text-align: center;
		background-color: #f5f5f5;
		border-radius: 10px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		animation: fade-in 0.5s ease-in-out;
		height: 100vh;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	#comic-date {
		font-size: 25px;
		color: #777;
		font-weight: bolder;
		margin: 30px;
	}

	#comic-image {
		max-width: 100%;
		margin-top: 20px;
		animation: zoom-in 0.5s ease-in-out;
	}

	@keyframes zoom-in {
		from {
			transform: scale(0.8);
		}
		to {
			transform: scale(1);
		}
	}
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
