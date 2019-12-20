<template>
	<article class="program">
		<div class="program__thumb">
			<img :src="preview" :alt="title">
		</div>
		<div class="program__content">
			<h3 class="program__title">
				{{ title }}
			</h3>
			<div class="program__info">
				<p class="program__time" v-if="time">
					<strong>В эфире:</strong> {{ time }}
				</p>
				<p class="program__author" v-if="author">
					<strong>Ведущие:</strong> {{ author }}
				</p>
			</div>
			<p class="program__text">
				{{ content }}
			</p>
		</div>
		<nuxt-link :to='"/programs/" + id' class="program__link">
			<svg>
				<use xlink:href="#icon-icon-arrow"></use>
			</svg>
		</nuxt-link>
	</article>
</template>

<script>

	import VClamp from 'vue-clamp'

	export default {
		name: 'program',
		props: ['id', 'programPlay', 'preview', 'title', 'content', 'time', 'author'],
		// data () {
		// 	return {
		// 		programPlay: false,
		// 		programThumb: 'http://placehold.it/1000x600',
		// 		programTitle: 'Утро на Балтик Плюс',
		// 		programText: 'Вы ищете текст любимой песни? У нас вы найдете слова и перевод любимых зарубежных песен 70 х 80 х 90 х и 2000 х на русский язык, а также истории и интересные факты о создании музыкальных хитов. Читайте и слушайте онлайн на "Радио 7 на семи холмах".',
		// 		programTime: '17:00-21:00 (Пн-Пт)',
		// 		programAuthor: 'Артём Королёв'
		// 	}
		// },
		components: {
			VClamp,
		},	
	}
</script>

<style lang="scss">
	.program {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
		&__thumb {
			height: 247px;
			width: 247px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-shrink: 0;
			img {
				display: block;
				object-fit: cover;
				height: 100%;
				width: 100%;
			}
		}
		&__content {
			flex-grow: 1;
			min-width: 0px;
			padding-right: 58px;
			color: $light;
			padding: 20px;
		}
		&__title {
			font-weight: bold;
			font-size: 20px;
			line-height: 28px;
			margin-bottom: 20px;
		}
		&__info {
			margin-bottom: 20px;
			strong {
				font-weight: bold;
				color: $blue;
			}
		}
		&__link {
			width: 30px;
			height: 247px;
			background-color: #00496A;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-shrink: 0;
			cursor: pointer;
			transition: 0.3s all;
			svg {
				display: block;
				transform: rotate(180deg);
				height: 18px;
				width: 10px;
			}
			&:hover {
				background-color: $blue;
			}
		}
	}
</style>

