import {defineStore} from "pinia";
import {reactive} from "vue";


const useUserStore = defineStore('employee', () => {
    const user = reactive({
        name: 'Моисеев Михал Сергеевич',
        age: '13.08.1980',
        personnelNumber: '0000',
        position: 'Электрослесарь (слесарь дежурный по ремонту оборудования) I разряда'
    })

    const trainingAndCertification = reactive({
        instruction: {
            title: 'Инструктаж',
            img: 'img',
            colors: {
                '#56698f': null,
                '#EF7F1A': false,
                '#B2D63C': true
            }
        },
        examiner: {
            title: 'Предсменный экзаменатор',
            img: 'img',
            colors: {
                '#56698f': null,
                '#EF7F1A': false,
                '#B2D63C': true
            }
        },
        test: {
            title: 'Тестов выполнено',
            img: 'img',
            colors: {
                '#56698f': null,
                '#EF7F1A': false,
                '#B2D63C': true
            },
            tests: 122
        },
        certification: {
            title: 'Аттестация через',
            img: 'img',
            colors: {
                '#56698f': null,
                '#EF7F1A': false,
                '#B2D63C': true
            },
            days: 1825
        },

    })
    return {
        user,
        trainingAndCertification
    }
})
export default useUserStore