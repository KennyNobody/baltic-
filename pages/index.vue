<template>
  <div class="page page--home">
    <section class="home-slider">
      <appSlider></appSlider>
    </section>
    <!-- <section class="home-now">
      <div class="home-now__articles">
        <template v-if="broadcast.now">
        <article class="home-now__article" >
          <div class="home-now__content">
            <p class="home-now__discript">Сейчас в эфире</p>
            <div class="home-now__clock">
              <time class="home-now__time">
                {{ $moment.unix(+broadcast.now.time).format("hh:mm") }}
              </time>
              <time class="home-now__date">
                {{ $moment.unix(+broadcast.now.time).format("DD/MM/YYYY") }}
              </time>
            </div>
            <h3 class="home-now__title">
              <v-clamp :max-lines="3">
                {{ broadcast.now.title }}
              </v-clamp>
            </h3>
          </div>
        </article>
        </template> -->
    <!-- <article class="home-now__article" v-if="broadcast.next">
					<div class="home-now__content">
						<p class="home-now__discript">
							Далее в эфире
						</p>
						<div class="home-now__clock">
							<time class="home-now__time">
								{{ $moment.unix(+broadcast.next.time).format('hh:mm') }}
							</time>
							<time class="home-now__date">
								{{ $moment.unix(+broadcast.next.time).format('DD/MM/YYYY') }}
							</time>
						</div>
						<h3 class="home-now__title">
							<v-clamp :max-lines="3">
								{{ broadcast.next.title }}
							</v-clamp>
						</h3>
					</div>
				</article> -->
    <!-- </div>
    </section> -->
    <appNews></appNews>
    <section class="home-video" v-if="video.iframe">
      <h2 class="title">
        <div class="title__line"></div>
        <p class="title__text">Смотри Балтик Плюс TV</p>
      </h2>
      <div class="home-video__columns">
        <div
          class="home-video__column home-video__column--left"
          v-html="video.iframe"
        ></div>
        <div class="home-video__column home-video__column--right">123</div>
      </div>
    </section>
    <section class="home-blog">
      <h2 class="title">
        <div class="title__line"></div>
        <p class="title__text">Блог радиостанции</p>
        <p class="title__control">
          <nuxt-link class="title__link" to="/news/"> Все записи </nuxt-link>
        </p>
      </h2>
      <div class="home-blog__articles">
        <appArticle
          v-for="item in blog"
          v-bind:key="item.id"
          :title="item.title"
          :description="item.description"
          :thumb="item.preview"
          :slug="item.slug"
          :id="item.id"
          :date="item.public_at"
        ></appArticle>
        <div class="home-blog__clear"></div>
      </div>
    </section>
    <section class="home-programs">
      <h2 class="title">
        <div class="title__line"></div>
        <p class="title__text">Программы</p>
        <p class="title__control">
          <nuxt-link class="title__link" to="/programs/">
            Все программы
          </nuxt-link>
        </p>
      </h2>
      <div class="home-programs__items">
        <nuxt-link
          :to="'/programs/' + item.id"
          class="home-programs__item"
          v-for="item in programs"
          v-bind:key="item.id"
        >
          <img :src="item.preview" :alt="item.title" />
        </nuxt-link>
        <div class="home-programs__item--clear"></div>
        <div class="home-programs__item--clear"></div>
      </div>
    </section>
    <section class="home-podcasts">
      <h2 class="title">
        <div class="title__line"></div>
        <p class="title__text">Подкасты</p>
        <p class="title__control">
          <nuxt-link class="title__link" to="/podcasts/">
            Все подкасты
          </nuxt-link>
        </p>
      </h2>
      <div class="home-podcasts__articles">
        <appPodcast
          v-for="(item, index) in podcasts"
          v-bind:key="index"
          :title="item.title"
          :date="item.date"
          :play="item.play"
          :id="item.id"
          :slug="item.slug"
          :time="item.time"
          :thumb="item.thumb"
          :info="item.info"
          :link="item.link"
        ></appPodcast>
      </div>
    </section>
    <!-- 		<section class="home-playlist">
			<h2 class="title">
				<div class="title__line"></div>
				<p class="title__text">Плейлисты</p>
			</h2>
			<div class="home-video__wrap" v-html="video.playlist">
				
			</div>
		</section> -->
  </div>
</template>

<script>
import appSlider from "~/components/sections/MainSlider";
import appArticle from "~/components/Article";
import appPodcast from "~/components/Podcast";
import appNews from "~/components/sections/Home-news";
// import appTestPlayer from '~/components/sections/TestPlayer'
import VClamp from "vue-clamp";

export default {
  name: "home",
  head() {
    return {
      title: process.env.title,
      meta: [{}],
    };
  },
  data() {
    return {
      podcastsCount: 8,
      // newsCount: 3,
      // videoLink: 'https://youtu.be/d8Oc90QevaI',
      // videoCode: '<iframe src="https://www.youtube.com/embed/' + 'вставлено' +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    };
  },
  computed: {
    broadcast() {
      return this.$store.getters["broadcast/broadcast"];
    },
    programs() {
      return this.$store.getters["programs/programsFront"];
    },
    blog() {
      return this.$store.getters["blog/blogFront"];
    },
    podcasts() {
      return this.$store.getters["podcasts/podcastsFront"];
    },
    video() {
      return this.$store.getters["video/video"];
    },
  },
  async fetch({ store }) {
    // if (store.getters['programs/programsFront'].length === 0) {
    // 	await store.dispatch('programs/fetchFront')
    // }
    // if (store.getters['blog/blogFront'].length === 0) {
    // 	await store.dispatch('blog/fetchFront')
    // }
    // if (store.getters['podcasts/podcastsFront'].length === 0) {
    // 	await store.dispatch('podcasts/fetchFront')
    // }
    // if (store.getters['programs/programsFront'].length === 0) {
    // await store.dispatch('programs/fetchFront')
    // }
    // if (store.getters['blog/blogFront'].length === 0) {
    // await store.dispatch('blog/fetchFront')
    // }
    // if (store.getters['podcasts/podcastsFront'].length === 0) {
    // await store.dispatch('podcasts/fetchFront')
    // }
  },
  mounted() {
    this.$store.dispatch("broadcast/fetch");
    this.$store.dispatch("programs/fetchFront");
    this.$store.dispatch("blog/fetchFront");
    this.$store.dispatch("podcasts/fetchFront");
    this.$store.dispatch("video/fetch");
  },
  components: {
    appSlider,
    appArticle,
    appPodcast,
    appNews,
    VClamp,
    // appTestPlayer
  },
};
</script>

<style lang="scss">
.home-slider {
  margin-bottom: 105px;
  overflow: hidden;
}
.home-now {
  margin-bottom: 60px;
  &__articles {
    display: flex;
    justify-content: space-between;
    @include r(1100) {
      display: block;
    }
  }
  &__article {
    padding: 10px;
    background-color: $light;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    width: calc(50% - 10px);
    color: $dark;
    margin-bottom: 20px;
    @include r(1100) {
      width: 100%;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
    @include r(470) {
      padding: 0px;
    }
  }
  &__thumb {
    flex-shrink: 0;
    width: 140px;
    height: 177px;
    @include r(560) {
      display: none;
    }
    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__content {
    padding: 10px 20px;
    @include r(560) {
    }
  }
  &__discript {
    font-size: 16px;
    line-height: 18px;
    color: $red;
  }
  &__clock {
    color: $blue;
    margin-bottom: 5px;
  }
  &__time {
    font-weight: 300;
    font-size: 50px;
    line-height: 1.2;
  }
  &__date {
    font-size: 20px;
  }
  &__title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  }
}
.home-programs {
  margin-bottom: 105px;
  @include r(1100) {
    margin-bottom: 60px;
  }
  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(33% - 10px);
    margin-bottom: 20px;
    @include r(670) {
      width: calc(50% - 10px);
    }
    img {
      height: inherit;
      width: 100%;
      display: block;
    }
    &--clear {
      height: 0px;
      display: block;
      width: calc(33% - 10px);
      @include r(670) {
        width: calc(50% - 10px);
      }
    }
    &:hover {
      opacity: 0.9;
    }
  }
}
.home-podcasts {
  margin-bottom: 105px;
  @include r(1100) {
    margin-bottom: 60px;
  }
  &__articles {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @include r(1100) {
      display: block;
    }
  }
}
.home-video {
  margin-bottom: 105px;
  &__columns {
    display: flex;
    justify-content: space-between;
  }
  &__column {
    width: calc(50% - 10px);
    &--left {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
    }
    &--right {
    }
  }
  @include r(1100) {
    margin-bottom: 60px;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-width: 0;
    outline-width: 0;
  }
}
.home-blog {
  margin-bottom: 105px;
  &__articles {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__clear {
    width: calc(33% - 10px);
  }
}
</style>