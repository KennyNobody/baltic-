export const state = () => ({
	broadcast: {
		// now: {
		// 	title: 'Гость в эфире: Антонина Кочеткова о загрязнении окружающей среды',
		// 	date: 1555065432,
		// 	link: ''
		// },
		// next: {
		// 	title: 'Интервью с режиссером “Биссера”, Геннадием Урсуловым',
		// 	date: 1555065432,
		// 	link: ''
		// }
	}
})

export const mutations = {
	setBroadcast (state, broadcast) {
		state.broadcast = broadcast.broadcast;
	}
}

export const actions = {
	async fetch ({commit}) {
		const response = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticplus/api/shedule.php?broadcast=true")
		.then( response => {
			commit('setBroadcast', response);
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	broadcast: s => s.broadcast,
}