<template>
<div class="room">
    <div class="room__inner">
    <div class="room__header-wrap">
        <h3 class="room__header">Наши номера</h3>
        <div class="room__filters">
        <!-- <button class="btn  btn--filter" v-on:click="show">Фильтры</button> -->
        <button class="btn  btn--filter" @click="$modal.show('adaptive')">Фильтры</button>
        <ModalAdaptive v-bind:title="title" v-bind:text="text" />
        <FilterModal name="FilterModal"/>
        <!-- <modal name="hello-world">
            hello, world!
        </modal> -->
        <label class="field-select">
            <div class="field-select__select-wrap">
            <select v-model="selected" class="field-select__select" >
                <!-- <option disabled value="">Выберите вариант</option> -->
                <!-- <option value="">&#8595; По цене</option>
                <option>&#8593; По цене</option>
                <option>&#8593; По площади</option>
                <option>&#8595; По площади</option> -->
                <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
               {{ option.text }}
                </option>
                
            </select>
            <!-- <span>  {{ selected }}</span> -->
            </div>
        </label>
        </div>
    </div>
    <div class="room__wrap">
        <form action="" class="form">
        <div class="field-text__name">Цена за сутки, ₽</div>
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
                <input class="field-checkbox__input" type="checkbox" checked>
                <span class="field-checkbox__name-text">0,63 м2</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox">
                <span class="field-checkbox__name-text">0,90 м2</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" checked>
                <span class="field-checkbox__name-text">1,13 м2</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox">
                <span class="field-checkbox__name-text">1,56 м2</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox">
                <span class="field-checkbox__name-text">2,56 м2</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" checked>
                <span class="field-checkbox__name-text">2,88 м2</span>
            </label>
            </div>
        </div>
        <div class="field-checkbox">
            <div class="field-checkbox__title">Оснащение</div>
            <div class="field-checkbox__input-wrap">
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox">
                <span class="field-checkbox__name-text">Пустой номер</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" checked>
                <span class="field-checkbox__name-text">Лежак</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox">
                <span class="field-checkbox__name-text">Когтеточка</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox" checked>
                <span class="field-checkbox__name-text">Игровой-комплекс</span>
            </label>
            <label class="field-checkbox__name">
                <input class="field-checkbox__input" type="checkbox">
                <span class="field-checkbox__name-text">Домик</span>
            </label>
            </div>
        </div>
        <div class="field-actions">
            <button class="btn  btn--form">Применить</button>
            <button class="btn  btn--form-inverse">Сбросить фильтр</button>
        </div>
        </form>
        <div v-if="selected==='A'" class="room__grid">
        <div class="room__item" v-for='room in sortedByPriceUp' v-bind:key='room.id'>
            <div class="room__item-wrap">
            <picture class="room__img-wrap" v-on:click="goTodetail(room.id)">
                <source media="(min-width: 1366px)" v-bind:srcset="room.img_desktop">
                <source media="(min-width: 768px)" v-bind:srcset="room.img_tablet">
                <img v-bind:src="room.img_mobile" v-bind:alt="room.img_mobile.slice(4)">
            </picture>
            <div class="room__content">
                <h2 class="room__title">{{room.title}}</h2>
                <ul class="room__content-list">
                <li>Размеры (ШхГхВ) {{room.size}}</li>
                <li>Площадь - {{room.square}} м2</li>
                <li>Оснащение номера <span class="room__icons">
                    <!-- <img
                    v-for="(svg, index) in room.svgs" :key="index" 
                    v-bind:src="svg" v-bind:alt="svg.slice(4)"
                    v-tooltip.top-center="room.tooltips"
                    > -->
                    <img
                    v-for="(svg, index) in room.svgs" :key="index" 
                    v-bind:src="svg" v-bind:alt="svg.slice(4)"
                    v-tooltip.top-center="room.tooltips[index]"
                    >
                    </span>
                </li>
                <li>Цена за сутки: <span>{{room.price}}₽</span></li>
                </ul>
            </div>
            <a
                href="" class="btn  btn--room"
                v-on:click.prevent="reserveRoom"
                v-tooltip.top-center="msg"
            >Забронировать</a>
            </div>
        </div>
        </div>
        <div v-else-if="selected==='B'" class="room__grid">
        <div class="room__item" v-for='room in sortedByPriceDown' v-bind:key='room.id'>
            <div class="room__item-wrap">
            <picture class="room__img-wrap" v-on:click="goTodetail(room.id)">
                <source media="(min-width: 1366px)" v-bind:srcset="room.img_desktop">
                <source media="(min-width: 768px)" v-bind:srcset="room.img_tablet">
                <img v-bind:src="room.img_mobile" v-bind:alt="room.img_mobile.slice(4)">
            </picture>
            <div class="room__content">
                <h2 class="room__title">{{room.title}}</h2>
                <ul class="room__content-list">
                <li>Размеры (ШхГхВ) {{room.size}}</li>
                <li>Площадь - {{room.square}} м2</li>
                <li>Оснащение номера <span class="room__icons">
                    <img
                    v-for="(svg, index) in room.svgs" :key="index" 
                    v-bind:src="svg" v-bind:alt="svg.slice(4)"
                    v-tooltip.top-center="room.tooltips[index]"
                    >
                    </span>
                </li>
                <li>Цена за сутки: <span>{{room.price}}₽</span></li>
                </ul>
            </div>
            <a
                href="" class="btn  btn--room"
                v-on:click.prevent="reserveRoom"
                v-tooltip.top-center="msg"
            >Забронировать</a>
            </div>
        </div>
        </div>
        <div v-else-if="selected==='C'" class="room__grid">
        <div class="room__item" v-for='room in sortedBySquareUp' v-bind:key='room.id'>
            <div class="room__item-wrap">
            <picture class="room__img-wrap" v-on:click="goTodetail(room.id)">
                <source media="(min-width: 1366px)" v-bind:srcset="room.img_desktop">
                <source media="(min-width: 768px)" v-bind:srcset="room.img_tablet">
                <img v-bind:src="room.img_mobile" v-bind:alt="room.img_mobile.slice(4)">
            </picture>
            <div class="room__content">
                <h2 class="room__title">{{room.title}}</h2>
                <ul class="room__content-list">
                <li>Размеры (ШхГхВ) {{room.size}}</li>
                <li>Площадь - {{room.square}} м2</li>
                <li>Оснащение номера <span class="room__icons">
                    <img
                    v-for="(svg, index) in room.svgs" :key="index" 
                    v-bind:src="svg" v-bind:alt="svg.slice(4)"
                    v-tooltip.top-center="room.tooltips[index]"
                    >
                    </span>
                </li>
                <li>Цена за сутки: <span>{{room.price}}₽</span></li>
                </ul>
            </div>
            <a
                href="" class="btn  btn--room"
                v-on:click.prevent="reserveRoom"
                v-tooltip.top-center="msg"
            >Забронировать</a>
            </div>
        </div>
        </div>
        <div v-else-if="selected==='D'" class="room__grid">
        <div class="room__item" v-for='room in sortedBySquareDown' v-bind:key='room.id'>
            <div class="room__item-wrap">
            <picture class="room__img-wrap" v-on:click="goTodetail(room.id)">
                <source media="(min-width: 1366px)" v-bind:srcset="room.img_desktop">
                <source media="(min-width: 768px)" v-bind:srcset="room.img_tablet">
                <img v-bind:src="room.img_mobile" v-bind:alt="room.img_mobile.slice(4)">
            </picture>
            <div class="room__content">
                <h2 class="room__title">{{room.title}}</h2>
                <ul class="room__content-list">
                <li>Размеры (ШхГхВ) {{room.size}}</li>
                <li>Площадь - {{room.square}} м2</li>
                <li>Оснащение номера <span class="room__icons">
                    <img
                    v-for="(svg, index) in room.svgs" :key="index" 
                    v-bind:src="svg" v-bind:alt="svg.slice(4)"
                    v-tooltip.top-center="room.tooltips[index]"
                    >
                    </span>
                </li>
                <li>Цена за сутки: <span>{{room.price}}₽</span></li>
                </ul>
            </div>
            <a
                href="" class="btn  btn--room"
                v-on:click.prevent="reserveRoom"
                v-tooltip.top-center="msg"
            >Забронировать</a>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
// import VTooltip from 'v-tooltip'
import FilterModal from '@/components/FilterModal.vue'
import ModalAdaptive    from '@/components/ModalAdaptive.vue'

export default {
name: 'Room',
components: {
    FilterModal,
    ModalAdaptive
},
data () {
    return {
    title: 'Цена за сутки, ₽',
    text: 'Мы свяжемся с вами в ближайшее время',
    sliderValue: 3,
    selected: 'A',
    msg: 'Бронируй скорее)',
    options: [
        { char: "&#8593;", text: ' Возр. цены', value: 'A' },
        { char: "&#8595;", text: ' Убыв. цены', value: 'B' },
        { char: "&#8593;", text: ' Возр. площади', value: 'C' },
        { char: "&#8595;", text: ' Убыв. площади', value: 'D' }
    ],
    sorted: [],
    rooms: [
        {
            id: 4,
            title: 'Эконом',
            size: '90х100х180 см',
            square:'0.63',
            price: '100',
            img_mobile: 'img/room_04.png',
            img_tablet: 'img/room_04-tablet.png',
            img_desktop: 'img/room_04-desktop.png',
            svgs: ['img/icon_01.svg'],
            tooltips: ['Пустой номер']
        },
        {
            id: 5,
            title: 'Эконом плюс',
            size: '90х100х180 см',
            square: '0.9',
            price: '200',
            img_mobile: 'img/room_05.png',
            img_tablet: 'img/room_05-tablet.png',
            img_desktop: 'img/room_05-desktop.png',
            svgs: ['img/icon_02.svg', 'img/icon_03.svg'],
            tooltips: ['Лежак', 'Когтеточка']
        },
        {
            id: 6,
            title: 'Комфорт',
            size: '100х125х180 см',
            square: '1.13',
            price: '250',
            img_mobile: 'img/room_06.png',
            img_tablet: 'img/room_06-tablet.png',
            img_desktop: 'img/room_06-desktop.png',
            svgs: ['img/icon_02.svg', 'img/icon_03.svg', 'img/icon_04.svg'],
            tooltips: ['Лежак', 'Когтеточка', 'Игровой-комплекс']
        },
        {
            id: 7,
            title: 'Сьют',
            size: '125х125х180 см',
            square: '1.56',
            price: '350',
            img_mobile: 'img/room_07.png',
            img_tablet: 'img/room_07-tablet.png',
            img_desktop: 'img/room_07-desktop.png',
            svgs: ['img/icon_02.svg', 'img/icon_03.svg', 'img/icon_04.svg'],
            tooltips: ['Лежак', 'Когтеточка', 'Игровой-комплекс']
        },
        {
            id: 8,
            title: 'Люкс',
            size: '160х160х180 см',
            square: '2.56',
            price: '500',
            img_mobile: 'img/room_08.png',
            img_tablet: 'img/room_08-tablet.png',
            img_desktop: 'img/room_08-desktop.png',
            svgs: ['img/icon_02.svg', 'img/icon_03.svg', 'img/icon_04.svg', 'img/icon_05.svg'],
            tooltips: ['Лежак', 'Когтеточка', 'Игровой-комплекс', 'Домик']
        },
        {
            id: 9,
            title: 'Супер-Люкс',
            size: '90х100х180 см',
            square: '2.88',
            price: '600',
            img_mobile: 'img/room_09.png',
            img_tablet: 'img/room_09-tablet.png',
            img_desktop: 'img/room_09-desktop.png',
            svgs: ['img/icon_02.svg', 'img/icon_03.svg', 'img/icon_04.svg', 'img/icon_05.svg'],
            tooltips: ['Лежак', 'Когтеточка', 'Игровой-комплекс', 'Домик']
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
        },
    goTodetail: function (id) {
        this.$router.push({name:'detail', params:{Pid:id}})
        },
    getByPriceDown: function (data) {
    return data.sort(function (a, b) {
        return b.price - a.price;
        })
    },
    getByPriceUp: function (data) {
    return data.sort(function (a, b) {
        return a.price - b.price;
        })
    },
    getBySquareUp: function (data) {
    return data.sort(function (a, b) {
        return a.square - b.square;
        })
    },
    getBySquareDown: function (data) {
    return data.sort(function (a, b) {
        return b.square - a.square;
        })
    },
    show () {
    this.$modal.show('adaptive');
    },
    hide () {
    this.$modal.hide('adaptive');
    }
},
computed: {
    sortedByPriceDown: function () {
        let sorted = this.rooms
        return this.getByPriceDown(sorted)
    },
    sortedByPriceUp: function () {
        let sorted = this.rooms
        return this.getByPriceUp(sorted)
    },
    sortedBySquareUp: function () {
        let sorted = this.rooms
        return this.getBySquareUp(sorted)
    },
    sortedBySquareDown: function () {
        let sorted = this.rooms
        return this.getBySquareDown(sorted)
    }
},
watch: {
        selected(value) {
            switch (value) {
                case 'A':
                    // return this.getByPriceDown(sorted)
                    console.log(value)
                break
                case 'B':
                    console.log(value)
                    // return this.sortedByPrice()
                break
                case 'C':
                    console.log(value)
                break
                case 'D':
                    console.log(value)
                break
                default:
                    // return this.getByPriceDown(sorted)
                    console.log('A default')
            }
        }
}
}
</script>

<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";

.room {

&__inner {
    @include container;
    // outline: 1px dotted #000000;
}

&__grid {
    // @include row;
    @media (min-width: $screen-md) {
    @include row;
    justify-content: space-around;
      // width: 870px;
    }

    @media (min-width: $screen-lg) {
      // justify-content: space-around;
    max-width: 870px;
    }
}

&__wrap {
    @media (min-width: $screen-lg) {
    display: flex;
    justify-content: space-between;
    }
}

&__item {
    @include col(xs, 12, $grid-columns, 0);
    // @include col(sm, 12, $grid-columns, 30px);
    @include col(md, 6, $grid-columns, 0);
    @include col(lg, 4, $grid-columns, 0);
    margin-bottom: 30px;
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 428px;

    @media (min-width: $screen-md) {
    min-height: 428px;
    }

    @media (min-width: $screen-lg) {
      // width: 270px;
    }
}

&__item .btn {
    margin-bottom: 25px;
}

&__filters {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 25px;
}

&__item-wrap {
    // outline: 1px solid $author-color;
    border: 1px solid $room-color;
    flex-grow: 1;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 6px;
}

&__img-wrap {
    flex-shrink: 0;
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
}
&__header {
    font-family: $font-family--rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 33px;
}

&__header-wrap {

    @media (min-width: $screen-lg) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    }
}

&__content-list {
    list-style: none;
    padding: 0;
    margin-top: 0;
    // max-width: 216px;
    font-family: $font-family;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
}

&__content-list span {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
}

&__content-list li {
    margin-bottom: 8px;
}

&__title {
    font-family: $font-family--rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
}

&__icons {
    margin-left: 10px;
    // max-width: 10px;
    // display: flex;
    // justify-content: flex-start;
}

&__icons img {
    margin-right: 5px;
}
}

</style>
