<template>
<div id="contacts" class="contacts">
    <div class="contacts__inner">
    <h2 class="contacts__title">Как нас найти</h2>
    <div class="contacts__grid">
        <div class="contacts__wrapper">
        <div class="contacts__adress">
            <div class="contacts__item">
            <p class="contacts__subtitle">Адрес</p>
            <p class="contacts__text">Санкт-Петербург,<br>
                ул Большая Конюшенная, д 19</p>
            </div>
            <div class="contacts__contact-item">
            <p class="contacts__subtitle">Режим работы</p>
            <p class="contacts__text">Ежедневно, с 9:00 до 20:00</p>
            </div>
            <div class="contacts__contact-item">
            <p class="contacts__subtitle">Телефон</p>
            <p class="contacts__text">8 (800) 333-55-99</p>
            </div>
            <div class="contacts__contact-item">
            <p class="contacts__subtitle">E-mail</p>
            <p class="contacts__text">info@cat-hotel.ru</p>
            </div>
        </div>
        <div class="contacts__social">
            <p class="contacts__social__subtitle">Социальные сети</p>
            <ul class="social">
            <li class="social__link-wrap social__link-wrap--fb">
                <a href="" class="social__link">
                <img src="img/fb.svg" alt="facebook">
                </a>
            </li>
            <li class="social__link-wrap social__link-wrap--instagram">
                <a href="" class="social__link">
                <img src="img/instagram.svg" alt="instagram">
                </a>
            </li>
            <li class="social__link-wrap social__link-wrap--vk">
                <a href="" class="social__link">
                <img src="img/vk.svg" alt="vk">
                </a>
            </li>
            </ul>
        </div>
        </div>
        <div class="contacts__map">
        <picture class="contacts__map-img">
            <source media="(min-width: 1366px)" srcset="img/map-desktop.jpg">
            <source media="(min-width: 768px)" srcset="img/map-tablet.jpg">
            <img src="img/map-mobile.jpg" alt="map">
        </picture>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
name: 'Contacts',
props: {
    msg: String
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";

.contacts {

@media (min-width: $screen-md) {
    margin-top: 60px;
}

&__inner {
    @include container;
    // outline: 1px dotted #000000;
    background-color: $bullet-color;
}

&__grid {
    display: block;

    @media (min-width: $screen-md) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    }

}

&__adress {
    margin-top: 30px;

    @media (min-width: $screen-md) {
    margin-top: 0;
    }
}

&__social {
    margin-top: 26px;
    margin-bottom: 35px;
}

&__social .social {
    padding-left: 0;
    margin-top: -10px;
    margin-left: -5px;
}

&__map {

    @media (min-width: $screen-md) {
    margin: 0;
    margin-top: -90px;
    width: auto;
    height: auto;
    margin-bottom: -4px;
    }

margin-top: 35px;
min-height: 300px;
width: 320px;
height: 300px;
margin-left: -15px;
}

&__map-img {
@media (min-width: $screen-md) {
    margin: 0;
    left: 15px;
}

position: relative;
display: block;
}

&__map-img::before {
position: absolute;
content: "";
background: url("/img/marker.svg") no-repeat;
width: 56px;
height: 69px;
top: 100px;
left: 130px;
}

&__title {
padding-top: 33px;
font-family: $font-family--rubik;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 33px;
}

&__subtitle {
font-family: $font-family;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 18px;
}

&__text {
font-family: $font-family;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 18px;
}
}

</style>