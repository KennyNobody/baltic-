module.exports = {
	head: {
		title: 'radio-nuxt',
		meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: 'сайт для радио Балтик+' }
		],
		link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	loading: { color: '#3B8070' },
	modules: [
	['@nuxtjs/style-resources'],
	['nuxt-svg-sprite-module', {
		directory: '~/assets/svg-sprite'
	}],
	],
	plugins: [
    	{ src: '~/plugins/swiper.js', ssr: false },
  	],
	styleResources: {
		scss: [
		'~/node_modules/swiper/dist/css/swiper.css',
		'~/scss/reset.scss',
		'~/scss/mixins.scss',
		'~/scss/variables.scss',
		'~/scss/common.scss',
		]
	},
	build: {
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}

