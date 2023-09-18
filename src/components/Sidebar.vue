<script setup>

import useColorThemeStore from "@/stores/color-theme";
import useUserStore from "@/stores/user";
import {toRefs, ref, computed, onMounted} from "vue";
import user from "@/stores/user";

/*--данные из useColorThemeStore-->>>>*/
const colorThemeStore = useColorThemeStore() // хук по смене цвета темы сайта
const {changeColorTheme, colorTheme} = toRefs(colorThemeStore)
const toggleStyle = computed(() => [  // динамический стиль кнопки смены темы
  {'header__button_dark': colorTheme.value === 'dark-theme'},
])
/*--данные из useColorThemeStore--<<<<*/

/*--данные из useEmployeeStore-->>>>*/
const employeeStore = useUserStore()
const {
  users, trainingAndCertification,
  certificationThrough,
  testProgress,
  getBarGradient,
  totalNumberOfTests
} = toRefs(employeeStore)

const getColorDiagram = (it) => {  // получение цвета в зависимости от данных со store (trainingAndCertification)
  return ['training__circle',
    {'training__circle_blue': it.colors === null}, {'training__circle_orange': it.colors === false},
    {'training__circle_green': it.colors === true}
  ]
}
/*--данные из useEmployeeStore--<<<<*/

/*--отображение даты-->>>>*/
const currentData = ref('') // Дата
const currentTime = ref('') // Время
onMounted(() => {
  const updateDataTime = () => {  // обновление даты и время
    const currentDataTime = new Date()
    currentData.value = currentDataTime.toLocaleDateString()
    currentTime.value = currentDataTime.toLocaleTimeString()
  }
  updateDataTime()
  setInterval(updateDataTime, 1000)
})
/*--отображение даты--<<<<*/

/*LOGIN >>>*/
const userName = ref('') // ввод ФИО для логина, в данном случае Моисеев Михал Сергеевич
const password = ref('') // ввод пароля для логина, в данном случае 12345678

function login(user) { // функция чтобы залогиница
  if (userName.value === user.name && password.value === user.password) {
    user.logged = !user.logged
  }
  userName.value = ''
  password.value = ''
}

function logUot(user) { // функция чтобы разлогиниться
  user.logged = !user.logged
}

/*LOGIN <<<*/

const gradient = `linear-gradient(to right, #00ff00 ${testProgress}%, #ffffff ${testProgress}%, #ffffff 100%)`
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__header header">
      <!--data-->
      <div class="header__date">
        <div>{{ currentData }}</div>
        <div>{{ currentTime }}</div>
      </div>
      <!--data-->

      <!--logout-->
      <div class="header__login" v-for="user in users" v-show="user.logged === false">
        <input type="text" v-model="userName" placeholder="ФИО">
        <input type="password" v-model="password" placeholder="Введите пароль">
        <button class="header__button-login" @click="login(user)">Войти</button>
      </div>

      <div @click="logUot(user)" class="header__logout" v-for="user in users" v-show="user.logged === true">
        <p>Выход</p>
        <div class="header__icon">
          <span class="material-icons">logout</span>
        </div>
      </div>
      <!--logout-->

      <!--button-->
      <div class="header__button" @click="changeColorTheme">
        <div :class="toggleStyle">
          <div v-if="colorTheme === 'dark-theme'" class="header__button-slider"></div>
          <div v-if="colorTheme === 'light-theme'" class="header__button-slider_black"></div>
        </div>
      </div>
    </div>
    <!--button-->

    <div class="sidebar__content">
      <!--about-person-->
      <div v-show="user.logged === true" class="sidebar__about-person about-person" v-for="(user, index) in users"
           :key="index">
        <div class="about-person__name">
          <h3>{{ user.name }}</h3>
        </div>
        <div class="about-person__age"><b>{{ user.age }}</b></div>
        <div class="about-person__personnel-umber">
          <p>Таб №: ГОКИ {{ user.personnelNumber }}</p>
        </div>
        <div class="about-person__position">{{ user.position }}</div>
      </div>

      <div v-show="user.logged === false" class="sidebar__about-person about-person" v-for="(user, index) in users"
           :key="index">
        <div class="about-person__name">
          <h3> xxx </h3>
        </div>
        <div class="about-person__age"><b>xxx </b></div>
        <div class="about-person__personnel-umber">
          <p>Таб №: ГОКИ xxx </p>
        </div>
        <div class="about-person__position"> xxx</div>
      </div>
      <!--about-person-->

      <!--training   >>>>>-->
      <div class="sidebar__training training">
        <!-- training instructions >>>>>-->

        <div class="training__container">
          <div class="training__card">
            <div class="training__card-title">
              <h3>{{ trainingAndCertification[0].title }}</h3>
            </div>
            <div class="training__circle" :class="getColorDiagram(trainingAndCertification[0])">
              <div class="training__card-diagram">
                <div class="training__card-diagram_test">
                  <img :src="trainingAndCertification[0].url" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- training instructions <<<<<-->

        <!-- training examiner >>>>>-->

        <div class="training__container">
          <div class="training__card">
            <div class="training__card-title">
              <h3>{{ trainingAndCertification[1].title }}</h3>
            </div>
            <div class="training__circle" :class="getColorDiagram(trainingAndCertification[1])">
              <div class="training__card-diagram">
                <div class="training__card-diagram_test">
                  <img :src="trainingAndCertification[1].url" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- training examiner <<<<<-->

        <!--training tests-->

        <div class="training__container">
          <div class="training__card">
            <div class="training__card-title">
              <h3>{{ trainingAndCertification[2].title }}</h3>
            </div>
            <div class="training__circle" :style="testProgress">
              <div class="training__card-diagram">
                <div class="training__card-diagram_test">
                  {{ totalNumberOfTests.passedTests }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--training tests---<<<<<-->
        <!--training certification >>>>>>-->


        <div class="training__container">
          <div class="training__card">
            <div class="training__card-title">
              <h3>{{ trainingAndCertification[3].title }}</h3>
            </div>
            <div class="training__circle"
                 :class="[{'training__circle_green': certificationThrough > 30}, {'training__circle_orange': certificationThrough < 30}]">
              <div class="training__card-diagram">
                <div class="training__card-diagram_days">
                  {{ certificationThrough }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--training certification---<<<<<-->
    </div>
    <!--training   <<<<<<-->
  </aside>


</template>

<style scoped lang="scss">
@import "@/assets/scss/main";

.sidebar {
  padding: 2rem;
  /*header >>*/
  .header {
    display: flex;
    justify-content: space-between;
    position: relative;

    &__date {
      @media screen and (min-width: 3840px) {
        font-size: 2.1rem;
      }
      @media screen and (min-width: 1920px) and (max-width: 3839px) {
        font-size: 1.5rem;
      }

    }

    &__login {
      display: flex;
      gap: 0.625rem;
      height: 1.25rem;
      @media screen and (min-width: 3840px) {
        display: flex;
        flex-direction: column;
        font-size: 1.7rem;
      }
      @media screen and (min-width: 1920px) and (max-width: 3839px) {
        font-size: 1.3rem;
        display: flex;
        flex-direction: column;
      }

    }

    &__button-login {
      color: white;

    }

    &__logout {
      display: flex;
      cursor: pointer;
      @media screen and (min-width: 1920px) and (max-width: 3839px) {
        font-size: 1.6rem;
      }
    }

    &__icon {
      margin-left: 0.625rem;
      @media screen and (min-width: 1920px) and (max-width: 3839px) {
        font-size: 2rem;
      }
    }

    &__button {
      width: 2.8125rem;
      height: 1.25rem;
      background-color: $bg-sidebar_dark;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: start;
      text-align: center;
      position: absolute;
      top: 3.125rem;
      left: 33.125rem;
      cursor: pointer;
      @media screen and (min-width: 3840px) {
        top: 9rem;
      }
      @media screen and (min-width: 1920px) and (max-width: 3839px) {
        top: 8rem;
      }

    }

    &__button_dark {
      background-color: $bg-sidebar_light;
      width: 2.8125rem;
      height: 1.25rem;
      border-radius: 1rem;

    }

    &__button-slider {
      width: 1.25rem;
      height: 1.25rem;
      background-color: #000000;
      border-radius: 50%;
      top: 0;
      left: 0;

    }

    &__button-slider_black {
      width: 1.25rem;
      height: 1.25rem;
      background-color: #ffffff;
      border-radius: 50%;
      top: 0;
      left: 0;
      transform: translateX(2.5rem - 0.9375rem);

    }

  }

  /*header <<*/
  &__content {

  }

  &__about-person {
    margin-top: 6.25rem;
    @media screen and (min-width: 1920px) and (max-width: 3839px) {
      font-size: 1.5em;
    }
  }

  /*about-person >>*/
  .about-person {
    display: flex;
    background-color: $bg-content_dark;
    flex-direction: column;
    width: 100%;
    padding: 0.625rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 1);
    border-radius: 0.3125rem;
    margin-bottom: 2.5rem;

    &__name {
      font-size: 1.5rem;
      @media screen and (min-width: 3840px) {
        font-size: 2.5rem;
      }
      @media screen and (min-width: 1920px) and (max-width: 3839px) {
        font-size: 1.5em;
      }


    }

    &__age {
      font-size: 1.125rem;
      @media screen and (min-width: 3840px) {
        font-size: 2.5rem;
      }
      @media screen and (min-width: 1920px) and (max-width: 3839px) {
        font-size: 1.2em;
      }
    }

    &__position {
      line-height: 1rem;
      @media screen and (min-width: 1920px) and (max-width: 3839px) {
        font-size: 1.8rem;
        line-height: 2rem;
      }
    }
  }

  /*about-person <<*/
  &__training {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    justify-content: space-between;

  }

  /*training >>*/
  .training {

    &__container {
      display: flex;
      background-color: $bg-content_dark;

    }

    &__card {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 1);
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 15.625em;
      height: 15.625em;
      padding: 0.9375rem;
      align-items: center;
      text-align: center;
      justify-content: center;
      @media screen and (min-width: 1920px) and (max-width: 3839px) {
        width: 20.625em;
        height: 23.625em;

      }

    }

    &__card-diagram_test, &__card-diagram_days, {
      z-index: 2;
      position: absolute;
      font-size: 36px;
      top: 2.25rem;
      left: 2.6875rem;
    }

    &__circle {
      background-color: $bg-sidebar_dark;
      width: 9.375rem;
      height: 9.375rem;
      border-radius: 50%;
      position: relative;

      &:before {
        content: '';
        width: 8.125rem;
        height: 8.125rem;
        background-color: $bg-content_dark;
        position: absolute;
        border-radius: 50%;
        top: 0.625rem;
        left: 0.625rem;
      }
    }

    &__circle_orange {
      background-color: #EF7F1A;
    }

    &__circle_green {
      background-color: #4dcb2a;
    }

    &__card-title {
      line-height: 1.25rem;
      margin-bottom: 1.25rem;
      @media screen and (min-width: 1920px) and (max-width: 3839px) {
        line-height: 1.5rem;
        margin-bottom: 4.6rem;
        font-size: 1.8rem;
      }

    }

    &__card-diagram {
    }

    &__card-img {
      position: absolute;
      z-index: 2;
      top: 2.125rem;
      left: 2.875rem;
    }
  }

  /*training <<*/
}
</style>
