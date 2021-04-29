export const state = () => ({
	authors: [
	// {
	// 	"id": 1,
	// 	"thumb": "http://placehold.it/1000x600",
	// 	"position":"Ведущий новостей",
	// 	"time":"09.00-09.10, 12.00-12.10, 15.00-15.00, 18.00-18.00",
	// 	"name":"Иван Хвастолюбов",
	// },
	]
})

export const mutations = {
	setAuthors (state, authors) {
		state.authors = authors
	}
}

export const actions = {
	async fetch ({commit}) {
		const authors = await this.$axios.$get(process.env.apiURL + "wp-content/themes/diez__template_balticplus/api/authors.php")
		.then( response => {
			commit('setAuthors', response)
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	authors: s => s.authors
}