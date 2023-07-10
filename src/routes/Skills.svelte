<script lang="ts">
	import skillsImage from '$lib/images/skills.png';
	export let skills = [
		{ name: 'HTML', percentage: 80 },
		{ name: 'CSS', percentage: 85 },
		{ name: 'JavaScript', percentage: 70 },
		{ name: 'Python', percentage: 80 }
	];
</script>

<div class="our-skills" id="our-skills">
	<h2 class="main-title">My Skills</h2>
	<div class="container">
		<div class="image">
			<img src={skillsImage} alt="skills" />
		</div>
		<div class="skills">
			{#each skills as skill}
				<div class="skill">
					<h3>
						{skill.name}
						<span>{skill.percentage}%</span>
					</h3>
					<div class="progress">
						<span style="width: {skill.percentage}%;" />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	/* Add your custom styles here */
</style>
