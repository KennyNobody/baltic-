<template>
	<div class="page page--home">
		<section class="home-slider">
			<appSlider></appSlider>
		</section>
		<section class="home-now">
			Сейчас
		</section>
		<section class="home-news">
			<h2 class="title">
				<div class="title__line"></div>
				<p class="title__text">Региональные новости</p>
				<p class="title__control">
					
				</p>
			</h2>
		</section>
		<section class="home-programs">
			<h2 class="title">
				<div class="title__line"></div>
				<p class="title__text">Программы</p>
				<p class="title__control">
					<nuxt-link class="title__link" to="/programs/">
						Все программы
					</nuxt-link>
				</p>
			</h2>
			<div class="home-programs__items">
				<a href="#" class="home-programs__item">
					<img src="http://placehold.it/600x600" alt="Альт">
				</a>
				<a href="#" class="home-programs__item">
					<img src="http://placehold.it/600x600" alt="Альт">
				</a>
				<a href="#" class="home-programs__item">
					<img src="http://placehold.it/600x600" alt="Альт">
				</a>
				<a href="#" class="home-programs__item">
					<img src="http://placehold.it/600x600" alt="Альт">
				</a>
				<a href="#" class="home-programs__item">
					<img src="http://placehold.it/600x600" alt="Альт">
				</a>
				<div class="home-programs__item--clear"></div>
				<div class="home-programs__item--clear"></div>
			</div>
		</section>
		<section class="home-podcasts">
			<h2 class="title">
				<div class="title__line"></div>
				<p class="title__text">Подкасты</p>
				<p class="title__control">
					<nuxt-link class="title__link" to="/podcasts/">
						Все подкасты
					</nuxt-link>
				</p>
			</h2>
			<div class="home-podcasts__articles">
				<appPodcast v-for="item in podcastsCount" v-bind:key="item.id"></appPodcast>
			</div>
		</section>
		<section class="home-video">
			<h2 class="title">
				<div class="title__line"></div>
				<p class="title__text">Гость в эфире</p>
			</h2>
			<div class="home-video" v-html="videoCode">
				
			</div>
		</section>
		<section class="home-blog">
			<h2 class="title">
				<div class="title__line"></div>
				<p class="title__text">Блог радиостанции</p>
			</h2>
			<div class="home-blog__articles">
				<appArticle v-for="item in newsCount" v-bind:key="item.id"></appArticle>
				<div class="home-blog__clear"></div>
			</div>
		</section>

	</div>
</template>

<script>

	import appSlider from '~/components/sections/MainSlider'
	import appArticle from '~/components/Article'
	import appPodcast from '~/components/Podcast'

	export default {
		name: 'home',
		data () {
			return {
				podcastsCount: 8,
				newsCount: 3,
				videoCode: '<iframe src="https://www.youtube.com/embed/Mhv_JA47vYI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
			}
		},
		components: {
			appSlider,
			appArticle,
			appPodcast
		}
	}
</script>

<style lang="scss">
	.home-slider {
		margin-bottom: 22px;
	}
	.home-now {
		margin-bottom: 105px;
	}
	.home-news {
		margin-bottom: 105px;
	}
	.home-programs {
		margin-bottom: 105px;
		&__items {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
		}
		&__item {
			display: block;
			width: calc(33% - 10px);
			margin-bottom: 20px;
			img {
				height: inherit;
				width: 100%;
				display: block;
			}
			&--clear {
				height: 0px;
				display: block;
				width: calc(33% - 10px);
			}
			&:hover {
				opacity: 0.9;
			}
		}
	}
	.home-podcasts {
		margin-bottom: 105px;
		&__articles {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
		}
	}
	.home-video {
		margin-bottom: 105px;
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		overflow: hidden;
		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-width: 0;
			outline-width: 0;
		}
	}
	.home-blog {
		margin-bottom: 55px;
		&__articles {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
		}
		&__clear {
			width: calc(33% - 10px);
		}
	}
</style>