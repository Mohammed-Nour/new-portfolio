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
</style>
