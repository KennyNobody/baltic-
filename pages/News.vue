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
			<appArticle v-for="item in newsPerPage" v-bind:key="item.id"></appArticle>
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
		name: 'page-news',
		data () {
			return {
				newsPerPage: 9
			}
		},
		components: {
			appArticle,
			appPagination
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