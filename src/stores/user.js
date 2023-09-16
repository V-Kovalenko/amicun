import {defineStore} from "pinia";
import {computed, onMounted, reactive, ref} from "vue";


const useUserStore = defineStore('employee', () => {
    const users = reactive([{
        name: 'Моисеев Михал Сергеевич',
        age: '13.08.1980',
        personnelNumber: '0000',
        position: 'Электрослесарь (слесарь дежурный по ремонту оборудования) I разряда',
        password: '12345678',
        logged: false
    }])
// отчет до окончания аттестации
//     const certificationThrough = 111
    const certificationThrough = ref(1825)
    onMounted(() => {
        const countdownToCertification = () =>{
                certificationThrough.value = certificationThrough.value - 1
        }
        countdownToCertification()
        setInterval(countdownToCertification, 86400)
    })


    /*----for sidebar - пройденные тесты >>>>>*/
    const totalNumberOfTests = reactive({  //init данные для тестов
        total: 500,
        passedTests: 322

    })
    const getBarGradient = (total, passed) => { // получение процентного соотношения и линии градиента в зависимости от процента
        const percentage = Math.floor((passed/total)*100)
        return `linear-gradient(to left, green ${percentage}%,lightgray ${percentage}%)`
    }
    const testProgress = computed(() => {  //вычисляемое свойство для пройденных тестов
        return {                                                                        // для динамического style
            background: getBarGradient(totalNumberOfTests.total, totalNumberOfTests.passedTests)
        }
    })
    /*------for sidebar - пройденные тесты <<<<<*/

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