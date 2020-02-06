<template>
<div id="swiper">
    <div class="slider__inner">
        <h2 class="slider__header">Отзывы</h2>
<swiper :options="swiperOption" ref="swiperOption">
    <!-- slides -->
    <swiper-slide v-for='review in reviews' v-bind:key='review.id' class="slider__item">
        <!-- <div  > -->
        <div class="slider__item-wrap">
            <p class="slider__text">{{review.text}}</p>
            <div class="slider__author">
            <span>
                {{review.author}}
            </span>
            <span>
                {{review.date}}
            </span>
            </div>
        <!-- </div> -->
        </div>
    </swiper-slide>
       <!-- Optional controls -->
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
</swiper>
<div class="swiper-pagination"  slot="pagination"></div>
</div>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
name: 'Slider',
// props: [ 'review' ],
components: {
    swiper,
    swiperSlide
},
data () {
    return {
    // sliderValue: 3,
    loading: '',
    swiperOption: {
    // effect: 'coverflow',
    // grabCursor: true,
    // centeredSlides: true,
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    breakpoints: {
            1800: {
            slidesPerView: 3,
            spaceBetween: 40
            },
            1170: {
            slidesPerView: 2,
            spaceBetween: 40
            },
            1024: {
            slidesPerView: 2,
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
    // swiperSlides: [1, 2, 3, 4, 5],
    reviews: [
        {
            id: 1,
            author: 'Валерия Гришаева',
            text: 'Первый раз пришлось оставить нашего котика в гостинице, очень переживали. Администратор Мария каждый день высылала нам фото нашего питомца, рассказывала, как он себя чувствует. И мы и котик остались очень довольны!',
            date: '15 ноября, 2019'
        },
        {
            id: 2,
            author: 'Екатерина Минаева',
            text: 'Гостиницу для питомцев нам посоветовали друзья. Они всегда оставляют здесь своего кота, когда уезжают. В “Котейке” очень хорошо заботятся о питомцах, в гостинице очень чисто. Всем рекомендую! Будем обращаться еще.',
            date: '10 октября, 2019'
        },
        {
            id: 3,
            author: 'Павел Нечаев',
            text: 'Мой кот — настоящая привереда, угодить ему сложно. У меня были особые требования куходу за ним, и “Котейка” отлично справились. Я часто наблюдал по видео за питомцем со своего телефона, это очень удобно.',
            date: '19 декабря, 2019'
        }
    ]
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";
// @import 'swiper/dist/css/swiper.css';

.swiper-pagination {
    position: relative;
}

.swiper-pagination-bullet {
    margin: 0 6px!important;
    width: 12px!important;
    height: 12px !important;
}

.swiper-pagination-bullet-active {
    background-color: $bullet-color;
}

.swiper-pagination-bullets {
    margin-top: 15px!important;
}

.slider {
@media (min-width: $screen-md) {
    margin-top: 100px;
}

margin-top: 60px;
min-height: 385px;
background: url("/img/paw-rotate.svg") no-repeat;
background-position-x: 290px;
background-position-y: -30px;

@media (min-width: $screen-md) {
    background-position-x: 575px;
    background-position-y: -30px;
    background-size: 300px 257px;
}


&__inner {
    @include container;
    // outline: 1px dotted #000000;
    padding-bottom: 30px;
}

&__header {
    font-family: $font-family--rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    text-align: center;

    @media (min-width: $screen-md) {
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    }
}

&__grid {
    // @include row;
    // margin: 0;
}

&__item {
    // @include col(xs, 12, $grid-columns, 0);
    // @include col(sm, 12, $grid-columns, 0);
    // @include col(md, 6, $grid-columns, 0);
    // @include col(lg, 4, $grid-columns, 0);

    @media (min-width: $screen-md) {
      // min-width: 442px!important;
      // height: 250px;
    padding-bottom: 15px;
    }
}

// &__item {
//     width: 290px;

//     @media (min-width: $screen-sm) {
//         width: 440px;
//     }

//     @media (min-width: $screen-md) {
//         width: 339px;
//     }
// }

&__item-wrap {
    position: relative;
    box-sizing: border-box;
    margin-left: 1px;
    margin-right: 3px;
    min-height: 223px;
    box-shadow: 1px 1px 6px #d3d3d3;
    border-radius: 6px;
    margin-bottom: 6px;
    background-color: $body-bg;

    @media (min-width: $screen-md) {
    padding-bottom: 15px;
    }
}

&__item-wrap::before {
    position: absolute;
    content: "";
    background: url("/img/quote.svg") no-repeat;
    width: 21px;
    height: 25px;
    left: 27px;
    top: 20px;
}

&__text {
    max-width: 215px;
    padding-top: 15px;
    padding-left: 56px;
    font-family: $font-family;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 140%;
}

&__author {
    display: none;

    @media (min-width: $screen-md) {
    display: flex;
    justify-content: space-around;
      // display: block;
    font-family: $font-family;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 120%;
    color: $author-color;
    }
}
}

</style>