<template>
	<div class="page page-shedule">
		<h2 class="title">
			<div class="title__line">
				<nuxt-link to="/" class="title__crumb">
					Главная
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
			</div>
			<p class="title__text">Расписание программ</p>
			<p class="title__control"></p>
			<!-- <p v-for="sdf in shedule" v-bind:key="sdf.day">
				{{ sdf.day }}
			</p> -->
		</h2>
		<div class="page-shedule__columns">
			<div class="page-shedule__left">
				<nav class="page-shedule__menu">
					<a href="" @click.prevent="currentTab = 1" v-bind:class="{ 'page-shedule__day--active' : currentTab == 1 }" class="page-shedule__day ">
						<!-- <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.310447 1.83895L4.43527 6.0056L0.310447 10.1722C0.212023 10.2717 0.13395 10.3897 0.0806833 10.5196C0.0274167 10.6495 1.54814e-08 10.7887 1.27677e-08 10.9293C1.0054e-08 11.0699 0.0274167 11.2092 0.0806833 11.3391C0.13395 11.469 0.212023 11.587 0.310447 11.6864C0.408871 11.7858 0.525717 11.8647 0.654314 11.9185C0.782911 11.9723 0.92074 12 1.05993 12C1.19912 12 1.33695 11.9723 1.46555 11.9185C1.59415 11.8647 1.71099 11.7858 1.80942 11.6864L6.68904 6.75731C7.10365 6.3385 7.10365 5.66196 6.68904 5.24314L1.80942 0.31405C1.71107 0.214497 1.59424 0.135516 1.46564 0.0816269C1.33703 0.0277386 1.19916 1.42999e-08 1.05993 1.26396e-08C0.9207 1.09792e-08 0.782834 0.0277386 0.654228 0.0816269C0.525621 0.135516 0.408798 0.214497 0.310447 0.31405C-0.0935305 0.732862 -0.104161 1.42014 0.310447 1.83895Z" fill="#EF4136"/>
						</svg> -->

						<p>Понедельник</p>
					</a>
					<a href="" @click.prevent="currentTab = 2" v-bind:class="{ 'page-shedule__day--active' : currentTab == 2 }" class="page-shedule__day">
						<!-- <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.310447 1.83895L4.43527 6.0056L0.310447 10.1722C0.212023 10.2717 0.13395 10.3897 0.0806833 10.5196C0.0274167 10.6495 1.54814e-08 10.7887 1.27677e-08 10.9293C1.0054e-08 11.0699 0.0274167 11.2092 0.0806833 11.3391C0.13395 11.469 0.212023 11.587 0.310447 11.6864C0.408871 11.7858 0.525717 11.8647 0.654314 11.9185C0.782911 11.9723 0.92074 12 1.05993 12C1.19912 12 1.33695 11.9723 1.46555 11.9185C1.59415 11.8647 1.71099 11.7858 1.80942 11.6864L6.68904 6.75731C7.10365 6.3385 7.10365 5.66196 6.68904 5.24314L1.80942 0.31405C1.71107 0.214497 1.59424 0.135516 1.46564 0.0816269C1.33703 0.0277386 1.19916 1.42999e-08 1.05993 1.26396e-08C0.9207 1.09792e-08 0.782834 0.0277386 0.654228 0.0816269C0.525621 0.135516 0.408798 0.214497 0.310447 0.31405C-0.0935305 0.732862 -0.104161 1.42014 0.310447 1.83895Z" fill="#EF4136"/>
						</svg> -->
						<p>Вторник</p>
					</a>
					<a href="" @click.prevent="currentTab = 3" v-bind:class="{ 'page-shedule__day--active' : currentTab == 3 }" class="page-shedule__day">
						<!-- <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.310447 1.83895L4.43527 6.0056L0.310447 10.1722C0.212023 10.2717 0.13395 10.3897 0.0806833 10.5196C0.0274167 10.6495 1.54814e-08 10.7887 1.27677e-08 10.9293C1.0054e-08 11.0699 0.0274167 11.2092 0.0806833 11.3391C0.13395 11.469 0.212023 11.587 0.310447 11.6864C0.408871 11.7858 0.525717 11.8647 0.654314 11.9185C0.782911 11.9723 0.92074 12 1.05993 12C1.19912 12 1.33695 11.9723 1.46555 11.9185C1.59415 11.8647 1.71099 11.7858 1.80942 11.6864L6.68904 6.75731C7.10365 6.3385 7.10365 5.66196 6.68904 5.24314L1.80942 0.31405C1.71107 0.214497 1.59424 0.135516 1.46564 0.0816269C1.33703 0.0277386 1.19916 1.42999e-08 1.05993 1.26396e-08C0.9207 1.09792e-08 0.782834 0.0277386 0.654228 0.0816269C0.525621 0.135516 0.408798 0.214497 0.310447 0.31405C-0.0935305 0.732862 -0.104161 1.42014 0.310447 1.83895Z" fill="#EF4136"/>
						</svg> -->
						<p>Среда</p>
					</a>
					<a href="" @click.prevent="currentTab = 4" v-bind:class="{ 'page-shedule__day--active' : currentTab == 4 }" class="page-shedule__day">
						<!-- <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.310447 1.83895L4.43527 6.0056L0.310447 10.1722C0.212023 10.2717 0.13395 10.3897 0.0806833 10.5196C0.0274167 10.6495 1.54814e-08 10.7887 1.27677e-08 10.9293C1.0054e-08 11.0699 0.0274167 11.2092 0.0806833 11.3391C0.13395 11.469 0.212023 11.587 0.310447 11.6864C0.408871 11.7858 0.525717 11.8647 0.654314 11.9185C0.782911 11.9723 0.92074 12 1.05993 12C1.19912 12 1.33695 11.9723 1.46555 11.9185C1.59415 11.8647 1.71099 11.7858 1.80942 11.6864L6.68904 6.75731C7.10365 6.3385 7.10365 5.66196 6.68904 5.24314L1.80942 0.31405C1.71107 0.214497 1.59424 0.135516 1.46564 0.0816269C1.33703 0.0277386 1.19916 1.42999e-08 1.05993 1.26396e-08C0.9207 1.09792e-08 0.782834 0.0277386 0.654228 0.0816269C0.525621 0.135516 0.408798 0.214497 0.310447 0.31405C-0.0935305 0.732862 -0.104161 1.42014 0.310447 1.83895Z" fill="#EF4136"/>
						</svg> -->
						<p>Четверг</p>
					</a>
					<a href="" @click.prevent="currentTab = 5" v-bind:class="{ 'page-shedule__day--active' : currentTab == 5 }" class="page-shedule__day">
						<!-- <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.310447 1.83895L4.43527 6.0056L0.310447 10.1722C0.212023 10.2717 0.13395 10.3897 0.0806833 10.5196C0.0274167 10.6495 1.54814e-08 10.7887 1.27677e-08 10.9293C1.0054e-08 11.0699 0.0274167 11.2092 0.0806833 11.3391C0.13395 11.469 0.212023 11.587 0.310447 11.6864C0.408871 11.7858 0.525717 11.8647 0.654314 11.9185C0.782911 11.9723 0.92074 12 1.05993 12C1.19912 12 1.33695 11.9723 1.46555 11.9185C1.59415 11.8647 1.71099 11.7858 1.80942 11.6864L6.68904 6.75731C7.10365 6.3385 7.10365 5.66196 6.68904 5.24314L1.80942 0.31405C1.71107 0.214497 1.59424 0.135516 1.46564 0.0816269C1.33703 0.0277386 1.19916 1.42999e-08 1.05993 1.26396e-08C0.9207 1.09792e-08 0.782834 0.0277386 0.654228 0.0816269C0.525621 0.135516 0.408798 0.214497 0.310447 0.31405C-0.0935305 0.732862 -0.104161 1.42014 0.310447 1.83895Z" fill="#EF4136"/>
						</svg> -->
						<p>Пятница</p>
					</a>
					<a href="" @click.prevent="currentTab = 6" v-bind:class="{ 'page-shedule__day--active' : currentTab == 6 }" class="page-shedule__day">
						<!-- <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.310447 1.83895L4.43527 6.0056L0.310447 10.1722C0.212023 10.2717 0.13395 10.3897 0.0806833 10.5196C0.0274167 10.6495 1.54814e-08 10.7887 1.27677e-08 10.9293C1.0054e-08 11.0699 0.0274167 11.2092 0.0806833 11.3391C0.13395 11.469 0.212023 11.587 0.310447 11.6864C0.408871 11.7858 0.525717 11.8647 0.654314 11.9185C0.782911 11.9723 0.92074 12 1.05993 12C1.19912 12 1.33695 11.9723 1.46555 11.9185C1.59415 11.8647 1.71099 11.7858 1.80942 11.6864L6.68904 6.75731C7.10365 6.3385 7.10365 5.66196 6.68904 5.24314L1.80942 0.31405C1.71107 0.214497 1.59424 0.135516 1.46564 0.0816269C1.33703 0.0277386 1.19916 1.42999e-08 1.05993 1.26396e-08C0.9207 1.09792e-08 0.782834 0.0277386 0.654228 0.0816269C0.525621 0.135516 0.408798 0.214497 0.310447 0.31405C-0.0935305 0.732862 -0.104161 1.42014 0.310447 1.83895Z" fill="#EF4136"/>
						</svg> -->
						<p>Суббота</p>
					</a>
					<a href="" @click.prevent="currentTab = 7" v-bind:class="{ 'page-shedule__day--active' : currentTab == 7 }" class="page-shedule__day">
						<!-- <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.310447 1.83895L4.43527 6.0056L0.310447 10.1722C0.212023 10.2717 0.13395 10.3897 0.0806833 10.5196C0.0274167 10.6495 1.54814e-08 10.7887 1.27677e-08 10.9293C1.0054e-08 11.0699 0.0274167 11.2092 0.0806833 11.3391C0.13395 11.469 0.212023 11.587 0.310447 11.6864C0.408871 11.7858 0.525717 11.8647 0.654314 11.9185C0.782911 11.9723 0.92074 12 1.05993 12C1.19912 12 1.33695 11.9723 1.46555 11.9185C1.59415 11.8647 1.71099 11.7858 1.80942 11.6864L6.68904 6.75731C7.10365 6.3385 7.10365 5.66196 6.68904 5.24314L1.80942 0.31405C1.71107 0.214497 1.59424 0.135516 1.46564 0.0816269C1.33703 0.0277386 1.19916 1.42999e-08 1.05993 1.26396e-08C0.9207 1.09792e-08 0.782834 0.0277386 0.654228 0.0816269C0.525621 0.135516 0.408798 0.214497 0.310447 0.31405C-0.0935305 0.732862 -0.104161 1.42014 0.310447 1.83895Z" fill="#EF4136"/>
						</svg> -->
						<p>Воскресенье</p>
					</a>
				</nav>
			</div>
			<div class="page-shedule__right">
				<div v-for="(item) in shedule" :key="item.day">

					<div class="page-shedule__list" v-if="currentTab == item.day">
						<nuxt-link :to='"/programs/" + key.id' class="page-shedule__item" v-for="key in item.table" v-bind:key="key.id">
							<time class="page-shedule__time">
								{{ key.time }}
							</time>
							<div class="page-shedule__info">
								<p class="page-shedule__name">
									{{ key.title }}
								</p>
								<p class="page-shedule__discript">
									{{ key.authors }}
								</p>
							</div>
						</nuxt-link>
					</div>
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
				title: 'Расписание - Балтик+',
				meta: [
				{}
				]
			}
		},
		name: 'page-shedule',
		data () {
			return {
				currentTab: 1
			}
		},
		computed: {
			shedule(params) {
				return this.$store.getters['shedule/shedule']
			},
		},
		async fetch({store}) {
			await store.dispatch('shedule/fetch')
		},
		methods: {

		},
		components: {
			appSidebar
		},
		mounted() {
			let date = new Date();
			let days = [7, 1, 2, 3, 4, 5, 6];

			this.currentTab = days[date.getDay()];

			// return days[date.getDay()];
		}
	}
</script>

<style lang="scss">
.page-shedule {
	&__columns {
		display: flex;
		justify-content: space-between;
		@include r(1100) {
			display: block;
		}
	}
	&__left {
		width: 247px;
		flex-shrink: 0;
		@include r(1100) {
			color: $light;
			margin-bottom: 40px;
		}
	}
	&__right {
		flex-grow: 1;
		min-width: 0px;
		color: $light;
		padding-left: 20px;
		@include r(1100) {
			padding-left: 0px;
		}
	}
	&__shedule {

	}
	&__day {
			// font-weight: bold;
			// font-size: 20px;
			// line-height: 27px;
			display: block;
			color: $dark;
			text-decoration: none;
			margin-bottom: 15px;
			position: relative;
			display: flex;
			align-items: center;
			transition: 0.3s all;
			@include r(1100) {
				color: $light;
				border-bottom: 1px solid $blue;
				font-size: 18px;
				line-height: 23px;
			}
			svg {
				opacity: 0;
				margin-right: 9px;
				display: block;
				@include r(1100) {
					display: none;
				}
			}
			&--active {
				color: $red;
				@include r(1100) {
					color: $blue;
				}
				svg {
					opacity: 1;
				}
			}
		}
		&__item {
			display: flex;
			margin-bottom: 15px;
			text-decoration: none;
			@include r(1100) {
				display: block;
				margin-bottom: 10px;
			}
		}
		&__time {
			font-size: 16px;
			line-height: 22px;
			color: $blue;
			flex-shrink: 0;
			margin-right: 40px;
			flex-shrink: 0;
		}
		&__name {
			font-weight: bold;
			color: #ffffff;
		}
	}
</style>