<template>
	<header class="header">
		<nuxt-link class="header__logo" to="/">
			<img src="~/assets/img/svg/logo-top.svg" alt="Логотип Балтик+">
		</nuxt-link>
		<div class="header__content">
			<div class="header__topline">
				<div class="header__contacts">
					<div class="h-contact">
						<a href="tel:+" class="h-contact__link">
							{{ codeBroadcast }} <strong>{{ phoneBroadcast }}</strong>
						</a>
						<p class="h-contact__discript h-contact__discript--red">
							Прямой эфир
						</p>
					</div>
					<div class="h-contact">
						<a href="tel:+" class="h-contact__link">
							{{ codeOffice }} <strong>{{ phoneOffice }}</strong>
						</a>
						<p class="h-contact__discript h-contact__discript--blue">
							Офис
						</p>
					</div>
					<div class="h-contact">
						<a href="tel:+" class="h-contact__link">
							{{ codeViber }} <strong>{{ phoneViber }}</strong>
						</a>
						<p class="h-contact__discript h-contact__discript--blue">
							WhatsApp, Viber
						</p>
					</div>
				</div>
				<div class="header__socials">
					<a href="" class="header__soc-link">
						<svg>
							<use xlink:href="#icon-icon-vk"></use>
						</svg>
					</a>
					<a href="" class="header__soc-link">
						<svg>
							<use xlink:href="#icon-icon-instagram"></use>
						</svg>
					</a>
					<a href="" class="header__soc-link">
						<svg>
							<use xlink:href="#icon-icon-facebook"></use>
						</svg>
					</a>
					<a href="" class="header__soc-link">
						<svg>
							<use xlink:href="#icon-icon-youtube"></use>
						</svg>
					</a>
				</div>
			</div>
			<div class="header__bottomline">
				<nav class="header__nav">
					<nuxt-link active-class="header__link--active" class="header__link" to="/" exact>
						Главная
					</nuxt-link>
					<nuxt-link active-class="header__link--active" class="header__link" to="/news/">
						Новости
					</nuxt-link>
					<nuxt-link active-class="header__link--active" class="header__link" to="/programs/">
						Программы
					</nuxt-link>
					<nuxt-link active-class="header__link--active" class="header__link" to="/podcasts/">
						Подкасты
					</nuxt-link>
					<nuxt-link active-class="header__link--active" class="header__link" to="/about/">
						О радио
					</nuxt-link>
					<nuxt-link active-class="header__link--active" class="header__link" to="/contacts/">
						Контакты
					</nuxt-link>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		data () {
			return {
				codeBroadcast: '(4012)',
				phoneBroadcast: '952-444',
				codeOffice: '(4012)',
				phoneOffice: '952-555',
				codeViber: '(952)',
				phoneViber: '222-88-885'
			}
		},
		props: {
			msg: String
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.header {
		display: flex;
		flex-shrink: 0;
		margin-bottom: 15px;
		&__logo {
			flex-shrink: 0;
			padding-top: 12px;
			padding-right: 23px;
			padding-bottom: 8px;
			height: 122px;
			width: 247px;
			background-color: $light;
			img {
				display: block;
				width: 222px;
				height: 102px;
			}
			&:hover {
				opacity: 0.7;
			}
		}
		&__content {
			color: $light;
			padding-top: 16px;
			padding-left: 20px;
			padding-bottom: 26px;
			flex-grow: 1;
			min-width: 0px;
		}
		&__topline {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 17px;
		}
		&__contacts {
			display: flex;
		}
		&__bottomline {
			display: flex;
			justify-content: space-between;
		}
		&__nav {
			display: flex;
			align-items: center;
		}
		&__link {
			text-decoration: none;
			color: $light;
			margin-right: 40px;
			position: relative;
			&:hover {
				opacity: 0.7;
			}
			&--active {
				pointer-events: none;
				&:after {
					position: absolute;
					top: calc(100% + 3px);
					left: 0px;
					right: 0px;
					height: 3px;
					background-color: $red;
					content: "";
					display: block;
				}
			}
		}
		&__socials {
			display: flex;
			align-items: center;
		}
		&__soc-link {
			transition: 0.3s all;
			margin-left: 14px;
			text-decoration: none;
			svg {
				display: block;
				height: 20px;
				width: 24px;
				fill: $blue;
			}
			&:hover {
				opacity: 0.7;
			}
		}
	}

	.h-contact {
		margin-right: 32px;
		&__link {
			color: $light;
			font-size: 16px;
			line-height: 26px;
			text-decoration: none;
			margin-bottom: -2px;
			strong {
				font-weight: bold;
				font-size: 24px;
				line-height: 33px;
			}
		}
		&__discript {
			font-size: 14px;
			line-height: 19px;
			&--red {
				color: $red;
			}
			&--blue {
				color: $blue;
			}
		}
	}
</style>
