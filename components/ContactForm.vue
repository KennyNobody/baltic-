<template>
	<div class="form">
		<div class="form__left">
			<p class="form__title">
				Сообщение для:
			</p>
			<label class="form__radio">
				<input type="radio" name="message-for" class="form__radio-input" value="Рекламного отдела" v-model="form.recipient">
				<div class="form__radio-icon">
					<div class="form__radio-point"></div>
				</div>
				<p class="form__radio-text">
					Рекламного отдела
				</p>
			</label>
			<label class="form__radio">
				<input type="radio" name="message-for" class="form__radio-input" value="Прямой эфир" v-model="form.recipient">
				<div class="form__radio-icon">
					<div class="form__radio-point"></div>
				</div>
				<p class="form__radio-text">
					Прямого эфира
				</p>
			</label>
			<label class="form__radio">
				<input type="radio" name="message-for" class="form__radio-input" value="Кому-нибудь" v-model="form.recipient">
				<div class="form__radio-icon">
					<div class="form__radio-point"></div>
				</div>
				<p class="form__radio-text">
					Кого-нибудь
				</p>
			</label>
		</div>
		<div class="form__main">
			<p class="form__discript">
				Все поля обязательны к заполнению
			</p>
			<div class="form__content">
				<div class="form__textarea">
					<textarea class="form__textarea-input"
					v-model="form.text"
					name="text"
					v-validate="'required'"
					v-bind:class="{'form__textarea-input--error': errors.first('text') }"
					></textarea>
				</div>
				<div class="form__inputs">

					<input
					v-bind:class="{'form__input--error': errors.first('name') }" 
					v-validate="'required'" 
					type="text"
					name="name"
					class="form__input" 
					v-model="form.name"  
					placeholder="Имя"
					>

					<input
					v-bind:class="{'form__input--error': errors.first('phone') }"
					type="text"
					name="phone"
					v-validate="'required'" 
					class="form__input" 
					v-model="form.phone" 
					placeholder="Телефон"
					>

					<input
					v-bind:class="{'form__input--error': errors.first('email') }"
					v-validate="'required|email'" 
					name="email" 
					type="text" 
					class="form__input" 
					v-model="form.email" 
					placeholder="E-mail"
					>
					<p class="form__privacy">
						Нажимая кнопку “Отправить”, вы подтверждаете свое согласие с 
						<nuxt-link to="about/politics/" target="_blank">
							политикой использования персональных данных.
						</nuxt-link>
					</p>
					<button v-on:click.prevent class="form__submit">
						Отправить
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'contactForm',
		data () {
			return {
				form: {
					recipient: '',
					name: '',
					phone: '',
					email: '',
					text: ''
				}
			}
		},
		components: {}
	}
</script>

<style lang="scss">
	.form {
		display: flex;
		@include r(1100) {
			display: block;
		}
		&__left {
			width: 247px;
			flex-shrink: 0;
			color: $dark;
			@include r(1100) {
				color: $light;
				width: 100%;
			}
		}
		&__main {
			color: $light;
			font-style: italic;
			font-size: 14px;
			line-height: 19px;
			padding-left: 20px;
			flex-grow: 1;
			@include r(1100) {
				padding-left: 0px;
			}
		}
		&__title {
			margin-bottom: 26px;
			font-weight: bold;
			font-size: 20px;
			line-height: 27px;
		}
		&__radio {
			cursor: pointer;
			display: flex;
			margin-bottom: 20px;
			&-icon {
				display: flex;
				justify-content: center;
				align-items: center;
				border: 2px solid $blue;
				width: 30px;
				height: 30px;
				border-radius: 30px;
				margin-right: 12px;
			}
			&-point {
				width: 12px;
				height: 12px;
				border-radius: 15px;
				background-color: $blue;
				display: block;
				opacity: 0;
				transition: 0.3s all;
			}
			&-input {
				display: none;
				&:checked + .form__radio-icon {
					.form__radio-point {
						opacity: 1;
					}
				}
			}
			&-text {
				position: relative;
				top: 4px;
			}
		}
		&__content {
			display: flex;
			justify-content: space-between;
			@include r(850) {
				flex-direction: column;
			}
		}
		&__textarea {
			min-width: 0px;
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			@include r(850) {
				height: 300px;
				margin-bottom: 15px;
			}
		}
		&__textarea-input {
			display: block;
			height: 100%;
			border: 1px solid $dark;
			padding: 8px 13px;
			background-color: #00496A;
			resize: none;
			color: $light;
			outline: none;
			transition: 0.3s all;
			&::placeholder {
				color: $blue;
			}
			&--error {
				border-color: $red;
			}
		}
		&__inputs {
			margin-left: 20px;
			width: 245px;
			@include r(850) {
				margin-left: 0px;
				width: 100%;
			}
		}
		&__input {
			display: block;
			width: 100%;
			height: 40px;
			background-color: #00496A;
			color: $light;
			margin-bottom: 15px;
			border: none;
			padding-left: 13px;
			padding-right: 13px;
			outline: none;
			border: 1px solid $dark;
			transition: 0.3s all;
			&::placeholder {
				color: $blue;
			}
			&--error {
				border-color: $red;
			}
		}
		&__privacy {
			font-style: normal;
			margin-bottom: 13px;
			a {
				color: $light;
			}
		}
		&__submit {
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: $dark;
			width: 100%;
			border: 2px solid $red;
			color: $light;
			transition: 0.3s all;
			&:hover {
				opacity: 0.7;
			}
		}
	}
</style>

