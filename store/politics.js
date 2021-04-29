export const state = () => ({
	politics: null
})

export const mutations = {
	setPolitics (state, response) {
		state.politics = response;
		console.log(this);
	}
}

export const actions = {
	async fetch ({commit}) {
		const politics = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticplus/api/politika_konfidentsialnosti.php")
		.then( response => {
			console.log(response);
			commit('setPolitics', response.content);
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	politics: s => s.politics
}