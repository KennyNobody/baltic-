export const state = () => ({
	mainSlider: [
	// {
	// 	"id": 1,
	// 	"alt": "Баннер первого важного мероприятия",
	// 	"url": require('~/assets/img/slide-image.jpg'),
	// 	"link": "https://www.youtube.com/",
	// },
	]
})

export const mutations = {
	setSlider (state, mainSlider) {
		state.mainSlider = mainSlider
	}
}

export const actions = {
	async fetch ({commit}) {
		const mainSlider = await this.$axios.$get(process.env.apiURL + "wp-content/themes/diez__template_balticplus/api/front-slider.php")
		.then( response => {
			commit('setSlider', response)
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	mainSlider: s => s.mainSlider
}