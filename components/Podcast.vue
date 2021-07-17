<template>
  <article class="podcast">
    <div class="podcast__thumb">
      <img class="podcast__img" :src="thumb" :alt="title" />
      <div class="podcast__btn" v-on:click="playThis">
        <template v-if="play == false">
          <svg class="podcast__play-icon">
            <use xlink:href="#icon-icon-play"></use>
          </svg>
        </template>
        <template v-else>
          <svg class="podcast__playing-icon">
            <use xlink:href="#icon-icon-playing"></use>
          </svg>
        </template>
      </div>
    </div>
    <div class="podcast__content">
      <div class="podcast__header">
        <time class="podcast__time">{{
          $moment.unix(date).format("DD/MM/YYYY")
        }}</time>
        <div class="podcast__share">
          <transition name="fade">
            <yandex-share
              v-if="showToggle"
              v-bind="content"
              :services="[
                'telegram',
                'whatsapp',
                'viber',
                'vkontakte',
                'facebook',
              ]"
            />
          </transition>
          <svg
            v-on:click="showToggle = !showToggle"
            class="podcast__share-icon"
          >
            <use xlink:href="#icon-icon-share"></use>
          </svg>
        </div>
      </div>
      <div class="podcast__info">
        <nuxt-link :to="'/podcasts/' + id" class="podcast__title">
          <v-clamp :max-lines="2">{{ title }}</v-clamp>
        </nuxt-link>
        <div class="podcast__footer">
          <div class="podcast__discript">
            <v-clamp :max-lines="1">{{ info }}</v-clamp>
          </div>
          <div class="podcast__duration">
            {{ time }}
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import VClamp from "vue-clamp";
import YandexShare from "@cookieseater/vue-yandex-share";

export default {
  name: "podcast",
  props: [
    "title",
    "time",
    "date",
    "thumb",
    "info",
    "slug",
    "id",
    "play",
    "link",
  ],
  data() {
    return {
      showToggle: false,
      content: {
        title: this.title,
        url: process.env.apiURL + "podcasts/" + this.id,
        image: this.thumb,
        description: this.info,
      },
    };
  },
  components: {
    VClamp,
    YandexShare,
  },
  methods: {
    playThis() {
      if (this.player.file != this.link) {
        this.$store.commit("player/setLoading", {
          loading: true,
        });
        this.$store.commit("player/setLive", false);
        this.$store.commit("podcasts/changePodcast", this.id);
        let newPodcast = {
          img: this.thumb,
          author: this.title,
          title: this.info,
          file: this.link,
          time: this.time,
          id: this.id,
          info: this.info,
          play: true,
        };
        this.$store.commit("player/setPlayer", newPodcast);
        // this.$store.commit('podcasts/setPodcastHistory', newPodcast);
        this.$store.commit("player/setWasPlaying", {
          wasPlaying: true,
        });
        this.$store.commit("player/setRadioMute", {
          radioMute: false,
        });
        this.$store.commit("player/setState", {
          playing: true,
        });
        this.$store.commit("player/setLoading", {
          loading: false,
        });
      } else if (this.player.playing == true && this.player.file == this.link) {
        console.log("Ставим на паузу");
		
		this.$store.commit("player/setLoading", {
          loading: true,
        });
        this.$store.commit("podcasts/changePodcast", this.id);
        let newPodcast = {
          img: this.thumb,
          author: this.title,
          title: this.info,
          file: this.link,
          time: this.time,
          id: this.id,
          info: this.info,
          play: false,
        };
        this.$store.commit("player/setPlayer", newPodcast);
        // this.$store.commit('podcasts/setPodcastHistory', newPodcast);
		console.log(window.Howler.pause());
        this.$store.commit("player/setWasPlaying", {
          wasPlaying: false,
        });

        this.$store.commit("player/setState", {
          playing: false,
        });
        this.$store.commit("player/setLoading", {
          loading: false,
        });
      } else {
        console.log("Уже играет, что тебе еще нужно");
      }
    },
  },
  computed: {
    player() {
      return this.$store.getters["player/player"];
    },
  },
};
</script>

<style lang="scss">
.podcast {
  display: flex;
  background-color: $light;
  width: calc(50% - 10px);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  color: $dark;
  margin-bottom: 20px;
  @include r(1100) {
    width: 100%;
  }
  @include r(470) {
    display: block;
  }
  &__thumb {
    flex-shrink: 0px;
    height: 156px;
    width: 156px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @include r(470) {
      width: 100%;
      height: auto;
    }
  }
  &__img {
    display: block;
    width: 100%;
    height: 100%;
  }
  &__content {
    padding: 16px 12px 16px 20px;
    flex-grow: 1;
    min-width: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  &__time {
    color: $blue;
    font-size: 16px;
    line-height: 18px;
  }
  &__share {
    height: 30px;
    width: 30px;
    position: relative;
    .ya-share2 {
      height: 100%;
      display: flex;
      align-items: center;
      width: auto;
      position: absolute;
      right: calc(100% + 10px);
      &__container {
      }
      &__list {
        display: flex;
      }
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
  }
  &__share-icon {
    height: 30px;
    width: 30px;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
      opacity: 0.7;
    }
  }
  &__info {
  }
  &__title {
    font-size: 26px;
    line-height: 28px;
    font-weight: 600;
    margin-bottom: 6px;
    color: $dark;
    text-decoration: none;
    display: block;
    &:hover {
      opacity: 0.7;
    }
    @include r(1100) {
      font-size: 20px;
      line-height: 23px;
    }
  }
  &__discript {
    font-size: 16px;
    line-height: 21px;
  }
  &__duration {
    font-size: 14px;
    line-height: 21px;
    color: #bdbdbd;
  }
  &__btn {
    height: 68px;
    width: 68px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 58, 84, 0.8);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.3s all;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    svg {
      height: 30px;
      width: 30px;
    }
    &:hover {
      background: rgba(0, 58, 84, 0.5);
    }
  }
  &__play-icon {
    position: relative;
    left: 2px;
  }
}
</style>

