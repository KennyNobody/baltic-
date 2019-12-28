<template>
	<div id="app">
		<div class="layout">
			<appHeader></appHeader>
			<div class="layout__left">

			</div>
			<div class="layout__content">
				<div class="layout__main">
					<nuxt></nuxt>
					<appPlayer></appPlayer>
				</div>
				<appFooter></appFooter>
			</div>
			<div class="layout__right">

			</div>
		</div>
	</div>
</template>

<script>
	import appHeader from '~/components/sections/Header.vue'
	import appFooter from '~/components/sections/Footer.vue'
	import appPlayer from '~/components/sections/Player.vue'

	export default {
		name: 'home',
		data () {
			return {
				dark: false
			}
		},
		components: {
			appHeader,
			appFooter,
			appPlayer
		}
	}
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap&subset=cyrillic');

	.layout {
		display: flex;
		font-family: $main;
		justify-content: space-between;
		background-color: $light;
		&__left {
			flex-grow: 1;
			min-width: 0px;
		}
		&__content {
			padding-top: 150px;
			background-color: $dark;
			width: 1070px;
			padding-left: 15px;
			padding-right: 15px;
			max-width: 100%;
			flex-shrink: 0;
			position: relative;
			z-index: 1;
			display: flex;
			flex-direction: column;
			min-height: 100vh;
			justify-content: space-between;
			@include r(1100) {
				padding-top: 100px;
			}
			&:before {
				content: "";
				position: absolute;
				z-index: -1;
				display: block;
				top: 0px;
				left: 0px;
				bottom: 0px;
				width: 262px;
				background-color: $light;
				@include r(1100) {
					display: none;
				}
			}
		}
		&__right {
			background-color: $dark;
			flex-grow: 1;
			min-width: 0px;
		}
		&__main {
			flex-grow: 1;
			min-height: 0px;
			flex-shrink: 0;
			position: relative;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
		}
	}
</style>
