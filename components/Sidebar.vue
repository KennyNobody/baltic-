<template>
	<aside class="sidebar">
		<nuxt-link active-class="sidebar__link--active" class="sidebar__link" to="/about/history/" exact>
			История и награды
		</nuxt-link>
		<nuxt-link active-class="sidebar__link--active" class="sidebar__link" to="/about/map/" exact>
			Города вещания
		</nuxt-link>
		<nuxt-link active-class="sidebar__link--active" class="sidebar__link" to="/about/authors/" exact>
			Ведущие эфира
		</nuxt-link>
		<nuxt-link active-class="sidebar__link--active" class="sidebar__link" to="/about/news-services/" exact>
			Службы новостей
		</nuxt-link>
		<nuxt-link active-class="sidebar__link--active" class="sidebar__link" to="/about/politics/" exact>
			Политики
		</nuxt-link>
	</aside>
</template>

<script>

	export default {
		name: 'sidebar',
		data () {
			return {
				
			}
		},
		components: {
			
		},	
	}
</script>

<style lang="scss">
	.sidebar {
		&__link {
			display: block;
			margin-bottom: 15px;
			color: $dark;
			text-decoration: none;
			&--active {
				color: $blue;
			}
			&:hover {
				opacity: 0.7;
			}
		}
	}
</style>

