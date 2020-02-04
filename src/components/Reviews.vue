<template>
<div id="rev" class="review">
    <div class="review__inner">
    <h2 class="review__header">Отзывы</h2>

        <carousel loading: true
        class="owl-carousel owl-theme review__grid"
        :autoplay="true" :nav="false"
        :responsive="{0:{items:1,nav:false},320:{items:1,nav:false},768:{items:2,nav:true}, 1170:{items:3,nav:true}}"
        >
        <div class="review__item" v-for='review in reviews' v-bind:key='review.id'>
        <div class="review__item-wrap">
            <p class="review__text">{{review.text}}</p>
            <div class="review__author">
            <span>
                {{review.author}}
            </span>
            <span>
                {{review.date}}
            </span>
            </div>
        </div>
        </div>


        </carousel>
</div>
</div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
name: 'Reviews',
components: {
    carousel
},

data () {
    return {
    sliderValue: 3,
    loading: true,
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
    ],
    }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";

.review {
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
    @include row;
    margin: 0;
}

&__item {
    @include col(xs, 12, $grid-columns, 0); // малые ширины — 12 из 12, промежутки по умолчанию
    @include col(sm, 12, $grid-columns, 0); // SM (480 по умолчанию) — 6 из 12, промежутки 10px
    @include col(md, 12, $grid-columns, 0); // SM (480 по умолчанию) — 6 из 12, промежутки 10px
    @include col(lg, 12, $grid-columns, 0);

    @media (min-width: $screen-md) {
      // min-width: 442px!important;
      // height: 250px;
    padding-bottom: 15px;
    }
}

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