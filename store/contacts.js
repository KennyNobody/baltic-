export const state = () => ({
	contacts: {
		phones: {
			broadcast: {
				code: '(4012)',
				phone: '952-444',
				link: '74012952444'
			},
			office: {
				code: '(4012)',
				phone: '952-555',
				link: '74012952555'
			},
			viber: {
				code: '(952)',
				phone: '222-88-885',
				link: '74012952444'
			}
		},
		socials: {
			'vkontakte': 'https://vk.com/',
			'instagram': 'https://www.instagram.com/',
			'facebook': 'https://www.facebook.com/',
			'youtube': 'https://www.youtube.com/'
		},
	}
})

export const mutations = {
	setContacts (state, contacts) {
		state.contacts = contacts
	}
}

export const actions = {
	async fetch ({commit}) {
		// Здесь указываем, откуда получать слайды, массив сверху должен быть пустым
		const contacts = await this.$axios.$get("https://api.myjson.com/bins/18oqjg")
		commit('setContacts', contacts)
	}
}

export const getters = {
	contacts: s => s.contacts,
	socials: s => s.contacts.socials
}