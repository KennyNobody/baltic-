<template>
	<article class="podcast">
		<div class="podcast__thumb" :style="{ 'background-image': 'url(' + podcastThumb + ')' }">
			<div class="podcast__btn" v-on:click="podcastPlay = !podcastPlay">
				<svg class="podcast__play-icon" v-if="podcastPlay == false">
					<use xlink:href="#icon-icon-play"></use>
				</svg>
				<svg class="podcast__playing-icon" v-else>
					<use xlink:href="#icon-icon-playing"></use>
				</svg>
			</div>
		</div>
		<div class="podcast__content">
			<div class="podcast__header">
				<time class="podcast__time">30/09/2019</time>
				<svg class="podcast__share-icon">
					<use xlink:href="#icon-icon-share"></use>
				</svg>
			</div>
			<div class="podcast__info">
				<h3 class="podcast__title">
					<v-clamp :max-lines="2">{{ podcastTitle }}</v-clamp>
				</h3>
				<div class="podcast__footer">
					<div class="podcast__discript">
						<v-clamp :max-lines="1">{{ podcastInfo }}</v-clamp>
					</div>
					<div class="podcast__duration">
						{{ podcastTime }}
					</div>
				</div>
			</div>
		</div>
	</article>
</template>

<script>

	import VClamp from 'vue-clamp'

	export default {
		name: 'podcast',
		data () {
			return {
				podcastPlay: false,
				podcastThumb: 'http://placehold.it/1000x600',
				podcastTitle: 'Все свои',
				podcastInfo: 'выпуск №116 (24.09.19)',
				podcastTime: '25:12'
			}
		},
		components: {
			VClamp
		},	
	}
</script>

<style lang="scss">
	.podcast {
		display: flex;
		background-color: $light;
		width: calc(50% - 10px);
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
		color: $dark;
		margin-bottom: 20px;
		&__thumb {
			flex-shrink: 0px;
			height: 156px;
			width: 156px;
			flex-shrink: 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&__content {
			padding: 16px 12px 16px 20px;
			flex-grow: 1;
			min-width: 0px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&__footer {
			display: flex;
			justify-content: space-between;
		}
		&__time {
			color: $blue;
			font-size: 16px;
			line-height: 18px;
		}
		&__share-icon {
			height: 30px;
			width: 30px;
			cursor: pointer;
			transition: 0.3s all;
			&:hover {
				opacity: 0.7;
			}
		}
		&__info {

		}
		&__title {
			font-size: 26px;
			line-height: 28px;
			font-weight: 600;
			margin-bottom: 6px;
		}
		&__discript {
			font-size: 16px;
			line-height: 28px;
		}
		&__duration {
			font-size: 14px;
			line-height: 28px;
			color: #BDBDBD;
		}
		&__btn {
			height: 68px;
			width: 68px;
			border-radius: 100px;
			display: flex;
			justify-content: center;
			align-items: center;
			background: rgba(0, 58, 84, 0.8);
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
			cursor: pointer;
			transition: 0.3s all;
			svg {
				height: 30px;
				width: 30px;
			}
			&:hover {
				background: rgba(0, 58, 84, 0.5);
			}
		}
		&__play-icon {
			position: relative;
			left: 2px;
		}
	}
</style>

