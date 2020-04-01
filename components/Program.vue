<template>
	<nuxt-link :to='"/programs/" + id' class="program">
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
		<div class="program__link">
			<svg>
				<use xlink:href="#icon-icon-arrow"></use>
			</svg>
		</div>
	</nuxt-link>
</template>

<script>

	import VClamp from 'vue-clamp'

	export default {
		name: 'program',
		props: ['id', 'programPlay', 'preview', 'title', 'content', 'time', 'author'],
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
		text-decoration: none;
		@include r(1100) {
			// display: block;
		}
		&:hover {
			.program__title {
				opacity: 0.7;
			}
			.program__thumb {
				opacity: 0.7;
			}
			.program__link {
				opacity: 0.7;
			}
		}
		&__thumb {
			height: 247px;
			width: 247px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-shrink: 0;
			transition: 0.3s all;
			@include r(670) {
				display: none;
			}
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
			@include r(670) {
				padding: 0px;
				padding-right: 15px;
			}
		}
		&__title {
			font-weight: bold;
			font-size: 20px;
			line-height: 24px;
			margin-bottom: 20px;
			transition: 0.3s all;
			text-decoration: none;
			@include r(670) {
				margin-bottom: 10px;
			}
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
			@include r(670) {
				height: auto;
			}
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

