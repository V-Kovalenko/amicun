<script setup>

import useColorThemeStore from "@/stores/color-theme";
import useUserStore from "@/stores/user";
import {toRefs, ref, computed, onMounted} from "vue";

/*--данные из useColorThemeStore-->>>>*/
const colorThemeStore = useColorThemeStore() // хук по смене цвета темы сайта
const {changeColorTheme, colorTheme} = toRefs(colorThemeStore)
const toggleStyle = computed(() => [  // динамический стиль кнопки смены темы
  {'header__button_dark': colorTheme.value === 'dark-theme'},
])
/*--данные из useColorThemeStore--<<<<*/

/*--данные из useEmployeeStore-->>>>*/
const employeeStore = useUserStore()
const {users, trainingAndCertification, certificationThrough} = toRefs(employeeStore)
const diagramStyles = computed(() => ['training__circle',
  {'training__circle_blue': trainingAndCertification.value.colors === null},{'training__circle_orange': trainingAndCertification.value.colors === false},
    {'training__circle_green': trainingAndCertification.value.colors === true}
])
const fun = (it) => {
    return ['training__circle',
      {'training__circle_blue': it.colors === null},{'training__circle_orange': it.colors === false},
      {'training__circle_green': it.colors === true}
    ]
}
console.log('diagramStyles: ', diagramStyles)
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
      <div class="header__logout">
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
      <div class="sidebar__about-person about-person" v-for="(user, index) in users" :key="index">
        <div class="about-person__name">
          <h3>{{ user.name }}</h3>
        </div>
        <div class="about-person__age"><b>{{ user.age }}</b></div>
        <div class="about-person__personnel-umber">
          <p>Таб №: ГОКИ {{ user.personnelNumber }}</p>
        </div>
        <div class="about-person__position">{{ user.position }}</div>
      </div>
      <!--about-person-->

      <!--training-->
      <div class="sidebar__training training">
        <div class="training__container" v-for="(item, index) in trainingAndCertification" :key="index">
          <div class="training__card">

              <div class="training__card-title">
                <h3>{{ item.title }}</h3>
              </div>
            <div :class="fun(item)">
              <div class="training__card-diagram">
                <img class="training__card-img"
                     :src="item.url"
                     alt="img"
                      v-show="item.title === 'Инструктаж' || item.title === 'Предсменный экзаменатор'"
                />
                <span class="training__card-diagram_test" v-show="item.title === 'Тестов выполнено'">{{item.tests}}</span>
                <span class="training__card-diagram_days" v-show="item.title === 'Аттестация через'">{{certificationThrough}}</span>
              </div>
            </div>

          </div>
        </div>


      </div>
      <!--training-->
    </div>
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

    }

    &__logout {
      display: flex;
    }

    &__icon {
      margin-left: 10px;
    }

    &__button {
      width: 45px;
      height: 20px;
      background-color: $bg-sidebar_dark;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: start;
      text-align: center;
      position: absolute;
      top: 50px;
      left: 530px;
    }

    &__button_dark {
      background-color: $bg-sidebar_light;
      width: 45px;
      height: 20px;
      border-radius: 1rem;

    }

    &__button-slider {
      width: 20px;
      height: 20px;
      background-color: #000000;
      border-radius: 50%;
      top: 0;
      left: 0;
    }

    &__button-slider_black {
      width: 20px;
      height: 20px;
      background-color: #ffffff;
      border-radius: 50%;
      top: 0;
      left: 0;
      transform: translateX(40px - 15px);
    }

  }

  /*header <<*/
  &__content {

  }

  &__about-person {
    margin-top: 100px;
  }

  /*about-person >>*/
  .about-person {
    display: flex;
    background-color: $bg-content_dark;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 1);
    border-radius: 5px;
    margin-bottom: 40px;

    &__name {
      font-size: 24px;

    }

    &__age {
      font-size: 18px;
    }

    &__personnel-umber {

    }

    &__position {
      line-height: 16px;
    }
  }

  /*about-person <<*/
  &__training {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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
      width: 250px;
      height: 250px;
      padding: 15px;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
    &__card-diagram_test, &__card-diagram_days{
      z-index: 2;
      position: absolute;
      font-size: 36px;
      top: 48px;
      left: 43px;
    }

    &__circle {
      background-color: $bg-sidebar_dark;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      position: relative;
      &:before {
        content: '';
        width: 130px;
        height: 130px;
        background-color: $bg-content_dark;
        position: absolute;
        border-radius: 50%;
        top: 10px;
        left: 10px;
      }
    }
    &__circle_orange {
      background-color: #EF7F1A;
    }
    &__circle_green {
      background-color: #4dcb2a;
    }

    &__card-title {
      line-height: 20px;
      margin-bottom: 20px;
    }

    &__card-diagram {

    }
    &__card-img {
      position: absolute;
      z-index: 2 ;
      top: 34px;
      left: 46px;
    }
  }

  /*training <<*/
}
</style>
<!--&lt;!&ndash; examiner&ndash;&gt;-->
<!--<div class="training__examiner">-->
<!--<div class="training__examiner-title">-->
<!--  <h3>Предсменный экзаменатор</h3>-->
<!--  <div class="training__examiner-diagram">-->
<!--    diagram-->
<!--  </div>-->
<!--</div>-->
<!--</div>-->
<!--&lt;!&ndash; examiner&ndash;&gt;-->

<!--&lt;!&ndash; tests completed&ndash;&gt;-->
<!--<div class="training__test">-->
<!--<div class="training__test-title">-->
<!--  <h3>Тестов выполнено</h3>-->
<!--  <div class="training__test-diagram">-->
<!--    diagram-->
<!--  </div>-->
<!--</div>-->
<!--</div>-->
<!--&lt;!&ndash; tests completed&ndash;&gt;-->

<!--&lt;!&ndash; certification&ndash;&gt;-->
<!--<div class="training__certification">-->
<!--<div class="training__certification-title">-->
<!--  <h3>Аттестация через</h3>-->
<!--  <div class="training__certification-diagram">-->
<!--    diagram-->
<!--  </div>-->
<!--</div>-->
<!--</div>-->
<!--&lt;!&ndash; certification&ndash;&gt;-->