export const state = () => ({})

export const mutations = {
	setServices (state, response) {
		state.services = response;
	}
}

export const actions = {
	async fetch ({commit}) {
		const services = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticnews/api/news_services.php")
		.then( response => {
			commit('setServices', response);
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	services: s => s.services
}