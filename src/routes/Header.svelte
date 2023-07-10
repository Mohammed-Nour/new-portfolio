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
</style>
