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
props: {
    msg: String
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
