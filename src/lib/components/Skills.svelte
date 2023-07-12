<script lang="ts">
	import skillsImage from '$lib/images/skills.png';
	interface Skill {
		name: string;
		percentage: number;
	}

	let skills: Skill[] = [
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
			{#each skills as { name, percentage }}
				<div class="skill">
					<h3>
						{name}
						<span>{percentage}%</span>
					</h3>
					<div class="progress">
						<span style="width: {percentage}%;" />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

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

	.our-skills {
		padding-top: 100px;
		padding-bottom: 100px;
	}

	.our-skills > .container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.our-skills > .container > .image > img {
		max-width: 100%;
		width: 100%;
	}
	@media (max-width: 1200px) {
		.our-skills > .container > .image {
			display: none;
		}
	}
	.our-skills > .container > .skills {
		flex-basis: 60%;
	}
	@media (max-width: 1200px) {
		.our-skills > .container > .skills {
			flex-basis: 100%;
		}
	}
	.our-skills > .container > .skills > .skill {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding: 10px;
		gap: 15px;
	}
	.our-skills > .container > .skills > .skill > h3 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	.our-skills > .container > .skills > .skill > h3 > span {
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 5px;
		font-size: 12px;
		color: #2196f3;
	}
	.our-skills > .container > .skills > .skill > .progress {
		height: 30px;
		width: 100%;
		background-color: #eee;
		position: relative;
	}
	.our-skills > .container > .skills > .skill > .progress > span {
		position: absolute;
		height: 30px;
		width: 0%;
		background-color: #2196f3;
		transition: width 0.5s linear;
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
