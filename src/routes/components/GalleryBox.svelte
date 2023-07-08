<script lang="ts">
	export let image: string;
	export let alt: string;
</script>

<div class="box">
	<div class="image">
		<img src={image} {alt} />
	</div>
</div>

<style>
	@import '../../css/main.css';
	@import './../../css/Normalize.css';
	@import './../../css/all.min.css';
</style>
