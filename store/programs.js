export const state = () => ({
	// Программ немного, поэтому постраничная пагинация нам не нужна
	programs: [
	// {	
	// 	id: 1,
	// 	title: 'Утро на Балтик Плюс',
	// 	preview: 'http://placehold.it/1000x1000',
	// 	text: 'Вы ищете текст любимой песни? У нас вы найдете слова и перевод любимых зарубежных песен 70 х 80 х 90 х и 2000 х на русский язык, а также истории и интересные факты о создании музыкальных хитов. Читайте и слушайте онлайн на "Радио 7 на семи холмах".',
	// 	time: '17:00-21:00 (Пн-Пт)',
	// 	slug: "program-slug-1",
	// 	link: "http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3",
	// 	author: "Артём Королёв",
	// 	public_at: 1555065432,
	// 	podcasts: [41, 14, 41, 53, 63, 78]
	// },
	],
	programsFront: [
	// {	
	// 	id: 1,
	// 	title: 'Утро на Балтик Плюс',
	// 	preview: 'http://placehold.it/1000x1000',
	// 	text: 'Вы ищете текст любимой песни? У нас вы найдете слова и перевод любимых зарубежных песен 70 х 80 х 90 х и 2000 х на русский язык, а также истории и интересные факты о создании музыкальных хитов. Читайте и слушайте онлайн на "Радио 7 на семи холмах".',
	// 	time: '17:00-21:00 (Пн-Пт)',
	// 	slug: "program-slug-1",
	// 	link: "http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3",
	// 	author: "Артём Королёв",
	// 	public_at: 1555065432
	// },
	],
	programsList: [],
	singleProgram: {
		title: 'Загрузка...'
	},
	subPodcasts: []
})

export const mutations = {
	setPrograms (state, programs) {
		state.programs = programs.programs
	},
	setProgramsFront (state, programsFront) {
		state.programsFront = programsFront.programs
	},
	setSingleProgram (state, singleProgram) {
		state.singleProgram = singleProgram.programs
	}
}

export const actions = {
	async fetch ({commit}) {
		const programs = await this.$axios.$get(process.env.apiURL + "/api/v1/programs")
		.then( response => {
			commit('setPrograms', response)
		})
		.catch((e) => {
			console.log(e)
		})
	},
	async fetchFront ({commit}) {
		const programsFront = await this.$axios.$get(process.env.apiURL + "/api/v1/programs", {
			params: {
				front: true,
			}
		})
		.then( response => {
			commit('setProgramsFront', response)
		})
		.catch((e) => {
			console.log(e)
		})
	},
	async fetchSingle ({commit}, payload) {
		const singleProgram = await this.$axios.$get(process.env.apiURL + "/api/v1/programs", {
			params: {
				single: payload,
			}
		})
		.then( response => {
			commit('setSingleProgram', response)
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	programs: s => s.programs,
	programsFront: s => s.programsFront,
	singleProgram: s => s.singleProgram
}