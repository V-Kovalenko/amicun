<script setup>
import {reactive, ref} from "vue";

const cards = reactive([
  {title: 'Начать работу', url: new URL('@/assets/images/content/work.png', import.meta.url), path: '/work'},
  {title: 'Уведомления', url: new URL('@/assets/images/content/message.png', import.meta.url), path: '/email'},
  {title: 'Обучение', url: new URL('@/assets/images/content/education.png', import.meta.url), path: '/education'},
  {title: 'Достижения', url: new URL('@/assets/images/content/achievements.png', import.meta.url), path: '/achievements'},
])

const countMessage = ref(0)



</script>

<template>
  <div class="content">
    <div class="content__logo">
      <img src="@/assets/images/content/logoAmicun.png" alt="" class="content__logo-img">
    </div>
    <div class="container">
      <span class="content__show-message">{{countMessage}}</span>
      <RouterLink
          v-for="(card, index) in cards"
          :to="card.path"
          :key="index"
      >
        <div class="content__card card" >
          <div class="card" >
            <div class="card__title">{{card.title}}</div>

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
    top: 10.625rem;
    right: 2.5rem;
    z-index: 2;
  }
  &__logo {

  }
  &__logo-img {
    width: 10rem;
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
  }
  &__card {
    background-color: #EF7F1A;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 1);
    &:hover{
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


    &__title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 2.5rem;
    }

    &__img {
      width: 6.25rem;

    }

  }

}
</style>