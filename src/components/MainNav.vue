<template>
        <nav class="main-nav">
        <ul class="main-nav__list">
            <li class="main-nav__item">
            <a href="#features" class="main-nav__link">Почему мы? </a>
            </li>
            <li class="main-nav__item">
                <router-link to="/rooms" class="main-nav__link">Номера</router-link> 
            </li>
            <li class="main-nav__item">
            <a href="#rev" class="main-nav__link">Отзывы </a>
            </li>
            <li class="main-nav__item">
            <router-link to="#contacts"  class="main-nav__link">Контакты</router-link>
            </li>
        </ul>
        </nav>
</template>

<script>
export default {
name: 'MainNav',
}
</script>

<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";

.main-nav {
position: relative;
z-index: 10;
margin-top: 27px;
  // margin-left: -5px;

@media (min-width: $screen-md) {
    margin-top: 22px;
    margin-left: 10px;
    margin-right: 0;
}

  // первый уровень
&__list {
    // display: none;
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: left;

    @media (min-width: $screen-md) {
    display: flex;
    min-width: 430px;
    }
}

&__list--footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 235px;
}

&__list--footer .main-nav__item {
    min-width: 104px;
}

&__item {
    position: relative;
}

&__item--footer {
min-width: 104px;
}

&__link {
    display: block;
    padding: 0.4em 1em;
    text-decoration: none;
    // background-color: #fff;
    font-style: $font-family--rubik;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: $text-color;

    &:hover,
    &:focus {
    text-decoration: none;
    background-color: $gray-lightest;
    }

    @media (min-width: $screen-md) {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    }

}

&__link--footer {
    padding: .4em .2em;
    font-family: $font-family;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
}

&--footer {
    margin-top: 12px;
}


  // переключатель

&__toggle {
    position: absolute;
    content: "";
    background: url('/img/menu-open.svg') no-repeat;
    padding: 0;
    top: -30px;
    left: 267px;
    width: 24px;
    height: 19px;
    // background-size: 22px  14px;
    border: none;
    z-index: 1;
}
}

.navbar {
display: none;
  // position: fixed;
position: absolute;
width: 320px;
background-color: $bullet-color!important;
  // transform: translateX(50%);
margin-left: -15px;
padding-top: 60px;
z-index: 100;
transition: transform 250ms cubic-bezier(.5, 0, .5, 1);
padding-bottom: 162px;

@media (min-width: $screen-md) {
    display: block;
    position: static;
    min-width: 430px;
    width: auto;
    margin: 0;
    padding: 0;
    background-color: $background-color!important;
}
}

.nav-open .navbar{
  // background: red!important;
transform: translateX(0);
display: block;

}
.nav-open .hamburger{
  // background: red!important;
background: url('/img/menu-close.svg') no-repeat!important;
width: 14px;
height: 14px;
top: 1px;
left: -5px;
position: absolute;
content: "";

}
.nav-toggle {
position: relative;
cursor: pointer;
width: 24px;
height: 19px;
margin-top: 23px;
margin-left: -5px;
border: none;
background-color: transparent;
z-index: 1000;
@media (min-width: $screen-md) {
    display: none;
}



& .hamburger {
    top: 1px;
    left: -5px;
    position: absolute;
    content: "";
    background: url('/img/menu-open.svg') no-repeat;
    padding: 0;
    // top: -30px;
    // left: 267px;
    width: 24px;
    height: 19px;
    // background-size: 22px  14px;
    border: none;
    z-index: 1;
    left: 0;
    // cursor: pointer;
}
}

</style>