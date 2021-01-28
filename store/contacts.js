export const state = () => ({
	contacts: {
		phones: {
			broadcast: {
				title: '',
				code: '',
				phone: '',
				link: '',
				email: '',
				multichannel: true
			},
			office: {
				title: '',
				code: '',
				phone: '',
				link: '',
				adress: '',
				multichannel: true
			},
			promo: {
				title: '',
				code: '',
				phone: '',
				link: '',
				multichannel: true,
				email: '',
				adress: ''
			},
			messengers: {
				code: '',
				phone: '',
				link: '',
				multichannel: true
			},
			discript: ''
		},
		socials: {
			'vkontakte': '',
			'instagram': '',
			'facebook': '',
			'youtube': ''
		},
		footer_description: ''
	}
})

export const mutations = {
	setContacts (state, contacts) {
		state.contacts = contacts
	}
}

export const actions = {
	async fetch ({commit}) {
		const contacts = await this.$axios.$get(process.env.apiURL + "/api/v1/contacts")
		.then( response => {
			commit('setContacts', response.contacts)
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	contacts: s => s.contacts,
	setting: s => s.contacts.footer_description,
	socials: s => s.contacts.socials
}