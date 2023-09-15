import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {currentTheme} from "@/theme/theme";

const useColorThemeStore = defineStore('color-theme', () => {
    const colorTheme = ref('dark-theme')
    const changeColorTheme = () => {
        colorTheme.value = colorTheme.value === 'dark-theme' ? 'light-theme' : 'dark-theme'
        console.log('click', colorTheme.value)
    }

    return {
        colorTheme,
        changeColorTheme
    }
})

export default useColorThemeStore




// const useColorThemeStore = defineStore('color-theme', () => {
//     const colorTheme = ref('dark')
//     const classByTheme = computed(() => ({
//         'light-theme': colorTheme.value === 'light',
//         'dark-theme': colorTheme.value === 'dark'
//     }))
//     function updateTheme (theme) {
//         colorTheme.value = theme
//     }
//     function toggleTheme () {
//         const themes = {
//             light: 'dark',
//             dark: 'light'
//         }
//         const newTheme = themes[colorTheme.value]
//         updateTheme(newTheme)
//         console.log('click')
//     }
//
//     return {
//         colorTheme,
//         toggleTheme,
//         classByTheme,
//         updateTheme
//     }
// })
//
// export default useColorThemeStore