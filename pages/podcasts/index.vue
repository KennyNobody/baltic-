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
				<option v-for="item in programs" value="item.value" v-bind:key="item.id">{{ item.title }}</option>
			</select>
			<div class="filter__all" v-on:click="clearFilter">
				Все подкасты
			</div>
		</div>
		<div class="page-news__articles">
			<appPodcast
			v-for="item in podcasts"
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
			}
		},
		components: {
			appPodcast,
			appPagination
		},
		computed: {
			podcasts() {
				return this.$store.getters['podcasts/podcasts']
			},
			programs() {
				return this.$store.getters['programs/programsList']
			},
		},
		async fetch({store}) {
			if (store.getters['podcasts/podcasts'].length === 0) {
				await store.dispatch('podcasts/fetch')
			}
		},
		methods: {
			clearFilter() {
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
		@include r(670) {
			margin-left: auto;
			margin-right: auto;
		}
	}
}

.filter {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 34px;
	@include r(1100) {
		display: block;
	}
	&__dates {
		color: $dark;
		font-size: 14px;
		line-height: 28px;
		display: flex;
		align-items: center;
		margin-right: 40px;
		flex-shrink: 0;
		font-family: $main !important;
		@include r(1100) {
			color: $light;
			width: 100%;
			height: 40px;
		}
		.mx-datepicker-range {
			width: 240px;
			@include r(1100) {
				width: 100%;
				margin-bottom: 20px;
			}
		}
		.mx-icon-calendar {
			color: $blue;
		}
		.mx-input {
			height: 40px;
		}
	}
	&__date-text {
		margin-right: 15px;
		@include r(1100) {
			display: none;
		}
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
		@include r(1100) {
			width: 100%;
			margin-bottom: 20px;
		}
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
		@include r(1100) {
			margin: 0px;
			text-align: center;
			width: 100%;
		}
		&:hover {
			opacity: 0.7;
		}
	}
}
</style>