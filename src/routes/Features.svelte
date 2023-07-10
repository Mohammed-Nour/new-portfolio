<script lang="ts">
	import firstFeature from '$lib/images/features-01.jpg';
	import secondFeature from '$lib/images/features-02.jpg';
	import thirdFeature from '$lib/images/features-03.jpg';

	interface Feature {
		image: string;
		title: string;
		description: string;
	}

	let features: Feature[] = [
		{
			image: firstFeature,
			title: 'Quality',
			description:
				'Ensuring high quality is paramount for developers, as it involves rigorous testing, code reviews, and adherence to best practices, ultimately resulting in robust and reliable software solutions.'
		},
		{
			image: secondFeature,
			title: 'Time',
			description:
				'Effective time management is essential for developers, enabling them to efficiently allocate their resources and prioritize tasks to meet project deadlines and deliver high-quality software.'
		},
		{
			image: thirdFeature,
			title: 'Passion',
			description:
				'Passion drives developers to continuously learn, explore new technologies, and push their limits, fueling their creativity and dedication to creating innovative and impactful solutions.'
		}
	];
</script>

<!-- Start Features -->
<div class="features" id="features">
	<h2 class="main-title">My Features</h2>
	<div class="container">
		{#each features as feature}
			<div class="box {feature.title.toLowerCase()}">
				<div class="image">
					<img src={feature.image} alt={feature.title} />
				</div>
				<div class="content">
					<h3>{feature.title}</h3>
					<p>{feature.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- End Features -->

<style>
	/* @import '../css/main.css';
	@import '../css/Normalize.css';
	@import '../css/all.min.css'; */
</style>
