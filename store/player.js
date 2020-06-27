export const state = () => ({
	player: {
		live: true,
		thumb: null,
		name: 'Балтик+',
		title: 'Прямой эфир',
		file: 'http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3',
		broadcastFile: 'http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3',
		loading: true,
		playing: false,
		wasPlaying: false,
		radioMute: false,
		// volume: 1.0,
		playlist: [
		{
			id: 1,
			time: '2:31',
			author:'The Doors',
			title:'Riders On The Storm'
		},
		{
			id: 2,
			time: '7:02',
			author:'Дима Билан',
			title:'Невозможное возможно'
		},
		{
			id: 3,
			time: '2:01',
			author:'The Doors',
			title:'Riders On The Storm'
		},
		{
			id: 4,
			time: '3:47',
			author:'Radiohead',
			title:'Videotape'
		},
		{
			id: 5,
			time: '4:19',
			author:'Тату',
			title:'Нас не догонят'
		},
		{
			id: 6,
			time: '2:31',
			author:'Linkin Park',
			title:'Numb'
		},
		{
			id: 7,
			time: '4:11',
			author:'Серега',
			title:'Возле дома твоего'
		},
		{
			id: 8,
			time: '3:01',
			author:'Pink Floyd',
			title:'The wall'
		},
		{
			id: 9,
			time: '01:31',
			author:'Филипп Киркоров',
			title:'Цвет настроения синий'
		},
		{
			id: 10,
			time: '2:31',
			author:'Halsey',
			title:'Colors'
		},
		]
	}
})

export const mutations = {
	// setSetting (state, player) {
	// 	state.player = player
	// },
	setPlayer (state, payload) {
		state.player.thumb = payload.thumb;
		state.player.title = payload.title;
		state.player.name = payload.info;
		state.player.file = payload.file;
		state.player.live = payload.live;
		state.player.playing = payload.playing;
	},
	SOCKET_flow_edit(state, payload) {
		state.player.name = payload.title;
		state.player.title = payload.song;
	},
	setPlayerThumb(state, payload) {
		state.player.thumb = payload;
	},
	enableRadio (state) {
		state.player.live = true;
		state.player.thumb = null;
		state.player.file = state.player.broadcastFile;
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
	}
	// setVolume(state, paylaod) {
	// 	state.player.volume = payload.volume;
	// }
	// setBroadcast(state, paylaod) {

	// }
}

export const actions = {
	// SOCKET_flow({dispatch, commit, state}, payload) {
	// 	(function() {
	// 		if (JSON.stringify(payload.song) !== JSON.stringify(state.player.title) && state.player.live == true) {
	// 			commit('SOCKET_flow_edit', payload)
	// 			dispatch('fetchThumb');
	// 		}
	// 	})();
	// },
	async fetchThumb ({commit, state}, payload) {
		let thumbResponse = await this.$axios.$get('http://ws.audioscrobbler.com/2.0/', {
			params: {
				method: 'track.getInfo',
				api_key: '861baedc28c740b908f8e71ea9d51d00',
				artist: state.player.name,
				track: state.player.title,
				format: 'json',
			}
		})
		.then( response => {
			commit('setPlayerThumb', response.track.album.image[2]['#text'] || response.track.album.image[3]['#text'] ||response.track.album.image[1]['#text'] || response.track.album.image[0]['#text'])
		})
		.catch((e) => {
			commit('setPlayerThumb', false)
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
	}
}