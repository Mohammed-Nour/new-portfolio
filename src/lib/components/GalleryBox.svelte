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
	.box {
		background-color: white;
		box-shadow: 0px 12px 20px 0px rgb(0 0 0 / 13%), 0px 2px 4px 0px rgb(0 0 0 / 12%);
		padding: 15px;
		overflow: hidden;
	}
	.box > .image {
		position: relative;
		overflow: hidden;
	}
	.box > .image::before {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		background-color: rgb(255 255 255 / 20%);
		transform: translate(-50%, -50%);
		opacity: 0;
		width: 0px;
		height: 0px;
		z-index: 1;
	}
	.box > .image:hover::before {
		animation: flashing 0.7s;
	}
	.box > .image > img {
		max-width: 100%;
		width: 100%;
		transition: 0.3s;
	}
	.box > .image:hover > img {
		transform: rotate(5deg) scale(1.1);
	}
	@keyframes flashing {
		0%,
		40% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			width: 200%;
			height: 200%;
		}
	}
</style>
