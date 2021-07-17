<template>
  <footer class="footer">
    <!-- <div class="footer__left">
			<nuxt-link class="footer__logo" to="/">
				<img src="~/assets/img/svg/logo-top.svg" alt="Логотип Балтик+">
			</nuxt-link>
			<nuxt-link to="/about/politics/" class="footer__link">
				Политика конфиденциальности
			</nuxt-link>
		</div> -->
    <!-- <div class="footer__right"> -->
    <div class="footer__socials">
      <!-- <a :href="socials.telegram" v-if="socials.telegram" class="soc-btn soc-btn--telegram">
					<div class="soc-btn__left">
						<svg>
							<use xlink:href="#icon-icon-telegram"></use>
						</svg>
					</div>
					<div class="soc-btn__separator"></div>
					<div class="soc-btn__right">
						Подписаться
					</div>
				</a> -->
      <a
        :href="socials.vkontakte"
        v-if="socials.vkontakte"
        class="soc-btn soc-btn--vk"
        rel="nofollow"
        target="_blank"
      >
        <div class="soc-btn__left">
          <svg>
            <use xlink:href="#icon-icon-vk"></use>
          </svg>
        </div>
        <div class="soc-btn__separator"></div>
        <div class="soc-btn__right">Подписаться</div>
      </a>
      <a
        :href="socials.instagram"
        v-if="socials.instagram"
        class="soc-btn soc-btn--instagram"
        rel="nofollow"
        target="_blank"
      >
        <div class="soc-btn__left">
          <svg>
            <use xlink:href="#icon-icon-instagram"></use>
          </svg>
        </div>
        <div class="soc-btn__separator"></div>
        <div class="soc-btn__right">Подписаться</div>
      </a>
      <a
        :href="socials.facebook"
        v-if="socials.facebook"
        class="soc-btn soc-btn--facebook"
        rel="nofollow"
        target="_blank"
      >
        <div class="soc-btn__left">
          <svg>
            <use xlink:href="#icon-icon-facebook"></use>
          </svg>
        </div>
        <div class="soc-btn__separator"></div>
        <div class="soc-btn__right">Подписаться</div>
      </a>
      <a
        :href="socials.youtube"
        v-if="socials.youtube"
        class="soc-btn soc-btn--youtube"
        rel="nofollow"
        target="_blank"
      >
        <div class="soc-btn__left">
          <svg>
            <use xlink:href="#icon-icon-youtube"></use>
          </svg>
        </div>
        <div class="soc-btn__separator"></div>
        <div class="soc-btn__right">Подписаться</div>
      </a>
      <a
        :href="socials.telegram"
        v-if="socials.telegram"
        class="soc-btn soc-btn--telegram"
        rel="nofollow"
        target="_blank"
      >
        <div class="soc-btn__left">
          <svg>
            <use xlink:href="#icon-icon-telegram"></use>
          </svg>
        </div>
        <div class="soc-btn__separator"></div>
        <div class="soc-btn__right">Подписаться</div>
      </a>
    </div>
    <div class="footer__text" v-html="footer"></div>
    <!-- </div> -->
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    socials() {
      return this.$store.getters["contacts/socials"];
    },
    footer() {
      return this.$store.getters["contacts/setting"];
    },
  },
  // async fetch({store}) {
  // 	if (store.getters['setting/setting'].length === 0) {
  // 		await store.dispatch('setting/fetch')
  // 	}
  // },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.footer {
  display: flex;
  flex-shrink: 0;
  padding-top: 40px;
  padding-bottom: 80px;
  @include r(1100) {
    display: block;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  // &__left {
  // 	flex-shrink: 0;
  // 	width: 247px;
  // 	background-color: $light;
  // 	@include r(1100) {
  // 		width: 248px;
  // 		text-align: center;
  // 		padding: 15px;
  // 		margin-left: auto;
  // 		margin-right: auto;
  // 		margin-bottom: 25px;
  // 	}
  // }
  // &__right {
  // 	padding-left: 20px;
  // 	display: flex;
  // 	padding-top: 16px;
  // 	@include r(1100) {
  // 		display: block;
  // 		padding-left: 0px;
  // 		padding-top: 0px;
  // 	}
  // }
  // &__logo {
  // 	padding-top: 12px;
  // 	padding-right: 23px;
  // 	margin-bottom: 12px;
  // 	height: 122px;
  // 	display: block;
  // 	img {
  // 		display: block;
  // 		width: 222px;
  // 		height: 102px;
  // 	}
  // 	&:hover {
  // 		opacity: 0.7;
  // 	}
  // }
  // &__link {
  // 	display: block;
  // 	font-size: 14px;
  // 	line-height: 19px;
  // 	color: $blue;
  // }
  &__socials {
    margin-right: 20px;
    width: 247px;
    // padding-top: 4px;
    flex-shrink: 0;
    @include r(1100) {
      width: 100%;
      max-width: 248px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 25px;
    }
  }
  &__text {
    color: $light;
    font-size: 14px;
    line-height: 19px;
    flex-grow: 1;
    min-width: 0px;
    @include r(1100) {
      width: 100%;
      max-width: 248px;
      margin-left: auto;
      margin-right: auto;
    }
    a {
      text-decoration: underline;
      color: $light;
      &:hover {
        text-decoration: none;
      }
    }
    br {
      display: block;
      // @include r(1100) {
      // 	display: block;
      // }
    }
  }
  a.footer__developer {
    color: $red;
    transition: 0.3s all;
    text-decoration: none;
    &:hover {
      opacity: 0.7;
    }
  }
}

.soc-btn {
  padding-top: 3px;
  padding-bottom: 3px;
  color: $light;
  display: flex;
  justify-content: space-between;
  height: 30px;
  text-decoration: none;
  margin-bottom: 10px;
  max-width: 160px;
  &:hover {
    opacity: 0.7;
  }
  &--vk {
    background-color: #5181b8;
  }
  &--instagram {
    background-color: #da2c77;
  }
  &--facebook {
    background-color: #395a98;
  }
  &--youtube {
    background-color: #db4f3e;
  }
  &--telegram {
    background-color: #0088cc;
  }
  &__left {
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 15px;
      height: 15px;
      fill: $light;
    }
  }
  &__separator {
    width: 1px;
    display: block;
    background-color: $light;
  }
  &__right {
    width: 118px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 19px;
  }
}
</style>
