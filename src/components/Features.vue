<template>
<div id="features" class="features">
    <div class="features__inner">
    <h2 class="features__header">Почему мы?</h2>
    <div class="features__row">
        <div class="features__item">
    <div class="features__item-wrap">
            <img src="img/features_01.svg" alt class="features__img" />
            <h2 class="features__title">Комфортная температура</h2>
            <p class="features__text">
            Во всех номерах
            <br />поддерживается комфортная
            <br />температура в пределах 23 - 25
            <br />градусов. В каждом номере
            <br />можно дополнительно
            <br />отрегулировать температуру.
            </p>
        </div>
        </div>
        <div class="features__item">
        <div class="features__item-wrap">
            <img src="img/features_02.svg" alt class="features__img" />
            <h2 class="features__title">Видеонаблюдение</h2>
            <p class="features__text">
            Мы предоставляем доступ в нашу систему. Вы сможете следить за
            своим питомцем со своего смартфона или компьютера.
            </p>
        </div>
        </div>
        <div class="features__item">
        <div class="features__item-wrap">
            <img src="img/features_03.svg" alt class="features__img" />
            <h2 class="features__title">Услуги Зоотакси</h2>
            <p class="features__text">Мы приедем за вашим питомцем в любой район Санкт-Петербурга.</p>
        </div>
        </div>
        <div class="features__item">
        <div class="features__item-wrap">
            <img src="img/features_04.svg" alt class="features__img" />
            <h2 class="features__title">Сбалансированное питание</h2>
            <p class="features__text">
            Вы можете привезти свой корм
            <br />или доверить рацион своего
            <br />питомца нашим профессионалам.
            </p>
        </div>
        </div>
        <div class="features__item">
        <div class="features__item-wrap">
            <img src="img/features_05.svg" alt class="features__img" />
            <h2 class="features__title">Ежедневные прогулки</h2>
            <p class="features__text">
            По вашему желанию мы
            <br />выгуливаем вашего питомца два
            <br />раза в день на специализированной
            <br />закрытой территории.
            </p>
        </div>
        </div>
        <div class="features__item">
        <div class="features__item-wrap">
            <img src="img/features_06.svg" alt class="features__img" />
            <h2 class="features__title">Лучшие ветеринары</h2>
            <p class="features__text">
            В гостинице 24 часа дежурит ветеринарный врач, который окажет
            любую помощь в случае необходимости.
            </p>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
name: "Features",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";

.features {
margin-top: 37px;
background: url("/img/paw-background.svg") no-repeat;
background-position-x: 295px;
  // background-position-y: 5px;

@media (min-width: $screen-md) {
    margin-top: 0;
    background-position-x: 555px;
    background-size: 300px 257px;
}

@media (min-width: $screen-lg) {
    margin-top: 52px;
    background-size: 330px;
    background-position-x: 1060px;
    background-position-y: -40px;

}

&__inner {
    @include container;
    // outline: 1px dotted #000000;
}

&__row {
    @include row;

    @media (min-width: $screen-md) {
    margin-top: 55px;
    }

    @media (min-width: $screen-lg) {
    margin-top: 63px;
    }
}

&__item {
    // outline: 1px dotted pink;
    @include col(xs, 12, $grid-columns, 30px); // малые ширины — 12 из 12, промежутки по умолчанию
    @include col(sm, 12, $grid-columns, 30px); // SM (480 по умолчанию) — 6 из 12, промежутки 10px
    @include col(md, 6, $grid-columns, 30px); // MD (768 по умолчанию) — 4 из 12, промежутки 12px
    @include col(lg, 4, $grid-columns, 30px); // LG (992 по умолчанию) — 3 из 12, промежутки 16px
    // @include col(xl, 2, $grid-columns, 20px); // XL (1200 по умолчанию) — 2 из 12, промежутки 20px
    // @include col(xxl, 1, $grid-columns, 26px); // XXL (1800 по умолчанию) — 1 из 12, промежутки 26px
    box-sizing: border-box;
    margin-bottom: 30px;

    @media (min-width: $screen-lg) {
    margin-bottom: 20px;
    }

}

&__item-wrap {
    // outline: 1px dotted red;
    padding-bottom: 7px;
    box-shadow: 1px 1px 6px #d3d3d3;
    border-radius: 6px;
    background-color: $body-bg;

    @media (min-width: $screen-md) {
    padding-bottom: 0;
    height: 285px;
    }

    @media (min-width: $screen-lg) {
    height: 321px;
    }
}

&__header {
    font-family: $font-family--rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 29px;
    line-height: 43px;
    text-align: center;
    padding-top: 22px;
    margin-bottom: 30px;
    color: $text-color;

    @media (min-width: $screen-md) {
    padding-top: 80px;
    font-size: 36px;
    line-height: 43px;
    }
}

&__title {
    font-family: $font-family--rubik;
    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
    color: $text-color;
    padding-left: 25px;
    // text-align: center;

    @media (min-width: $screen-md) {
    font-size: 21px;
    line-height: 140%;
    padding-left: 25px;
    padding-top: 9px;
    margin: 0;
    }

    @media (min-width: $screen-lg) {
      // margin: 0;
    padding-left: 28px;
    padding-top: 18px;
    }
}

&__text {
    max-width: 240px;
    padding-left: 25px;
    margin-top: -7px;
    font-family: $font-family;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 140%;
    color: $text-color;

    @media (min-width: $screen-md) {
    margin-top: 10px;
    min-width: 260px;
    }

    @media (min-width: $screen-lg) {
    font-size: 16px;
    max-width: 291px;
    margin-left: 5px;
    margin-top: 10px;
    }
}

&__text br {

    @media (min-width: $screen-md) {
    display: none;
    }

    @media (min-width: $screen-lg) {
    display: none;
    }
}

&__img {
    margin-left: 25px;
    margin-top: 23px;
    margin-bottom: 7px;

    @media (min-width: $screen-md) {
    width: 75px;
    height: 75px;
    }

    @media (min-width: $screen-lg) {
    width: 91px;
    height: 91px;
    margin-left: 30px;
    margin-top: 27px;
    }
}
}

</style>
