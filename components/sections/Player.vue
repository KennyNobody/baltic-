<template>
	<div class="player">
		<transition name="player__fade">
			<div class="playlist" v-if="open">
				<div class="playlist__left">
					<p class="playlist__title">
						Подкасты
					</p>
				</div>
				<div class="playlist__right">
					<p class="playlist__title playlist__title--padding">
						История воспроизведения
					</p>
					<div class="playlist__song">
						<p class="playlist__time">
							13:46
						</p>
						<p class="playlist__author">
							{{ author }}
						</p>
						<p class="playlist__name">
							{{ title }}
						</p>
					</div>
					<div class="playlist__song">
						<p class="playlist__time">
							13:46
						</p>
						<p class="playlist__author">
							{{ author }}
						</p>
						<p class="playlist__name">
							{{ title }}
						</p>
					</div>
					<div class="playlist__song">
						<p class="playlist__time">
							13:46
						</p>
						<p class="playlist__author">
							{{ author }}
						</p>
						<p class="playlist__name">
							{{ title }}
						</p>
					</div>
					<div class="playlist__song">
						<p class="playlist__time">
							13:46
						</p>
						<p class="playlist__author">
							{{ author }}
						</p>
						<p class="playlist__name">
							{{ title }}
						</p>
					</div>
					<div class="playlist__song">
						<p class="playlist__time">
							13:46
						</p>
						<p class="playlist__author">
							{{ author }}
						</p>
						<p class="playlist__name">
							{{ title }}
						</p>
					</div>
				</div>
			</div>
		</transition>
		<div class="player__left">
			<div class="player__play" v-on:click="play = !play">
				<div v-if="play == false">
					<svg class="player__icon--play">
						<use xlink:href="#icon-icon-play"></use>
					</svg>
				</div>
				<div v-else>
					<svg class="player__icon--pause">
						<use xlink:href="#icon-icon-pause"></use>
					</svg>
				</div>
			</div>
			<div class="player__info">
				<div class="player__radio live">
					<p class="live__title">
						Прямой эфир
					</p>
					<p class="live__discript">
						Радио
					</p>
					<p class="live__name">
						Балтик Плюс
					</p>
				</div>
			</div>
		</div>
		<div class="player__thumb">
			<img v-bind:src="thumb" alt="">
		</div>
		<div class="player__right">
			<div class="now">
				<p class="now__discript">
					Сейчас в эфире:
				</p>
				<div class="now__line">
					<div class="now__progress" v-bind:style="{ width : progress + '%'}"></div>
				</div>
				<p class="now__text">
					<span class="now__author">
						{{ author }}
					</span>
					<span class="now__defis">-</span>
					<br class="now__br">
					<span class="now__title">
						{{ title }}
					</span>
				</p>
			</div>
			<div class="volume">
				<div class="volume__line"></div>
			</div>
			<div class="player__toggle" v-on:click="open = !open">
				<svg class="player__drop-icon" v-bind:class="{'player__drop-icon--open': open === true}">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Player',
		data: function () {
			return {
				play: false,
				format: 'radio',
				thumb: 'https://images.genius.com/133f0dd4933c0e7973f57619de0736ae.712x712x1.jpg',
				author: 'Гарри Топор',
				title: 'Собеседник',
				open: false,
				progress: 30,
				volume: 50
			}
		},
	}
</script>

<style scoped lang="scss">
	.player {
		background-color: red;
		height: 88px;
		width: 100%;
		display: block;
		position: sticky;
		z-index: 5;
		bottom: 0px;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
		background-color: $dark;
		display: flex;
		@include r(1100) {
			bottom: 10px;
		}
		&__left {
			width: 247px;
			background-color: $light;
			flex-shrink: 0;
			padding: 8px 15px;
			display: flex;
			align-items: center;
		}
		&__play {
			background-color: $red;
			width: 46px;
			height: 46px;
			border-radius: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 4px;
			cursor: pointer;
			transition: 0.3s all;
			user-select: none;
			&:hover {
				opacity: 0.7;
			}
		}
		&__icon {
			&--play {
				height: 15px;
				width: 15px;
				position: relative;
				left: 1px;
				top: 2px;
			}
			&--pause {
				height: 15px;
				width: 15px;
				position: relative;
				left: 1px;
				top: 2px;
			}
		}
		&__info {
			flex-grow: 1;
			min-width: 0px;
			padding-top: 4px;
			margin-left: 28px;
		}
		&__thumb {
			height: 100%;
			width: 88px;
			@include r(1100) {
				display: none;
			}
			img {
				height: 100%;
				width: 100%;
				display: block;
				object-fit: cover;
			}
		}
		&__right {
			flex-grow: 1;
			min-width: 0px;
			display: flex;
			align-items: center;
			background-color: #00496A;
			padding: 12px 20px;
		}
		&__toggle {
			width: 46px;
			height: 46px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 30px;
			border: 1px solid $light;
			cursor: pointer;
			transition: 0.3s all;
			margin-left: 18px;
			flex-shrink: 0;
			user-select: none;
			&:hover {
				opacity: 0.7;
			}
		}
		&__drop-icon {
			width: 26px;
			height: 16px;
			transform: rotate(90deg);
			transition: 0.3s all;
			&--open {
				transform: rotate(-90deg);
			}
		}
		&__fade-enter-active, .fade-leave-active {
			transition: opacity .3s;
		}
		&__fade-leave-active {
			transition: opacity .3s;
		}
		&__fade-enter {
			opacity: 0;
		}
		&__fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
			opacity: 0;
		}
	}

	.live {
		font-size: 14px;
		line-height: 19px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		&__title {
			color: $red;
			margin-bottom: 6px;
		}
		&__discript {
			color: $blue;
		}
		&__name {
			color: $dark;
			font-size: 16px;
			line-height: 22px;
		}
	}

	.now {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		flex-grow: 1;
		@include r(1100) {
			justify-content: center;
		}
		&__discript {
			color: $blue;
			font-size: 14px;
			line-height: 19px;
		}
		&__line {
			height: 2px;
			width: 100%;
			background-color: $dark;
			display: block;
			position: relative;
			top: 1px;
			@include r(1100) {
				display: none;
			}
		}
		&__defis {
			@include r(1100) {
				display: none;
			}
		}
		&__br {
			display: none;
			@include r(1100) {
				display: block;
			}
		}
		&__progress {
			height: 100%;
			display: block;
			background-color: $light;
		}
		&__text {
			font-size: 16px;
			line-height: 22px;
			color: $light;
		}
		&__author {
			font-weight: bold;
		}
	}

	.volume {
		height: 100%;
		display: flex;
		align-items: center;
		margin-left: 20px;
		flex-shrink: 0px;
		@include r(1100) {
			display: none;
		}
		&__line {
			display: block;
			height: 2px;
			background-color: $dark;
			width: 157px;
		}
	}

	.playlist {
		position: absolute;
		bottom: 100%;
		left: 0px;
		right: 0px;
		height: calc(100vh - 100px);
		display: flex;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
		z-index: -1;
		&__left {
			width: 247px;
			background-color: $light;
			padding: 16px 15px;
			color: $dark;
		}
		&__right {
			background-color: #00496A;
			flex-grow: 1;
			color: $light;
			padding-top: 16px;
			padding-bottom: 16px;
		}
		&__title {
			margin-bottom: 15px;
			font-weight: bold;
			font-size: 20px;
			padding-left: 20px;
			padding-right: 20px;
			line-height: 27px;
		}
		&__song {
			display: flex;
			padding-top: 7px;
			padding-bottom: 7px;
			transition: 0.3s all;
			padding-left: 20px;
			padding-right: 20px;
			&:hover {
				cursor: pointer;
				background-color: $blue;
				.playlist__time {
					color: $dark;
				}
			}
		}
		&__time {
			color: $blue;
			width: 88px;
			transition: 0.3s all;
		}
		&__author {
			font-weight: bold;
			font-size: 16px;
			line-height: 22px;
			margin-right: 10px;
		}
		&__name {
			font-size: 16px;
			line-height: 22px;
		}
	}
</style>
