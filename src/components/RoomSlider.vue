<template>
<div class="room-slider">
    <div class="room-slider__inner">
    <h3 class="room-slider__header">Номера</h3>
        <swiper :options="swiperOption" ref="swiperOption">
        <swiper-slide class="room-slider__item"  v-for='room in rooms' v-bind:key='room.id'>
            <div class="room-slider__item-wrap">
            <picture class="room-slider__item-img">
            <source media="(min-width: 1366px)" v-bind:srcset="'/' + room.img_desktop">
            <source media="(min-width: 768px)" v-bind:srcset="'/' + room.img_tablet">
            <img v-bind:src="'/' + room.img_mobile" v-bind:alt="room.img_mobile.slice(4)">
            </picture>
            <div class="room-slider__content">
            <h2 class="room-slider__title">{{room.title}}</h2>
                <ul class="list-bullet">
                <li v-for="(list, index) in room.lists" :key="index" >{{list}}</li>
                </ul>
            <a href="" class="btn  btn--slider" v-on:click.prevent="reserveRoom">Забронировать</a>
            </div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    </div>

</template>

<script>
// import carousel from 'vue-owl-carousel'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
name: 'RoomSlider',
components: {
    // carousel
    swiper,
    swiperSlide
},

data () {
    return {
    sliderValue: 3,
        swiperOption: {
    // effect: 'coverflow',
    // grabCursor: true,
    // centeredSlides: true,
    loop: true,
    // autoplay: true,
    slidesPerView: 1,
    pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
    breakpoints: {
            1800: {
            slidesPerView: 1,
            spaceBetween: 40
            },
            1170: {
            slidesPerView: 1,
            spaceBetween: 40
            },
            1024: {
            slidesPerView: 1,
            spaceBetween: 40
            },
            768: {
            slidesPerView: 1,
            spaceBetween: 10
            },
            320: {
            slidesPerView: 1,
            spaceBetween: 10
            },
            480: {
            slidesPerView: 1,
            spaceBetween: 10
            },
        }
        },
    rooms: [
        {
            id: 1,
            title: 'Эконом',
            lists: ['Площадь - 0,90 м2', 'Размеры (ШхГхВ) 90х100х180 см', 'Цена за сутки: 200₽'],
            img_mobile: 'img/room_01.png',
            img_tablet: 'img/room_01-tablet.png',
            img_desktop: 'img/room_01-desktop.png',
        },
        {
            id: 2,
            title: 'Эконом плюс',
            lists: ['Площадь - 1,13 м2', 'азмеры (ШхГхВ) 100х125х180 см', 'Цена за сутки: 250₽'],
            img_mobile: 'img/room_02.png',
            img_tablet: 'img/room_02-tablet.png',
            img_desktop: 'img/room_02-desktop.png',
        },
        {
            id: 3,
            title: 'Сьют',
            lists: ['Площадь - 1,56 м2', 'Размеры (ШхГхВ) 125х125х180 см', 'Цена за сутки: 350₽'],
            img_mobile: 'img/room_03.png',
            img_tablet: 'img/room_03-tablet.png',
            img_desktop: 'img/room_03-desktop.png',
        },
    ],
    }
},
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
    },
computed: {
    swiper() {
        return this.$refs.swiperOption.swiper
    }
},
mounted () {
    // console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(1, 2000, true)
}
}
</script>

<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";

.room-slider {
margin-top: -40px;
background: url("/img/fish-background.svg") no-repeat;
background-position-x: 75px;
background-position-y: 60px;

@media (min-width: $screen-md) {
    margin-top: 57px;
    background-size: 339px 109px;
    background-position-x: 48px;
    background-position-y: 59px;
}

@media (min-width: $screen-lg) {
    margin-top: 86px;
}

&__inner {
    @include container;
    // outline: 1px dotted #000000;
}

&__grid {

    @media (min-width: $screen-md) {
    margin-left: 0!important;
    margin-right: 0!important;
    }

    @media (min-width: $screen-lg) {
      // margin-left: auto;
      // margin-right: auto;
    }

}

&__header {
    font-family: $font-family--rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    padding-top: 22px;
    padding-bottom: 5px;

    @media (min-width: $screen-md) {
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    }
}

&__item {
    // @include col(xs, 12, $grid-columns, 0);
    // @include col(sm, 12, $grid-columns, 0); // SM (480 по умолчанию) — 6 из 12, промежутки 10px
    // @include col(md, 12, $grid-columns, 0);
    // @include col(lg, 12, $grid-columns, 0);
    display: flex;
    flex-direction: column;
    padding-bottom: 25px;
    // width: 287px;

    @media (min-width: $screen-md) {
    // width: 443px;
    max-height: 335px;
    }

    @media (min-width: $screen-lg) {
    // width: 600px;
    max-height: 415px;
    // margin-left: 100px;
    }
    // background-color: $border-color;
}

&__item-wrap {
    margin-left: 1px;
    box-shadow: 1px 1px 6px #d3d3d3;
    border-radius: 6px;
    padding-bottom: 15px;
    background-color: transparent!important;

    @media (min-width: $screen-md) {
    margin-left: -2px;
    box-shadow: none;
    position: relative;
    background-color: none!important;
      // max-height: 350px;
    }
}

&__item-img {
    @media (min-width: $screen-md) {
        margin-left: -200px;
    }

    @media (min-width: $screen-lg) {
        margin-left: -200px;
    }
}

&__title {
    font-family:$font-family--rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    padding-top: 3px;
    padding-left: 25px;
}

&__text {
    font-size: $font-family;
    font-weight: normal;
    font-size: 15px;
    line-height: 140%;
}

&__content {
    padding-left: 20px;

    @media (min-width: $screen-md) {
    position: absolute;
    left: 290px;
    top: 40px;
    width: 345px;
    box-shadow: 1px 1px 6px #d3d3d3;
    border-radius: 6px;
    padding: 20px;
    background-color: $body-bg;
    }

    @media (min-width: $screen-lg) {
    left: 600px;
    box-sizing: border-box;
    top: 60px;
    width: 500px;
    padding-top: 40px;
    padding-left: 0;
    padding-left: 100px;
    padding-bottom: 40px;
    padding-right: 117px;
    background-color: #fff;
    }
}
}

</style>