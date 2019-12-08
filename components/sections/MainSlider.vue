<template>
	<!-- You can find this swiper instance object in current component by the "mySwiper"  -->
	<div v-swiper:mySwiper="swiperOption">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="banner in banners" v-bind:key="banner.id">
				<a v-if="banner.link" :href="banner.link" target="_blank">
					<img :src="banner.url" :alt="banner.alt">
				</a>
				<img v-else :src="banner.url" :alt="banner.alt">
			</div>
		</div>
		<div class="swiper__prev">
			<svg>
				<use xlink:href="#icon-icon-arrow"></use>
			</svg>
		</div>
		<div class="swiper__next">
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
				banners: [
				{
					url: require('~/assets/img/slide-image.jpg'),
					alt: 'Баннер важного мероприятия',
					link: 'https://www.youtube.com/'
				},
				{
					url: require('~/assets/img/slide-image.jpg'),
					alt: 'Баннер важного мероприятия',
				},
				{
					url: require('~/assets/img/slide-image.jpg'),
					alt: 'Баннер важного мероприятия',
					link: 'https://www.youtube.com/'
				}
				],
				swiperOption: {
					loop: false,
					slidesPerView: 1,
					centeredSlides: true,
					navigation: {
						nextEl: '.swiper__next',
						prevEl: '.swiper__prev',
						disabledClass: 'swiper__btn-disable',
					},
					on: {
						slideChange() {
							// console.log('onSlideChangeEnd', this);
						},
						tap() {
							// console.log('onTap', this);
						}
					}
				}
			}
		},
		mounted() {
			// setTimeout(() => {
			// 	this.banners.push('/5.jpg')
			// 	console.log('banners update')
			// }, 3000)
		}
	}
</script>


<style lang="scss" scoped>
	.swiper-slide {
		img {
			display: block;
		}
	}

	.swiper__prev {
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
	.swiper__next {
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

	.swiper__btn-disable {
		cursor: default;
		background-color: rgba(0, 0, 0, 0.05);
		&:hover {
			cursor: default;
			background-color: rgba(0, 0, 0, 0.05);
		}
	}
</style>