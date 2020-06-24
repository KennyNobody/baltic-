<template>
	<nuxt-link :to='"/news/" + id' class="article">
		<div class="article__top">
			<div class="article__thumb">
				<img :src="thumb" :alt="title">
			</div>
		</div>
		<div class="article__middle">
			<div class="article__date">
				{{ $moment.unix(date).format('DD/MM/YYYY') }}
			</div>
			<div class="article__title">
				<v-clamp :max-lines="2">{{ title }}</v-clamp>
			</div>
			<div class="article__text">
				<v-clamp :max-lines="4">{{ description }}</v-clamp>
			</div>
		</div>
		<div class="article__bottom">
			<div class="article__link">
				<span>
					Подробнее
				</span>
				<svg class="article__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
			</div>
		</div>
	</nuxt-link>
</template>

<script>

	import VClamp from 'vue-clamp'

	export default {
		name: 'newsArticle',
		props: ['title', 'thumb', 'description', 'slug', 'id', 'date'],
		data () {
			return {}
		},
		components: {
			VClamp
		}
	}
</script>

<style lang="scss">
	.article {
		width: calc(33% - 10px);
		color: $dark;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		background-color: $light;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
		text-decoration: none;
		margin-bottom: 20px;
		@include r(700) {
			width: calc(50% - 10px);
		}
		@include r(480) {
			width: 100%;
		}
		&--clear {
			height: 0px;
			padding: 0px;
			margin: 0px;
			visibility: hidden;
		}
		&:hover {
			.article__link {
				background-color: $red;
			}
		}
		&__thumb {
			display: block;
			height: 216px;
			margin-bottom: 7px;
			img {
				display: block;
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
		}
		&__title {
			font-size: 18px;
			line-height: 22px;
			margin-bottom: 16px;
			font-weight: 600;
			@include r(700) {
				
			}
		}
		&__top {

		}
		&__middle {
			flex-grow: 1;
			padding: 10px 15px 15px 15px;
		}
		&__bottom {

		}
		&__text {
			font-size: 14px;
			line-height: 19px;
		}
		&__link {
			display: flex;
			align-items: center;
			background-color: $blue;
			text-decoration: none;
			color: $light;
			font-weight: 600;
			font-size: 18px;
			line-height: 25px;
			height: 40px;
			padding: 5px 15px;
			transition: 0.3s all;
			justify-content: space-between;
		}
		&__arrow {
			transform: rotate(180deg);
			height: 14px;
			width: 8px;
		}
	}
</style>

