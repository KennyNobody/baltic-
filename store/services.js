export const state = () => ({
	services: null
})

export const mutations = {
	setServices (state, response) {
		state.services = response;
		console.log(this);
	}
}

export const actions = {
	async fetch ({commit}) {
		const services = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticplus/api/news_services.php")
		.then( response => {
			console.log(response);
			commit('setServices', response.content);
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	services: s => s.services
}