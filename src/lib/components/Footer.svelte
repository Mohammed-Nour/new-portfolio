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
				{#each socialMediaLinks as { id, href, icon }}
					<li>
						<a {id} {href}>
							<i class={icon} />
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
				<p>Business Hours: From time <time>10:00</time> To <time>18:00</time></p>
			</li>
			<li>
				<i class="fas fa-phone-volume fa-fw" />
				<a class="phone" href="tel:+79770594318">+79770594318</a>
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
	<p class="name">Made by Mohamad Nour Shahin</p>
</footer>

<!-- End Footer -->

<style>
	footer {
		background-color: #191919;
		padding: 25px 0;
		color: #ccc;
	}
	footer > .container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 30px;
	}
	footer > .container > .define > .title {
		font-size: 60px;
		letter-spacing: -2px;
	}
	footer > .container > .define > .social-media {
		display: flex;
		gap: 10px;
	}
	footer > .container > .define > .social-media > li {
		background-color: #313131;
		padding: 10px;
		margin-top: -25px;
		width: 50px;
		text-align: center;
		cursor: pointer;
		border-radius: 8px;
	}
	footer > .container > .define > .social-media > li > a > i {
		color: #ccc;
	}
	footer > .container > .define > .content {
		line-height: 2;
		margin: 25px 0;
	}
	footer > .container > .links {
		padding: 60px 0;
	}
	footer > .container > .links > li {
		border-bottom: 1px solid #444;
		padding: 15px 20px;
	}
	footer > .container > .links > li > a {
		position: relative;
		padding-left: 5px;
		color: #ccc !important;
		transition: 0.3s;
	}
	.phone {
		color: #ccc !important;
	}
	footer > .container > .links > li > a:hover {
		transform: translateX(10px);
	}
	footer > .container > .links > li > a::before {
		font-family: 'Font Awesome 5 Free';
		content: '\F101';
		font-weight: 900;
		position: absolute;
		left: -20px;
		top: 0px;
		width: 50px;
		color: #2196f3;
	}
	footer > .container > .info {
		padding: 65px 0;
		display: flex;
		flex-direction: column;
		gap: 50px;
	}
	footer > .container > .info > li {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	footer > .container > .info > li > i {
		color: #2196f3;
		font-size: 25px;
	}
	footer > .container > .info > li > p {
		line-height: 1.8;
		font-size: 16px;
	}
	footer > .container > .images {
		padding: 65px 0px;
	}
	footer > .container > .images > img {
		width: 75px;
		max-width: 75px;
		border: 3px solid white;
		margin-left: 5px;
		margin-bottom: 5px;
	}
	footer > .name {
		padding: 15px 0px;
		text-align: center;
		border-top: 1px solid #444;
		margin: 10px auto;
		transform: translateY(50%);
	}
	/* End Footer */
</style>
