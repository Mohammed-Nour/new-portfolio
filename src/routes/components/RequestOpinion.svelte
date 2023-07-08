<script lang="ts">
	import discount from '../../lib/images/discount.png';

	let statsSection: HTMLDivElement;
	let numbers: HTMLSpanElement[] = [];
	let check: boolean;
	import { onMount } from 'svelte';

	onMount(() => {
		statsSection = document.querySelector('.stats') as HTMLDivElement;
		numbers = Array.from(document.querySelectorAll('.stats .container .boxes .box .number'));
		window.addEventListener('scroll', handleScroll);
		check = false;
	});

	function handleScroll() {
		if (window.scrollY >= statsSection.offsetTop) {
			if (!check) {
				numbers.forEach((element) => counting(element));
				check = true;
			}
		}
	}
	function counting(element: HTMLSpanElement) {
		let goal = Number(element.dataset.goal);
		let count = setInterval(() => {
			let currentCount = Number(element.textContent);
			element.textContent = String(currentCount + 1);
			if (currentCount == goal) {
				clearInterval(count);
			}
		}, 2000 / goal);
	}
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
	@import '../../css/main.css';
	@import './../../css/Normalize.css';
	@import './../../css/all.min.css';
</style>
