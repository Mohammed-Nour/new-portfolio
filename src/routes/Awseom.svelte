<script lang="ts">
	export let stats = [
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
	/* @import '../css/main.css';
	@import '../css/Normalize.css';
	@import '../css/all.min.css'; */

	/* Add any custom styles for the "stats" component here */
</style>
