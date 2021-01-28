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
			<p class="title__text">История и награды</p>
			<p class="title__control"></p>
		</h2>
		<div class="page-about__columns">
			<div class="page-about__side">
				<appSidebar></appSidebar>
			</div>
			<div class="page-about__main text">
				<div class="page-about__history" v-html="history.content">
					
				</div>
				<div class="achievement" v-for="item in history.achievements" v-bind:key="item.id">
					<div class="achievement__thumb">
						<img :src="item.thumb" :alt="item.title" >
					</div>
					<div class="achievement__content">
						<h4 class="achievement__title">
							{{ item.title }}
						</h4>
						<p class="achievement__text">
							{{ item.text }}
						</p>
					</div>
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
				title: 'История и награды - Балтик+',
				meta: [
				{}
				]
			}
		},
		name: 'page-history',
		computed: {
			history() {
				return this.$store.getters['history/history']
			}
		},
		// async fetch({store}) {
		// 	if (store.getters['history/history'].length === 0) {
		// 		await store.dispatch('history/fetch')
		// 	}
		// },
		mounted() {
			this.$store.dispatch('history/fetch');
		},
		components: {
			appSidebar
		}
	}
</script>

<style lang="scss">
	.page-about {
		&__columns {
			display: flex;
			justify-content: space-between;
			position: relative;
			@include r(1100) {
				display: block;
			}
		}
		&__side {
			width: 247px;
			flex-shrink: 0px;
			flex-shrink: 0;
			&-thumb {
				display: block;
				width: 100%;
				height: auto;
				@include r(1100) {
					display: none;
				}
			}
		}
		&__main {
			padding-left: 20px;
			color: $light;
			flex-grow: 1;
			min-width: 0px;
			@include r(1100) {
				padding-left: 0px;
			}
		}
		&__history {
			margin-bottom: 60px;
		}
	}

	.achievement {
		display: flex;
		margin-bottom: 45px;
		&__thumb {
			flex-shrink: 0;
			width: 157px;
			margin-right: 20px;
			@include r(850) {
				display: none;
			}
			img {
				display: block;
				width: 100%;
				height: auto;
			}
		}
		&__content {
			flex-grow: 1;
			min-width: 0px;
			padding-top: 20px;
			@include r(850) {
				padding-top: 0px;
			}
		}
		&__title {
			margin-bottom: 20px;
			font-weight: bold;
			font-size: 20px;
			line-height: 28px;
			@include r(850) {
				margin-bottom: 0px;
			}
		}
	}
</style>