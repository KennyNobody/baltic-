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
			<p class="title__text">Службы новостей</p>
			<p class="title__control"></p>
		</h2>
		<div class="page-about__columns">
			<div class="page-about__side">
				<appSidebar></appSidebar>
			</div>
			<div class="page-about__main">
				<div class="editor" v-html="services"></div>
			</div>
		</div>
	</div>
</template>

<script>
import appSidebar from '~/components/Sidebar'

	export default {
		head () {
			return {
				title: 'Службы новостей'  + ' - ' + process.env.title,
				meta: [
				{}
				]
			}
		},
		data () {
			return {
				
			}
		},
		name: 'page-news-services',
		computed: {
			services() {
				return this.$store.getters['services/services']
			}
		},
		components: {
			appSidebar
		},
		mounted() {
			this.$store.dispatch('services/fetch');
		},
	}
</script>

<style lang="scss">
	.page-about {
		
	}
</style>