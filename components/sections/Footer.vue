<template>
	<footer class="footer">
		<div class="footer__left">
			<router-link class="footer__logo" to="/">
				<img src="~/assets/img/svg/logo-top.svg" alt="Логотип Балтик+">
			</router-link>
			<a href="#" class="footer__link">
				Политика конфиденциальности
			</a>
			<a href="#" class="footer__link">
				Пользовательское соглашение
			</a>
		</div>
		<div class="footer__right">
			<div class="footer__socials">
				<a href="" class="soc-btn soc-btn--vk">
					<div class="soc-btn__left">
						<svg>
							<use xlink:href="#icon-icon-vk"></use>
						</svg>
					</div>
					<div class="soc-btn__separator"></div>
					<div class="soc-btn__right">
						Подписаться
					</div>
				</a>
				<a href="" class="soc-btn soc-btn--instagram">
					<div class="soc-btn__left">
						<svg>
							<use xlink:href="#icon-icon-instagram"></use>
						</svg>
					</div>
					<div class="soc-btn__separator"></div>
					<div class="soc-btn__right">
						Подписаться
					</div>
				</a>
				<a href="" class="soc-btn soc-btn--facebook">
					<div class="soc-btn__left">
						<svg>
							<use xlink:href="#icon-icon-facebook"></use>
						</svg>
					</div>
					<div class="soc-btn__separator"></div>
					<div class="soc-btn__right">
						Подписаться
					</div>
				</a>
				<a href="" class="soc-btn soc-btn--youtube">
					<div class="soc-btn__left">
						<svg>
							<use xlink:href="#icon-icon-youtube"></use>
						</svg>
					</div>
					<div class="soc-btn__separator"></div>
					<div class="soc-btn__right">
						Подписаться
					</div>
				</a>
			</div>
			<div class="footer__text">
				<p>
					Средство массовой информации «Радио Балтик Плюс» зарегистрировано 21 ноября 2014 г. в форме распространения «Сетевое издание». Свидетельство Эл № ФС77-59974 от 21.11.2014 выдано Федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор).
				</p>
				<br>
				<p>
					© 2019 «Балтик Плюс» 12+. Все права защищены. Разработано <a href="https://diez.io/" target="_blank">#dieztech</a>
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.footer {
		display: flex;
		flex-shrink: 0;
		padding-top: 40px;
		padding-bottom: 80px;
		&__left {
			flex-shrink: 0;
			width: 247px;
			background-color: $light;
		}
		&__right {
			padding-left: 20px;
			display: flex;
			padding-top: 16px;
		}
		&__logo {
			padding-top: 12px;
			padding-right: 23px;
			margin-bottom: 12px;
			height: 122px;
			display: block;
			img {
				display: block;
				width: 222px;
				height: 102px;
			}
			&:hover {
				opacity: 0.7;
			}
		}
		&__link {
			display: block;
			font-size: 14px;
			line-height: 19px;
			color: $blue;
		}
		&__socials {
			margin-right: 20px;
			padding-top: 4px;
		}
		&__text {
			color: $light;
			font-size: 14px;
			line-height: 19px;
			flex-grow: 1;
			min-width: 0px;
			a {
				text-decoration: none;
				color: #EF4136;
				&:hover {
					color: $light;
				}
			}
		}
	}

	.soc-btn {
		padding-top: 3px;
		padding-bottom: 3px;
		color: $light;
		display: flex;
		justify-content: space-between;
		height: 30px;
		text-decoration: none;
		margin-bottom: 10px;
		&:hover {
			opacity: 0.7;
		}
		&--vk {
			background-color: #5181B8;
		}
		&--instagram {
			background-color: #DA2C77;
		}
		&--facebook {
			background-color: #395A98;
		}
		&--youtube {
			background-color: #DB4F3E;
		}
		&__left {
			width: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			svg {
				width: 15px;
				height: 15px;
				fill: $light;
			}
		}
		&__separator {
			width: 1px;
			display: block;
			background-color: $light;
		}
		&__right {
			width: 118px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 14px;
			line-height: 19px;
		}
	}
</style>
