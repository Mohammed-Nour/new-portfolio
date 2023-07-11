<script lang="ts">
	import discount from '$lib/images/discount.png';
</script>

<!-- Start Discount -->
<div class="discount" id="discount">
	<div class="image">
		<div class="content">
			<h2>We Have A Discount</h2>
			<p>
				Offering discounts can be an effective strategy for businesses to attract customers, boost
				sales, and create a sense of urgency, encouraging potential buyers to take advantage of
				reduced prices within a specific timeframe.
			</p>
			<img src={discount} alt="discount" />
		</div>
	</div>
	<div class="form">
		<h1>Request A Discount</h1>
		<form>
			<input type="text" placeholder="Your Name" />
			<input type="email" placeholder="Your Email" />
			<input type="text" placeholder="Your Phone" />
			<textarea cols="30" rows="8" placeholder="Tell Us About Your Needs" />
			<input type="submit" value="Send" />
		</form>
	</div>
</div>

<!-- End Discount -->

<style>
	.discount {
		display: flex;
		flex-wrap: wrap;
		min-height: 100vh;
	}
	.discount > .image {
		flex-basis: 50%;
		background-image: url($lib/images/discount-background1.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		z-index: 3;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	@media (max-width: 991px) {
		.discount > .image {
			flex-basis: 100%;
		}
	}
	.discount > .image::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgb(23 135 224 / 97%);
		z-index: 1;
	}
	.discount > .image > .content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: white;
	}
	.discount > .image > .content > h2 {
		z-index: 1;
		position: relative;
		padding: 70px 50px 0px 50px;
		text-align: center;
		font-size: 40px;
		letter-spacing: -2px;
	}
	.discount > .image > .content > p {
		z-index: 1;
		position: relative;
		line-height: 1.8;
		text-align: center;
		font-size: 18px;
		max-width: 500px;
		padding: 25px;
	}
	.discount > .image > .content > img {
		width: 100%;
		max-width: 300px;
		position: relative;
		z-index: 1;
		margin-bottom: 25px;
	}
	.discount > .form {
		flex-basis: 50%;
		background-color: white;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	@media (max-width: 991px) {
		.discount > .form {
			flex-basis: 100%;
		}
	}
	.discount > .form > h1 {
		font-size: 35px;
		padding: 20px;
		letter-spacing: -2px;
	}
	.discount > .form > form {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.discount > .form > form > input {
		border: none;
		background-color: #f9f9f9;
		padding: 15px;
		width: 94%;
		margin: 10px;
		border-bottom: 1px solid #ccc;
		border-radius: 6px;
		outline: none;
		-webkit-border-radius: 6px;
		-moz-border-radius: 6px;
		-ms-border-radius: 6px;
		-o-border-radius: 6px;
		caret-color: #2196f3;
	}
	.discount > .form > form > textarea {
		border: none;
		background-color: #f9f9f9;
		padding: 15px;
		margin: 10px;
		resize: none;
		border-bottom: 1px solid #ccc;
		border-radius: 6px;
		outline: none;
		-webkit-border-radius: 6px;
		-moz-border-radius: 6px;
		-ms-border-radius: 6px;
		-o-border-radius: 6px;
		caret-color: #2196f3;
	}
	.discount > .form > form > input[type='submit'] {
		background-color: #2196f3;
		cursor: pointer;
		color: white;
		font-size: 20px;
		font-weight: bold;
		transition: 0.3s;
	}
	.discount > .form > form > input[type='submit']:hover {
		background-color: #1787e0;
	}
</style>
