import {computed, ref} from "vue";

export const currentTheme = ref('dark-theme')
export function toggleTheme () {
    currentTheme.value = currentTheme.value === 'dark-theme'? 'light-theme': 'dark-theme'
}

