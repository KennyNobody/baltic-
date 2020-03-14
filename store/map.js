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
	map: {
		id: 1,
		image: 'http://placehold.it/900x600',
	}
})

export const mutations = {
	setMarkers (state, map) {
		state.map = map
	}
}

export const actions = {
	async fetch ({commit}) {
		const map = await this.$axios.$get("http://89.108.65.88/api/v1/about/map")
		commit('setMarkers', map[0])
	}
}

export const getters = {
	map: s => s.map
}