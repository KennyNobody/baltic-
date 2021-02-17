export const state = () => ({
	video: {
		iframe: '<iframe src="https://www.youtube.com/embed/videoseries?list=PLNUHJzo8DOdqcIM3jZHmqqlm9ZAzfj2HJ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		// playlist: '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLNUHJzo8DOdqcIM3jZHmqqlm9ZAzfj2HJ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	}
	// {
	// 	"id": 1,
	// 	"title": "Гольдман надеется, что с приходом «Пятёрочки» в Калининграде снизятся цены",
	// 	"preview": "http://placehold.it/1000x600",
	// 	"date": 1555065432,
	// 	"link": "https://www.newkaliningrad.ru/"
	// },
})

export const mutations = {
	setVideo (state, response) {
		state.video = response;
	}
}

export const actions = {
	async fetch ({commit}) {
		const video = await this.$axios.$get(process.env.apiURL + "wp-content/themes/diez__template_balticnews/api/video.php")
		.then( response => {
			commit('setVideo', response)
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	video: s => s.video
}