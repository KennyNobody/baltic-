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
					Программы
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
			</div>
			<p class="title__text">{{ post.title }}</p>
			<p class="title__control"></p>
		</h2>
		<div class="single-program__content">
			<article class="program">
				<div class="program__thumb">
					<img :src="post.preview" :alt="post.title">
				</div>
				<div class="program__content">
					<h3 class="program__title">
						{{ post.title }}
					</h3>
					<div class="program__info">
						<p class="program__time" v-if="post.time">
							<strong>В эфире:</strong> {{ post.time }}
						</p>
						<p class="program__author" v-if="post.author">
							<strong>Ведущие:</strong> {{ post.author }}
						</p>
					</div>
					<p class="program__text">
						{{ post.text }}
					</p>
				</div>
			</article>
		</div>
		<h2 class="title">
			<div class="title__line"></div>
			<p class="title__text">Подкасты</p>
		</h2>
		<div class="single-program__articles">
			<appPodcast
				v-for="item in podcasts.items"
				v-bind:key="item.id"
				:title="item.title"
				:date="item.date"
				:play="item.play"
				:id="item.id"
				:slug="item.slug"
				:time="item.time"
				:thumb="item.thumb"
				:info="item.info"
				></appPodcast>
		</div>
	</div>
</template>

<script>
	import appPodcast from '~/components/Podcast'

	export default {
		head () {
			return {
				title: this.post.title + ' - Балтик+',
				meta: [
				{}
				]
			}
		},
		mounted () {
			this.$store.dispatch('programs/fetchSingle', this.$route.params.id);
			console.log(this.$store)
		},
		name: 'page-news',
		validate({params}){
			return /^\d+$/.test(params.id)
		},
		computed: {
			podcasts(params) {
				return this.$store.getters['podcasts/podcasts']
			},
			post (params) {
				return this.$store.getters['programs/singleProgram']
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
			appPodcast,
		},
	}
</script>

<style lang="scss">
	.single-program {
		&__content {
			margin-bottom: 20px;
		}
		&__articles {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: 36px;
		}
	}
</style>