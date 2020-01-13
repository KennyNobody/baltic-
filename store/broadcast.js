export const state = () => ({
	broadcast: {
		now: {
			title: 'Гость в эфире: Антонина Кочеткова о загрязнении окружающей среды',
			date: 1555065432,
			preview: 'http://placehold.it/1000x600',
			link: ''
		},
		next: {
			title: 'Интервью с режиссером “Биссера”, Геннадием Урсуловым',
			date: 1555065432,
			preview: 'http://placehold.it/1000x600',
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
		const broadcast = await this.$axios.$get("api/broadcast");
		commit('setBroadcast', broadcast);
	}
}

export const getters = {
	broadcast: s => s.broadcast,
}