<template>
<div class="banner">
    <div class="banner__inner">
    <div class="banner__grid">
        <div class="banner__item">
        <p class="banner__description">Каждый 7-й день</p>
        <h2 class="banner__header">бесплатно!</h2>
        <p class="banner__text">Акция действует при размещении в номерах “Люкс” и “Супер-Люкс”</p>
        <a href="#" class="btn  btn--intro" v-on:click.prevent="reserveRoom">Забронировать</a>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
name: 'Banner',
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

.banner {
margin-bottom: 50px;

&__inner {
    @include container;
    background: url("/img/banner-mobile.png") no-repeat center top;
    min-height: 497px;

    @media (min-width: $screen-md) {
    background: url("/img/banner-tablet.png") no-repeat center top;
    min-height: 359px;
    }

    @media (min-width: $screen-lg) {
    background: url("/img/banner-desktop.png") no-repeat center top;
    min-height: 379px;
    }
}

&__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    // min-height: 200px;
    padding-top: 45px;
    // outline: 1px dotted red;
    @media (min-width: $screen-md) {
    padding-top: 69px;
    padding-left: 50px;
    align-items: flex-start;
    }

    @media (min-width: $screen-lg) {
    padding-top: 78px;
    padding-left: 270px;
    }
}

&__item .btn--intro {
    margin-top: 20px;

    @media (min-width: $screen-md) {
    margin: 0;
    margin-top: 20px;
    }
}

&__header {
    padding: 0;
    margin: 0;
    font-family: $font-family--rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 37px;
    line-height: 44px;

    @media (min-width: $screen-md) {
    font-size: 56px;
    line-height: 66px;
    }
}

&__description {
    padding: 0;
    margin: 0;
    font-family: $font-family--rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;

    @media (min-width: $screen-md) {
    font-size: 36px;
    line-height: 43px;
    }
}

&__text {
    padding: 0;
    margin: 0;
    text-align: center;
    font-family: $font-family;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 140%;

    @media (min-width: $screen-md) {
    font-size: 15px;
    line-height: 140%;
    max-width: 240px;
    }
}
}

</style>