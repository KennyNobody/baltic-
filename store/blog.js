export const state = () => ({
	blog: []
})

export const mutations = {
	setPosts (state, blog) {
		state.blog = blog
	}
}

export const actions = {
	async fetch ({commit}) {
		const blog = await this.$axios.$get("http://my-json-server.typicode.com/KennyNobody/baltic-/blog")
		commit('setPosts', blog)
	}
}

export const getters = {
	blog: s => s.blog
}