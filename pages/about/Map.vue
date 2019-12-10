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
			<p class="title__text">Города вещания</p>
			<p class="title__control"></p>
		</h2>
		<div class="page-about__columns">
			<div class="page-about__side">
				<appSidebar></appSidebar>
			</div>
			<div class="page-about__main">
				
			</div>
		</div>
	</div>
</template>

<script>
import appSidebar from '~/components/Sidebar'

	export default {
		head () {
			return {
				title: 'Города вещания - Балтик+',
				meta: [
				{}
				]
			}
		},
		name: 'page-map',
		data () {
			return {
				
			}
		},
		components: {
			appSidebar
		}
	}
</script>

<style lang="scss">
	.page-about {
		
	}
</style>