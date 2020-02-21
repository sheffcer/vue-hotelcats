<template>
    <div class="detail">
    <div class="detail__inner">
    <!-- <h2>the product id is :{{this.$route.params.Pid}}</h2> -->
    <div class="" v-for="(room,index) in rooms" :key="index">
     <div class="detail__item" v-if="id == room.id">
       <div class="detail__item-wrap">
       <!-- <picture class="detail__img-wrap">
            <source media="(min-width: 1366px)" v-bind:srcset="'/' + room.img_desktop">
            <source media="(min-width: 768px)" v-bind:srcset="'/' + room.img_tablet">
            <img v-bind:src="'/' + room.img_mobile" v-bind:alt="room.img_mobile.slice(4)">
        </picture> -->
        <!-- <div class="detail__img-wrap">
        <img v-bind:src="'/' + room.detail" v-bind:alt="room.detail.slice(4)">
        </div> -->
        <div class="detail__img-wrap">
        <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
            <div class="slide" v-for="(thumb, index) in room.thumbs" v-bind:key="index" v-bind:class="`slide--${index}`">
                <img :src="'/' + thumb"/>
            </div>
        </agile>
        <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
            <div class="slide slide--thumbniail" v-for="(thumb, index) in room.thumbs" v-bind:key="index" v-bind:class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)">
                <img :src="'/' + thumb"/>
            </div>
        <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
        <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
        </agile>
         </div>
        <!-- <agile ref="thumbnails" :as-nav-for="[$refs.main]" :slides-to-show="4" autoplay>...</agile> -->
        <!-- <h2>{{room.title}}</h2> -->
        <div class="detail__wrap">
        <div class="detail__content">
                <h2 class="detail__title">{{room.title}}</h2>
                <ul class="detail__content-list">
                <li>Размеры (ШхГхВ) {{room.size}}</li>
                <li>Площадь - {{room.square}}</li>
                <li>Оснащение номера
                    <ul class="detail__content-list">
                        <li>
                            <div class="detail__icons">
                                <img v-for="(svg, index) in room.svgs" :key="index" v-bind:src="'/' + svg" v-bind:alt="svg.slice(4)">
                                <!-- <span v-for="(tooltip, index) in room.tooltips" :key="index" >{{tooltip}} </span> -->
                                <div class="detail__tooltip">
                                <div v-for="(tooltip, index) in room.tooltips" :key="index">{{tooltip}}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>Цена за сутки: <span>{{room.price}}</span></li>
                </ul>
            </div>
            <a href="" class="btn  btn--detail" v-on:click.prevent="reserveRoom">Забронировать</a>
        </div>
        </div>
     </div>
    </div>
    </div>
    <RoomSlider/>
    <Contacts/>
    </div>
</template>

<script>
import RoomSlider from '@/components/RoomSlider.vue'
import Contacts from '@/components/Contacts.vue'
import { VueAgile } from 'vue-agile'
export default {
name: 'Detail',
components: {
    RoomSlider,
    Contacts,
    agile: VueAgile
},

data () {
    return {
        id:this.$route.params.Pid,
        title:"details",
        rooms: [
        {
            id: 4,
            title: 'Эконом',
            size: '90х100х180 см',
            square:'0,63 м2',
            price: '100₽',
            img_mobile: 'img/room_04.png',
            img_tablet: 'img/room_04-tablet.png',
            img_desktop: 'img/room_04-desktop.png',
            svgs: ['img/icon_01.svg'],
            tooltips: ['Пустой номер'],
            detail: 'img/room_04-detail_desktop.jpg',
            thumbs: ['img/room_04-detail_desktop.jpg', 'img/house.jpg', 'img/game-complex.jpg', 'img/claw-point.jpg', 'img/sunbed.jpg']
        },
        {
            id: 5,
            title: 'Эконом плюс',
            size: '90х100х180 см',
            square: '0,9 м2',
            price: '200₽',
            img_mobile: 'img/room_05.png',
            img_tablet: 'img/room_05-tablet.png',
            img_desktop: 'img/room_05-desktop.png',
            svgs: ['img/icon_02.svg', 'img/icon_03.svg'],
            tooltips: ['Лежак', 'Когтеточка'],
            detail: 'img/room_05-detail_desktop.jpg',
            thumbs: ['img/room_05-detail_desktop.jpg', 'img/house.jpg', 'img/game-complex.jpg', 'img/claw-point.jpg', 'img/sunbed.jpg']
        },
        {
            id: 6,
            title: 'Комфорт',
            size: '100х125х180 см',
            square: '1,13 м2',
            price: '250₽',
            img_mobile: 'img/room_06.png',
            img_tablet: 'img/room_06-tablet.png',
            img_desktop: 'img/room_06-desktop.png',
            svgs: ['img/icon_02.svg', 'img/icon_03.svg', 'img/icon_04.svg'],
            tooltips: ['Лежак', 'Когтеточка', 'Игровой-комплекс'],
            detail: 'img/room_06-detail_desktop.jpg',
            thumbs: ['img/room_06-detail_desktop.jpg', 'img/house.jpg', 'img/game-complex.jpg', 'img/claw-point.jpg', 'img/sunbed.jpg']
        },
        {
            id: 7,
            title: 'Сьют',
            size: '125х125х180 см',
            square: '1,56 м2',
            price: '350₽',
            img_mobile: 'img/room_07.png',
            img_tablet: 'img/room_07-tablet.png',
            img_desktop: 'img/room_07-desktop.png',
            svgs: ['img/icon_02.svg', 'img/icon_03.svg', 'img/icon_04.svg'],
            tooltips: ['Лежак', 'Когтеточка', 'Игровой-комплекс'],
            detail: 'img/room_07-detail_desktop.jpg',
            thumbs: ['img/room_07-detail_desktop.jpg', 'img/house.jpg', 'img/game-complex.jpg', 'img/claw-point.jpg', 'img/sunbed.jpg']
        },
        {
            id: 8,
            title: 'Люкс',
            size: '160х160х180 см',
            square: '2,56 м2',
            price: '500₽',
            img_mobile: 'img/room_08.png',
            img_tablet: 'img/room_08-tablet.png',
            img_desktop: 'img/room_08-desktop.png',
            svgs: ['img/icon_02.svg', 'img/icon_03.svg', 'img/icon_04.svg', 'img/icon_05.svg'],
            tooltips: ['Лежак', 'Когтеточка', 'Игровой-комплекс', 'Домик'],
            detail: 'img/room_08-detail_desktop.jpg',
            thumbs: ['img/room_08-detail_desktop.jpg', 'img/house.jpg', 'img/game-complex.jpg', 'img/claw-point.jpg', 'img/sunbed.jpg']
        },
        {
            id: 9,
            title: 'Супер-Люкс',
            size: '90х100х180 см',
            square: '90х100х180 см',
            price: '600₽',
            img_mobile: 'img/room_09.png',
            img_tablet: 'img/room_09-tablet.png',
            img_desktop: 'img/room_09-desktop.png',
            svgs: ['img/icon_02.svg', 'img/icon_03.svg', 'img/icon_04.svg', 'img/icon_05.svg'],
            tooltips: ['Лежак', 'Когтеточка', 'Игровой-комплекс', 'Домик'],
            detail: 'img/room_09-detail_desktop.jpg',
            thumbs: ['img/room_09-detail_desktop.jpg', 'img/house.jpg', 'img/game-complex.jpg', 'img/claw-point.jpg', 'img/sunbed.jpg']
        },


        ],
asNavFor1: [],
asNavFor2: [],
options1: {
	dots: false,
	fade: true,
	navButtons: false
	},
options2: {
	autoplay: true,
	centerMode: true,
	dots: false,
	navButtons: false,
	slidesToShow: 3,
	responsive: [
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 3
            }
            },
            {
            breakpoint: 1000,
            settings: {
                navButtons: true
                    }
                }
            ]
},

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
        }
},
mounted () {
		this.asNavFor1.push(this.$refs.thumbnails)
		this.asNavFor2.push(this.$refs.main)
	}
}
</script>

<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";
@import "@/assets/sass/agile.scss";

.detail {
    margin-top: 0;
    @media (min-width: $screen-md) {
        margin-top: 40px;
    }

    @media (min-width: $screen-lg) {
        margin-top: 50px;
    }

    &__inner {
        @include container;
        margin-top: 30px;
        margin-bottom: 60px;
    }

    &__title {
        text-align: left;
        font-family: $font-family--rubik;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 33px;

        @media (min-width: $screen-md) {
            margin: 0;
            font-weight: bold;
            font-size: 36px;
            line-height: 43px;
        }

         @media (min-width: $screen-lg) {
            font-size: 36px;
            line-height: 43px;
        }
    }

    &__item-wrap {
        @media (min-width: $screen-md) {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        @media (min-width: $screen-lg) {
            justify-content: flex-start;
        }

    //     & img {
    //         border-radius: 10px;
    //     }
    }

    &__wrap {
        @media (min-width: $screen-md) {
            // display: flex;
        }
    }

    &__img-wrap {

        @media (min-width: $screen-md) {
            max-width: 354px;
        }
        
        @media (min-width: $screen-lg) {
            margin-right: 100px;
            max-width: 500px;
        }

        & img {
            border-radius: 10px;
        }
    }

    &__content-list {
        list-style: none;
        text-align: left;
        padding-inline-start: 0;
    }

    &__content-list li {
        margin-bottom: 20px;
        font-family: $font-family;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;

        & div, span {
            font-weight: 600;
        }

        @media (min-width: $screen-md) {
            font-weight: normal;
            font-size: 15px;
            line-height: 18px;
        }

        @media (min-width: $screen-lg) {
            font-size: 16px;
            line-height: 19px;
        }
    }

    &__content-list li:nth-last-child(-n+2) {
        margin-bottom: 0;
    }

    &__tooltip {
        position: absolute;
        left: 35px;

        & div {
            margin-bottom: 19px;
        }
    }

    &__icons {
        position: relative;
        margin-top: 15px;
        display: flex;
    // justify-content: baseline;
        flex-direction: column;
        align-items: baseline;

        & img {
            margin-bottom: 20px;
        }
        & img:last-child {
            margin-bottom: 0;
        }
    }
}

.btn--detail {
    margin-top: 10px;
    width: 290px !important;
    position: relative;
    background-color: #FF7236;
    margin: auto;
    margin-top: 0;
    color: white !important;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border: 0;

    @media (min-width: $screen-md) {
        width: 206px!important;
    }

    &::after {
        position: absolute;
        content: "";
        background: url(/img/paw-orange.svg) no-repeat center top;
        width: 36px;
        height: 36px;
        top: 7px;
        left: 245px;
        z-index: 10;

         @media (min-width: $screen-md) {
            left: 162px;
        }

        }
    }
</style>