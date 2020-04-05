export const state = () => ({
	setting: {
		footerDiscript: null
	}
})

export const mutations = {
	setSetting (state, setting) {
		state.setting.footerDiscript = setting
	}
}

export const actions = {
	async fetch ({commit}) {
		const setting = await this.$axios.$get(process.env.apiURL + "/api/v1/contacts")
		.then( response => {
			commit('setSetting', response.setting.contacts.footer_description)
		})
		.catch((e) => {
			console.log(e)
		})
	}
}

export const getters = {
	setting: s => s.setting,
}