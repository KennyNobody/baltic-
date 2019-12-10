<template>
	<div class="page page-about">
		<h2 class="title">
			<div class="title__line">
				<nuxt-link to="/" class="title__crumb">
					Главная
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
				<nuxt-link to="/about/history/" class="title__crumb">
					О радио
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
			</div>
			<p class="title__text">Ведущие эфира</p>
			<p class="title__control"></p>
		</h2>
		<div class="page-about__columns">
			<div class="page-about__side">
				<appSidebar></appSidebar>
			</div>
			<div class="page-about__main">
				<div class="authors">
					<article class="authors__article" v-for="item in authorsCounter" v-bind:key="item.id">
						<div class="authors__main" style="background-image: url('http://placehold.it/1000x600')">
							<div class="authors__content">
								<h5 class="authors__title">
									Ведущий новостей
								</h5>
								<div class="authors__footer">
									<p class="authors__discript">
										В эфире:
									</p>
									<p class="authors__time">
										09.00-09.10, 12.00-12.10, 15.00-15.00, 18.00-18.00
									</p>
								</div>
							</div>
						</div>
						<div class="authors__name">
							<p>
								Игорь Хвастолюбов
							</p>
						</div>
					</article>
					<div class="authors__clear"></div>
					<div class="authors__clear"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import appSidebar from '~/components/Sidebar'

	export default {
		head () {
			return {
				title: 'Ведущие эфира - Балтик+',
				meta: [
				{}
				]
			}
		},
		name: 'page-authors',
		data () {
			return {
				authorsCounter: 8,
			}
		},
		components: {
			appSidebar
		}
	}
</script>

<style lang="scss">
	.authors {
		display: flex;
		justify-content: space-between;
		flex-grow: 1;
		min-width: 0px;
		flex-wrap: wrap;
		&__article {
			width: calc(100% / 3 - 10px);
			background-color: red;
			margin-bottom: 20px;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			background-color: $light;
			&:hover {
				.authors__content {
					opacity: 1;
				}
			}
		}
		&__clear {
			width: calc(100% / 3 - 10px);
			display: block;
			height: 0px;
		}
		&__name {
			color: $light;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: $red;
			min-height: 46px;
			white-space: nowrap;
		}
		&__main {
			height: 203px;
			position: relative;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
		}
		&__content {
			transition: 0.3s all;
			opacity: 0;
			position: absolute;
			top: 0px;
			left: 0px;
			right: 0px;
			bottom: 0px;
			background-color: $dark;
			padding: 70px 30px 23px 30px;
			color: $light;
			text-align: center;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&__footer {
			line-height: 1.5;
		}
		&__title {
			font-weight: 600;
		}
		&__discript {
			color: $blue;
		}
	}
</style>