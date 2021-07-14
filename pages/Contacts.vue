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
				<div class="contacts__map" id="map"></div>
			</div>
			<div class="contacts__column">
				<template>
					<p class="contacts__bold" v-if="contacts.phones.office.title">
						{{ contacts.phones.office.title }}
					</p>
					<p v-if="contacts.phones.office.adress">
						{{ contacts.phones.office.adress }}
					</p>
					<!-- <div class="contacts__link">
						Посмотреть на карте
					</div> -->
					<a v-if="contacts.phones.office.link" :href="contacts.phones.office.link" class="contacts__phone">
						+7 {{ contacts.phones.office.code }} {{ contacts.phones.office.phone }}
					</a>
					<span v-if="contacts.phones.office.multichannel == 1">(многоканальный)</span>
					<br>
					<br>
				</template>
				<template>
					<p class="contacts__bold" v-if="contacts.phones.promo.title">
						{{ contacts.phones.promo.title }}
					</p>
					<p v-if="contacts.phones.promo.adress">
						{{ contacts.phones.promo.adress }}
					</p>
					<!-- <a href="" class="contacts__link">
						Посмотреть на карте
					</a> -->
					<a v-if="contacts.phones.promo.phone" :href="contacts.phones.promo.link" class="contacts__phone">
						+7 {{ contacts.phones.promo.code }} {{ contacts.phones.promo.phone }}
					</a>
					<span v-if="contacts.phones.promo.multichannel == 1">(многоканальный)</span><br>
					<a v-if="contacts.phones.promo.email" :href="`mailto:${contacts.phones.promo.email}`" class="contacts__mail">
						{{ contacts.phones.promo.email }}
					</a>
					<br>
					<br>
				</template>
				<template>
					<p class="contacts__bold" v-if="contacts.phones.broadcast.title">
						{{ contacts.phones.broadcast.title }}
					</p>
					<a v-if="contacts.phones.broadcast.phone" :href="contacts.phones.broadcast.link" class="contacts__phone">
						+7 {{ contacts.phones.broadcast.code }} {{ contacts.phones.broadcast.phone }}
					</a>
					<span v-if="contacts.phones.broadcast.multichannel == 1">(многоканальный)</span> 
					<br>
					<a v-if="contacts.phones.broadcast.email" :href="`mailto:${contacts.phones.broadcast.email}`" class="contacts__mail">
						{{ contacts.phones.broadcast.email }}
					</a>
					<br>
					<br>
				</template>
				<p v-if="contacts.phones.discript" v-html="contacts.phones.discript"></p>
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
	import { yandexMap, ymapMarker } from 'vue-yandex-maps'

	export default {
		head () {
			return {
				title: 'Контакты'  + ' - ' + process.env.title,
				meta: [
				// { hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }
				]
			}
		},
		data () {
			return {
				
			}
		},
		name: 'contacts',
		components: {
			appForm
		},
		computed: {
			contacts() {
				return this.$store.getters['contacts/contacts']
			},
		},
		methods: {
			
		},
		mounted() {
			let myMap;
			let myPlacemark;
			let myPlacemark2;

			function init () {
				
				myMap = new ymaps.Map(
					'map', {
						center: [54.739337207314534,20.481609053816385],
						zoom: 12,
					}, {
						searchControlProvider: 'yandex#search'
					}),
				myPlacemark = new ymaps.Placemark([54.74444506993298,20.47730349999996], {
					balloonContentHeader: "Рекламный отдел «Балтик Плюс»",
					balloonContentBody: "236023, Калининград, ул. Третьяковская, 10",
				}),
				myPlacemark2 = new ymaps.Placemark([54.730619, 20.489242], {
					balloonContentHeader: "Информационное агентство «Балтик Плюс»",
					balloonContentBody: "Калининград, ул. Яналова, 2",
				});

				myMap.geoObjects.add(myPlacemark);
				myMap.geoObjects.add(myPlacemark2);
				myMap.behaviors.disable('drag');
			}

			function setTypeAndPan () {
				myMap.panTo([62.915, 34.461], {
					delay: 1500
				});
			}

			ymaps.ready(init);
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
		@include r(1100) {
			flex-direction: column;
		}
	}
	&__column {
		width: calc(50% - 10px);
		@include r(1100) {
			width: 100%;
		}
		&:nth-child(2) {
			@include r(1100) {
				order: -1;
				margin-bottom: 40px;
			}
		}
	}
	&__map {
		height: 488px;
		width: 100%;
		display: block;
		overflow: hidden;
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
