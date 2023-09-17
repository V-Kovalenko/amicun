<script setup>
import {reactive, ref} from "vue";

const cards = reactive([
  {title: 'Начать работу', url: new URL('@/assets/images/content/work.png', import.meta.url), path: '/work'},
  {title: 'Уведомления', url: new URL('@/assets/images/content/message.png', import.meta.url), path: '/email'},
  {title: 'Обучение', url: new URL('@/assets/images/content/education.png', import.meta.url), path: '/education'},
  {
    title: 'Достижения',
    url: new URL('@/assets/images/content/achievements.png', import.meta.url),
    path: '/achievements'
  },
])

const countMessage = ref(0)


</script>

<template>
  <div class="content">
    <div class="content__logo">
      <img src="@/assets/images/content/logoAmicun.png" alt="" class="content__logo-img">
    </div>
    <div class="container">
      <RouterLink
          v-for="(card, index) in cards"
          :to="card.path"
          :key="index"
      >
        <div class="content__card card">
          <span v-show="card.title === 'Уведомления'" class="content__show-message">{{ countMessage }}</span>
          <div class="card">
            <div class="card__title">{{ card.title }}</div>
            <div class="card__img">
              <img :src="card.url" alt="" class="card__img-img">
            </div>
          </div>
        </div>
      </RouterLink>

    </div>

  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/colors";

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
}

.content {
  width: 100%;
  &__show-message {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
    background-color: greenyellow;
    color: black;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    @media screen and (max-width: 3840px){
      width: 9rem;
      height: 9rem;
      top: -2rem;
      right: -2rem;
      font-size: 6rem;
    }
    @media screen and (min-width: 1921px) and (max-width: 3839px) {
      width: 9rem;
      height: 9rem;
      top: -2rem;
      right: -2rem;
      font-size: 6rem;
    }
    @media screen and (min-width: 1280px) and (max-width: 1920px){
      width: 3rem;
      height: 3rem;
      font-size: 2.5rem;
      top: -0.75rem;
      right: -0.95rem;
    }
    @media screen and (min-width: 1280px) and (max-width: 1370px){
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
  }

  &__logo {

  }

  &__logo-img {
    width: 10rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    @media screen and (max-width: 3840px) {
      width: 25rem;
      right: 6rem;
    }
    @media screen and (min-width: 1920px) and (max-width: 3839px) {
      width: 19rem;
      top: 1rem;
      right: 5rem;

    }
    @media screen and (min-width: 1280px) and (max-width: 1919px) {
      width: 12rem;
      top: 1rem;
      right: 3rem;

    }

  }

  &__card {
    background-color: #EF7F1A;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 1);
    position: relative;

    &:hover {
      transform: translateY(-0.3125rem);
    }
  }

  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 18rem;
    height: 15.625rem;
    margin: 1.25rem;
    @media screen and (min-width: 3840px) {
      width: 80rem;
      height: 50rem;
    }
    @media screen and (min-width: 1921px) and (max-width: 3839px) {
      width: 80rem;
      height: 50rem;
    }

    @media screen and (min-width: 1921px) and (max-width: 3370px) {
      width: 70rem;
      height: 54rem;
    }

    @media screen and (min-width: 1921px) and (max-width: 3046px) {
      width: 62rem;
      height: 50rem;
    }
    @media screen and (min-width: 1921px) and (max-width: 2808px) {
      width: 55rem;
      height: 48rem;
    }
    @media screen and (min-width: 1280px) and (max-width: 1920px){
      width: 33rem;
      height: 23em;
    }

    @media screen and (min-width: 1280px) and (max-width: 1824px){
      width: 27rem;
      height: 22rem;
    }
    @media screen and (min-width: 1280px) and (max-width: 1824px){
      width: 23rem;
      height: 22rem;
    }
    @media screen and (min-width: 1280px) and (max-width: 1480px){
      width: 21rem;
      height: 21rem;
    }
    @media screen and (min-width: 1280px) and (max-width: 1370px){
      width: 19rem;
      height: 19rem;
    }
    @media screen and (min-width: 1280px) and (max-width: 1370px){
      width: 17rem;
      height: 17rem;
    }
    @media screen and (max-width: 1280px){
      width: 16rem;
      height: 16rem;
    }
    &__title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 2.5rem;
      @media screen and (min-width: 3840px) {
        font-size: 8rem;
        padding-bottom: 5rem;
      }
      @media screen and (min-width: 1921px) and (max-width: 3849px) {
        font-size: 7rem;
        padding-bottom: 5rem;
      }
      @media screen and (min-width: 1280px) and (max-width: 1920px){
        font-size: 3.5rem;
      }
      @media screen and (min-width: 1280px) and (max-width: 1824px){
        font-size: 3rem;
      }
      @media screen and (min-width: 1280px) and (max-width: 1480px){
        font-size: 2.8rem;
        padding-bottom: 1.5rem;
      }
      @media screen and (max-width: 1280px){
        font-size: 2rem;
        padding-bottom: 1rem;
      }
      @media screen and (min-width: 1280px) and (max-width: 1370px){
        font-size: 2rem;
        padding-bottom: 0.6rem;
      }
    }

    &__img-img {
      width: 6.25rem;
      @media screen and (min-width: 3840px) {
        width: 20rem;
      }
      @media screen and (min-width: 1921px) and (max-width: 3839px) {
        width: 20rem;
      }
      @media screen and (min-width: 1280px) and (max-width: 1824px){
        width: 10rem;
      }
      @media screen and (min-width: 1280px) and (max-width: 1480px){
        width: 8rem;
      }
      @media screen and (max-width: 1280px){
        width: 7rem;
      }
    }

  }

}
</style>