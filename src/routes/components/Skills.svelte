<script lang="ts">
	import skills from '../../lib/images/skills.png';
	import { onMount } from 'svelte';

	let ourSkillsSection: HTMLDivElement;
	let progress: HTMLSpanElement[] = [];

	onMount(() => {
		ourSkillsSection = document.querySelector('.our-skills') as HTMLDivElement;
		progress = Array.from(
			document.querySelectorAll('.our-skills .container .skills .skill .progress span')
		);

		window.addEventListener('scroll', handleScroll);
	});

	function handleScroll() {
		if (window.scrollY >= ourSkillsSection.offsetTop) {
			progress.forEach((element) => {
				if (element.dataset.width) {
					element.style.width = element.dataset.width;
				}
			});
		}
	}
</script>

<!-- Start Our Skills -->
<div class="our-skills" id="our-skills">
	<h2 class="main-title">My Skills</h2>
	<div class="container">
		<div class="image">
			<img src={skills} alt="skills" />
		</div>
		<div class="skills">
			<div class="skill">
				<h3>
					HTML
					<span>80%</span>
				</h3>
				<div class="progress">
					<span data-width="80%" />
				</div>
			</div>
			<div class="skill">
				<h3>
					CSS
					<span>85%</span>
				</h3>
				<div class="progress">
					<span data-width="85%" />
				</div>
			</div>
			<div class="skill">
				<h3>
					JavaScript
					<span>70%</span>
				</h3>
				<div class="progress">
					<span data-width="70%" />
				</div>
			</div>
			<div class="skill">
				<h3>
					python
					<span>80%</span>
				</h3>
				<div class="progress">
					<span data-width="80%" />
				</div>
			</div>
		</div>
	</div>
</div>

<!-- End Our Skills -->

<style>
	@import '../../css/main.css';
	@import './../../css/Normalize.css';
	@import './../../css/all.min.css';
</style>
