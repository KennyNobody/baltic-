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
			</div>
			<p class="title__text">Рекламодателям</p>
			<p class="title__control"></p>
		</h2>
		<div class="page-about__columns">
			<div class="page-about__side">
				<img :src="advertising.thumb" class="page-about__side-thumb" alt="">
			</div>
			<div class="page-about__main text">
				<div class="page-about__history" v-html="advertising.content">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		head () {
			return {
				title: 'Рекламодателям - Балтик+',
				meta: [
				{}
				]
			}
		},
		name: 'page-advertising',
		computed: {
			advertising() {
				return this.$store.getters['advertising/advertising']
			}
		},
		async fetch({store}) {
			if (store.getters['advertising/advertising'].length === 0) {
				await store.dispatch('advertising/fetch')
			}
		},
		components: {}
	}
</script>

<style lang="scss">

</style>