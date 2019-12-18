export const state = () => ({
	mainSlider: [
	{
		"id": 1,
		"alt": "Баннер первого важного мероприятия",
		"url": require('~/assets/img/slide-image.jpg'),
		"link": "https://www.youtube.com/",
	},
	{
		"id": 2,
		"alt": "Баннер без ссылки",
		"url": require('~/assets/img/slide-image.jpg'),
		"link": "",
	},
	{
		"id": 3,
		"alt": "Баннер другого важного мероприятия",
		"url": require('~/assets/img/slide-image.jpg'),
		"link": "https://www.youtube.com/",
	},
	]
})

export const mutations = {
	setSlider (state, mainSlider) {
		state.mainSlider = mainSlider
	}
}

export const actions = {
	async fetch ({commit}) {
		// Здесь указываем, откуда получать слайды, массив сверху должен быть пустым
		const mainSlider = await this.$axios.$get("https://api.myjson.com/bins/18oqjg")
		commit('setSlider', mainSlider)
	}
}

export const getters = {
	mainSlider: s => s.mainSlider.slice(-5).reverse()
}