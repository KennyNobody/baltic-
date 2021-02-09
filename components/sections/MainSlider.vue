<template>
	<div v-swiper:mySwiper="swiperOption" class="front-slider">
		<div class="swiper-wrapper front-slider__wrapper">
			<div class="swiper-slide front-slider__slide" v-for="banner in banners" v-bind:key="banner.id">
				<a v-if="banner.link" class="front-slider__link" :href="banner.link" target="_blank">
					<img :src="banner.url" :alt="banner.alt">
				</a>
				<img v-else :src="banner.url" :alt="banner.alt">
			</div>
		</div>
		<div class="front-slider__prev">
			<svg>
				<use xlink:href="#icon-icon-arrow"></use>
			</svg>
		</div>
		<div class="front-slider__next">
			<svg>
				<use xlink:href="#icon-icon-arrow"></use>
			</svg>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				swiperOption: {
					loop: false,
					slidesPerView: 1,
					centeredSlides: true,
					navigation: {
						nextEl: '.front-slider__next',
						prevEl: '.front-slider__prev',
						disabledClass: 'front-slider__btn-disable',
					},
				}
			}
		},
		computed: {
			banners() {
				return this.$store.getters['front-slider/mainSlider']
			}
		},
		mounted() {
			if (this.$store.getters['front-slider/mainSlider'].length === 0) {
				this.$store.dispatch('front-slider/fetch')
			}
			console.log(this.$store);
		}
	}
</script>


<style lang="scss" scoped>
	

	.front-slider {
		&__slide {
			img {
				display: block;
				margin-left: auto;
				margin-right: auto;
				width: 100%;
				height: auto;
			}
		}
		&__link {
			display: block;
		}
		&__wrapper {

		}
		&__prev {
			position: absolute;
			left: 0px;
			top: 0px;
			bottom: 0px;
			width: 30px;
			background-color: rgba(0, 0, 0, 0.2);
			z-index: 2;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: 0.3s all;
			outline: none;
			svg {
				display: block;
				height: 18px;
				width: 10px;
			}
			&:hover {
				cursor: pointer;
				background-color: rgba(0, 0, 0, 0.1);
			}
		}
		&__next {
			position: absolute;
			right: 0px;
			top: 0px;
			bottom: 0px;
			width: 30px;
			background-color: rgba(0, 0, 0, 0.2);
			z-index: 2;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: 0.3s all;
			outline: none;
			svg {
				display: block;
				height: 18px;
				width: 10px;
				transform: rotate(180deg);
			}
			&:hover {
				cursor: pointer;
				background-color: rgba(0, 0, 0, 0.1);
			}
		}
		&__btn-disable {
			cursor: default;
			background-color: rgba(0, 0, 0, 0.05);
			&:hover {
				cursor: default;
				background-color: rgba(0, 0, 0, 0.05);
			}
		}
	}
</style>