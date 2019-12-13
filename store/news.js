export const state = () => ({
	news: [
	{
		"id": 1,
		"slug": "news-slug-1",
		"title": "Гольдман надеется, что с приходом «Пятёрочки» в Калининграде снизятся цены",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 2,
		"slug": "news-slug-2",
		"title": "«Их правовое поле начало шататься под ногами»: интервью Игоря Плешкова",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 3,
		"slug": "news-slug-3",
		"title": "Пьяный водитель врезался в клумбу, попытался убежать и отбиться от ГИБДД (видео)",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 4,
		"slug": "news-slug-4",
		"title": "Умер экс-мэр Москвы Юрий Лужков. Чем он занимался в Калининградской области?",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 5,
		"slug": "news-slug-5",
		"title": "В Калининграде в садовом обществе «Победа» сгорел жилой дом",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 6,
		"slug": "news-slug-6",
		"title": "Закон духовной традиции: патриарх Кирилл провёл литургию в Калининграде (фото)",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 7,
		"slug": "news-slug-7",
		"title": "У Кафедрального собора откроется новогодняя ярмарка Kaliningrad Street Food",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 8,
		"slug": "news-slug-8",
		"title": "Прокуратура: Шевцова и другие сотрудники регионального минсельхоза скрыли доходы",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 9,
		"slug": "news-slug-9",
		"title": "Авторы «Морских дьяволов» хотят построить в Калининграде съемочную базу",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 10,
		"slug": "news-slug-10",
		"title": "Ураган в паруса: «Крузенштерн» и «Седов» проводили в кругосветное плавание (фото)",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 11,
		"slug": "news-slug-11",
		"title": "Власти предлагают оплачивать 70% стоимости жилья для переехавших в регион специалистов",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 12,
		"slug": "news-slug-12",
		"title": "В Советске осудили пенсионера, получавшего пенсию за умершую мать на протяжении 15 лет",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 13,
		"slug": "news-slug-13",
		"title": "«Ну ерунда полная»: калининградские эксперты о решении WADA",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 14,
		"slug": "news-slug-14",
		"title": "Очевидцы: на старой трассе под Родниками насмерть сбили пешехода",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 15,
		"slug": "news-slug-15",
		"title": "ФСБ провела обыск в «Росморпорте» по делу о хищениях при строительстве порта в Пионерском",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
		"link": "https://www.newkaliningrad.ru/"
	},
	{
		"id": 16,
		"slug": "news-slug-16",
		"title": "США обвинили хакеров из России в хищении 100 млн долларов",
		"preview": "http://placehold.it/1000x600",
		"created_at": "",
		"public_at": "",
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
		// Здесь указываем, откуда получать новости, массив сверху должен быть пустым
		const news = await this.$axios.$get("https://api.myjson.com/bins/18oqjg")
		commit('setNews', news)
	}
}

export const getters = {
	news: s => s.news
}