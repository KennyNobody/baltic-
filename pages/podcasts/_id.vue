<template>
	<div class="page page-single-programs single-program">
		<h2 class="title title--post">
			<div class="title__line">
				<nuxt-link to="/" class="title__crumb">
					Главная
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
				<nuxt-link to="/news/" class="title__crumb">
					Подкасты
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
			</div>
			<p class="title__text">{{ podcast.title }}</p>
			<p class="title__control"></p>
		</h2>
		<article class="single-podcast">
			<div class="single-podcast__thumb">
				<img :src="podcast.thumb" :alt="podcast.title">
			</div>
			<div class="single-podcast__content">
				<div class="single-podcast__header">
					<div class="single-podcast__play">
						<svg class="podcast__play-icon" v-if="podcast.play == false">
							<use xlink:href="#icon-icon-play"></use>
						</svg>
						<svg class="podcast__playing-icon" v-else>
							<use xlink:href="#icon-icon-playing"></use>
						</svg>
					</div>
					<div class="single-podcast__info">
						<div class="single-podcast__subheader">
							<time class="single-podcast__time">{{ $moment.unix(podcast.date).format('DD/MM/YYYY') }}</time>
							<client-only placeholder="Loading...">
								<div class="podcast__share">
									<transition name="fade">
										<yandex-share v-if="showToggle" v-bind="content" :services="['telegram', 'whatsapp', 'viber', 'vkontakte','facebook']"/>
									</transition>
									<svg v-on:click="showToggle = !showToggle" class="podcast__share-icon">
										<use xlink:href="#icon-icon-share"></use>
									</svg>
								</div>
							</client-only>
						</div>
						<h2 class="single-podcast__title">
							<v-clamp :max-lines="2">{{ podcast.title }}</v-clamp>
						</h2>
						<div class="single-podcast__subfooter">
							<div class="single-podcast__footer">
								<div class="single-podcast__information">
									<v-clamp :max-lines="1">{{ podcast.info }}</v-clamp>
								</div> 
								<div class="single-podcast__duration">
									25:15
								</div>
							</div>
						</div>
					</div>
					
				</div>
				<p class="single-podcast__content-discript">
					Другие новости читайте на сайте: <a href="http://balticplus.ru">http://balticplus.ru</a>.
					<br>
					Свежий выпуск новостей слушайте каждый час по будням c 07:00 до 19:00 на 105.2 FМ
				</p>
			</div>
			<div class="single-podcast__discript"  v-html="podcast.content"></div>
		</article>
	</div>
</template>

<script>
	import appPodcast from '~/components/Podcast';
	import VClamp from 'vue-clamp';
	import YandexShare from '@cookieseater/vue-yandex-share';

	export default {
		head () {
			return {
				title: this.podcast.title + ' - Балтик+',
				meta: [
				{}
				]
			}
		},
		data () {
			return {
				showToggle: false,
				content: {
					title: this.title,
					url: process.env.baseURL + '/podcasts/' + this.id,
					url: '${$axios.defaults.baseURL}',
					image: this.thumb,
					description: this.info,
				}
			}
		},
		mounted () {
			this.$store.dispatch('podcasts/fetchSingle', this.$route.params.id);
			console.log(process)
		},
		name: 'page-podcast',
		validate({params}){
			return /^\d+$/.test(params.id)
		},
		computed: {
			podcast ({app, params}) {
				return this.$store.getters['podcasts/singlePodcast']
			}
		},
		asyncData({$axios, params}) {
			const now = params.id
			return {now}
		},
		components: {
			appPodcast,
			VClamp,
			YandexShare
		},
	}
</script>

<style lang="scss">
.single-podcast {
	display: flex;
	justify-content: space-between;
	@include r(1100) {
		display: block;
	}
	&__thumb {
		width: 247px;
		height: 247px;
		flex-shrink: 0;
		@include r(1100) {
			display: none;
		}
		img {
			display: block;
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
	&__content {
		width: 442px;
		background-color: $light;
		flex-shrink: 0;
		height: 247px;
		padding: 13px 16px 16px 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@include r(1100) {
			width: 100%;
			height: auto;
			margin-bottom: 20px;
		}
	}
	&__discript {
		margin-left: 20px;
		min-width: 0px;
		flex-grow: 1;
		color: $light;
		p {
			margin-bottom: 1em;
		}
	}
	&__content-discript {
		a {
			color: $dark;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
	}
	&__info {
		flex-grow: 1;
	}
	&__play {
		background-color: $dark;
		height: 68px;
		width: 68px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50px;
		transition: 0.3s all;
		cursor: pointer;
		margin-right: 20px;
		flex-shrink: 0;
		position: relative;
		top: 15px;
		&:hover {
			opacity: 0.7;
		}
		svg {
			height: 30px;
			width: 30px;
			position: relative;
			left: 2px;
		}
	}
	&__header {
		flex-grow: 1;
		min-width: 0px;
		display: flex;
		justify-content: space-between;
		color: $dark;
	}
	&__subheader {
		display: flex;
		justify-content: space-between;
		margin-bottom: 15px;
	}
	&__time {
		color: $blue;
	}
	&__share-icon {
		height: 30px;
		width: 30px;
		cursor: pointer;
		transition: 0.3s all;
		&:hover {
			opacity: 0.7;
		}
	}
	&__title {
		font-weight: 600;
		font-size: 22px;
		line-height: 23px;
		margin-bottom: 10px;
	}
	&__footer {
		display: flex;
		justify-content: space-between;
	}
	&__information {
		font-size: 16px;
		line-height: 22px;
		padding-right: 10px;
	}
	&__duration {
		font-size: 14px;
		line-height: 28px;
		color: #BDBDBD;
	}
}
</style>