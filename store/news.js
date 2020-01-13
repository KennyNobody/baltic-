export const state = () => ({
	news: [
	{
		"id": 1,
		"title": "Гольдман надеется, что с приходом «Пятёрочки» в Калининграде снизятся цены",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 2,
		"title": "«Их правовое поле начало шататься под ногами»: интервью Игоря Плешкова",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 3,
		"title": "Пьяный водитель врезался в клумбу, попытался убежать и отбиться от ГИБДД (видео)",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 4,
		"title": "Умер экс-мэр Москвы Юрий Лужков. Чем он занимался в Калининградской области?",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 5,
		"title": "В Калининграде в садовом обществе «Победа» сгорел жилой дом",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 6,
		"title": "Закон духовной традиции: патриарх Кирилл провёл литургию в Калининграде (фото)",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 7,
		"title": "У Кафедрального собора откроется новогодняя ярмарка Kaliningrad Street Food",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 8,
		"title": "Прокуратура: Шевцова и другие сотрудники регионального минсельхоза скрыли доходы",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 9,
		"title": "Авторы «Морских дьяволов» хотят построить в Калининграде съемочную базу",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 10,
		"title": "Ураган в паруса: «Крузенштерн» и «Седов» проводили в кругосветное плавание (фото)",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 11,
		"title": "Власти предлагают оплачивать 70% стоимости жилья для переехавших в регион специалистов",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 12,
		"title": "В Советске осудили пенсионера, получавшего пенсию за умершую мать на протяжении 15 лет",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 13,
		"title": "«Ну ерунда полная»: калининградские эксперты о решении WADA",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 14,
		"title": "Очевидцы: на старой трассе под Родниками насмерть сбили пешехода",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 15,
		"title": "ФСБ провела обыск в «Росморпорте» по делу о хищениях при строительстве порта в Пионерском",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 16,
		"title": "США обвинили хакеров из России в хищении 100 млн долларов",
		"preview": "http://placehold.it/1000x600",
		"date": 1555065432,
		"link": "https://www.newkaliningrad.ru/"
	}
	]
})

export const mutations = {
	setNews (state, news) {
		state.news = news
	}
}

export const actions = {
	async fetch ({commit}) {
		const news = await this.$axios.$get("/api/news")
		commit('setNews', news)
	}
}

export const getters = {
	news: s => s.news
}