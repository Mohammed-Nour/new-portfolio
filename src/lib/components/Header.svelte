<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
</script>

<!-- Start Heading -->
<header>
	<div class="container">
		<a href="{base}/" class="logo">Portofolio</a>
		<ul class="main-nav">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="{base}/">Portofolio</a>
			</li>
			<li aria-current={$page.url.pathname === '/comic' ? 'page' : undefined}>
				<a href="{base}/comic">Comic</a>
			</li>
		</ul>
	</div>
</header>

<!-- End Heading -->

<style>
	header {
		background-color: white;
		box-shadow: 0 0 10px #ddd;
		position: relative;
	}
	header .container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		position: relative;
	}
	@media (max-width: 767px) {
		header .container {
			flex-direction: column;
			height: 100%;
			display: block;
		}
	}
	header .logo {
		color: #2196f3;
		font-weight: bold;
		font-size: 26px;
		height: 69px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@media (max-width: 767px) {
		header .logo {
			width: 100%;
			height: 50px;
		}
	}
	header .main-nav {
		display: flex;
	}
	@media (max-width: 767px) {
		header .main-nav {
			height: fit-content;
			width: fit-content;
			margin: auto;
		}
	}

	header .container .main-nav > li > a {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 69px;
		color: black;
		position: relative;
		padding: 0 30px;
		transition: 0.3s;
		overflow: hidden;
	}
	@media (max-width: 767px) {
		header .container .main-nav > li > a {
			font-size: 14px;
			padding: 10px;
			height: 40px;
		}
	}
	header .container .main-nav > li > a::before {
		content: '';
		position: absolute;
		transition: 0.3s;
		width: 100%;
		height: 4px;
		background-color: #2196f3;
		top: 0;
		left: -100%;
	}
	header .container .main-nav li:hover a::before {
		transition: 0.3s;
		position: absolute;
		left: 0;
		fill: black;
	}
	header .container .main-nav > li > a:hover {
		color: #2196f3;
		background-color: #fafafa;
		text-decoration: none;
	}
</style>
