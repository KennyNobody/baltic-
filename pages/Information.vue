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
				<img :src="information.thumb" class="page-about__side-thumb" alt="">
			</div>
			<div class="page-about__main text">
				<div class="page-about__history">
					<div class="editor" v-html="information.content"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		head () {
			return {
				title: 'Рекламодателям' + ' - ' + process.env.title,
				meta: [
				{}
				]
			}
		},
		name: 'page-information',
		computed: {
			information() {
				return this.$store.getters['information/information']
			}
		},
		async fetch({store}) {
			await store.dispatch('information/fetch');
		},
		// mounted () {
		// 	this.$store.dispatch('information/fetch')
		// },
	}
</script>

<style lang="scss">

</style>