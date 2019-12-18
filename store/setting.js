export const state = () => ({
	setting: {
		
	}
})

export const mutations = {
	setSetting (state, setting) {
		state.setting = setting
	}
}

export const actions = {
	async fetch ({commit}) {
		// Здесь указываем, откуда получать слайды, массив сверху должен быть пустым
		const setting = await this.$axios.$get("https://api.myjson.com/bins/18oqjg")
		commit('setSetting', setting)
	}
}

export const getters = {
	setting: s => s.setting,
}