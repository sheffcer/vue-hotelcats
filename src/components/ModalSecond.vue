<template>
    <div id="order" class="modal-cart">
    <div class="modal-cart__shadow"></div>
    <div class="modal-cart__inner">
      <div class="modal-cart__content">
        <h2 class="modal-cart__title">Спасибо за заявку</h2>
        <button class="modal-cart__close" type="button" v-on:click="submit"></button>
        <p class="modal-cart__text">Мы свяжемся с вами
          в ближайшее время</p>

        <button type="submit" class="btn  btn--modal" value="Ок" v-on:click="submit">Ок</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'ModalSecond',
        methods: {
            submit: () => {
                let modalSecond = document.querySelector('#order')
                let modalShadowS = document.querySelector('#order .modal-cart__shadow')
                modalShadowS.style.cssText = 'display:none'
                modalSecond.style.cssText = 'display:none'
                console.log('ok')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>