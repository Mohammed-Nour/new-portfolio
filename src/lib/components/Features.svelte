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
		{#each features as { title, image, description }}
			<div class="box {title.toLowerCase()}">
				<div class="image">
					<img src={image} alt={title} />
				</div>
				<div class="content">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- End Features -->

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
	.features {
		padding-top: 100px;
		padding-bottom: 100px;
	}
	.features > .container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 40px;
	}
	.features > .container > .box {
		border: 1px solid #777;
	}
	.features > .container > .box > .image {
		position: relative;
		overflow: hidden;
	}
	.features > .container > .box > .image::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		overflow: hidden;
	}
	.features > .container > .box > .image::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		border-style: solid;
		border-width: 0px 0px 170px 500px;
		border-color: transparent transparent white transparent;
		z-index: 1;
		transition: 0.3s;
	}
	.features > .container > .box:hover > .image::after {
		border-width: 170px 500px 270px 0px;
	}
	.features > .container > .quality > .image::before {
		background-color: rgb(244 64 54 / 60%);
	}
	.features > .container > .time > .image::before {
		background-color: rgb(0 150 136 / 60%);
	}
	.features > .container > .passion > .image::before {
		background-color: rgb(3 169 244 / 60%);
	}
	.features > .container > .box > .image > img {
		max-width: 100%;
	}
	.features > .container > .box > .content > h3 {
		text-align: center;
		margin: 10px auto 10px auto;
		font-size: 40px;
		width: fit-content;
		position: relative;
	}
	.features > .container > .box > .content > h3::after {
		content: '';
		left: 10%;
		top: 100%;
		width: 80%;
		margin-top: 10px;
		border-bottom: 5px solid transparent;
		position: absolute;
	}
	.features > .container > .quality > .content > h3::after {
		background-color: #f44036;
	}
	.features > .container > .time > .content > h3::after {
		background-color: #009688;
	}
	.features > .container > .passion > .content > h3::after {
		background-color: #03a9f4;
	}
	.features > .container > .box > .content > p {
		padding: 40px 30px;
		text-align: center;
		line-height: 2;
		font-size: 20px;
		color: #777;
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
