<template>
<modal name="FilterModal" adaptive>
    <!-- <div class="modal-cart" > -->
    <!-- <div class="modal-cart__shadow"></div> -->
    <div class="modal__inner">
      <div class="modal__content  modal__content--filter">
        <h2 class="modal__title">{{title}}</h2>
        <button class="modal__close" type="button" v-on:click="hide"></button>
        <p class="modal__text">{{text}}</p>

        <button type="submit" class="btn  btn--modal" value="Ок" v-on:click="hide">Ок</button>
      </div>
    </div>
  <!-- </div> -->
  </modal>
</template>
<script>
    export default {
        name: 'FilterModal',
        // props: [ 'title', 'text' ],
        data () {
    return {
    title: 'Спасибо за заявку',
    text: 'Мы свяжемся с вами в ближайшее время',
    }
        },
        methods: {
            show: () => {
                this.$modal.show('FilterSecond');
            },
            hide: () => {
                this.$modal.hide('FilterSecond');
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";

.v--modal-box {
  width: 290px!important;
  margin: 0 autoimportant;
  height: auto!important;
}

.modal {
  position: relative;

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
}
.modal__content--filter {
  // display: block!important;
  padding-bottom: 25px;
  position: relative;
    // min-height: 656px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    min-width: 290px;
    z-index: 9999;

    box-shadow: 1px 1px 6px $cart-shadow;
    border-radius: 6px;
    background-color: $body-bg;

  @media (min-width: $screen-lg) {
      max-width: 570px;
      padding-left: 114px;
      padding-right: 114px;

      & .modal__close {
        left: 495px;
        top: 25px;
      }
    }
  & .modal__title {
    @media (min-width: $screen-md) {
      // max-width: 502px;
      padding-left: 114px;
      padding-right: 114px;
    }

    @media (min-width: $screen-lg) {
      padding: 0;
    }
  }

  & .modal__text {
    text-align: center;
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