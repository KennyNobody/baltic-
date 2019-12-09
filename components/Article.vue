<template>
	<a href="#" class="article">
		<div class="article__top">
			<div class="article__thumb">
				<img :src="articleThumb" :alt="articleTitle">
			</div>
		</div>
		<div class="article__middle">
			<div class="article__date">

			</div>
			<div class="article__title">
				<v-clamp :max-lines="2">{{ articleTitle }}</v-clamp>
			</div>
			<div class="article__text">
				<v-clamp :max-lines="4">{{ articleDiscription }}</v-clamp>
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
	</a>
</template>

<script>

	import VClamp from 'vue-clamp'

	export default {
		name: 'newsArticle',
		data () {
			return {
				articleThumb: 'http://placehold.it/1000x600',
				articleTitle: 'В Калининградскую область завезли швейцарский реактор',
				articleDiscription: 'Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта. Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.Любое взаимодействие с потребителем — коммуникация, дизайн, пользовательский опыт — создаёт образ продукта.'
				
			}
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
		height: 438px;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		background-color: $light;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
		text-decoration: none;
		margin-bottom: 20px;
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
			line-height: 25px;
			margin-bottom: 16px;
			font-weight: 600;
		}
		&__top {

		}
		&__middle {
			flex-grow: 1;
			padding: 7px 15px;
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

