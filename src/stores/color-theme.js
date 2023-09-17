import {defineStore} from 'pinia';
import {ref} from 'vue';


const useColorThemeStore = defineStore('color-theme', () => {
    const colorTheme = ref('dark-theme') // начальное значение темы
    const changeColorTheme = () => { // функция изменения класса
        colorTheme.value = colorTheme.value === 'dark-theme' ? 'light-theme' : 'dark-theme'
    }

    return {
        colorTheme,
        changeColorTheme
    }
})

export default useColorThemeStore
