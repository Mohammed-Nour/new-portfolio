<script lang="ts">
	interface Service {
		icon: string;
		title: string;
		number: string;
	}

	let services: Service[] = [
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
		{#each services as { icon, title, number }}
			<div class="box">
				<div class="icon">
					<i class={icon} />
				</div>
				<div class="title">
					<h3>{title}</h3>
				</div>
				<div class="details">
					<span data-number={number} />
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.services {
		background-color: #ececec;
		padding-top: 100px;
		padding-bottom: 100px;
	}
	.services > .container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 40px;
	}
	.services > .container > .box {
		background-color: white;
		box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
		transition: 0.3s;
	}
	.services > .container > .box::before {
		content: '';
		position: absolute;
		left: 50%;
		top: 0;
		width: 0%;
		height: 3px;
		background-color: #2196f3;
		transition: 0.3s;
	}
	.services > .container > .box:hover::before {
		width: 100%;
		left: 0;
	}
	.services > .container > .box:hover {
		transform: translateY(-10px);
	}
	.services > .container > .box > .icon {
		padding: 25px 0px;
		color: #d5d5d5;
	}
	.services > .container > .box > .title {
		padding-bottom: 25px;
		font-size: 22px;
		color: #2196f3;
	}
	.services > .container > .box > .details {
		padding: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		width: 100%;
		background-image: linear-gradient(
			119deg,
			var(--main-color) 25%,
			#d5d5d5 25%,
			#d5d5d5 39%,
			#f9f9f9 39%
		);
	}
	.services > .container > .box > .details > span::before {
		content: attr(data-number);
		color: white;
		font-size: 30px;
		font-weight: bold;
		position: relative;
		z-index: 1;
		padding-left: 17px;
	}

	/* End Services */
</style>
