<template>
	<div class="player">
		<transition name="player__fade">
			<div class="playlist" v-if="open">
				<div class="playlist__left">
					<p class="playlist__title">
						Подкасты
					</p>
					<article class="p-podcast" v-for="item in podcasts" v-bind:key="item.id">
						<div class="p-podcast__thumb" style="background-image: url('http://placehold.it/1000x600')">
							<div class="p-podcast__play">
								<template v-if="item.play == false">
									<svg class="p-podcast__icon--play">
										<use xlink:href="#icon-icon-play"></use>
									</svg>
								</template>
								<template v-else>
									<svg class="p-podcast__icon--pause">
										<use xlink:href="#icon-icon-pause"></use>
									</svg>
								</template>
							</div>
						</div>
						<div class="p-podcast__content">
							<div class="p-podcast__header">
								<p class="p-podcast__title">
									<v-clamp :max-lines="1" >{{ item.title }}</v-clamp>
								</p>
								<p class="p-podcast__discript">
									<v-clamp :max-lines="2">{{ item.info }}</v-clamp>
								</p>
							</div>
							<time class="p-podcast__time">
								{{ item.time }}
							</time>
						</div>
					</article>
				</div>
				<div class="playlist__right">
					<p class="playlist__title playlist__title--padding">
						История воспроизведения
					</p>
					<simplebar class="playlist__list">
						<div class="playlist__song" v-for="item in player.playlist" v-bind:key="item.id">
							<p class="playlist__time">
								13:46
							</p>
							<p class="playlist__author">
								{{ item.author }}
							</p>
							<p class="playlist__name">
								{{ item.title }}
							</p>
						</div>
					</simplebar>
				</div>
			</div>
		</transition>
		<div class="player__left">

			<!-- При прямом эфире просто глушим звук, не останавливая трансляцию. Поставить соответствующую иконку -->

			<div class="player__play" v-on:click="play">
				<div v-if="player.loading == true" >
					<svg class="player__icon--loading">
						<use xlink:href="#icon-icon-loading"></use>
					</svg>
				</div>
				<div v-else-if="player.loading == false && player.playing == false" >
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
					<div v-if="player.live == true" class="live__radio">
						Прямой эфир
					</div>
					<div v-else>
						<div  class="live__podcast">
							Подкаст
						</div>
						<div class="live__radio live__radio--btn" v-on:click="enableRadio">
							Прямой эфир
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="player__thumb">
			<template v-if="player.thumb">
				<img v-bind:src="player.thumb" :alt="player.title">
			</template>
			<template v-else>
				<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M40.7969 0.494375C38.8817 0.168992 36.9427 0.00362902 35 0C15.6625 0 0 15.6625 0 35C0 42.4244 2.33406 49.2844 6.25625 54.9741C8.6625 51.4391 14.2122 49 20.6456 49C25.0644 49 29.0609 50.1659 31.9244 52.0406L40.7969 0.494375ZM59.395 9.93344C65.4391 23.2991 60.1366 30.4391 60.1366 30.4391C56.035 18.1016 44.1569 16.2991 44.1569 16.2991C44.1569 16.2991 36.3431 58.4041 36.3431 58.9334C36.3431 63.4944 31.5 67.3487 24.9244 68.5147C28.1926 69.4981 31.587 69.9985 35 70C54.3375 70 70 54.3375 70 35C70 25.1716 65.9334 16.2969 59.395 9.93344Z" fill="#00496A"/>
				</svg>
			</template>
		</div>
		<div class="player__right">
			<div class="now">
				<p class="now__discript">
					Сейчас в эфире:
				</p>
				<div class="now__text">
					<p class="now__author">
						{{ player.name }}
					</p>
					<p class="now__title">
						{{ player.title }}
					</p>
				</div>
			</div>
			<div class="volume">
				<input class="e-range" type="range" min="0.0" max="1.0" step="0.01" v-model="volume">
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
	import simplebar from 'simplebar-vue';
	import VClamp from 'vue-clamp';
	import {Howl, Howler} from 'howler';

	export default {
		name: 'Player',
		data () {
			return {
				open: false,
				howler: null,
				volume: 1.0
			}
		},
		computed: {
			player(params) {
				return this.$store.getters['player/player']
			},
			podcasts() {
				return this.$store.getters['podcasts/podcastsPlayer']
			},
			file() {
				return this.$store.getters['player/playerChanged']
			}
		},
		components: {
			simplebar,
			VClamp,
		},
		sockets: {
			flow: function (data) {
				console.log('В целом работает');
				if (this.player.live == true) {
					console.log('Да, лайв');
					this.$store.dispatch('player/SOCKET_flow', data)
				}
			},
		},
		watch: {
			volume: function() {
				this.setVolume();
			},
			file: function() {
				this.$store.commit('player/setState', {
					playing: false
				});

				this.howler.unload();

				this.$store.commit('player/setRadioMute', {
					radioMute: false
				});

				console.log('Деактивировали');

				this.$store.commit('player/setLoading', {
					loading: true
				});
				
				this.initHowler();
			}
		},
		methods: {
			play() {

				if (this.player.playing == false && this.player.live == true && this.player.radioMute == false) {
					this.$store.commit('player/setLoading', {
						loading: true
					});
					this.howler.play();
				} else if (this.player.playing == false && this.player.live == true && this.player.radioMute == true) {
					this.$store.commit('player/setLoading', {
						loading: false
					});
					this.$store.commit('player/setState', {
						playing: true
					});
					this.howler.mute(false);
				} else if (this.player.playing == true && this.player.live == true) {
					this.howler.mute(true);
					this.$store.commit('player/setState', {
						playing: false
					});
					this.$store.commit('player/setRadioMute', {
						radioMute: true
					});
				} else if (this.player.playing == false && this.player.live == false) {
					this.$store.commit('player/setLoading', {
						loading: true
					});
					this.howler.play();
				} else if (this.player.playing == true && this.player.live == false) {
					this.howler.pause();
				} else {
					this.howler.play();
				}

				if (this.player.live == true) {
					this.$store.commit('podcasts/pauseAllPodcasts');
				}
			},

			setVolume() {
				this.howler.volume(this.volume);
				// this.$store.commit('player/setVolume', {
				// 	volume: this.volume
				// });
			},

			enableRadio() {
				this.$store.commit('podcasts/pauseAllPodcasts');
				
				this.$store.commit('player/setState', {
					playing: false
				});

				this.howler.unload();

				console.log('Деактивировали');

				this.$store.commit('player/setLoading', {
					loading: true
				});

				this.$store.commit('player/enableRadio');
				
				this.initHowler();
				
			},

			initHowler() {
				let component = this;

				this.howler = new Howl({
					src: [this.player.file],
					html5: true,
					volume: component.player.volume,
				});

				this.howler.on('load', function(){
					component.$store.commit('player/setLoading', {
						loading: false
					});

					if (component.player.wasPlaying == true || component.player.live == false) {
						this.play();
					}


					// this.$store.commit('player/setLoading', {
					// 	loading: true
					// });

					console.log('Инициировали');
				});

				this.howler.on('play', function(){
					component.$store.commit('player/setState', {
						playing: true
					});
					component.$store.commit('player/setLoading', {
						loading: false
					});
					component.$store.commit('player/setWasPlaying', {
						wasPlaying: true
					});
					console.log('Играет');
				});

				this.howler.on('pause', function(){
					component.$store.commit('player/setState', {
						playing: false
					});
					component.$store.commit('player/setWasPlaying', {
						wasPlaying: false
					});
					console.log('На паузе');
				});

				this.howler.on('mute', function(){
					console.log('муте/антмут');
				});
			}
		},
		mounted() {
			this.initHowler();

			

			// this.howler.on('unload', function(){
			// 	console.log('Деактивировали');
			// });

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
		position: relative;
		align-items: center;
		@include r(880) {
			background-color: #00496A;
			width: auto;
		}
	}
	&__audio {
		bottom: calc(100% + 10px);
		left: 0px;
		position: absolute;
	}
	&__play {
		background-color: $red;
		color: $light;
		width: 46px;
		height: 46px;
		border-radius: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 4px;
		cursor: pointer;
		// transition: 0.3s all;
		user-select: none;
		&:hover {
			opacity: 0.7;
		}
		&--disabled {
			opacity: 0.3;
			pointer-events: none;
		}
	}
	&__icon {
		transition: 0s;
		&--play {
			height: 15px;
			width: 15px;
			position: relative;
			left: 0px;
			display: block;
		}
		&--pause {
			height: 15px;
			width: 15px;
			position: relative;
			left: 0px;
			display: block;
		}
		&--loading {
			height: 26px;
			width: 26px;
			display: block;
			fill: $light;
			animation: 1s linear 0s normal none infinite running rot;
			@keyframes rot {
				0% {
					transform: rotate(0deg);
				}
				100% {
					transform: rotate(360deg);
				}
			}
		}
	}
	&__info {
		flex-grow: 1;
		min-width: 0px;
		margin-left: 28px;
		@include r(880) {
			display: none;
		}
	}
	&__thumb {
		height: 100%;
		width: 88px;
		background-color: $dark;
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		@include r(1100) {
			display: none;
		}
		img {
			height: 100%;
			width: 100%;
			display: block;
			object-fit: cover;
		}
		svg {

		}
	}
	&__right {
		flex-grow: 1;
		min-width: 0px;
		display: flex;
		align-items: center;
		background-color: #00496A;
		padding: 12px 20px;
		@include r(1100) {
			padding-left: 12px;
		}
		@include r(880) {
			padding-left: 0px;
		}
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
	height: 100%;
	@include r(880) {
		display: none;
	}
	&__podcast {
		font-size: 14px;
		line-height: 19px;
		color: $red;
	}
	&__radio {
		font-size: 14px;
		line-height: 19px;
		color: $red;
		&--btn {
			margin-top: 12px;
			border-radius: 4px;
			background-color: $blue;
			padding: 3px 12px;
			color: $light;
			display: inline-block;
			cursor: pointer;
			transition: 0.3s all;
			&:hover {
				opacity: 0.7;
			}
		}
	}
}

.now {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	min-width: 0px;
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
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	&__title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}
}

.volume {
	height: 100%;
	display: flex;
	align-items: center;
	margin-left: 20px;
	flex-shrink: 0;
	min-width: 0px;
	@include r(1100) {
		display: none;
	}

	$height: 30px;
	$thumb-height: 13px;
	$track-height: 3px;

	$upper-color: $blue;
	$lower-color: $light;
	$thumb-color: $light;
	$thumb-hover-color: $light;

	$upper-background: linear-gradient(to bottom, $upper-color, $upper-color) 100% 50% / 100% $track-height no-repeat transparent;
	$lower-background: linear-gradient(to bottom, $lower-color, $lower-color) 100% 50% / 100% $track-height no-repeat transparent;

	@function webkit-slider-thumb-shadow($i: 1) {
		$val: #{$i}px 0 0 -#{($thumb-height - $track-height) / 2} #{$upper-color};
		@if $i == 1 {
			@for $k from 2 through 1000 {
				$val: #{$val}, webkit-slider-thumb-shadow($k);
			}
		}
		@return $val;
	}

	.e-range {
		background-color: #00496A;
		display: block;
		appearance: none;
		width: 100%;
		margin: 0;
		height: $height;
		overflow: hidden;
		cursor: pointer;
		&:focus {
			outline: none;
		}
	}

	.e-range::-webkit-slider-runnable-track {
		width: 100%;
		height: $height;
		background: $lower-background;
	}

	.e-range::-webkit-slider-thumb {
		position: relative;
		appearance: none;
		height: $thumb-height;
		width: $thumb-height;
		background: $thumb-color;
		border-radius: 100%;
		border: 0;
		top: 50%;
		margin-top: (-$thumb-height/2);
		box-shadow: webkit-slider-thumb-shadow();
		transition: background-color 150ms;
	}

	.e-range::-moz-range-track,
	.e-range::-moz-range-progress {
		width: 100%;
		height: $height;
		background: $upper-background;
	}

	.e-range::-moz-range-progress {
		background: $lower-background;
	}

	.e-range::-moz-range-thumb {
		appearance: none;
		margin: 0;
		height: $thumb-height;
		width: $thumb-height;
		background: $thumb-color;
		border-radius: 100%;
		border: 0;
		transition: background-color 150ms;
	}

	.e-range::-ms-track {
		width: 100%;
		height: $height;
		border: 0;
		color: transparent;
		background: transparent;
	}

	.e-range::-ms-fill-lower {
		background: $lower-background;
	}

	.e-range::-ms-fill-upper {
		background: $upper-background;
	}

	.e-range::-ms-thumb {
		appearance: none;
		height: $thumb-height;
		width: $thumb-height;
		background: $thumb-color;
		border-radius: 100%;
		border: 0;
		transition: background-color 150ms;
		top: 0;
		margin: 0;
		box-shadow: none;
	}

	.e-range:hover,
	.e-range:focus {

		&::-webkit-slider-thumb {
			background-color: $thumb-hover-color;
		}
		&::-moz-range-thumb {
			background-color: $thumb-hover-color;
		}
		&::-ms-thumb {
			background-color: $thumb-hover-color;
		}
	}
	.e-range::-webkit-slider-runnable-track {
		width: 100%;
		height: $height;
		background: $lower-background;
	}

	.e-range::-webkit-slider-thumb {
		position: relative;
		appearance: none;
		height: $thumb-height;
		width: $thumb-height;
		background: $thumb-color;
		border-radius: 100%;
		border: 0;
		top: 50%;
		margin-top: (-$thumb-height/2);
		box-shadow: webkit-slider-thumb-shadow();
		transition: background-color 150ms;
	}

	.e-range::-moz-range-track,
	.e-range::-moz-range-progress {
		width: 100%;
		height: $height;
		background: $upper-background;
	}

	.e-range::-moz-range-progress {
		background: $lower-background;
	}

	.e-range::-moz-range-thumb {
		appearance: none;
		margin: 0;
		height: $thumb-height;
		width: $thumb-height;
		background: $thumb-color;
		border-radius: 100%;
		border: 0;
		transition: background-color 150ms;
	}

	.e-range::-ms-track {
		width: 100%;
		height: $height;
		border: 0;
		color: transparent;
		background: transparent;
	}

	.e-range::-ms-fill-lower {
		background: $lower-background;
	}

	.e-range::-ms-fill-upper {
		background: $upper-background;
	}

	.e-range::-ms-thumb {
		appearance: none;
		height: $thumb-height;
		width: $thumb-height;
		background: $thumb-color;
		border-radius: 100%;
		border: 0;
		transition: background-color 150ms;
		top: 0;
		margin: 0;
		box-shadow: none;
	}

	.e-range:hover, .e-range:focus {

		&::-webkit-slider-thumb {
			background-color: $thumb-hover-color;
		}
		&::-moz-range-thumb {
			background-color: $thumb-hover-color;
		}
		&::-ms-thumb {
			background-color: $thumb-hover-color;
		}
	}
}

.playlist {
	position: absolute;
	bottom: 100%;
	left: 0px;
	right: 0px;
	height: auto;
	max-height: calc(100vh - 244px);
	display: flex;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
	z-index: -1;
	&__left {
		width: 247px;
		background-color: $light;
		padding: 16px 15px;
		color: $dark;
		flex-shrink: 0;
		@include r(1100) {
			display: none;
		}
	}
	&__right {
		background-color: #00496A;
		flex-grow: 1;
		color: $light;
		padding-top: 16px;
		padding-bottom: 16px;
		min-width: 0px;
	}
	&__title {
		margin-bottom: 15px;
		font-weight: bold;
		font-size: 20px;
		padding-left: 20px;
		padding-right: 20px;
		line-height: 27px;
	}
	&__list {
		height: 100%;
	}
	&__song {
		display: flex;
		padding-top: 7px;
		padding-bottom: 7px;
		transition: 0.3s all;
		padding-left: 20px;
		padding-right: 20px;
		width: 100%;
		overflow: hidden; 
	}
	&__time {
		color: $blue;
		width: 88px;
		transition: 0.3s all;
		flex-shrink: 0;
	}
	&__author {
		font-weight: bold;
		font-size: 16px;
		line-height: 22px;
		margin-right: 10px;
		flex-shrink: 0;
	}
	&__name {
		font-size: 16px;
		line-height: 22px;
		white-space: nowrap;
		text-overflow: ellipsis;
		min-width: 0px;
		overflow: hidden;
	}
}

.p-podcast {
	display: flex;
	margin-bottom: 12px;
	&__thumb {
		width: 85px;
		height: 85px;
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 9px;
	}
	&__content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-right: 15px;
	}
	&__play {
		width: 33px;
		height: 33px;
		background-color: $red;
		border-radius: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: 0.3s all;
		&:hover {
			opacity: 0.7;
		}
		svg {
			height: 14px;
			width: 14px;
			position: relative;
			left: 1px;
		}
	}
	&__title {
		font-size: 16px;
		font-weight: 600;
	}
	&__discript {
		font-size: 14px;
	}
	&__time {
		font-size: 14px;
		line-height: 19px;
		color: $blue;
	}
}

.loading {
	position: absolute;
	right: calc(100% + 30px);
	top: calc(50% - 13px);
	svg {
		display: block;
	}
}
</style>