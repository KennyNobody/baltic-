<template>
	<div class="page page-news">
		<h2 class="title">
			<div class="title__line">
				<nuxt-link to="/" class="title__crumb">
					Главная
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
			</div>
			<p class="title__text">Блог</p>
			<p class="title__control"></p>
		</h2>
		<div class="page-news__articles">
			<appArticle
			v-for="item in blog.items" v-bind:key="item.id"
			:title="item.title"
			:discription="item.discription"
			:thumb="item.preview"
			:slug="item.slug"
			:id="item.id"
			:public_at="item.public_at"
			></appArticle>
		</div>
		<div class="page-news__pagination">
			<appPagination></appPagination>
		</div>
	</div>
</template>

<script>
	import appArticle from '~/components/Article'
	import appPagination from '~/components/Pagination'

	export default {
		head () {
			return {
				title: 'Блог - Балтик+',
				meta: [
				{}
				]
			}
		},
		name: 'page-news',
		data () {
			return {
				newsPerPage: 9,
				newsArticles: [
				
				]
			}
		},
		components: {
			appArticle,
			appPagination
		},
		computed: {
			blog() {
				return this.$store.getters['blog/blog']
			}
		},
		async fetch({store}) {
			if (store.getters['blog/blog'].length === 0) {
				await store.dispatch('blog/fetch')
			}
		},
	}
</script>

<style lang="scss">
	.page-news {
		&__articles {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: 36px;
		}
		&__pagination {
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
	}
</style>