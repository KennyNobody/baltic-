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
			<p class="title__text">Подкасты</p>
			<p class="title__control"></p>
		</h2>
		<div class="filter">
			<div class="filter__dates">
				<p class="filter__date-text">
					Дата
				</p>
				<no-ssr>
					<date-picker format="DD-MM-YYYY" range v-model="filterDate" placeholder="Выберите период"></date-picker>
				</no-ssr>
			</div>
			<select class="filter__select" v-model="genre">
				<option value="" selected>По подкасту</option>
				<option v-for="item in podcastsList" value="item.value" v-bind:key="item.id">{{ item.name }}</option>
			</select>
			<div class="filter__all" v-on:click="clearFilter">
				Все подкасты
			</div>
		</div>
		<div class="page-news__articles">
			<appPodcast v-for="item in podcastsPerPage" v-bind:key="item.id"></appPodcast>
		</div>
		<div class="page-news__pagination">
			<appPagination></appPagination>
		</div>
	</div>
</template>

<script>
	import appPodcast from '~/components/Podcast'
	import appPagination from '~/components/Pagination'

	export default {
		head () {
			return {
				title: 'Подкасты - Балтик+',
				meta: [
				{}
				]
			}
		},
		name: 'page-news',
		data () {
			return {
				podcastsPerPage: 16,
				filterDate: '',
				genre: '',
				podcastsList: [
				{
					name: 'Хороший подкаст',
					podcastId: '1'
				},
				{
					name: 'Средний подкаст',
					podcastId: '2'
				},
				{
					name: 'Плохой подкаст',
					podcastId: '3'
				},
				]
			}
		},
		components: {
			appPodcast,
			appPagination
		},
		methods: {
			clearFilter() {
				console.log('Привет');
				this.filterDate = '';
				this.genre = '';
			}
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

	.filter {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 34px;
		&__dates {
			color: $dark;
			font-size: 14px;
			line-height: 28px;
			display: flex;
			align-items: center;
			margin-right: 40px;
			flex-shrink: 0;
			font-family: $main !important;
			.mx-datepicker-range {
				width: 240px;
			}
			.mx-icon-calendar {
				color: $blue;
			}
		}
		&__date-text {
			margin-right: 15px;
		}
		&__select {
			height: 40px;
			flex-grow: 1;
			min-width: 0px;
			border: 1px solid $blue;
			background-color: $dark;
			cursor: pointer;
			color: $light;
			padding-left: 20px;
			padding-right: 20px;
			background-image: url(~assets/img/arrow.png);
			background-repeat: no-repeat;
			background-position: 98% center;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			font-size: 14px;
			line-height: 28px;
		}
		&__all {
			text-decoration: none;
			margin-left: 32px;
			transition: 0.3s all;
			color: $blue;
			font-weight: bold;
			font-size: 16px;
			line-height: 28px;
			cursor: pointer;
			&:hover {
				opacity: 0.7;
			}
		}
	}
</style>