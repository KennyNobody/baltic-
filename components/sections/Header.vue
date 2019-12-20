<template>
	<header class="header">
		<div class="header__container">
			<!-- <nuxt-link class="header__logo" to="/" exact>
				<img src="~/assets/img/svg/logo-top.svg" alt="Логотип Балтик+">
			</nuxt-link> -->
			<appLogo></appLogo>
			<div class="header__content">
				<div class="header__topline">
					<div class="header__contacts">
						<div class="h-contact">
							<a :href="'tel:+' + contacts.phones.broadcast.link" class="h-contact__link">
								{{ contacts.phones.broadcast.code }} <strong>{{ contacts.phones.broadcast.phone }}</strong>
							</a>
							<p class="h-contact__discript h-contact__discript--red">
								Прямой эфир
							</p>
						</div>
						<div class="h-contact">
							<a :href="'tel:+' + contacts.phones.office.link" class="h-contact__link">
								{{ contacts.phones.office.code }} <strong>{{ contacts.phones.office.phone }}</strong>
							</a>
							<p class="h-contact__discript h-contact__discript--blue">
								Офис
							</p>
						</div>
						<div class="h-contact">
							<a :href="'viber://chat?number=' + contacts.phones.viber.link" class="h-contact__link">
								{{ contacts.phones.viber.code }} <strong>{{ contacts.phones.viber.phone }}</strong>
							</a>
							<p class="h-contact__discript h-contact__discript--blue">
								WhatsApp, Viber
							</p>
						</div>
					</div>
					<div class="header__socials">
						<a :href="socials.vkontakte" v-if="socials.vkontakte" class="header__soc-link" target="_blank">
							<svg>
								<use xlink:href="#icon-icon-vk"></use>
							</svg>
						</a>
						<a :href="socials.instagram" v-if="socials.instagram" class="header__soc-link" target="_blank">
							<svg>
								<use xlink:href="#icon-icon-instagram"></use>
							</svg>
						</a>
						<a :href="socials.facebook" v-if="socials.facebook" class="header__soc-link" target="_blank">
							<svg>
								<use xlink:href="#icon-icon-facebook"></use>
							</svg>
						</a>
						<a :href="socials.youtube" v-if="socials.youtube" class="header__soc-link" target="_blank">
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
						<nuxt-link class="header__link" to="/about/history/">
							О радио
						</nuxt-link>
						<nuxt-link active-class="header__link--active" class="header__link" to="/contacts/">
							Контакты
						</nuxt-link>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	import appLogo from '~/components/Logo'
	export default {
		name: 'Header',
		// data () {
		// 	return {
		// 		codeBroadcast: '(4012)',
		// 		phoneBroadcast: '952-444',
		// 		codeOffice: '(4012)',
		// 		phoneOffice: '952-555',
		// 		codeViber: '(952)',
		// 		phoneViber: '222-88-885'
		// 	}
		// },
		computed: {
			socials() {
				return this.$store.getters['contacts/socials']
			},
			contacts() {
				return this.$store.getters['contacts/contacts']
			},
		},
		async fetch({store}) {
			if (store.getters['setting/setting'].length === 0) {
				await store.dispatch('setting/fetch')
			}
		},
		components: {
			appLogo
		},	
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.header {
		flex-shrink: 0;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		z-index: 4;
		transition: 0.3s all;
		&--scrolled {
			box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
		}
		&__container {
			display: flex;
			width: 1070px;
			padding-left: 15px;
			padding-right: 15px;
			margin-left: auto;
			margin-right: auto;
		}
		
		&__content {
			color: $light;
			padding-top: 16px;
			padding-left: 20px;
			padding-bottom: 26px;
			padding-right: 15px;
			flex-grow: 1;
			min-width: 0px;
			background-color: $dark;
			position: relative;
			&:after {
				content: "";
				position: absolute;
				left: 100%;
				width: 100vw;
				top: 0px;
				bottom: 0px;
				display: block;
				background-color: $dark;
			}
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
				// pointer-events: none;
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
			&:hover {
				opacity: 0.7;
			}
		}
		&__discript {
			font-size: 14px;
			font-weight: 600;
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
