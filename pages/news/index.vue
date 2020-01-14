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
			<div class="pagination">
				<div class="pagination__link pagination__link--prev">
					<svg>
						<use xlink:href="#icon-icon-arrow"></use>
					</svg>
				</div>
				<div class="pagination__link pagination__link--now">
					1
				</div>
				<div class="pagination__link">
					2
				</div>
				<div class="pagination__link">
					3
				</div>
				<div class="pagination__link pagination__link--static">
					...
				</div>
				<div class="pagination__link">
					13
				</div>
				<div class="pagination__link pagination__link--next">
					<svg>
						<use xlink:href="#icon-icon-arrow"></use>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import appArticle from '~/components/Article'

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