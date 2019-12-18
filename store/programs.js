export const state = () => ({
	programs: [
	{	
		"id": 1,
		"title": 'Утро на Балтик Плюс',
		"preview": 'http://placehold.it/1000x600',
		"text": 'Вы ищете текст любимой песни? У нас вы найдете слова и перевод любимых зарубежных песен 70 х 80 х 90 х и 2000 х на русский язык, а также истории и интересные факты о создании музыкальных хитов. Читайте и слушайте онлайн на "Радио 7 на семи холмах".',
		"time": '17:00-21:00 (Пн-Пт)',
		"slug": "program-slug-1",
		"link": "http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3",
		"author": "Артём Королёв",
		"public_at": ""
	},
	]
})

export const mutations = {
	setPrograms (state, programs) {
		state.programs = programs
	}
}

export const actions = {
	async fetch ({commit}) {
		const blog = await this.$axios.$get("https://api.myjson.com/bins/ebmos")
		commit('setPosts', blog)
	}
}

export const getters = {
	blog: s => s.blog,
	blogFront: s => s.blog.slice(-3).reverse(),
	postById: s => id => {
		return s.blog.find(post => post.id === id);
	}
}