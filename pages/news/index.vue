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
			:description="item.description"
			:thumb="item.preview"
			:slug="item.slug"
			:id="item.id"
			:date="item.public_at"
			></appArticle>
			<div class="page-news__article-clear"></div>
		</div>
		<div class="page-news__pagination">
			<!-- <div class="pagination">
				<div class="pagination__link pagination__link--prev" v-on:click="prevPage">
					<svg>
						<use xlink:href="#icon-icon-arrow"></use>
					</svg>
				</div>
				<div class="pagination__link" v-if="blog" v-on:click="changePage(index)" v-for="(item, index) in blog.pages.max" v-bind:key="item.id" :class="{ 'pagination__link--now' : index == pageNow - 1}">
					{{ index+1 }}
				</div>
				<div class="pagination__link pagination__link--next" v-on:click="nextPage">
					<svg>
						<use xlink:href="#icon-icon-arrow"></use>
					</svg>
				</div>
			</div> -->
			<no-ssr>
				<paginate
				:prev-class="'pagination__link pagination__link--prev'"
				:next-class="'pagination__link pagination__link--next'"
				:active-class="'pagination__link pagination__link--now'"
				:container-class="'pagination'"
				:page-count="blog.pages.max"
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
	import appArticle from '~/components/Article'

	export default {
		head () {
			return {
				title: 'Блог' + ' - ' + process.env.title,
				meta: [
				{}
				]
			}
		},
		name: 'page-news',
		data () {
			return {
				pageNow: 1,
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
		watch: {
			pageNow: function () {
				this.getPosts();
			}
		},
		methods: {
			changePage (index) {
				this.pageNow = index
			},
			prevPage () {
				if (this.pageNow <= 1) {
					return false;
				} else {
					this.pageNow = this.pageNow - 1
				}
			},
			nextPage () {
				if (this.pageNow >= this.blog.pages.max) {
					return false;
				} else {
					this.pageNow = this.pageNow + 1
				}
			},
			async getPosts() {
				await this.$store.dispatch('blog/fetch', {page: this.pageNow});
			}
		},
		mounted() {
			this.$store.dispatch('blog/fetch', {page: 1})
			console.log(this.$store)
			// if (this.$store.getters['blog/blog'].length === 0) {
			// 	this.$store.dispatch('blog/fetch')
			// }
		},
		// async fetch({store}) {
		// 	if (store.getters['blog/blog'].length === 0) {
		// 		await store.dispatch('blog/fetch')
		// 	}
		// },
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
	&__article-clear {
		width: calc(33% - 10px);
		display: block;
		height: 0px;
	}
}
</style>