export const state = () => ({
	player: {
		live: true,
		thumb: null,
		name: 'Балтик+',
		title: 'Прямой эфир',
		file: 'http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3',
		broadcastFile: 'http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3',
		playlist: [
		{
			id: 1,
			time: '22:31',
			author:'Ваня Усович',
			title:'Stand Up в Питере'
		},
		]
	}
})

export const mutations = {
	setSetting (state, player) {
		state.player = player
	},
	setPlayer (state, payload) {
		state.player.thumb = payload.thumb;
		// state.player.nowLink = payload.link;
		state.player.title = payload.title;
		state.player.name = payload.info;
		state.player.file = payload.file;
		state.player.live = payload.live;
	},
	SOCKET_flow(state, payload) {
		state.player.name = payload.title;
		state.player.title = payload.song;
	},
	setPlayerThumb(state, payload) {
		state.player.thumb = payload
	},
	enableRadio (state) {
		state.player.live = true;
		state.player.file = state.player.broadcastFile;
	},
	// disableRadio () {
	// 	state.player.live = false;
	// }
	// setPlayerStandartThumb(state, payload) {
	// 	state.player.thumb = state.player.standartThumb
	// },
}

export const actions = {
	// async fetch ({commit}) {
	// 	const player = await this.$axios.$get("https://api.myjson.com/bins/18oqjg")
	// 	commit('setPlayer', player)
	// }
	SOCKET_flow({dispatch, commit, state}, payload) {
		(function() {
			if (JSON.stringify(payload.song) !== JSON.stringify(state.player.title)) {
				commit('SOCKET_flow', payload)
				dispatch('fetchThumb');
			}
		})();
	},
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
	}
}

export const getters = {
	player: s => s.player,
}