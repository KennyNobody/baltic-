export const state = () => ({
	news: []
})

export const mutations = {
	setPosts (state, news) {
		state.news = news
	}
}

export const actions = {
	async fetch ({commit}) {
		const news = await this.$axios.$get("http://my-json-server.typicode.com/KennyNobody/baltic-/news")
		commit('setPosts', news)
	}
}

export const getters = {
	news: s => s.news
}