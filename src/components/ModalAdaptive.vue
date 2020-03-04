<template>
    <modal
        name="adaptive"
        transition="nice-modal-fade"
        :min-width="290"
        :delay="100"
        :adaptive="true">
    <!-- <h2 class="modal-form__title">{{title}}</h2> -->
    <!-- <div class="example-modal-content"> -->
        <!-- <h3 class="modal-form__text">{{text}}</h3> -->
        <!-- Appropriately exploit professional infrastructures rather than unique growth strategies. Assertively build leveraged growth strategies vis-a-vis multimedia based vortals. Progressively simplify cross-platform value through interactive imperatives. Objectively
        implement enabled web services after plug-and-play ROI. Distinctively impact inexpensive schemas before installed base imperatives. Holisticly benchmark pandemic process improvements without wireless experiences. Efficiently create worldwide partnerships
        after tactical vortals. Uniquely productize enabled platforms vis-a-vis timely processes. Conveniently unleash standards compliant niches through highly efficient testing procedures. Rapidiously enable pandemic niche markets whereas viral markets.
        Assertively simplify alternative partnerships and error-free e-commerce. Professionally formulate 24/365 internal or "organic" sources through equity invested mindshare. Globally redefine unique best practices for.
        <div class="field-text__name">Цена за сутки, ₽</div> -->
        
    <!-- </div> -->
    <form action="" class="form modal-form">
        <button class="modal-form__close" type="button" v-on:click="$modal.hide('adaptive')"></button>
        <div class="field-text__name">{{title}}</div>
        <div class="fields-group  fields-group--filter">
            <label class="field-text  field-text--filter">
            <div class="field-text__input-wrap">
                <input class="field-text__input  field-text__input--filter" type="text" placeholder="от 100">
            </div>
            </label>
            <label class="field-text  field-text--filter">
            <div class="field-text__input-wrap">
                <input class="field-text__input  field-text__input--filter" type="text" placeholder="до 600">
            </div>
            </label>
        </div>
        <div class="field-checkbox">
            <div class="field-checkbox__title">Площадь</div>
            <div class="field-checkbox__input-wrap">
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" value="0.63" v-model="selectedCheckbox">
                <span class="field-checkbox__name-text">0,63 м2</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" value="0.90" v-model="selectedCheckbox">
                <span class="field-checkbox__name-text" >0,90 м2</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" value="1.13" v-model="selectedCheckbox">
                <span class="field-checkbox__name-text">1,13 м2</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" value="1.56" v-model="selectedCheckbox">
                <span class="field-checkbox__name-text">1,56 м2</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" value="2.56" v-model="selectedCheckbox">
                <span class="field-checkbox__name-text">2,56 м2</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" value="2.88" v-model="selectedCheckbox">
                <span class="field-checkbox__name-text">2,88 м2</span>
            </label>
            </div>
        </div>
        <div class="field-checkbox">
            <div class="field-checkbox__title">Оснащение</div>
            <div class="field-checkbox__input-wrap">
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" value="Пустой номер" v-model="selectedCheckbox">
                <span class="field-checkbox__name-text">Пустой номер</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" value="Лежак" v-model="selectedCheckbox">
                <span class="field-checkbox__name-text">Лежак</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" value="Когтеточка" v-model="selectedCheckbox">
                <span class="field-checkbox__name-text">Когтеточка</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" value="Игровой-комплекс" v-model="selectedCheckbox">
                <span class="field-checkbox__name-text">Игровой-комплекс</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" value="Домик" v-model="selectedCheckbox">
                <span class="field-checkbox__name-text">Домик</span>
            </label>
            </div>
        </div>
        <div class="field-actions">
            <button class="btn  btn--form">Применить</button>
            <button class="btn  btn--form-inverse">Сбросить фильтр</button>
        </div>
        <span>Выбрано: {{selectedCheckbox}}</span>
        </form>
    </modal>
</template>
<script>
export default {
name: 'ModalAdaptive',
props: {
    title: {
        required: true,
    },
    text: {
        required: true,
    }
},
data() {
    return {
        // title: this.$parent.title
        selectedCheckbox: []
    }
},
}
</script>
<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";

.modal-form {
    padding-top: 30px;
    position: relative;
    display: block;
    padding-left: 24px;
    padding-right: 24px;

    @media (min-width: $screen-md) {
        padding-left: 57px;
        padding-right: 57px;
    }

     @media (min-width: $screen-lg) {
        padding-left: 65px;
        // padding-right: 70px;
    }

    &__title {
        font-family: $font-family;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
    }

    &__text {
        text-align: center;
    }

    &__close {
    border: 0;
    outline: 0;
    background-color: #ffffff;
    width: 21px;
    height: 21px;
    position: absolute;
    left: 260px;
    top: 10px;
    background: url("/img/menu-close.svg") no-repeat;

    @media (min-width: $screen-md) {
        left: 300px;
        top: 20px;
    }

    @media (min-width: $screen-lg) {
        left: 360px;
        top: 25px;
    }
  }

  & .field-actions {
      margin-top: 2rem;
  }

}

div.v--modal-box {
    top: 50px!important;
    left: 0!important;
    margin: 0 auto;
    width: 290px !important;
    min-height: 800px !important;

    @media (min-width: $screen-md) {
        // top: 300px!important;
        width: 332px!important;
        margin: 0 auto;
    }

    @media (min-width: $screen-lg) {
        width: 400px!important;
        margin: 0 auto;
    }

}
</style>