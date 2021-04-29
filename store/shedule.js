export const state = () => ({
	shedule: [
	{
		day: 1,
		title: 'Понедельник',
		table: []
	},
	{
		day: 2,
		title: 'Вторник',
		table: []
	},
	{
		day: 3,
		title: 'Среда',
		table: []
	},
	{
		day: 4,
		title: 'Четверг',
		table: []
	},
	{
		day: 5,
		title: 'Пятница',
		table: []
	},
	{
		day: 6,
		title: 'Сентября',
		table: []
	},
	{
		day: 7,
		title: 'Воскресенье',
		table: []
	}
	]
})

export const mutations = {
	setShedule (state, response) {
		state.shedule = response
	}
}

export const actions = {
	async fetch ({commit}) {
		const shedule = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticplus/api/shedule.php")
		.then( response => {
			commit('setShedule', response)
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	shedule: s => s.shedule
}
// process.env.apiURL + 