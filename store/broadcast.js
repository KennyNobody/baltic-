export const state = () => ({
	broadcast: {
		now: {
			title: 'Гость в эфире: Антонина Кочеткова о загрязнении окружающей среды',
			date: 1555065432,
			link: ''
		},
		next: {
			title: 'Интервью с режиссером “Биссера”, Геннадием Урсуловым',
			date: 1555065432,
			link: ''
		}
	}
})

export const mutations = {
	setBroadcast (state, broadcast) {
		state.broadcast = broadcast
	}
}

export const actions = {
	async fetch ({commit}) {
		const broadcast = await this.$axios.$get("api/broadcast")
		.then( response => {
			console.log(response)
			commit('setBroadcast', broadcast);
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	broadcast: s => s.broadcast,
}
// process.env.apiURL + 