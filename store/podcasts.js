export const state = () => ({
	podcasts: {
		items: [
		// {
		// 	id: 1,
		// 	title: '1. Очень длинное и сложноепроизносимое название хорошего подкаста',
		// 	date: 1555065432,
		// 	info: 'Краткое описание подкаста для отображения под заголовком',
		// 	time: '25:15',
		// 	thumb: 'http://placehold.it/500x500',
		// 	play: false,
		// 	link: './song-2.mp3',
		// 	content: '<p>- Калининградцы рассказали о проблемах, с которыми сталкиваются в поликлиниках;</p><p>- В прокуратуре Московского района Калининграда назвали самую коррумпированную государственную структуру;</p><p>- Судьба 300 тонн инженерного наследия решается в Калининграде;</p>'
		// },
		// {
		// 	id: 2,
		// 	title: '2. Очень длинное и сложноепроизносимое название хорошего подкаста',
		// 	date: 1555065432,
		// 	info: 'Краткое описание подкаста для отображения под заголовком',
		// 	time: '25:15',
		// 	thumb: 'http://placehold.it/1000x600',
		// 	play: false,
		// 	link: './song-3.mp3',
		// 	content: '<p>- Калининградцы рассказали о проблемах, с которыми сталкиваются в поликлиниках;</p><p>- В прокуратуре Московского района Калининграда назвали самую коррумпированную государственную структуру;</p><p>- Судьба 300 тонн инженерного наследия решается в Калининграде;</p>'
		// },
		],
		pages: {
			current: 1,
			max: 1
		}
	},
	podcastsList: [],
	podcastsFront: [
	// {
	// 	id: 1,
	// 	title: '1. Очень длинное и сложноепроизносимое название хорошего подкаста',
	// 	date: 1555065432,
	// 	info: 'Краткое описание подкаста для отображения под заголовком',
	// 	time: '25:15',
	// 	thumb: 'http://placehold.it/1000x600',
	// 	play: false,
	// 	link: './song-2.mp3',
	// 	content: '<p>- Калининградцы рассказали о проблемах, с которыми сталкиваются в поликлиниках;</p><p>- В прокуратуре Московского района Калининграда назвали самую коррумпированную государственную структуру;</p><p>- Судьба 300 тонн инженерного наследия решается в Калининграде;</p>'
	// },
	// {
	// 	id: 2,
	// 	title: '2. Очень длинное и сложноепроизносимое название хорошего подкаста',
	// 	date: 1555065432,
	// 	info: 'Краткое описание подкаста для отображения под заголовком',
	// 	time: '25:15',
	// 	thumb: 'http://placehold.it/1000x600',
	// 	play: false,
	// 	link: './song-3.mp3',
	// 	content: '<p>- Калининградцы рассказали о проблемах, с которыми сталкиваются в поликлиниках;</p><p>- В прокуратуре Московского района Калининграда назвали самую коррумпированную государственную структуру;</p><p>- Судьба 300 тонн инженерного наследия решается в Калининграде;</p>'
	// },
	],
	singlePodcast: {
		title: 'Загрузка...'
	}
})

export const mutations = {
	setPodcasts (state, podcasts) {
		state.podcasts = podcasts
	},
	setPodcastsFront (state, podcastsFront) {
		state.podcastsFront = podcastsFront
	},
	setPodcastsList (state, podcasts) {
		state.podcastsList = podcasts
	},
	changePodcast (state, payload) {
		// Для основного каталога
		for (let i = 0; i < state.podcasts.items.length; i++) {
			state.podcasts.items[i].play = false;
		}
		let podcast = state.podcasts.items.find(podcast => podcast.id === payload);
		podcast.play = !podcast.play;

		// Для front-версии
		for (let z = 0; z < state.podcastsFront.length; z++) {
			state.podcastsFront[z].play = false;
		}
		let podcastFront = state.podcastsFront.find(podcastFront => podcastFront.id === payload);
		podcastFront.play = !podcastFront.play;
		// console.log(payload);
	},
	pauseAllPodcasts (state, payload) {
		for (let i = 0; i < state.podcasts.items.length; i++) {
			state.podcasts.items[i].play = false;
		}
		for (let z = 0; z < state.podcastsFront.length; z++) {
			state.podcastsFront[z].play = false;
		}
	},
	setSinglePodcast (state, singlePodcast) {
		state.singlePodcast = singlePodcast
	}
}

// Пример полного запроса, любой из параметров может отсутствовать
// http://localhost:8000/api/podcasts?dateStart=1578078000000&dateEnd=1578423600000&genre=7&page=1
export const actions = {
	async fetch ({commit}) {
		let podcasts = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticnews/api/podcasts.php", {
			params: {
				page: 1,
				front: false
			}
		})
		.then( response => {
			commit('setPodcasts', response.podcasts)
			commit('setPodcastsList', response.podcasts.list)
		})
		.catch((e) => {
			console.log(e)
		})
	},
	async fetchCustom ({commit}, payload) {
		let podcasts = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticnews/api/podcasts.php", {
			params: {
				dateStart: payload.dateStart || null,
				dateEnd: payload.dateEnd || null,
				genre: payload.genre || null,
				page: payload.page || null,
			}
		})
		.then( response => {
			commit('setPodcasts', response.podcasts)
		})
		.catch((e) => {
			console.log(e)
		})
	},
	async fetchFront ({commit}) {
		let podcastsFront = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticnews/api/podcasts.php", {
			params: {
				front: true
			}
		})
		.then( response => {
			console.log(response.items);
			commit('setPodcastsFront', response.items)
		})
		.catch((e) => {
			console.log(e)
		})
	},
	async fetchSingle ({commit}, payload) {
		const singlePodcast = await this.$axios.$get(process.env.apiURL + "/wp-content/themes/diez__template_balticnews/api/podcasts.php", {
			params: {
				single: payload,
			}
		})
		.then( response => {
			commit('setSinglePodcast', response.podcasts.items)
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	podcasts: s => s.podcasts,
	podcastsFront: s => s.podcastsFront,
	// Расскомнетировать следующую строку
	// podcastsPlayer: s => s.podcastsFront.slice(0, 4),
	podcastsPlayer: s => s.podcastsFront,
	podcastsList: s => s.podcastsList,
	singlePodcast: s => s.singlePodcast
}