export const state = () => ({
	player: {
		broadcast: true,
		thumb: 'https://images.genius.com/133f0dd4933c0e7973f57619de0736ae.712x712x1.jpg',
<<<<<<< HEAD
		author: 'Гарри Топор',
		title: 'Собеседник',
		radioLink: 'http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3',
		nowLink: 'http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3',
=======
		name: 'Балтик+',
		title: 'Прямой эфир',
		file: 'http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3',
		radioLink: 'http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3',
		radioAuthor: 'Балтик+',
		radioTitle: 'Прямой эфир',
>>>>>>> 1c23ee2d1981d907a77a63112b7b107a1ac2999c
		playlist: [
		{
			id: 1,
			time: '22:31',
			author:'Ваня Усович',
			title:'Stand Up в Питере'
		},
		{
			id: 2,
			time: '30:32',
			author:'О России с любовью',
			title:'Олеся Герасименко: АП, кредит на свадьбу и страсть к игре'
		},
		{
			id: 3,
			time: '30:32',
			author:'О России с любовью',
			title:'Руслан Белый: коррупция, доносы и ипотека'
		},
		{
			id: 4,
			time: '30:32',
			author:'KuJi Podcast',
			title:'Руслан Белый: коррупция, доносы и ипотека'
		},
		{
			id: 5,
			time: '30:32',
			author:'О России с любовью',
			title:'Дмитрий Глуховский: зачем нужны писатели?'
		},
		{
			id: 6,
			time: '33:45',
			author:'KuJi Podcast',
			title:'Каргинов и Коняев: суверенный интернет, оскорбления и фильм «Текст»'
		},
		{
			id: 7,
			time: '15:21',
			author:'О России с любовью',
			title:'KUJI LIVE: цена твита, страх, суды, миллениалы'
		},
		{
			id: 8,
			time: '1:32',
			author:'О России с любовью',
			title:'Каргинов и Коняев: Чернобыль и новостная политика'
		},
		{
			id: 9,
			time: '176:43',
			author:'KuJi Podcast',
			title:'Wylsacom: айфон и кибербуллинг'
		},
		{
			id: 10,
			time: '30:32',
			author:'О России с любовью',
			title:'Kuji Live: подарки, кризис, Первый канал'
		},
		{
			id: 11,
			time: '30:32',
			author:'О России с любовью',
			title:'Борух Горин: иудаизм, ксенофобия и место юмора в религии Борух Горин: иудаизм, ксенофобия и место юмора в религии Борух Горин: иудаизм, ксенофобия и место юмора в религии'
		},
		]
	}
})

export const mutations = {
	setSetting (state, player) {
		state.player = player
	},
	setPlayer (state, payload) {
		console.log(payload)
		state.player.thumb = payload.thumb;
		state.player.nowLink = payload.link;
		state.player.title = payload.title;
		state.player.author = payload.info;
	}
}

export const actions = {
	// async fetch ({commit}) {
	// 	const player = await this.$axios.$get("https://api.myjson.com/bins/18oqjg")
	// 	commit('setPlayer', player)
	// }
}

export const getters = {
	player: s => s.player,
}