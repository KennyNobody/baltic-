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
		state.news = Object.values(news.news).reverse();
	}
}

export const actions = {
	async fetch ({commit}) {
		const news = await this.$axios.$get("https://new.balticplus.ru/wp-content/themes/diez__template_balticnews/api/news.php")
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