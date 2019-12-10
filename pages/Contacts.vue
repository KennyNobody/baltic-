<template>
	<div class="page page--contacts">
		<h2 class="title">
			<div class="title__line">
				<nuxt-link to="/" class="title__crumb">
					Главная
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
			</div>
			<p class="title__text">Контакты</p>
		</h2>
		<div class="contacts__columns">
			<div class="contacts__column">
				<div class="contacts__map"></div>
			</div>
			<div class="contacts__column">
				<p class="contacts__bold">
					Информационное агентство «Балтик Плюс»
				</p>
				<p>
					236023, Калининград, ул. Яналова, 2
				</p>
				<a href="" class="contacts__link">
					Посмотреть на карте
				</a>
				<br>
				<br>
				<a href="" class="contacts__phone">
					+7 (4012) 952-555
				</a>
				<span>(многоканальный)</span>
				<br>
				<br>
				<p class="contacts__bold">
					Рекламный отдел «Балтик Плюс»
				</p>
				<p>
					236023, Калининград, ул. Третьяковская, 10
				</p>
				<a href="" class="contacts__link">
					Посмотреть на карте
				</a>
				<br>
				<br>
				<a href="" class="contacts__phone">
					+7 (4012) 952-555
				</a>
				<span>(многоканальный)</span>
				<br>
				<a href="mailto:reklama@balticplus.ru" class="contacts__mail">
					reklama@balticplus.ru
				</a>
				<br>
				<br>
				<p class="contacts__bold">
					Прямой эфир «Балтик Плюс»
				</p>
				<a href="" class="contacts__phone">
					+7 (4012) 952-555
				</a>
				<span>(многоканальный)</span> 
				<br>
				<a href="mailto:online@balticplus.ru" class="contacts__mail">
					online@balticplus.ru
				</a>
				<br>
				<br>
				<p>
					Все ссылки радиостанции на подкасты, <br>
					соцсети, новости, видео, онлайн вещание <br>
					можно найти по единому адресу
				</p>
				<a href="http://taplink.cc/baltic_plus" target="_blank" class="contacts__link">
					http://taplink.cc/baltic_plus
				</a>
			</div>
		</div>
		<h2 class="title">
			<div class="title__line"></div>
			<p class="title__text">Связаться с нами</p>
		</h2>
		<appForm></appForm>
	</div>
</template>

<script>
	import appForm from '~/components/ContactForm'


	export default {
		head () {
			return {
				title: 'Контакты - Балтик+',
				meta: [
				{ hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }
				]
			}
		},
		name: 'home',
		components: {
			appForm
		}
	}
</script>

<style lang="scss">
	.contacts {
		&__columns {
			display: flex;
			justify-content: space-between;
			color: $light;
			margin-bottom: 74px;
		}
		&__column {
			width: calc(50% - 10px);
		}
		&__map {
			height: 488px;
			width: 100%;
			background-color: $blue;
			display: block;
		}
		&__bold {
			font-weight: bold;
		}
		&__link {
			text-decoration: underline;
			color: $blue;
			&:hover {
				text-decoration: none;
			}
		}
		&__phone {
			font-weight: bold;
			color: $light;
			text-decoration: none;
			&:hover {
				color: $blue;
			}
		}
		&__mail {
			color: $light;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
