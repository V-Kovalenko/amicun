<script setup>
import Content from "@/components/Content.vue";
import Sidebar from "@/components/Sidebar.vue";
import useColorThemeStore from "@/stores/color-theme";
import {toRefs} from "vue";
const colorThemeStore = useColorThemeStore()
const {colorTheme} = toRefs(colorThemeStore)
</script>

<template>
  <div class='home-page' >
    <div :class="['home-page__sidebar', colorTheme === 'dark-theme'?'dark-theme' : 'light-theme']">
      <Sidebar/>
    </div>
    <div class="home-page__content">
      <Content/>
    </div>

  </div>

</template>

<style scoped lang="scss">
@import "@/assets/scss/main";
.home-page {
  display: grid;
  grid-template-areas: 'aside content';
  grid-template-columns: auto 1fr;
  min-height: 100vh;


  &__sidebar {
    width: 38.75rem;
    grid-area: aside;
    border-radius: 0 12px 12px 0;
    @media screen and (min-width: 1920px) {
      width: 48.75rem;
    }
  }

  &__content {
    grid-area: content;
  }


}
.dark-theme {
  background-color: $bg-sidebar_dark;
  transition: all 0.3s ease-in-out;
}
.light-theme {
  background-color: $bg-sidebar_light;
  transition: all 0.3s ease-in-out;
}
</style>