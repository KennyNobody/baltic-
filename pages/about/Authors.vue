<template>
	<div class="page page-about">
		<h2 class="title">
			<div class="title__line">
				<nuxt-link to="/" class="title__crumb">
					Главная
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
				<nuxt-link to="/about/history/" class="title__crumb">
					О радио
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
			</div>
			<p class="title__text">Ведущие эфира</p>
			<p class="title__control"></p>
		</h2>
		<div class="page-about__columns">
			<div class="page-about__side">
				<appSidebar></appSidebar>
			</div>
			<div class="page-about__main">
				<div class="authors">
					<article class="authors__article" v-for="item in authors" v-bind:key="item.id" tabindex="0">
						<div class="authors__main" v-bind:style="{ 'background-image': 'url(' + item.thumb + ')' }">
							<div class="authors__content">
								<h5 class="authors__title">
									{{ item.position }}
								</h5>
								<div class="authors__footer" v-if="item.time">
									<p class="authors__discript">
										В эфире:
									</p>
									<p class="authors__time">
										{{ item.time }}
									</p>
								</div>
							</div>
						</div>
						<div class="authors__name">
							<p>
								{{ item.name }}
							</p>
						</div>
					</article>
					<div class="authors__clear"></div>
					<div class="authors__clear"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import appSidebar from '~/components/Sidebar'

	export default {
		head () {
			return {
				title: 'Ведущие эфира - Балтик+',
				meta: [
				{}
				]
			}
		},
		name: 'page-authors',
		computed: {
			authors() {
				return this.$store.getters['authors/authors']
			}
		},
		mounted() {
			if (this.$store.getters['authors/authors'].length === 0) {
				this.$store.dispatch('authors/fetch')
			}
			console.log(this.$store);
		},
		// async fetch({store}) {
		// 	if (store.getters['authors/authors'].length === 0) {
		// 		await store.dispatch('authors/fetch')
		// 	}
		// },
		components: {
			appSidebar
		}
	}
</script>

<style lang="scss">
.authors {
	display: flex;
	justify-content: space-between;
	flex-grow: 1;
	min-width: 0px;
	flex-wrap: wrap;
	&__article {
		width: calc(100% / 3 - 10px);
		background-color: red;
		margin-bottom: 20px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		background-color: $light;
		@include r(850) {
			width: calc(50% - 10px);
		}
		@include r(480) {
			width: 100%;
		}
		&:hover {
			.authors__content {
				opacity: 1;
			}
		}
		&:focus {
			.authors__content {
				opacity: 1;
			}
		}
	}
	&__clear {
		width: calc(100% / 3 - 10px);
		display: block;
		height: 0px;
		@include r(850) {
			width: calc(50% - 10px);
		}
		@include r(480) {
			width: 100%;
		}
	}
	&__name {
		color: $light;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: $red;
		min-height: 46px;
		white-space: nowrap;
		padding-left: 10px;
		padding-right: 10px;
		p {
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
	&__main {
		height: 203px;
		position: relative;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	&__content {
		transition: 0.3s all;
		opacity: 0;
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		background-color: $dark;
		padding: 20px 10px;
		color: $light;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	&__footer {
		line-height: 1.5;
	}
	&__title {
		font-weight: 600;
	}
	&__discript {
		color: $blue;
	}
}
</style>