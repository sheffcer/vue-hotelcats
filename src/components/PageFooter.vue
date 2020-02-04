<template>
<div class="page-footer">
    <div class="page-footer__inner">
    <div class="page-footer-wrap">
        <div class="logo  logo--footer">
        <a href="#">
            <img class="logo__img" src="img/logo.svg" alt="mobile-logo">
        </a>
        </div>
        <nav class="main-nav  main-nav--footer">
        <ul class="main-nav__list  main-nav__list--footer">
            <li class="main-nav__item">
            <a href="#features" class="main-nav__link  main-nav__link--footer">Почему мы? </a>
            </li>
            <li class="main-nav__item">
                <router-link to="/rooms" class="main-nav__link  main-nav__link--footer">Номера</router-link> 
            </li>
            <li class="main-nav__item">
            <a href="#rev" class="main-nav__link  main-nav__link--footer">Отзывы </a>
            </li>
            <li class="main-nav__item">
            <a href="#contacts"  class="main-nav__link  main-nav__link--footer">Контакты</a>
            </li>
        </ul>
        </nav>
    </div>
    <div class="page-footer__copyright">
        <p> <img src="img/copyrightsvg.svg"> 2019 Все права защищены</p>
        <p>Политика конфиденциальности</p>
    </div>
    </div>
</div>
</template>

<script>
// import PageHeader from '@/components/Social.vue'
export default {
name: 'PageFooter',
// components: {
//     Social
// }
}
</script>

<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";
.page-footer {

&__inner {
    @include container;
    // outline: 1px dotted #000000;
}

&-wrap {
    @media (min-width: $screen-md) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    }
}

&__copyright {
    position: relative;
    margin-top: 35px;
    // font-family: $font-family;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #8F8F8F;

    @media (min-width: $screen-md) {
    margin-top: 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    }

}

&__copyright::before {
    position: absolute;
    content: "";
    width: 320px;
    height: 1px;
    background-color: $border-color;
    top: -7px;
    left: -15px;

    @media (min-width: $screen-md) {
    width: 678px;
    left: 0;
    }

    @media (min-width: $screen-lg) {
    width: 1170px;
    }
}
}

</style>