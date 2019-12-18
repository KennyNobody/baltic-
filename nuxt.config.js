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
		],
		script: [
		{ src: "https://code.jquery.com/jquery-3.4.1.min.js" },
		{ src: "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js" },
		],
	},
	loading: { color: '#3B8070' },
	modules: [
	'@nuxtjs/style-resources',
	'@nuxtjs/axios',
	'@nuxtjs/proxy',
	['nuxt-svg-sprite-module', {
		directory: '~/assets/svg-sprite'
	}],
	],
	plugins: [
	{ src: '~/plugins/swiper.js', ssr: false },
	{ src: '~/plugins/datepicker', ssr: false },

	],
	css: [
	'~/node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
	],
	styleResources: {
		scss: [
		'~/node_modules/swiper/dist/css/swiper.css',
		'~/node_modules/vue2-datepicker/index.css',
		'~/scss/reset.scss',
		'~/scss/mixins.scss',
		'~/scss/variables.scss',
		'~/scss/common.scss',
		],
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
		},
		transpile: ['vue-clamp', 'resize-detector']
	}
}

