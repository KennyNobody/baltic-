export const state = () => ({
	contacts: {
		phones: {
			broadcast: {
				title: 'Прямой эфир «Балтик Плюс»',
				code: '(4012)',
				phone: '952-444',
				link: 'tel:+74012952444',
				email: 'online@balticplus.ru',
				multichannel: true
			},
			office: {
				title: 'Информационное агентство «Балтик Плюс»',
				code: '(4012)',
				phone: '952-555',
				link: 'tel:+74012952555',
				adress: '236023, Калининград, ул. Яналова, 2',
				multichannel: true
			},
			promo: {
				title: 'Рекламный отдел «Балтик Плюс»',
				code: '(4012)',
				phone: '952-555',
				link: 'tel:+74012952555',
				multichannel: true,
				email: 'reklama@balticplus.ru',
				adress: '236023, Калининград, ул. Третьяковская, 10'
			},
			messengers: {
				code: '(952)',
				phone: '222-88-885',
				link: 'tel:+74012952444',
				multichannel: true
			},
			discript: 'Все ссылки радиостанции на подкасты, <br>соцсети, новости, видео, онлайн вещание <br>можно найти по единому адресу<br><a href="http://taplink.cc/baltic_plus" target="_blank" class="contacts__link">http://taplink.cc/baltic_plus</a>'
		},
		socials: {
			'vkontakte': 'https://vk.com/',
			'instagram': 'https://www.instagram.com/',
			'facebook': 'https://www.facebook.com/',
			'youtube': 'https://www.youtube.com/'
		},
		footer_description: ''
	}
})

export const mutations = {
	setContacts (state, contacts) {
		state.contacts = contacts.contacts
	}
}

export const actions = {
	async fetch ({commit}) {
		const contacts = await this.$axios.$get("http://89.108.65.88/api/v1/contacts")
		console.log(this)
		commit('setContacts', contacts)
	}
}

export const getters = {
	contacts: s => s.contacts,
	setting: s => s.contacts.footer_description,
	socials: s => s.contacts.socials
}