<template>
	<section class="home-news">
		<div class="home-news__container" v-swiper:mySwiper="swiperOption">
			<h2 class="title">
				<div class="title__line"></div>
				<p class="title__text">Региональные новости</p>
				<div class="title__control">
					<div class="title__prev">
						<svg>
							<use xlink:href="#icon-icon-arrow"></use>
						</svg>
					</div>
					<div class="title__next">
						<svg>
							<use xlink:href="#icon-icon-arrow"></use>
						</svg>
					</div>
				</div>
			</h2>
			<div class="swiper-wrapper">
				<a :href="item.link" class="swiper-slide home-news__article" v-for="item in news" v-bind:key="item.id">
					<div class="home-news__thumb">
						<img :src="item.preview" :alt="item.title">
					</div>
					<div class="home-news__content">
						<div class="home-news__header">
							<time class="home-news__time">
								{{ $moment.unix(item.public_at).format('h:mm') }}
							</time>
							<time class="home-news__date">
								{{ $moment.unix(item.public_at).format('DD/MM/YYYY') }}
							</time>
						</div>
						<h3 class="home-news__title">
							<v-clamp :max-lines="2">
								{{ item.title }}
							</v-clamp>
						</h3>
					</div>
					<div class="home-news__icon">
						<svg>
							<use xlink:href="#icon-icon-arrow"></use>
						</svg>
					</div>
				</a>
			</div>
		</div>
	</section>
</template>

<script>
	import VClamp from 'vue-clamp'

	export default {
		name: 'home-news',
		data () {
			return {
				banners: [],
				homeNewsCounter: 16,
				swiperOption: {
					loop: false,
					slidesPerView: 2,
					slidesPerColumn: 2,
					spaceBetween: 20,
					navigation: {
						nextEl: '.title__next',
						prevEl: '.title__prev',
						disabledClass: 'title__btn-disable',
					},
					on: {
						slideChange() {
							// console.log('onSlideChangeEnd', this);
						},
						tap() {
							// console.log('onTap', this);
						}
					},
					breakpoints: {
						1100: {
							slidesPerView: 1,
							slidesPerColumn: 1
						} 
					}
				}
			}
		},
		components: {
			VClamp
		},
		computed: {
			news() {
				return this.$store.getters['news/news']
			}
		},
		mounted() {
			if (this.$store.getters['news/news'].length === 0) {
				this.$store.dispatch('news/fetch')
			}
		},
		async fetch({store}) {
			// console.log('арб')
			// if (this.$store.getters['news/news'].length === 0) {
			// 	await this.$store.dispatch('news/fetch')
			// }
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

	.home-news {
		margin-bottom: 105px;
		overflow: hidden; 
		@include r(1100) {
			margin-bottom: 60px;
		}
		&__container {
			overflow: visible; 
		}
		&__article {
			width: calc(50% - 10px);
			background-color: $light;
			height: 120px;
			box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
			display: flex;
			text-decoration: none;
			&:hover {
				.home-news__icon {
					background-color: $red;
				}
			}
		}
		&__thumb {
			flex-shrink: 0;
			width: 158px;
			height: 120px;
			@include r(560) {
				display: none;
			}
			img {
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
		}
		&__content {
			flex-grow: 1;
			min-width: 0px;
			padding: 16px 20px;
		}
		&__icon {
			height: 100%;
			flex-shrink: 0;
			background-color: $blue;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 30px;
			transition: 0.3s all;
			svg {
				display: block;
				transform: rotate(180deg);
				height: 18px;
				width: 10px;
			}
		}
		&__header {
			color: $blue;
			margin-bottom: 15px;
		}
		&__time {
			margin-right: 12px;
		}
		&__title {
			font-size: 18px;
			color: $dark;
			line-height: 25px;
		}
	}
</style>