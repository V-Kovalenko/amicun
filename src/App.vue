<script setup>
import useColorThemeStore from "@/stores/color-theme";
import {toRefs} from "vue";
const colorThemeStore = useColorThemeStore()
const {colorTheme} = toRefs(colorThemeStore)
</script>

<template>
  <div :class="colorTheme" class="app" >
    <div>
      <router-view/>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import "@/assets/scss/main";
@import "@/assets/scss/themes/dark-theme";
@import "@/assets/scss/themes/light-theme";
  .app {
    min-height: 100vh;

  }
.dark-theme {
  background-color: $bg-content_dark;
  color: $text-color_dark;
}
.light-theme {
  background-color: $bg-content_light;
  color: $text-color_light;
}
</style>
