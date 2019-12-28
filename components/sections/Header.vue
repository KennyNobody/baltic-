<template>
	<header class="header">
		<div class="header__container">
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
							<a :href="'viber://chat?number=' + contacts.phones.messengers.link" class="h-contact__link">
								{{ contacts.phones.messengers.code }} <strong>{{ contacts.phones.messengers.phone }}</strong>
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
						<nuxt-link active-class="header__link--active" class="header__link" to="/programs/">
							Программы
						</nuxt-link>
						<nuxt-link active-class="header__link--active" class="header__link" to="/podcasts/">
							Подкасты
						</nuxt-link>
						<nuxt-link class="header__link" to="/about/history/">
							О радио
						</nuxt-link>
						<nuxt-link active-class="header__link--active" class="header__link" to="/advertising/">
							Рекламодателям
						</nuxt-link>
						<nuxt-link active-class="header__link--active" class="header__link" to="/contacts/">
							Контакты
						</nuxt-link>
					</nav>
				</div>
			</div>
		</div>

		<div class="header__container header__container--mob">
			<nuxt-link to="/" exact class="header__mob-logo">
				<svg>
					<use xlink:href="#icon-icon-mob-logo"></use>
				</svg>
			</nuxt-link>

			<div class="header__burger" v-on:click="menuOpen = true">
				<svg>
					<use xlink:href="#icon-icon-burger"></use>
				</svg>
			</div>
		</div>

		<transition name="fade">
			<div class="mob-menu" v-if="menuOpen">
				<div class="mob-menu__content">
					<div class="mob-menu__header">
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
							<a :href="'viber://chat?number=' + contacts.phones.messengers.link" class="h-contact__link">
								{{ contacts.phones.messengers.code }} <strong>{{ contacts.phones.messengers.phone }}</strong>
							</a>
							<p class="h-contact__discript h-contact__discript--blue">
								WhatsApp, Viber
							</p>
						</div>
					</div>
					<div class="mob-menu__middle">
						<nuxt-link class="mob-menu__link" to="/" exact>
							Главная
						</nuxt-link>
						<nuxt-link class="mob-menu__link" to="/programs/">
							Программы
						</nuxt-link>
						<nuxt-link class="mob-menu__link" to="/podcasts/">
							Подкасты
						</nuxt-link>
						<nuxt-link class="mob-menu__link" to="/about/history/">
							О радио
						</nuxt-link>
						<nuxt-link class="mob-menu__link" to="/advertising/">
							Рекламодателям
						</nuxt-link>
						<nuxt-link class="mob-menu__link" to="/contacts/">
							Контакты
						</nuxt-link>
					</div>
					<div class="mob-menu__footer">
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
				<div class="mob-menu__overlay" v-on:click="menuOpen = false">

				</div>
			</div>
		</transition>
	</header>

	
</template>

<script>
	import appLogo from '~/components/Logo'
	export default {
		name: 'Header',
		data () {
			return {
				menuOpen: false
			}
		},
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

			if (store.getters['contacts/socials'].length === 0) {
				await store.dispatch('contacts/fetch')
			}
		},
		components: {
			appLogo
		},
		watch:{
			$route (to, from){
				this.menuOpen = false;
			}
		} 
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
		@include r(1100) {
			background-color: $dark;
			box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
		}
		&--scrolled {
			box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
		}
		&__container {
			display: flex;
			width: 1070px;
			padding-left: 15px;
			padding-right: 15px;
			margin-left: auto;
			max-width: 100%;
			margin-right: auto;
			@include r(1100) {
				display: none;
			}
			&--mob {
				display: none;
				@include r(1100) {
					display: flex;
					padding-top: 15px;
					padding-bottom: 15px;
					justify-content: space-between;
					align-items: center;
				}
			}
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
			@include r(1100) {
				// display: none;
			}
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
		&__mob-logo {
			svg {
				display: block;
				width: 220px;
				height: 20px;
			}
		}
		&__burger {
			padding: 10px;
			svg {
				display: block;
				height: 20px;
				width: 20px;
			}
		}
	}

	.h-contact {
		margin-right: 32px;
		@include r(1100) {
			margin-right: 0px;
			text-align: center;
		}
		&__link {
			color: $light;
			font-size: 16px;
			line-height: 26px;
			text-decoration: none;
			margin-bottom: -2px;
			@include r(1100) {
				margin-bottom: 0px;
			}
			strong {
				font-weight: bold;
				font-size: 24px;
				line-height: 33px;
				@include r(1100) {
					font-size: 16px;
					line-height: 26px;
					font-weight: normal;
				}
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

	.mob-menu {
		position: fixed;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		display: flex;
		justify-content: space-between;
		z-index: 5;
		&__content {
			padding-left: 15px;
			padding-right: 15px;
			background-color: $dark;
			min-width: 300px;
			width: 60%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&__header {
			padding-top: 15px;
			padding-bottom: 15px;
		}
		&__middle {
			text-align: center;
		}
		&__link {
			display: block;
			font-size: 18px;
			color: $light;
			text-decoration: none;
			margin-bottom: 5px;
		}
		&__footer {
			display: flex;
			justify-content: center;
			padding-top: 20px;
			padding-bottom: 20px;
		}
		&__overlay {
			background-color: rgba(0, 0, 0, 0.7);
			display: block;
			flex-grow: 1;
			min-width: 0px;
		}
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity .2s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>
