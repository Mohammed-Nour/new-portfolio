<script lang="ts">
	export let image: string;
	export let alt: string;
</script>

<div class="box">
	<div class="image">
		<img src={image} {alt} />
	</div>
</div>

<style></style>
