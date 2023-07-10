<script lang="ts">
	export let services = [
		{ icon: 'fas fa-user-shield fa-4x', title: 'Security', number: '01' },
		{ icon: 'fas fa-tools fa-4x', title: 'Fixing Issues', number: '02' },
		{ icon: 'fas fa-map-marked-alt fa-4x', title: 'Location', number: '03' },
		{ icon: 'fas fa-laptop-code fa-4x', title: 'Coding', number: '04' },
		{ icon: 'fas fa-palette fa-4x', title: 'Design', number: '05' },
		{ icon: 'fas fa-bullhorn fa-4x', title: 'Marketing', number: '06' }
	];
</script>

<div class="services" id="services">
	<h2 class="main-title">My Services</h2>
	<div class="container">
		{#each services as service}
			<div class="box">
				<div class="icon">
					<i class={service.icon} />
				</div>
				<div class="title">
					<h3>{service.title}</h3>
				</div>
				<div class="details">
					<span data-number={service.number} />
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	/* Add your custom styles here */
</style>
