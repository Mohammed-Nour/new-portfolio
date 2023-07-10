<script lang="ts">
	import firstproject from '$lib/images/firstproject.png';
	import secondproject from '$lib/images/secondproject.png';
	import thirdproject from '$lib/images/thirdproject.png';
	import Fourthproject from '$lib/images/Fourthproject.png';
	import fifthproject from '$lib/images/fifthproject.png';
	import sixthproject from '$lib/images/sixthproject.png';
	import { base } from '$app/paths';

	interface SocialMediaLink {
		id: string;
		href: string;
		icon: string;
	}

	let socialMediaLinks: SocialMediaLink[] = [
		{
			id: 'gh-link',
			href: 'https://github.com/Mohammed-Nour',
			icon: 'fab brands fa-github'
		},
		{
			id: 'ld-link',
			href: 'https://linkedin.com/in/mohamed-nour-shaheen-5b3569257',
			icon: 'fab brands fa-linkedin'
		},
		{
			id: 'email',
			href: 'mailto:o.shaheen1882@gmail.com',
			icon: 'fab brands fa-google'
		},
		{
			id: 'tg-link',
			href: 'https://t.me/Mohamad_Nour0',
			icon: 'fab brands fa-telegram'
		},
		{
			id: 'tw-link',
			href: 'https://twitter.com/MohammedNoorS11',
			icon: 'fab fa-twitter'
		}
	];
</script>

<!-- Start Footer -->
<footer>
	<div class="container">
		<div class="define">
			<h1 class="title">About Me</h1>
			<ul class="social-media">
				{#each socialMediaLinks as link}
					<li>
						<a id={link.id} href={link.href}>
							<i class={link.icon} />
						</a>
					</li>
				{/each}
			</ul>
			<div class="content">
				I'm a front-end developer with a huge experience of working on real projects using
				frameworks like Next.js, React.js, Vue.js, and Nuxt.js.
			</div>
		</div>
		<ul class="links">
			<li><a href="{base}/#landing">landing</a></li>
			<li><a href="{base}/#projects">Projects</a></li>
			<li><a href="{base}/#gallery">Gallery</a></li>
			<li><a href="{base}/#features">Features</a></li>
			<li><a href="{base}/#services">Services</a></li>
		</ul>
		<ul class="info">
			<li>
				<i class="fas fa-map-marker-alt fa-fw" />
				<p>Russia, Kazan, Innopolis</p>
			</li>
			<li>
				<i class="far fa-clock fa-fw" />
				<p>Business Hours: From 10:00 To 18:00</p>
			</li>
			<li>
				<i class="fas fa-phone-volume fa-fw" />
				<p>+79770594318</p>
			</li>
		</ul>
		<div class="images">
			<img src={firstproject} alt="firstproject" />
			<img src={secondproject} alt="secondproject" />
			<img src={thirdproject} alt="thirdproject" />
			<img src={Fourthproject} alt="Fourthproject" />
			<img src={fifthproject} alt="fifthproject" />
			<img src={sixthproject} alt="sixthproject" />
		</div>
	</div>
	<p class="name">Made With Mohamad Nour Shahin</p>
</footer>

<!-- End Footer -->

<style>
</style>
