<template>
	<client-only>
		<form class="form" method="post" @submit.prevent="validate">
			<vue-recaptcha
			ref="recaptcha"
			size="invisible"
			:sitekey="sitekey"
			@verify="sentMessage"
			@expired="onCaptchaExpired"
			:loadRecaptchaScript="true"
			/>
			<div class="form__left">
				<p class="form__title">
					Сообщение для:
				</p>
				<label class="form__radio">
					<input checked type="radio" name="message-for" class="form__radio-input" value="Рекламного отдела" v-model="form.recipient">
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
						Службы информации
					</p>
				</label>
				<label class="form__radio">
					<input type="radio" name="message-for" class="form__radio-input" value="Кому-нибудь" v-model="form.recipient">
					<div class="form__radio-icon">
						<div class="form__radio-point"></div>
					</div>
					<p class="form__radio-text">
						Ведущих новостей
					</p>
				</label>
			</div>
			<div class="form__main">
				<p class="form__discript">
					Все поля обязательны к заполнению
				</p>
				<div class="form__content">
					<div class="form__textarea">
						<!-- v-validate="'required'" -->
						<textarea class="form__textarea-input"
						v-model="form.text"
						name="text"
						required
						v-bind:class="{'form__textarea-input--error': errors.first('text') }"
						></textarea>
					</div>
					<div class="form__inputs">

						<!-- v-validate="'required'" -->

						<input
						v-bind:class="{'form__input--error': errors.first('name') }" 
						required
						type="text"
						name="name"
						class="form__input" 
						v-model="form.name"  
						placeholder="Имя"
						>

						<!-- v-validate="'required'" -->

						<imask-input
						v-bind:class="{'form__input--error': errors.first('phone') }"
						type="text"
						name="phone"
						required
						class="form__input" 
						:mask="phoneMask"
						v-model="form.phone" 
						placeholder="Телефон"
						></imask-input>

						<!-- v-validate="'required|email'"  -->
						<input
						v-bind:class="{'form__input--error': errors.first('email') }"
						required
						name="email" 
						type="text" 
						class="form__input"
						v-model="form.email" 
						placeholder="E-mail"
						>
						<p class="form__privacy">
							Нажимая кнопку “Отправить”, вы подтверждаете свое согласие с 
							<nuxt-link to="/about/politics/" target="_blank">
								политикой использования персональных данных.
							</nuxt-link>
						</p>
						<button class="form__submit" type="submit">
							{{ message }}
						</button>
					</div>
				</div>
			</div>
		</form>
	</client-only>
</template>

<script>
	import VueRecaptcha from 'vue-recaptcha';

	export default {
		name: 'contactForm',
		components: {
			'vue-recaptcha': VueRecaptcha
		},
		data () {
			return {
				form: {
					recipient: 'Рекламного отдела',
					name: '',
					phone: '',
					email: '',
					text: ''
				},
				phoneMask: '+7 (000) 000-00-00',
				sitekey: '6LfrnXYaAAAAAGei57EgrfpBHRTEqNhtDICzfNYl',
				message: 'Отправить'
			}
		},
		methods: {
			sentInfo () {
				
			},
			sentMessage (recaptchaToken) {
				this.$axios.post(process.env.apiURL + 'wp-content/themes/diez__template_balticplus/php/send.php', {
					recipient: this.form.recipient,
					name: this.form.name,
					phone: this.form.phone,
					email: this.form.email,
					text: this.form.text,
					recaptchaToken: recaptchaToken
				})
				.then(response => {
					console.log(response);
					this.message = 'Отправлено!';

					setTimeout(() => this.message = 'Отправить', 3000);
				})
				.catch((e) => {
					console.log(e);
				})
			},
			onCaptchaExpired () {
				this.$refs.recaptcha.reset()
			},
			validate () {
				// this.$validator.validateAll().then((result) => {
				// 	if (result) {
				// 		this.$refs.recaptcha.execute();
				// 	}
				// });
				this.$refs.recaptcha.execute();
			},
		},
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
		outline: none;
		&:hover {
			opacity: 0.7;
		}
	}
}
</style>

