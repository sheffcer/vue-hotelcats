<template>
<div id="rev" class="review">
    <div class="review__inner">
    <h2 class="review__header">Отзывы</h2>
    <div id="reviews" class="owl-carousel owl-theme review__grid">
        <div class="review__item">
        <div class="review__item-wrap">
            <p class="review__text">Первый раз пришлось оставить нашего котика в гостинице, очень переживали. Администратор Мария каждый день высылала нам фото нашего питомца, рассказывала, как он себя чувствует. И мы и котик остались очень довольны!</p>
            <div class="review__author">
            <span>
                Валерия Гришаева
            </span>
            <span>
                15 ноября, 2019
            </span>
            </div>
        </div>
        </div>
        <div class="review__item">
        <div class="review__item-wrap">
            <p class="review__text">Гостиницу для питомцев нам посоветовали друзья. Они всегда оставляют здесь своего кота, когда уезжают. В “Котейке” очень хорошо заботятся о питомцах, в гостинице очень чисто. Всем рекомендую! Будем обращаться еще.</p>
            <div class="review__author">
            <span>
                Екатерина Минаева
            </span>
            <span>
                10 октября, 2019
            </span>
            </div>
        </div>
        </div>
        <div class="review__item">
        <div class="review__item-wrap">
            <p class="review__text">Мой кот — настоящая привереда, угодить ему сложно. У меня были особые требования куходу за ним, и “Котейка” отлично справились. Я часто наблюдал по видео за питомцем со своего телефона, это очень удобно. </p>
            <div class="review__author">
            <span>
                Павел Нечаев
            </span>
            <span>
                19 декабря, 2019
            </span>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
name: 'Review',
props: {
    msg: String
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>