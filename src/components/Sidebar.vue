<script setup>

import useColorThemeStore from "@/stores/color-theme";
import useUserStore from "@/stores/user";
import {toRefs, ref, computed, onMounted} from "vue";

/*--данные из useColorThemeStore-->>>>*/
const colorThemeStore = useColorThemeStore() // хук по смене цвета темы сайта
const {changeColorTheme, colorTheme} = toRefs(colorThemeStore)
const toggleStyle = computed(() => [  // динамический стиль кнопки смены темы
    {'header__button_dark': colorTheme.value === 'dark-theme'},
])
/*--данные из useColorThemeStore--<<<<*/

/*--данные из useEmployeeStore--<<<<*/
const employeeStore = useUserStore()
const {user} = toRefs(employeeStore)
/*--данные из useEmployeeStore-->>>>*/
/*--отображение даты-->>>>*/
const currentData = ref('') // Дата
const currentTime = ref('') // Время
onMounted(() => {
  const updateDataTime = () => {  // обновление даты и время
    const currentDataTime = new Date()
    currentData.value = currentDataTime.toLocaleDateString()
    currentTime.value = currentDataTime.toLocaleTimeString()
  }
  updateDataTime()
  setInterval(updateDataTime, 1000)
})
/*--отображение даты--<<<<*/


</script>

<template>
  <aside class="sidebar">

    <div class="sidebar__header header">
      <div class="header__date">
        <div>{{currentData}}</div>
        <div>{{currentTime}}</div>
      </div>
      <div class="header__logout">
        <p>Выход</p>
        <div class="header__icon">
          <span class="material-icons">logout</span>
        </div>
      </div>
      <div class="header__button" @click="changeColorTheme">
        <div :class="toggleStyle">
          <div v-if="colorTheme === 'dark-theme'" class="header__button-slider"></div>
          <div v-if="colorTheme === 'light-theme'" class="header__button-slider_black"></div>
        </div>
      </div>
    </div>
    <div class="sidebar__content">
      <div class="sidebar__about-person about-person">
        <div class="about-person__name">
          <h3>{{user.name}}</h3>
        </div>
        <div class="about-person__age"><b>{{user.age}}</b></div>
        <div class="about-person__personnel-umber">
          <p>Таб №: ГОКИ {{user.personnelNumber}}</p>
        </div>
        <div class="about-person__position">{{user.position}}</div>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
@import "@/assets/scss/main";
  .sidebar {
    padding: 1rem;
    .header {
      display: flex;
      justify-content: space-between;
      position: relative;
      &__date {

      }
      &__logout {
        display: flex;
      }
      &__icon {
        margin-left: 10px;
      }
      &__button {
        width: 45px;
        height: 20px;
        background-color: $bg-sidebar_dark;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: start;
        text-align: center;
        position: absolute;
        top: 50px;
        left: 300px;
      }
      &__button_dark {
        background-color: $bg-sidebar_light;
        width: 45px;
        height: 20px;
        border-radius: 1rem;

      }
      &__button-slider {
        width: 20px;
        height: 20px;
        background-color: #000000;
        border-radius: 50%;
        top: 0;
        left: 0;
      }
      &__button-slider_black {
        width: 20px;
        height: 20px;
        background-color: #ffffff;
        border-radius: 50%;
        top: 0;
        left: 0;
        transform: translateX(40px - 15px);
      }

    }
    &__content {
      display: flex;
    }
    &__about-person {
      margin-top: 100px;
    }
      .about-person {
        display: flex;
        background-color: $bg-content_dark;
        flex-direction: column;
        width: 100%;
        padding: 10px;
        box-shadow: 0 2px 8px  rgba(0, 0, 0, 1);
        border-radius: 5px;
        &__name {
          font-size: 24px;

        }
        &__age {
          font-size: 18px;
        }
        &__personnel-umber {

        }
        &__position {
          line-height: 14px;
        }
      }

  }
</style>