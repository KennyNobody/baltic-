export const state = () => ({
	authors: [
	// {
	// 	"id": 1,
	// 	"thumb": "http://placehold.it/1000x600",
	// 	"position":"Ведущий новостей",
	// 	"time":"09.00-09.10, 12.00-12.10, 15.00-15.00, 18.00-18.00",
	// 	"name":"Иван Хвастолюбов",
	// },
	// {
	// 	"id": 2,
	// 	"thumb": "http://placehold.it/1000x600",
	// 	"position":"Ведущий новостей",
	// 	"time":"09.00-09.10, 12.00-12.10, 15.00-15.00, 18.00-18.00",
	// 	"name":"Иван Хвастолюбов",
	// },
	// {
	// 	"id": 3,
	// 	"thumb": "http://placehold.it/1000x600",
	// 	"position":"Ведущий новостей",
	// 	"time":"09.00-09.10, 12.00-12.10, 15.00-15.00, 18.00-18.00",
	// 	"name":"Иван Хвастолюбов",
	// },
	// {
	// 	"id": 4,
	// 	"thumb": "http://placehold.it/1000x600",
	// 	"position":"Ведущий новостей",
	// 	"time":"09.00-09.10, 12.00-12.10, 15.00-15.00, 18.00-18.00",
	// 	"name":"Иван Хвастолюбов",
	// },
	// {
	// 	"id": 5,
	// 	"thumb": "http://placehold.it/1000x600",
	// 	"position":"Ведущий новостей",
	// 	"time":"09.00-09.10, 12.00-12.10, 15.00-15.00, 18.00-18.00",
	// 	"name":"Иван Хвастолюбов",
	// },
	// {
	// 	"id": 6,
	// 	"thumb": "http://placehold.it/1000x600",
	// 	"position":"Ведущий новостей",
	// 	"time":"09.00-09.10, 12.00-12.10, 15.00-15.00, 18.00-18.00",
	// 	"name":"Иван Хвастолюбов",
	// },
	// {
	// 	"id": 7,
	// 	"thumb": "http://placehold.it/1000x600",
	// 	"position":"Ведущий новостей",
	// 	"time":"09.00-09.10, 12.00-12.10, 15.00-15.00, 18.00-18.00",
	// 	"name":"Иван Хвастолюбов",
	// },
	]
})

export const mutations = {
	setAuthors (state, authors) {
		state.authors = authors.authors
	}
}

export const actions = {
	async fetch ({commit}) {
		const authors = await this.$axios.$get("http://89.108.65.88/api/v1/about/authors")
		commit('setAuthors', authors)
	}
}

export const getters = {
	authors: s => s.authors
}