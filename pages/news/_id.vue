<template>
	<div class="page page-single-news">
		<h2 class="title title--post">
			<div class="title__line">
				<nuxt-link to="/" class="title__crumb">
					Главная
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
				<nuxt-link to="/news/" class="title__crumb">
					Новости
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
			</div>
			<p class="title__text">{{ post.title }}</p>
			<p class="title__control"></p>
		</h2>
		<div class="single-post">
			<div class="single-post__left">
				<img :src="post.preview" class="single-post__thumb" :alt="post.title">
			</div>
			<div class="single-post__right">
				<div class="single-post__info">
					<time class="single-post__time">
						{{ $moment.unix(post.date).format('hh:mm') }}
					</time>
					<time class="single-post__date">
						{{ $moment.unix(post.date).format('DD/MM/YYYY') }}
					</time>
				</div>
				{{ post.date }}
				<div class="single-post__content text" v-html="post.content">
					
				</div>
			</div>
		</div>
		{{ post.gallery_array }}
		<appGallery
		:gallery="post.gallery_array"
		></appGallery>

		<div class="single-post">
			<div class="single-post__left">
			</div>
			<div class="single-post__right">
				<div class="share">
					<p class="share__title">
						Поделиться:
					</p>
					<yandex-share :services="['telegram', 'whatsapp', 'viber', 'vkontakte','facebook']" counter />
				</div>
			</div>
		</div>
		<div class="single-post__articles">
			<appArticle
			v-for="item in posts" v-bind:key="item.id"
			:id="item.id"
			:title="item.title"
			:description="item.description"
			:thumb="item.preview"
			:slug="item.slug"
			:date="item.date"
			></appArticle>
			<div class="article article--clear"></div>
		</div>
	</div>
</template>

<script>
	import appArticle from '~/components/Article'
	import appGallery from '~/components/Gallery'
	import appPagination from '~/components/Pagination'
	import YandexShare from '@cookieseater/vue-yandex-share';

	export default {
		head () {
			return {
				title: 'Новости - Балтик+',
				meta: [
				{}
				]
			}
		},
		name: 'page-news',
		mounted() {
			this.$store.dispatch('blog/fetchSingle', this.$route.params.id);
			this.$store.dispatch('blog/fetchRandom');
		},
		validate({params}){
			return /^\d+$/.test(params.id)
		},
		computed: {
			posts(params) {
				return this.$store.getters['blog/blogRandom']
			},
			post ({app, params}) {
				return this.$store.getters['blog/singleBlog']
			}
		},
		data () {
			return {
				newsPerPage: 3,
				newsArticles: [],
			}
		},
		asyncData({$axios, params}) {
			const now = params.id
			return {now}
		},
		components: {
			appArticle,
			appPagination,
			appGallery,
			YandexShare
		},
	}
</script>

<style lang="scss">
.single-post {
	display: flex;
	justify-content: space-between;
	padding-bottom: 50px;
	@include r(1100) {
		display: block;
	}
	&__left {
		width: calc(33% - 10px);
		flex-shrink: 0;
		@include r(1100) {
			display: none;
		}
	}
	&__right {
		flex-grow: 1;
		min-width: 0px;
		padding-left: 20px;
		color: $light;
		@include r(1100) {
			padding-left: 0px;
		}
	}
	&__thumb {
		display: block;
		width: 100%;
		height: auto;
	}
	&__articles {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: 36px;
		@include r(700) {
			display: none;
		}
	}
	&__info {
		color: $blue;
		font-weight: bold;
		margin-bottom: 21px;
	}
	&__content {
		blockquote {
			&:before {
				content: url("~assets/img/quote.svg");
				display: block;
				position: absolute;
				width: 32px;
				height: 28px;
				top: 0px;
				left: -64px;
				font-family: sans-serif;
			}
		}
	}
}
</style>