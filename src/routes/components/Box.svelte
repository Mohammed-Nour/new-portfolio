<script lang="ts">
	export let image: string;
	export let title: string;
	export let description: string;
	export let website: string;
</script>

<!-- Start Box -->
<div class="box">
	<div class="img">
		<img height="135" src={image} alt={title} />
	</div>

	<div class="content">
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
	<div class="info">
		<a target="_blank" href={website}>See the website</a>
		<i class="fas fa-long-arrow-alt-right" />
	</div>
</div>

<!-- End Box -->

<style>
	@import './../../css/main.css';
	@import './../../css/Normalize.css';
	@import './../../css/all.min.css';
	.img {
		text-align: center;
	}
</style>
