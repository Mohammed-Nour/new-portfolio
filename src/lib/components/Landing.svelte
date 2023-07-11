<script lang="ts">
	import landingImage from '$lib/images/landing-image.png';
</script>

<!-- Start Landing -->
<div class="landing" id="landing">
	<div class="container">
		<div class="text">
			<h1>Welcome, To My Portofolio</h1>
			<p>
				I'm a front-end developer with a huge experience of working on real projects using
				frameworks like Next.js , React.js , Vue.js and nuxt.js. Hi! 👋
			</p>
		</div>
		<div class="image">
			<img src={landingImage} alt="landing" />
		</div>
	</div>
	<a href="#projects" class="go-down">
		<i class="fas fa-angle-double-down fa-2x" />
	</a>
</div>

<!-- End Landing -->
<style>
	/* Start Landing  */
	.landing {
		position: relative;
	}
	.landing::before {
		content: '';
		position: absolute;
		left: 0;
		top: -40px;
		width: 100%;
		height: 100%;
		background-color: #ececec;
		z-index: -1;
		transform: skewY(-6deg);
		transform-origin: top left;
	}
	.landing .container {
		min-height: calc(100vh - 69px);
		display: flex;
		align-items: center;
		padding-bottom: 120px;
	}
	.landing .text {
		flex: 1;
	}
	@media (max-width: 991px) {
		.landing .text {
			text-align: center;
		}
	}
	.landing .text h1 {
		font-size: 40px;
		letter-spacing: -2px;
		margin: 0;
	}
	@media (max-width: 767px) {
		.landing .text h1 {
			font-size: 28px;
		}
	}
	.landing .text p {
		font-size: 23px;
		color: #666;
		line-height: 1.7;
		margin: 5px 0 0;
		max-width: 500px;
	}
	@media (max-width: 991px) {
		.landing .text p {
			margin: 10px auto;
		}
	}
	@media (max-width: 767px) {
		.landing .text p {
			font-size: 18px;
		}
	}
	.landing .image img {
		position: relative;
		width: 600px;
		animation: up-and-down 4s linear infinite;
	}
	@media (max-width: 991px) {
		.landing .image {
			display: none;
		}
	}
	.landing .go-down {
		position: absolute;
		transform: translateX(-50%);
		left: 50%;
		bottom: 30px;
		color: #2196f3;
	}
	.landing .go-down:hover {
		color: #1787e0;
	}
	.landing .go-down i {
		animation: bouncing 1.5s infinite;
	}
	@keyframes up-and-down {
		0%,
		100% {
			top: 0;
		}
		50% {
			top: -30px;
		}
	}
	@keyframes bouncing {
		0%,
		10%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
			-webkit-transform: translateY(0);
			-moz-transform: translateY(0);
			-ms-transform: translateY(0);
			-o-transform: translateY(0);
		}
		40%,
		60% {
			transform: translateY(-15px);
			-webkit-transform: translateY(-15px);
			-moz-transform: translateY(-15px);
			-ms-transform: translateY(-15px);
			-o-transform: translateY(-15px);
		}
	}
</style>
