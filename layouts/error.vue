<template>
	<div class="error page">
		<h2 class="title title--post">
			<div class="title__line">
				<nuxt-link to="/" class="title__crumb">
					Главная
				</nuxt-link>
				<svg class="title__arrow">
					<use xlink:href="#icon-icon-arrow"></use>
				</svg>
			</div>
			<p class="title__text">Ошибка 404</p>
		</h2>
		<div class="error__content">
			<div class="error__left">
				<div class="error__img-block">
					<svg width="100%" height="83" viewBox="0 0 334 83" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M60.5389 61.3063H46.6408V81.8526H41.4646V61.3063H0V57.626L39.9767 0.807025H46.6408V56.5655H60.5389V61.3063ZM41.4646 56.5655V33.5023C41.4646 22.406 41.7258 13.0905 42.2403 5.54788H41.805C41.0689 6.90127 38.7974 10.36 35.0142 15.916L6.56913 56.5655H41.4646ZM120.239 41.3694C120.239 55.5128 118.07 65.9759 113.765 72.7825C109.435 79.5811 102.914 82.9844 94.1601 82.9844C85.7311 82.9844 79.3361 79.4862 74.9751 72.4817C70.5904 65.4852 68.406 55.1013 68.406 41.3694C68.406 27.3131 70.535 16.9291 74.7851 10.1542C79.0195 3.40302 85.4857 0.015564 94.1601 0.015564C102.645 0.015564 109.119 3.51382 113.559 10.5103C118.015 17.5148 120.239 27.8038 120.239 41.3694ZM74.3498 41.3694C74.3498 53.8982 75.9882 63.1504 79.2648 69.1339C82.5336 75.141 87.5039 78.1328 94.1601 78.1328C101.101 78.1328 106.167 75.0223 109.348 68.8331C112.522 62.6439 114.121 53.4867 114.121 41.3694C114.121 29.4183 112.522 20.3561 109.348 14.1669C106.167 7.96975 101.101 4.86722 94.1601 4.86722C87.2032 4.86722 82.1774 7.96975 79.0511 14.1669C75.909 20.3561 74.3498 29.4183 74.3498 41.3694ZM301.745 61.3063H175.514V81.8526H170.338V61.3063H128.874V57.626L168.85 0.807025H175.514V56.5655H301.745V61.3063ZM170.338 56.5655V33.5023C170.338 22.406 170.599 13.0905 171.106 5.54788H170.679C169.943 6.90127 167.663 10.36 163.888 15.916L135.443 56.5655H170.338Z" fill="#35A8DB"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M301 53.1859V64.4167H309.318C312.524 64.4167 315.5 65.4298 317.953 67.1552V50.4474C315.5 52.1728 312.524 53.1859 309.318 53.1859H301Z" fill="#35A8DB"/>
						<path d="M323.066 48.7933H319.679V68.8094H323.066V48.7933Z" fill="#35A8DB"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M332.033 53.1147H322.029V55.1329H332.033C332.595 55.1329 333.046 54.6818 333.046 54.1278C333.046 53.5737 332.595 53.1147 332.033 53.1147Z" fill="#35A8DB"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M332.033 62.4698H322.029V64.4959H332.033C332.595 64.4959 333.046 64.0368 333.046 63.4828C333.046 62.9288 332.595 62.4698 332.033 62.4698Z" fill="#35A8DB"/>
					</svg>
					<div class="error__last-line">
						<svg width="833" height="21" viewBox="0 0 833 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M22.4063 15.9005V4.12352H16.3199C12.9641 4.12352 9.83787 3.05505 7.26562 1.25052V18.7735C9.83787 16.961 12.9641 15.9005 16.3199 15.9005H22.4063Z" fill="#35A8DB"/>
							<path d="M4.93872 0H0V20.016H4.93872V0Z" fill="#35A8DB"/>
							<path d="M833 12H22V8H833V12Z" fill="#35A8DB"/>
						</svg>

					</div>
				</div>
			</div>
			<div class="error__right">
				<p class="error__text">
					Пропали образы страниц <br>
					И еле пробивается сигнал<br>
					Не видно больше знакомых лиц<br>
					Это на ошибку 404 ты попал
				</p>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'error',
		head () {
			return {
				title: 'Ошибка 404 - Балтик+',
				meta: [
				{}
				]
			}
		},
		data () {
			return {

			}
		},
	}
</script>

<style lang="scss">
	.error {
		&__content {
			padding-top: 40px;
			display: flex;
			justify-content: space-between;
		}
		&__left {
			width: calc(33% - 10px);
			flex-shrink: 0;
		}
		&__right {
			flex-grow: 1;
			min-width: 0px;
			padding-left: 20px;
			color: #fefefe;
		}
		&__img-block {
			position: relative;
		}
		&__last-line {
			position: absolute;
			bottom: 13px;
			left: 630px;
		}
	}
</style>
