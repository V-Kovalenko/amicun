import {defineStore} from "pinia";
import {reactive} from "vue";


const useUserStore = defineStore('employee', () => {
    const user = reactive({
        name: 'Моисеев Михал Сергеевич',
        age: '13.08.1980',
        personnelNumber: '0000',
        position: 'Электрослесарь (слесарь дежурный по ремонту оборудования) I разряда'
    })
    return {
        user
    }
})
export default useUserStore