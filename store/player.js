export const state = () => ({
	player: {
		live: true,
		thumb: null,
		defaultName: 'Прямой эфир',
		defaultTitle: 'Балтик+',
		name: 'Прямой эфир',
		title: 'Балтик+',
		defaultFile: 'http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3',
		file: 'http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3',
		loading: true,
		playing: false,
		wasPlaying: false,
		radioMute: false,
		// volume: 1.0,
		playlist: [
		// {
		// 	id: 1,
		// 	time: '2:31',
		// 	author:'The Doors',
		// 	title:'Riders On The Storm'
		// },
		]
	}
})

export const mutations = {
	setPlayer (state, payload) {
		state.player.thumb = payload.img || null;
		state.player.title = payload.author || state.player.defaultTitle;
		state.player.name = payload.title || state.player.defaultName;
		state.player.file = payload.file || state.player.defaultFile;
	},
	enableRadio (state) {
		state.player.live = true;
		state.player.thumb = null;
		state.player.file = state.player.defaultFile;
		state.player.name = 'Балтик+';
		state.player.title = 'Прямой эфир';
	},
	setLoading(state, payload) {
		state.player.loading = payload.loading;
	},
	setState(state, payload) {
		state.player.playing = payload.playing;
	},
	setWasPlaying(state, payload) {
		state.player.wasPlaying = payload.wasPlaying;
	},
	setRadioMute(state, payload) {
		state.player.radioMute = payload.radioMute;
	},
	setList(state, payload) {
		state.player.playlist = payload;
	},
	setLive(state, payload) {
		state.player.live = payload;
	}
}

export const actions = {
	async fetch ({commit, state}, payload) {
		let thumbResponse = await this.$axios.$get(process.env.apiURL + "wp-content/themes/diez__template_balticnews/api/player.php")
		.then( response => {
			let array = Object.values(response).reverse();
			commit('setPlayer', array[0]);
			commit('setList', array);
		})
		.catch((e) => {
			console.log(e)
		})
	},
	controlLoading({commit, state}, payload) {
		commit('setLoading', payload)
	}
}

export const getters = {
	player: s => s.player,
	playerChanged: s => {
		return s.player.file;
	},
	playerLive: s => s.player.live
}