<script lang="ts">
	import Box from './Box.svelte';
	import firstproject from '$lib/images/firstproject.png';
	import secondproject from '$lib/images/secondproject.png';
	import thirdproject from '$lib/images/thirdproject.png';
	import Fourthproject from '$lib/images/Fourthproject.png';
	import fifthproject from '$lib/images/fifthproject.png';
	import sixthproject from '$lib/images/sixthproject.png';
	import seventhproject from '$lib/images/seventhproject.jpg';
	import eighthproject from '$lib/images/eighthproject.png';

	let projects = [
		{
			id: 1,
			image: firstproject,
			title: 'Emkan Properties',
			description: ' Website for buying and selling real estate built using WordPress.',
			website: 'https://emkanproperties.com/'
		},
		{
			id: 2,
			image: secondproject,
			title: 'Crown Farms',
			description:
				' E-commerce Farms website with HTML , CSS , BootStrap , JavaScript , Jquery and Ajax and Backend Rest API built using Laravel.',
			website: 'http://test.crownfarms.ae/'
		},
		{
			id: 3,
			image: thirdproject,
			title: 'E-Commerce website',
			description:
				' E-Commerce website built using Next.js , React.js , Redux State Management for managing data that come from Rest API and store it with Axios library and ANTD library also we use i18n for translation',
			website: 'https://eccomerce-zkz5.vercel.app/en'
		},
		{
			id: 4,
			image: Fourthproject,
			title: 'photography agency',
			description: 'Website for Photography services built using WordPress.',
			website: 'https://www.reframe.ae/'
		},
		{
			id: 5,
			image: fifthproject,
			title: 'Template one',
			description: ' Templates built using HTML, CSS and JavaScript to prove designing skills',
			website: 'https://mohammed-nour.github.io/HTML_And_CSS_Template_One/'
		},
		{
			id: 6,
			image: sixthproject,
			title: 'Template Two',
			description: ' Templates built using HTML, CSS and JavaScript to prove designing skills',
			website: 'https://mohammed-nour.github.io/HTML_And_CSS_Template_Two/'
		},
		{
			id: 7,
			image: seventhproject,
			title: 'Promed App',
			description:
				'A mobile app built using Android kotlin / Django Rest that sells licenses to watch medical courses in Arabic.',
			website: 'https://drive.google.com/file/d/1eXfNmmJa6cCtJ7tlEoUAynJwzwzKx8tq/view'
		},
		{
			id: 8,
			image: eighthproject,
			title: 'Alsahil Compnay',
			description:
				'Took part in training ,improving my skills and I am participating as Frontend Developer in an Accounting web app.',
			website: 'https://al-sahil.net/'
		}
	];
</script>

<!-- Start Articles -->
<div class="projects" id="projects">
	<h2 class="main-title">My Projects</h2>
	<div class="container">
		<div class="parent-of-box">
			{#each projects as project (project.id)}
				<Box
					image={project.image}
					title={project.title}
					description={project.description}
					website={project.website}
				/>
			{/each}
		</div>
	</div>
</div>

<!-- End Articles -->

<!-- <style>
	@import '../css/main.css';
	@import '../css/Normalize.css';
	@import '../css/all.min.css';
</style> -->
