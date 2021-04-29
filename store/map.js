export const state = () => ({
	markers: [
	{
		city: 'Калининград',
		wave: '105,2FM',
	},
	{
		city: 'Советск',
		wave: '105,2FM',
	},
	{
		city: 'Черняховск',
		wave: '105,2FM',
	}
	]
	// link: ''
})

export const mutations = {
	setMap (state, response) {
		state.link = response.link;
		// state.markers = response.markers
	}
}

export const actions = {
	async fetch ({commit}) {
		const map = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticplus/api/map.php")
		.then( response => {
			commit('setMap', response);
			// commit('setMapMarkers', Object.values(response.markers));
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	link: s => s.link,
	markers: s => s.markers
}