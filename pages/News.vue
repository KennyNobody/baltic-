<template>
	<div class="page-news">
		<h2 class="title">
			<div class="title__line">
				<a href="" class="title__crumb">
					Главная
				</a>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
			</div>
			<p class="title__text">Новости</p>
			<p class="title__control"></p>
		</h2>
		<div class="page-news__articles">
			
		</div>
	</div>
</template>

<script>
	import appArticle from '~/components/Article'

	export default {
		name: 'page-news',
		data () {
			return {
				newsPerPage: 9
			}
		},
		components: {
			appArticle
		}
	}
</script>

<style lang="scss">
	.page-news {
		&__articles {
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>