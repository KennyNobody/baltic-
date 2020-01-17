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
			<nuxt-link to="/shedule/" class="title__btn">
				Сетка программ
			</nuxt-link>
		</h2>
		<div class="page-programs">
			<appProgram 
			v-for="item in programs"
			:preview="item.preview"
			:title="item.title"
			:time="item.time"
			:id="item.id"
			:author="item.author"
			:content="item.text"
			v-bind:key="item.id"
			></appProgram>
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
				
			}
		},
		name: 'home',
		computed: {
			programs() {
				return this.$store.getters['programs/programs']
			},
		},
		async fetch({store}) {
			if (store.getters['programs/programs'].length === 0) {
				await store.dispatch('programs/fetch')
			}
		},
		components: {
			appProgram
		}
	}
</script>

<style lang="scss">
	.page-programs {

	}
</style>