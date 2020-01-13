<template>
	<nuxt-link to="/" exact class="logo">
		<img src="~/assets/img/svg/logo-top.svg" alt="Логотип Балтик+">
		<div class="logo__slider" v-swiper:mySwiper="swiperOption">
			<div class="swiper-wrapper logo__wrapper">
				<div class="swiper-slide logo__slide" v-for="item in list" v-bind:key="item.id">
					{{ item.city }} {{ item.wave }} FM
				</div>
			</div>
		</div>
	</nuxt-link>
</template>

<script>

	export default {
		name: 'logo',
		data () {
			return {
				swiperOption: {
					loop: true,
					slidesPerView: 1,
					direction: 'vertical',
					effect: 'flip',
					grab: false,
					autoplay: {
						delay: 3500,
						disableOnInteraction: false,
					},
				}
			}
		},
		computed: {
			list() {
				return this.$store.getters['map/markers']
			}
		},
		async fetch({store}) {
			if (store.getters['map/markers'].length === 0) {
				await store.dispatch('map/fetch')
			}
		},
	}
</script>

<style lang="scss">
	.logo {
		flex-shrink: 0;
		padding-top: 12px;
		padding-right: 23px;
		padding-bottom: 8px;
		position: relative;
		width: 247px;
		background-color: $light;
		padding: 15px;
		display: flex;
		align-items: center;
		position: relative;
		&:after {
			content: "";
			position: absolute;
			right: 100%;
			width: 100vw;
			top: 0px;
			bottom: 0px;
			display: block;
			background-color: $light;
		}
		img {
			display: block;
			height: 100%;
			width: 100%;
			object-fit: contain;
		}
		&__slider {
			position: absolute !important;
			height: 20px;
			width: 174px;
			// background-color: red;
			z-index: 2;
			display: block;
			top: 15px;
			right: 14px;
			color: $red;
			font-weight: 600;
			text-align: right;
			white-space: nowrap;
			font-size: 15px;
		}
	}
</style>

