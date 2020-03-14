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
				<div class="map">
					<img :src="map.image" alt="">
					<!-- <img class="map__svg" src="~/assets/img/map.svg" alt=""> -->
					<!-- <div class="map__markers">
						<div class="map__marker" v-for="item in markers" v-bind:key="item.id" :style="{ top: item.top + '%', left: item.left + '%' }">
							<svg class="map__marker-icon">
								<use xlink:href="#icon-icon-marker"></use>
							</svg>
							<div class="map__baloon">
								<p class="map__baloon-title">
									{{ item.city }}
								</p>
								<p class="map__baloon-text">
									{{ item.wave }} FM
								</p>
							</div>
						</div>
					</div> -->
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
				title: 'Города вещания - Балтик+',
				meta: [
				{}
				]
			}
		},
		name: 'page-map',
		computed: {
			map() {
				return this.$store.getters['map/map']
			}
		},
		// async fetch({store}) {
		// 	if (store.getters['map/markers'].length === 0) {
		// 		await store.dispatch('map/fetch')
		// 	}
		// },
		mounted() {
			this.$store.dispatch('map/fetch')
			console.log(this.$store)
		},
		components: {
			appSidebar
		}
	}
</script>

<style lang="scss">
.map {
	position: relative;
	&__svg {
		display: block;
		width: 100%;
	}
	&__markers {
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		z-index: 2;
	}
	&__marker {
		position: absolute;
		width: 22px;
		height: 29px;
	}
	&__marker-icon {
		width: 100%;
		height: 100%;
		display: block;
	}
	&__baloon {
		background-color: $light;
		text-align: center;
		font-size: 12px;
		line-height: 16px;
		color: $dark;
		padding: 8px 13px;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
		border-radius: 8px;
		display: inline-block;
		position: absolute;
		left: calc(100% + 4px);
		top: -10px;
	}
	&__baloon-title {
		font-weight: bold;
		white-space: nowrap;
	}
	&__baloon-text {
		white-space: nowrap;
	}
}
</style>