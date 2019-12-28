export const state = () => ({
	setting: {
		footerDiscript: '<p>Средство массовой информации «Радио Балтик Плюс» зарегистрировано 21 ноября 2014 г. в форме распространения «Сетевое издание». Свидетельство Эл № ФС77-59974 от 21.11.2014 выдано Федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор).</p><br><p>© 2019 «Балтик Плюс» 12+. <br>Все права защищены. <br>Разработано <a href="https://diez.io/" target="_blank">#dieztech</a></p>'
	}
})

export const mutations = {
	setSetting (state, setting) {
		state.setting = setting
	}
}

export const actions = {
	async fetch ({commit}) {
		// Здесь указываем, откуда получать слайды, массив сверху должен быть пустым
		const setting = await this.$axios.$get("https://api.myjson.com/bins/18oqjg")
		commit('setSetting', setting)
	}
}

export const getters = {
	setting: s => s.setting,
}