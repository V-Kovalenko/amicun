<script setup>
import {reactive} from "vue";

const cards = reactive([
  {title: 'Начать работу', url: new URL('@/assets/images/content/work.png', import.meta.url), path: '/work'},
  {title: 'Уведомления', url: new URL('@/assets/images/content/message.png', import.meta.url), path: '/email'},
  {title: 'Обучение', url: new URL('@/assets/images/content/education.png', import.meta.url), path: '/education'},
  {title: 'Достижения', url: new URL('@/assets/images/content/achievements.png', import.meta.url), path: '/achievements'},
])
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
  margin-top: 160px;
}
.content {

  &__logo {

  }
  &__logo-img {
    width: 150px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  &__card {
    background-color: #EF7F1A;
  }

  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 250px;
    height: 250px;
    margin: 20px;


    &__title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 40px;
    }

    &__img {
      width: 100px;

    }

    &__img-img {

    }
  }

}
</style>