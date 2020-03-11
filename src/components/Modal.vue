<template>
  <div class="modal-cart  modal-cart--form">
    <div class="modal-cart__inner">
    <div class="modal-cart__shadow"></div>
    <!-- <div class="modal-cart__inner"> -->
      <!-- <form action=""> -->
        <div class="modal-cart__content  modal-cart__content--form">
        <form action="">
          <h2 class="modal-cart__title modal-cart__title--form">Забронировать номер</h2>
          <div class="fields-group  fields-group--modal">
            <label class="field-text  field-text--modal"
            :class="{ 'field-text--error': $v.name.$error}"
            >
              <div class="field-text__input-wrap">
                <input
                id="name"
                v-model.trim="$v.name.$model"
                class="field-text__input  field-text__input--modal" type="text" placeholder="Ваше имя" >
                <div class="error field-text__help-text" v-if="!$v.name.required">Поле обязательно</div>
                <div class="error field-text__help-text" v-if="!$v.name.minLength">Имя должно состоять как минимум из
                  {{$v.name.$params.minLength.min}} букв. Сейчас оно {{name.length}}</div>
              </div>
            </label>
            <label class="field-text  field-text--modal"
            :class="{ 'field-text--error': $v.petName.$error}"
            >
              <div class="field-text__input-wrap">
                <input
                id="petName"
                v-model.trim="$v.petName.$model"
                class="field-text__input  field-text__input--modal" type="text" placeholder="Имя питомца" >
                <div class="error field-text__help-text" v-if="!$v.petName.required">Поле обязательно</div>
                <div class="error field-text__help-text" v-if="!$v.petName.minLength">Имя должно состоять как минимум из
                  {{$v.petName.$params.minLength.min}} букв. Сейчас оно {{petName.length}}</div>
              </div>
            </label>
            <label class="field-text  field-text--modal"
            :class="{ 'field-text--error': $v.phone.$error}"
            >
              <div class="field-text__input-wrap">
                <input
                id="phone"
                v-model.trim="$v.phone.$model"
                class="field-text__input  field-text__input--modal" type="text" placeholder="Телефон">
                <div class="error field-text__help-text" v-if="!$v.petName.required">Поле обязательно</div>
                <div class="error field-text__help-text" v-if="!$v.petName.minLength">Имя должно состоять как минимум из
                  {{$v.petName.$params.minLength.min}} букв.</div>
              </div>
            </label>
            <label
            :class="{ 'field-text--error': $v.email.$error }"
            class="field-text  field-text--modal">
              <div class="field-text__input-wrap">
                <input class="field-text__input  field-text__input--modal"
                id="email"
                type="text"
                v-model.trim="email"
                :class = "{'field-text--error': ($v.email.$dirty && $v.email.required)}"
                placeholder="E-mail">
                <div class="error field-text__help-text" v-if="!$v.email.required">Поле обязательно</div>
                <div class="error field-text__help-text" v-if="!$v.email.email">Введите корректный email</div>
              </div>
            </label>
          </div>
          <div class="fields-group  fields-group--date">
            <p class="fields-group__header">Дата заезда</p>
            <div class="fields-group__wrap">
              <label
              :class="{ 'field-text--error': $v.dateFrom.$error }"
              class="field-text  field-text--date">
                <div class="field-text__name">c</div>
                <div class="field-text__input-wrap">
                  <!-- <input class="field-text__input  field-text__input--date" type="date" placeholder="26.01.2020" -->
                    <!-- required> -->
                    <Datepicker
                    id="dateFrom"
                    v-model.trim="$v.dateFrom.$model"
                    class=""
                    placeholder="26.01.2020"
                    />
                </div>
              </label>
              <label
              :class="{ 'field-text--error': $v.dateTo.$error }"
              class="field-text  field-text--date">
                <div class="field-text__name">по</div>
                <div class="field-text__input-wrap">
                  <!-- <input class="field-text__input  field-text__input--date" type="date" placeholder="26.02.2020"
                    required> -->
                    <Datepicker
                    id="dateTo"
                    v-model.trim="$v.dateTo.$model"
                    class=""
                    placeholder="26.02.2020"
                    />
                </div>
              </label>
            </div>
          </div>
          <button class="modal-cart__close" type="button"></button>
          <button
          v-on:click.prevent="onSubmit"
          type="submit" class="btn  btn--room" value="Ок"
          :disabled="submitStatus === 'PENDING'"
          >Отправить заявку</button>
          <p class="typo__p" v-if="submitStatus === 'OK'">Спасибо за заявку!</p>
          <p class="typo__p" v-if="submitStatus === 'ERROR'">Пожалуйста, заполните форму правильно.</p>
          <p class="typo__p" v-if="submitStatus === 'PENDING'">Отправка...</p>
          </form>
        </div>
      <!-- </form> -->
    </div>
    </div>


</template>

<script>
// import $ from 'jquery';
import { required, minLength, email } from 'vuelidate/lib/validators'
import Datepicker from 'vuejs-datepicker'
export default {
name: 'Modal',
components: {
    Datepicker
  },
data () {
  return {
  name: '',
  petName: '',
  email: '',
  phone: '',
  dateFrom: '',
  dateTo: '',
  submitStatus: null
  }
},
validations: {
    name: {
      required,
      minLength: minLength(6)
    },
    petName: {
      required,
      minLength: minLength(3)
    },
    email: {
      email,
      required,
    },
    phone: {
      required,
      minLength: minLength(10)
    },
    dateFrom: {
      required
    },
    dateTo : {
      required
    }
  },
methods: {
  onSubmit: function() {
    // let modal = document.querySelector('.modal-cart--form')
    // let modalShadow = document.querySelector('.modal-cart--form .modal-cart__shadow')
    // modalShadow.style.cssText = 'display:none'
    // modal.style.cssText = 'display:none'
    // // if (this.$router.path === '/rooms') {
    // this.$router.push('/')
    // }
  //   this.$v.$touch()
  //     if (this.$v.$invalid) {
  //       this.submitStatus = 'ERROR'
  //     } else {
  //       // do your submit logic here
  //       this.submitStatus = 'PENDING'
  //       setTimeout(() => {
  //         this.submitStatus = 'OK'
  //       }, 500)
  // }

  if (this.$v.$invalid) {
    this.$v.$touch()
    return
  } else {
  let formData = {
    name: this.name,
    petName: this.petName,
    email: this.email,
    phone: this.phone,
    dateFrom: this.dateFrom,
    dateTo: this.dateTo
  }
  console.log(formData)
    let modal = document.querySelector('.modal-cart--form')
    let modalShadow = document.querySelector('.modal-cart--form .modal-cart__shadow')
    modalShadow.style.cssText = 'display:none'
    modal.style.cssText = 'display:none'

        // setTimeout(() => {
        let modalSecond = document.querySelector('#order')
        let modalShadowS = document.querySelector('#order .modal-cart__shadow')
        let modalCloseS = document.querySelector('#order  .modal-cart__close')

        modalShadowS.style.cssText = 'display:block'
        modalSecond.style.cssText = 'display:block'
            modalCloseS.addEventListener('click', () => {
                modalShadowS.style.cssText = 'display:none';
                modalSecond.style.cssText = 'display:none';
            })
            //  }, 100)
  // this.$router.push('/')
  }
}
}
}

</script>

<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";

// .fields-group .btn, .fields-group select, .fields-group input {
//   border:0!important;
// }

.vdp-datepicker  input {
  border: 0!important;
  box-sizing: border-box;
  padding: 17px 0!important;
  padding-left: 10px!important;
  width: 107px!important;
  border-radius: 25px!important;
  border: 1px solid #E1E1E1!important;
}
.field-text--error .vdp-datepicker  input {
  background-color: #f9e2e2!important;
  border-color: #d8544f!important;
}

// form {
//   position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
// }

.modal-cart {
  // display: block;
  display: none;
  position: relative;
  // }

  &__inner {
    @include container;
  }

  &__close {
    border: 0;
    outline: 0;
    background-color: #ffffff;
    width: 21px;
    height: 21px;
    position: absolute;
    left: 260px;
    top: 10px;
    background: url("/img/menu-close.svg") no-repeat;

    @media (min-width: $screen-md) {
      left: 460px;
      top: 20px;
    }
    @media (min-width: $screen-lg) {
      left: 525px;
      top: 25px;
    }
  }

  &__shadow {
    // display: block;
    display: none;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // opacity: 0.85;
    // background-color: #ffffff;
    background: rgba(0, 0, 0, 0.2);
  }

  &__content {
    // overflow-y: auto;
    position: relative;
    // min-height: 656px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    max-width: 290px;
    z-index: 9999;
    position: fixed;
    top: 5%;
    // top: 30%;
    // left: 22%;
    box-shadow: 1px 1px 6px $cart-shadow;
    border-radius: 6px;
    background-color: $body-bg;

    &--form {
      // overflow-y: auto;
      padding-bottom: 30px;
      // min-height: 656px;
    }
    &--second {
      padding-bottom: 25px;
      min-height: 0!important;
    }

    & button {
      padding-left: 0;
    }

    @media (min-width: $screen-md) {
      overflow: none;
      min-height: 629px;
      max-width: 502px;
      top: 15%;
      left: 23%;
    }

    @media (min-width: 1000px) {
      min-height: 649px;
      max-width: 570px;
      left: 30%;
    }

    @media (min-width: $screen-lg) {
      min-height: 649px;
      max-width: 570px;
      left: 35%;
    }
  }

  &__content::before {
    position: absolute;
    content: "";
    background: url("/img/paw_modal_top.svg") no-repeat;
    width: 72px;
    height: 98px;
    left: 0;
    top: 0;
    z-index: 1000;
  }

  &__content--second::before {
    position: absolute;
    content: "";
    background: url("/img/paw_modal_bottom.svg") no-repeat;
    width: 93px;
    height: 80px;
    left: -12px;
    top: 196px;
    bottom: 0;
    z-index: 1000;
  }


  &__title {
    margin: 0;
    margin-top: 25px;
    font-family: $font-family--rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }

  &__title--form {
    padding-left: 50px;
    padding-right: 50px;
  }

  &__text {
    // display: block;
    padding-left: 60px;
    padding-right: 60px;
    font-family: $font-family;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
  }


}


</style>