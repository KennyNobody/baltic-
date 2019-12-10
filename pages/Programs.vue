<template>
	<div class="page page-programs">
		<h2 class="title">
			<div class="title__line">
				<nuxt-link to="/" class="title__crumb">
					Главная
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
			</div>
			<p class="title__text">Программы</p>
		</h2>
		<div class="page-programs">
			<appProgram v-for="item in programCount" v-bind:key="item.id"></appProgram>
		</div>
	</div>
</template>

<script>

	import appProgram from '~/components/Program'

	export default {
		head () {
			return {
				title: 'Программы - Балтик+',
				meta: [
				{}
				]
			}
		},
		data () {
			return {
				programCount: 8,
			}
		},
		name: 'home',
		components: {
			appProgram
		}
	}
</script>

<style lang="scss">
	.page-programs {

	}
</style>