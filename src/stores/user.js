import {defineStore} from "pinia";
import {computed, reactive} from "vue";


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
    const totalNumberOfTests = reactive({
        total: 500,
        passedTests: 122

    })
    const getBarGradient = (total, passed) => {
        const percentage = Math.floor(total/passed)*100
        return `linear-gradient(to right, green ${percentage}%,lightgray ${percentage}%)`
    }
    const testProgress = computed(() => {
        return {
            background: getBarGradient(totalNumberOfTests.total, totalNumberOfTests.passedTests)
        }
    })

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
        certificationThrough,
        testProgress,
        totalNumberOfTests,
        getBarGradient
    }
})
export default useUserStore