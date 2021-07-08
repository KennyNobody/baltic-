// /wp-content/themes/diez__template_balticnews/api/podcasts.php?program=12345

export const state = () => ({
	podcasts: {
		items: [],
		pages: {
			current: 1,
			max: 1
		}
	},
	podcastsList: [],
	podcastsFront: [],
	podcastHistory: [],
	podcastsProgram: {
		items: [],
		pages: {
			current: 1,
			max: 1
		}
	},
	singlePodcast: {
		title: 'Загрузка...'
	},
	podcastsCategory: []
})

export const mutations = {
	setPodcasts(state, podcasts) {
		state.podcasts.items = Object.values(podcasts.items);
		state.podcasts.pages = podcasts.pages;
	},
	setPodcastsFront(state, podcastsFront) {
		state.podcastsFront = Object.values(podcastsFront);
	},
	setPodcastsProgram(state, response) {
		state.podcastsProgram.items = Object.values(response.items);
		state.podcastsProgram.pages = response.pages;
	},
	setPodcastsList(state, podcasts) {
		state.podcastsList = podcasts
	},
	changePodcast(state, payload) {

		if (Object.keys(state.podcastsFront).length) {
			for (let z = 0; z < state.podcastsFront.length; z++) {
				state.podcastsFront[z].play = false;
			}
			let podcastFront = state.podcastsFront.find(podcastFront => podcastFront.id === payload);

			if (podcastFront) {
				podcastFront.play = !podcastFront.play;
			}

		}

		// Для основного каталога

		if (Object.keys(state.podcasts.items).length) {
			for (let i = 0; i < state.podcasts.items.length; i++) {
				state.podcasts.items[i].play = false;
			}
			let podcast = state.podcasts.items.find(podcast => podcast.id === payload);
			
			if (podcast) {
				podcast.play = !podcast.play;
			}
		}

		// Для одиночной программы

		if (Object.keys(state.podcastsProgram.items).length) {
			for (let i = 0; i < state.podcastsProgram.items.length; i++) {
				state.podcastsProgram.items[i].play = false;
			}
			let podcast = state.podcastsProgram.items.find(podcastsProgram => podcastsProgram.id === payload);

			if (podcast) {
				podcast.play = !podcast.play;
			}
		}

		// Для истории воспроизведения

		if (Object.keys(state.podcastHistory).length) {
			for (let i = 0; i < state.podcastHistory.length; i++) {
				state.podcastHistory[i].play = false;
			}
			let podcast = state.podcastHistory.find(podcast => podcast.id === payload);

			if (podcast) {
				podcast.play = !podcast.play;	
			}
		}
	},
	pauseAllPodcasts(state, payload) {
		for (let i = 0; i < state.podcasts.items.length; i++) {
			state.podcasts.items[i].play = false;
		}
		for (let z = 0; z < state.podcastsFront.length; z++) {
			state.podcastsFront[z].play = false;
		}
		for (let z = 0; z < state.podcastHistory.length; z++) {
			state.podcastHistory[z].play = false;
		}
		for (let z = 0; z < state.podcastsProgram.length; z++) {
			state.podcastsProgram[z].play = false;
		}
	},
	setSinglePodcast(state, singlePodcast) {
		state.singlePodcast = singlePodcast
	},
	setPodcastHistory(state, payload) {
		state.podcastHistory = Object.values(payload.items).reverse();
	},
	setCategory(state, payload) {
		state.podcastsCategory = payload;
	}
}

// Пример полного запроса, любой из параметров может отсутствовать
// http://localhost:8000/api/podcasts?dateStart=1578078000000&dateEnd=1578423600000&genre=7&page=1
export const actions = {
	async fetch({ commit }) {
		let podcasts = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticplus/api/podcasts.php", {
			params: {
				page: 1,
				front: false
			}
		})
			.then(response => {
				console.log('Запрашиваем подкасты');
				commit('setPodcasts', response)
			})
			.catch((e) => {
				console.log(e)
			})
	},
	async fetchCustom({ commit }, payload) {
		let podcasts = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticplus/api/podcasts.php", {
			params: {
				dateStart: payload.dateStart || null,
				dateEnd: payload.dateEnd || null,
				category: payload.category || null,
				page: payload.page || null,
			}
		})
			.then(response => {
				console.log('Запрос из фильтра')
				console.log(this);
				commit('setPodcasts', response);
			})
			.catch((e) => {
				console.log(e)
			})
	},
	async fetchFront({ commit }) {
		let podcastsFront = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticplus/api/podcasts.php", {
			params: {
				front: true
			}
		})
			.then(response => {
				commit('setPodcastsFront', response.items)
			})
			.catch((e) => {
				console.log(e)
			})
	},
	async fetchPodcasts({ commit }, payload) {
		let podcasts = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticplus/api/podcasts.php", {
			params: {
				program: payload,
			}
		})
			.then(response => {
				commit('setPodcastsProgram', response);
				console.log(this);
			})
			.catch((e) => {
				console.log(e)
			})
	},
	async fetchSingle({ commit }, payload) {
		const singlePodcast = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticplus/api/podcasts.php", {
			params: {
				single: payload,
			}
		})
			.then(response => {
				console.log(response);
				commit('setSinglePodcast', response)
			})
			.catch((e) => {
				console.log(e)
			})
	},
	async fetchCats({ commit }, payload) {
		const singleCats = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticplus/api/podcasts.php", {
			params: {
				category: true,
			}
		})
			.then(response => {
				commit('setCategory', response.category)
			})
			.catch((e) => {
				console.log(e)
			})
	},
	async fetchHistory({ commit }) {
		const podcastHistory = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticplus/api/podcasts.php", {
			params: {
				podcastplayer: true,
			}
		})
			.then(response => {
				commit('setPodcastHistory', response)
			})
			.catch((e) => {
				console.log(e)
			})
	}
}

export const getters = {
	podcasts: s => s.podcasts,
	podcastsFront: s => s.podcastsFront,
	podcastsProgram: s => s.podcastsProgram,
	podcastsPlayer: s => s.podcastHistory,
	podcastsList: s => s.podcastsList,
	singlePodcast: s => s.singlePodcast,
	podcastsCats: s => s.podcastsCategory,
	podcastsHistory: s => s.podcastHistory
}