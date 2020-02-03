<template>
<div class="banner">
    <div class="banner__inner">
    <div class="banner__grid">
        <div class="banner__item">
        <p class="banner__description">Каждый 7-й день</p>
        <h2 class="banner__header">бесплатно!</h2>
        <p class="banner__text">Акция действует при размещении в номерах “Люкс” и “Супер-Люкс”</p>
        <a href="#" class="btn  btn--intro">Забронировать</a>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
name: 'Banner',
props: {
    msg: String
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>