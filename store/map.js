export const state = () => ({
	markers: [
	{
		city: 'Калининград',
		wave: '105,2',
		top: '54.9',
		left: '25.5'
	},
	{
		city: 'Советск',
		wave: '105,2',
		top: '19.5',
		left: '68.5'
	},
	{
		city: 'Черняховск',
		wave: '105,2',
		top: '61.1',
		left: '70.1'
	},
	]
})

export const mutations = {
	setMarkers (state, markers) {
		state.markers = markers
	}
}

export const actions = {
	async fetch ({commit}) {
		// Здесь указываем, откуда получать слайды, массив сверху должен быть пустым
		const markers = await this.$axios.$get("https://api.myjson.com/bins/18oqjg")
		commit('setMarkers', markers)
	}
}

export const getters = {
	markers: s => s.markers
}