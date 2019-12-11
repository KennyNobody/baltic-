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
		Одиночная новость
		<div class="page-news__articles">
			<appArticle
			v-for="item in newsArticles.slice(0, 3)" v-bind:key="item.id"
			:title="item.title"
			:discription="item.discription"
			:thumb="item.thumb"
			:slug="item.slug"
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
				newsPerPage: 3,
				newsArticles: [
				{
					title: 'Заголовок 1',
					thumb: 'http://placehold.it/1000x600',
					discription: 'Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта. Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.',
					content: '',
					slug: 'article-slug-1'
				},
				{
					title: 'Заголовок 2',
					thumb: 'http://placehold.it/1000x600',
					discription: 'Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта. Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.',
					content: '',
					slug: 'article-slug-2'
				},
				{
					title: 'Заголовок 3',
					thumb: 'http://placehold.it/1000x600',
					discription: 'Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта. Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.',
					content: '',
					slug: 'article-slug-3'
				},
				{
					title: 'Заголовок 4',
					thumb: 'http://placehold.it/1000x600',
					discription: 'Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта. Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.',
					content: '',
					slug: 'article-slug-4'
				},
				{
					title: 'Заголовок 5',
					thumb: 'http://placehold.it/1000x600',
					discription: 'Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта. Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.',
					content: '',
					slug: 'article-slug-5'
				},
				{
					title: 'Заголовок 6',
					thumb: 'http://placehold.it/1000x600',
					discription: 'Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта. Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.',
					content: '',
					slug: 'article-slug-6'
				},
				]
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