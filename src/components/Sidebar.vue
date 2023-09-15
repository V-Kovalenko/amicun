<script setup>

// import {toggleTheme, currentTheme} from "@/theme/theme";
import useColorThemeStore from "@/stores/color-theme";
import {toRefs, ref,computed} from "vue";

const colorThemeStore = useColorThemeStore()
const {changeColorTheme, colorTheme} = toRefs(colorThemeStore)
const toggleStyle = computed(() => [
    {'header__button_dark': colorTheme.value === 'dark-theme'},
])
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__header header">
      <div class="header__date">
        data
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
  </aside>
</template>

<style scoped lang="scss">
@import "@/assets/scss/main";
  .sidebar {
    padding: 1rem;
    .header {
      display: flex;
      justify-content: space-between;
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
        position: relative;
        display: flex;
        align-items: center;
        justify-content: start;
        text-align: center;
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
  }
</style>