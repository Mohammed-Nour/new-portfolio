<script lang="ts">
	interface Stat {
		icon: string;
		number: number;
		name: string;
	}

	let stats: Stat[] = [
		{ icon: 'far fa-user fa-2x fa-fw', number: 150, name: 'Clients' },
		{ icon: 'fas fa-code fa-2x fa-fw', number: 135, name: 'Projects' },
		{ icon: 'fas fa-globe-asia fa-2x fa-fw', number: 50, name: 'Countries' },
		{ icon: 'far fa-money-bill-alt fa-2x fa-fw', number: 500, name: 'Money' }
	];
</script>

<div class="stats" id="stats">
	<div class="container">
		<h2 class="title">My Awesome Stats</h2>
		<div class="boxes">
			{#each stats as { icon, number, name }}
				<div class="box">
					<i class={icon} />
					<span class="number">{number}</span>
					<span class="name"><i>{name}</i></span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.stats {
		padding-top: 100px;
		padding-bottom: 100px;
		background-image: url($lib/images/stats.jpg);
		background-size: cover;
		position: relative;
	}
	.stats::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgb(255 255 255 / 90%);
	}
	.stats > .container {
		position: relative;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	.stats > .container > .title {
		font-size: 40px;
		padding: 20px;
		margin: 20px;
		text-align: center;
	}
	.stats > .container > .boxes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 20px;
	}
	.stats > .container > .boxes > .box {
		background-color: white;
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		border-radius: 6px;
		opacity: 0.8;
		position: relative;
		transition: 0.3s;
	}
	.stats > .container > .boxes > .box:hover {
		opacity: 1;
	}
	.stats > .container > .boxes > .box::before {
		content: '';
		position: absolute;
		right: 0;
		top: 0;
		height: 0;
		width: 2px;
		background-color: #2196f3;
		transition: 0.7s ease-out;
	}
	.stats > .container > .boxes > .box::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: #2196f3;
		width: 2px;
		height: 0;
		transition: 0.7s ease-out;
	}
	.stats > .container > .boxes > .box:hover::after,
	.stats > .container > .boxes > .box:hover::before {
		height: 100%;
	}
	.stats > .container > .boxes > .box > i {
		margin: 30px;
	}
	.stats > .container > .boxes > .box > .number {
		font-size: 45px;
		font-weight: bold;
		margin: -25px 15px 10px;
	}
	.stats > .container > .boxes > .box > .name {
		font-size: 18px;
		font-weight: bold;
		color: #2196f3;
		margin: -5px 20px 25px 20px;
	}
</style>
