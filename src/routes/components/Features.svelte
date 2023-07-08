<script lang="ts">
	import firstFeature from '../../lib/images/features-01.jpg';
	import secondFeature from '../../lib/images/features-02.jpg';
	import thirdFeature from '../../lib/images/features-03.jpg';
</script>

<!-- Start Features -->
<div class="features" id="features">
	<h2 class="main-title">My Features</h2>
	<div class="container">
		<div class="box quality">
			<div class="image">
				<img src={firstFeature} alt="First feature" />
			</div>
			<div class="content">
				<h3>Quality</h3>
				<p>
					Ensuring high quality is paramount for developers, as it involves rigorous testing, code
					reviews, and adherence to best practices, ultimately resulting in robust and reliable
					software solutions.
				</p>
			</div>
		</div>
		<div class="box time">
			<div class="image">
				<img src={secondFeature} alt="Second feature" />
			</div>
			<div class="content">
				<h3>Time</h3>
				<p>
					Effective time management is essential for developers, enabling them to efficiently
					allocate their resources and prioritize tasks to meet project deadlines and deliver
					high-quality software.
				</p>
			</div>
		</div>
		<div class="box passion">
			<div class="image">
				<img src={thirdFeature} alt="Third Feature" />
			</div>
			<div class="content">
				<h3>Passion</h3>
				<p>
					Passion drives developers to continuously learn, explore new technologies, and push their
					limits, fueling their creativity and dedication to creating innovative and impactful
					solutions.
				</p>
			</div>
		</div>
	</div>
</div>

<!-- End Features -->

<style>
	@import '../../css/main.css';
	@import './../../css/Normalize.css';
	@import './../../css/all.min.css';
</style>
