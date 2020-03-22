export const state = () => ({
	news: [
	// {
	// 	"id": 1,
	// 	"title": "Гольдман надеется, что с приходом «Пятёрочки» в Калининграде снизятся цены",
	// 	"preview": "http://placehold.it/1000x600",
	// 	"date": 1555065432,
	// 	"link": "https://www.newkaliningrad.ru/"
	// },
	]
})

export const mutations = {
	setNews (state, news) {
		state.news = news
	}
}

export const actions = {
	async fetch ({commit}) {
		const news = await this.$axios.$get("http://89.108.65.88/api/v1/news")
		.then( response => {
			commit('setNews', response)
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	news: s => s.news
}