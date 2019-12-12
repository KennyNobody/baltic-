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
			<p class="title__text">Новости</p>
			<p class="title__control"></p>
		</h2>
		<div class="page-news__articles">
			<appArticle
			v-for="item in newsArticles" v-bind:key="item.id"
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
				title: 'Новости - Балтик+',
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
		async mounted() {
			this.newsArticles = await this.$axios.$get("http://my-json-server.typicode.com/KennyNobody/baltic-/blog")
		}
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