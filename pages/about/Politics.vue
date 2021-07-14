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
			<p class="title__text">Политика конфиденциальности</p>
			<p class="title__control"></p>
		</h2>
		<div class="page-about__columns">
			<div class="page-about__side">
				<appSidebar></appSidebar>
			</div>
			<div class="page-about__main">
				<div class="editor" v-html="politics"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import appSidebar from '~/components/Sidebar'

	export default {
		head () {
			return {
				title: 'Политика конфиденциальности' + ' - ' + process.env.title,
				meta: [
				{}
				]
			}
		},
		name: 'page-politics',
		data () {
			return {
				
			}
		},
		components: {
			appSidebar
		},
		computed: {
			politics() {
				return this.$store.getters['politics/politics']
			}
		},
		mounted() {
			this.$store.dispatch('politics/fetch');
		},
	}
</script>

<style lang="scss">
	
</style>