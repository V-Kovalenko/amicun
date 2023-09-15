import {defineStore} from "pinia";
import {reactive} from "vue";


const useUserStore = defineStore('employee', () => {
    const users = reactive([{
        name: 'Моисеев Михал Сергеевич',
        age: '13.08.1980',
        personnelNumber: '0000',
        position: 'Электрослесарь (слесарь дежурный по ремонту оборудования) I разряда',
        password: '12345678',
        logged: false
    }])

    const certificationThrough = 111 // отчет до окончания аттестации

    const trainingAndCertification = reactive([ // данные об аттестации
        {
            title: 'Инструктаж',
            url: new URL("@/assets/images/instructions.png", import.meta.url),
            colors: true,
            tests: '',
        },
        {
            title: 'Предсменный экзаменатор',
            url: new URL("@/assets/images/examiner.png", import.meta.url),
            colors: true,
            tests: '',
        },
        {
            title: 'Тестов выполнено',
            url: '',
            colors: true,
            tests: 122,
        },
        {
            title: 'Аттестация через',
            url: '',
            colors: false,
            tests: ''
        }]
    )

    return {
        users,
        trainingAndCertification,
        certificationThrough
    }
})
export default useUserStore