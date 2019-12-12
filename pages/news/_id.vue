<template>
	<div class="page page-single-news">
		<h2 class="title">
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
			<p class="title__text">Новости</p>
			<p class="title__control"></p>
		</h2>
		{{ post.title }}
		<div class="page-news__articles">
			<appArticle
			v-for="item in posts.slice(0, 3)" v-bind:key="item.id"

			:title="item.title"
			:discription="item.discription"
			:thumb="item.preview"
			:slug="item.slug"
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
		validate({params}){
			return /^\d+$/.test(params.id)
		},
		async asyncData ({$axios, params}) {
			const post = await $axios.$get("http://my-json-server.typicode.com/KennyNobody/baltic-/blog/" + params.id);
			const posts = await $axios.$get("http://my-json-server.typicode.com/KennyNobody/baltic-/blog/");
			return {post, posts};
		},
		data () {
			return {
				newsPerPage: 3,
				newsArticles: []
			}
		},
		components: {
			appArticle,
			appPagination
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