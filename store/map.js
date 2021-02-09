export const state = () => ({
	// markers: [
	// {
	// 	city: 'Калининград',
	// 	wave: '105,2',
	// 	top: '54.9',
	// 	left: '25.5'
	// },
	// {
	// 	city: 'Советск',
	// 	wave: '105,2',
	// 	top: '19.5',
	// 	left: '68.5'
	// },
	// {
	// 	city: 'Черняховск',
	// 	wave: '105,2',
	// 	top: '61.1',
	// 	left: '70.1'
	// },
	// ]
	// link: 'http://new.balticplus.ru/wp-content/uploads/map.svg'
})

export const mutations = {
	setMapLink (state, response) {
		state.map = response
	}
}

export const actions = {
	async fetch ({commit}) {
		const map = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticnews/api/map.php")
		.then( response => {
			commit('setMapLink', response)
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