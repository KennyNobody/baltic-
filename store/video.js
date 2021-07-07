export const state = () => ({
	video: {
		// iframe: '<iframe src="https://www.youtube.com/embed/videoseries?list=PLNUHJzo8DOdqcIM3jZHmqqlm9ZAzfj2HJ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	}
})

export const mutations = {
	setVideo (state, response) {
		state.video = response;
	}
}

export const actions = {
	async fetch ({commit}) {
		const video = await this.$axios.$get(process.env.apiURL + "wp-content/themes/diez__template_balticplus/api/video.php")
		.then( response => {
			commit('setVideo', response.video)
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	video: s => s.video
}