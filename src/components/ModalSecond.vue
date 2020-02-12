<template>
    <div id="order" class="modal-cart">
    <div class="modal-cart__shadow"></div>
    <div class="modal-cart__inner">
      <div class="modal-cart__content  modal-cart__content--second">
        <h2 class="modal-cart__title">Спасибо за заявку</h2>
        <button class="modal-cart__close" type="button" v-on:click="closeModal"></button>
        <p class="modal-cart__text">Мы свяжемся с вами
          в ближайшее время</p>

        <button type="submit" class="btn  btn--modal" value="Ок" v-on:click="closeModal">Ок</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'ModalSecond',
        props: {
          // formData: Object
        },
        methods: {
            closeModal: () => {
                let modalSecond = document.querySelector('#order')
                let modalShadowS = document.querySelector('#order .modal-cart__shadow')
                modalShadowS.style.cssText = 'display:none'
                modalSecond.style.cssText = 'display:none'
                console.log('ok')
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";
.modal-cart__content--second {

  @media (min-width: $screen-lg) {
      max-width: 570px;
      padding-left: 114px;
      padding-right: 114px;

      & .modal-cart__close {
        left: 495px;
        top: 25px;
      }
    }
  & .modal-cart__title {
    @media (min-width: $screen-md) {
      max-width: 502px;
      padding-left: 114px;
      padding-right: 114px;
    }

    @media (min-width: $screen-lg) {
      padding: 0;
    }
  }

  & .modal-cart__text {
    @media (min-width: $screen-md) {
      max-width: 502px;
      padding-left: 95px;
      padding-right: 95px;
      margin-bottom: 50px;
    }

    @media (min-width: $screen-lg) {
      padding: 0;
    }
  }
}
</style>