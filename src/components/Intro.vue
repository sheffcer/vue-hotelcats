<template>
    <div class="intro">
    <div class="intro__inner">
      <p class="intro__text">Санкт-Петербург</p>
      <h1 class="intro__title">Котейка</h1>
      <p class="intro__description">Уютная гостиница для котов и кошек</p>
      <a href="#" class="btn  btn--intro">Забронировать</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
