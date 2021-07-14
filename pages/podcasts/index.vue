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
				<no-ssr>
					<date-picker format="DD.MM.YYYY" v-model="filter.filterDateStart" valueType="format" v-on:change="getPosts" placeholder="От"></date-picker>
				</no-ssr>
				<no-ssr>
					<date-picker format="DD.MM.YYYY" v-model="filter.filterDateEnd" valueType="format" v-on:change="getPosts" placeholder="До"></date-picker>
				</no-ssr>
			</div>
			<select class="filter__select" v-on:change="getPosts" v-model="filter.category">
				<option value="" selected>По подкасту</option>
				<option v-for="item in podcastsCats" :value="item.slug" v-bind:key="item.key">{{ item.name }}</option>
			</select>
			<div class="filter__all" v-on:click="clearFilter">
				Все подкасты
			</div>
		</div>
		<div class="page-news__articles">
			<appPodcast
			v-for="item in podcasts.items"
			v-bind:key="item.id"
			:title="item.title"
			:date="item.date"
			:play="item.play"
			:id="item.id"
			:link="item.link"
			:slug="item.slug"
			:time="item.time"
			:thumb="item.thumb"
			:info="item.info"
			></appPodcast>
		</div>
		<div class="page-news__pagination">
			<no-ssr>
				<paginate
				:prev-class="'pagination__link pagination__link--prev'"
				:next-class="'pagination__link pagination__link--next'"
				:active-class="'pagination__link pagination__link--now'"
				:container-class="'pagination'"
				:page-count="podcasts.pages.max"
				:disabled-class="'pagination__link--disabled'"
				:click-handler="changePage"
				:prev-text="'🡠'"
				:next-text="'🡢'"
				:page-class="'pagination__link'">
			</paginate>
		</no-ssr>
	</div>
</div>
</template>

<script>
	import appPodcast from '~/components/Podcast'
	import appPagination from '~/components/Pagination'

	export default {
		head () {
			return {
				title: 'Подкасты'  + ' - ' + process.env.title,
				meta: [
				{}
				]
			}
		},
		name: 'page-news',
		data () {
			return {
				filter: {
					filterDateStart: '',
					filterDateEnd: '',
					category: ''
				},
				pageNow: 1,
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
			podcastsCats() {
				return this.$store.getters['podcasts/podcastsCats']
			},
			programs() {
				return this.$store.getters['podcasts/podcastsList']
			},
		},
		// async fetch({store, params}) {
		// 	if (Object.keys(store.getters['podcasts/podcasts']).length === 0) {
		// 		await store.dispatch('podcasts/fetch')
		// 	}
		// },
		watch: {
			pageNow: function () {
				this.getPosts();
			}
		},
		mounted() {
			this.$store.dispatch('podcasts/fetch');
			this.$store.dispatch('podcasts/fetchCats');
		},
		methods: {
			changePage (index) {
				this.pageNow = index + 1
			},
			clearFilter() {
				this.filter.category = '';
				this.filter.filterDateStart = '';
				this.filter.filterDateEnd = '';
				this.$store.dispatch('podcasts/fetch');
			},
			prevPage () {
				if (this.pageNow <= 1) {
					return false;
				} else {
					this.pageNow = this.pageNow - 1
				}
			},
			nextPage () {
				if (this.pageNow >= this.podcasts.pages.max) {
					return false;
				} else {
					this.pageNow = this.pageNow + 1
				}
			},
			async getPosts() {
				let filterInfo = {
					dateStart: this.filter.filterDateStart,
					dateEnd: this.filter.filterDateEnd,
					category: this.filter.category,
					page: this.pageNow
				}

				console.log(filterInfo);

				await this.$store.dispatch('podcasts/fetchCustom', filterInfo);
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
		flex-shrink: 0;
		font-family: $main !important;
		@include r(1100) {
			color: $light;
			width: 100%;
			height: 40px;
		}
		@include r(480) {
			display: block;
			height: auto;
		}
		.mx-datepicker {
			margin-right: 20px;
			@include r(1100) {
				width: 100%;
				margin-bottom: 20px;
				&:last-child {
					margin-right: 0px;
				}
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
		outline: none;
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