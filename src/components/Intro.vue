<template>
    <div class="intro">
    <div class="intro__inner">
      <p class="intro__text">Санкт-Петербург</p>
      <h1 class="intro__title">Котейка</h1>
      <p class="intro__description">Уютная гостиница для котов и кошек</p>
      <a href="#" class="btn  btn--intro" v-on:click.prevent="reserveRoom">Забронировать</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  methods: {
    reserveRoom: () => {
        let modal = document.querySelector('.modal-cart--form')
        let modalShadow = document.querySelector('.modal-cart--form .modal-cart__shadow')
        let modalClose = document.querySelector('.modal-cart--form .modal-cart__close')

         modalShadow.style.cssText = 'display:block'
         modal.style.cssText = 'display:block'
            modalClose.addEventListener('click', () => {
                modalShadow.style.cssText = 'display:none';
                modal.style.cssText = 'display:none';
            })
        }
    }

}
</script>

<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";

.intro {
  background: url('/img/intro-mobile.jpg') no-repeat center top;

  @media (min-width: $screen-md) {
    background: url('/img/intro-tablet.jpg') no-repeat center top;
  }

  @media (min-width: $screen-lg) {
    background: url('/img/intro-desktop.jpg') no-repeat center top;
  }

  &__inner {
    @include container;
    // outline: 1px dotted #000000;
    min-height: 457px;
    display: flex;
    flex-direction: column;

    @media (min-width: $screen-md) {
      padding-bottom: 410px;
    }

    @media (min-width: $screen-lg) {
      padding-bottom: 46px;
    }
  }

  &__text {
    padding-top: 35px;
    font-family: $font-family;
    font-size: rem(12px);
    line-height: rem(14px);
    text-align: center;
    color: $text-color;

    @media (min-width: $screen-md) {
    padding-top: 125px;
    }

    @media (min-width: $screen-lg) {
      padding-top: 140px;
      text-align: left;
      padding-left: 100px;
    }
  }

  &__title {
    padding: 0;
    margin: 0;
    margin: -15px;
    font-family: $font-family--rubik;
    font-size: rem(44px);
    line-height: rem(52px);
    color: $text-color;
    text-align: center;

    @media (min-width: $screen-md) {
      font-size: 62px;
      line-height: 73px;
    }

    @media (min-width: $screen-lg) {
      font-weight: 600;
      text-align: left;
      padding-left: 117px;
    }
  }

  &__description {
    margin-top: 20px;
    min-width: 277px;
    font-family: $font-family;
    font-weight: 500;
    font-size: 16px;
    line-height: rem(19px);
    color: $text-color;
    text-align: center;

    @media (min-width: $screen-md) {
      font-size: 20px;
      line-height: 24px;
    }

    @media (min-width: $screen-lg) {
      // font-weight: 600;
      text-align: left;
      padding-left: 100px;
    }
  }
}

</style>
