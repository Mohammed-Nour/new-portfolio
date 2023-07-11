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
	.box {
		box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
		background-color: white;
		border-radius: 6px;
		overflow: hidden;
		padding: 0 0 10px 0;
		margin-bottom: 40px;
		margin-left: 3px;
		transition: transform 0.3s, box-shadow 0.3s;
		transition-delay: 0.05s;
	}
	.box:hover {
		transform: translateY(-10px);
		box-shadow: 0px 2px 15px rgb(0 0 0 / 20%);
	}

	.box > .content {
		padding: 20px;
		max-width: 100%;
		height: 300px;
	}
	.box > .content > h3 {
		margin: 0;
		max-width: 100%;
	}
	.box > .content > p {
		margin: 10px 0 0;
		font-size: 18px;
		line-height: 1.5;
		color: #777;
		max-width: 100%;
	}
	.box > .info {
		padding: 20px;
		height: 5px;
		border-top: 1px solid #e6e6e7;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.box > .info > a {
		color: #2196f3;
		font-weight: bold;
	}
	.box > .info > i {
		color: #2196f3;
	}
	.box:hover > .info > i {
		animation: moving-arrow 0.6s linear infinite;
	}
	.img {
		text-align: center;
		max-width: 100%;
		margin-bottom: 10px;
		border-radius: 6px;
	}
	@keyframes moving-arrow {
		100% {
			transform: translateX(10px);
		}
	}
</style>
