<template>
<div id="contacts" class="contacts">
    <div class="contacts__inner">
    <h2 class="contacts__title">Как нас найти</h2>
    <div class="contacts__grid">
        <div class="contacts__wrapper">
        <div class="contacts__adress">
            <div class="contacts__item">
            <p class="contacts__subtitle">Адрес</p>
            <p class="contacts__text">Санкт-Петербург,<br>
                ул Большая Конюшенная, д 19</p>
            </div>
            <div class="contacts__contact-item">
            <p class="contacts__subtitle">Режим работы</p>
            <p class="contacts__text">Ежедневно, с 9:00 до 20:00</p>
            </div>
            <div class="contacts__contact-item">
            <p class="contacts__subtitle">Телефон</p>
            <p class="contacts__text">8 (800) 333-55-99</p>
            </div>
            <div class="contacts__contact-item">
            <p class="contacts__subtitle">E-mail</p>
            <p class="contacts__text">info@cat-hotel.ru</p>
            </div>
        </div>
        <div class="contacts__social">
            <p class="contacts__social__subtitle">Социальные сети</p>
            <!-- <ul class="social">
            <li class="social__link-wrap social__link-wrap--fb">
                <a href="" class="social__link">
                <img src="img/fb.svg" alt="facebook">
                </a>
            </li>
            <li class="social__link-wrap social__link-wrap--instagram">
                <a href="" class="social__link">
                <img src="img/instagram.svg" alt="instagram">
                </a>
            </li>
            <li class="social__link-wrap social__link-wrap--vk">
                <a href="" class="social__link">
                <img src="img/vk.svg" alt="vk">
                </a>
            </li>
            </ul> -->
            <Social/>
        </div>
        </div>
        <div class="contacts__map">
            <!-- <div class="info" style="height: 15%">
            <span>Center: {{ center }}</span>
            <span>Zoom: {{ zoom }}</span>
            <span>Bounds: {{ bounds }}</span>
            </div> -->
        <l-map :zoom="zoom" :center="center" width="320px" height="300px" class="contacts__map">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="marker"></l-marker>
        </l-map>
        <!-- <picture class="contacts__map-img">
            <source media="(min-width: 1366px)" srcset="/img/map-desktop.jpg">
            <source media="(min-width: 768px)" srcset="/img/map-tablet.jpg">
            <img src="/img/map-mobile.jpg" alt="map">
        </picture> -->
        </div>
    </div>
    </div>
</div>
</template>

<script>
import Social from '@/components/Social.vue'
import L from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
name: 'Contacts',
components: {
    Social,
    LMap,
    LTileLayer,
    LMarker,
},
data () {
    return {
        zoom:14,
        center: L.latLng(59.938851, 30.323058),
        url:'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: L.latLng(59.938851, 30.323058),
        bounds: null
        };
},
methods: {
    zoomUpdated (zoom) {
        this.zoom = zoom;
    },
    centerUpdated (center) {
        this.center = center;
    },
    boundsUpdated (bounds) {
        this.bounds = bounds;
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";
// @import '/node_modules/leaflet/dist/leaflet.css';

.leaflet-default-icon-path {
    background-image: url(/img/marker-icon.png)!important;
}

.leaflet-default-shadow-path {
    background-image: url(/img/marker-shadow.png)!important;
}

.leaflet-marker-icon {
    width: 31px!important;
    height: 44px!important;
}

.contacts {

@media (min-width: $screen-md) {
    margin-top: 60px;
}

&__inner {
    @include container;
    // outline: 1px dotted #000000;
    background-color: $bullet-color;
}

&__grid {
    display: block;

    @media (min-width: $screen-md) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-height: 432px;
    }

    @media (min-width: $screen-lg) {
    max-height: 490px;
    }

}

&__adress {
    margin-top: 30px;

    @media (min-width: $screen-md) {
    margin-top: 0;
    }
}

&__social {
    margin-top: 26px;
    margin-bottom: 35px;
}

&__social .social {
    padding-left: 0;
    margin-top: -10px;
    margin-left: -5px;
}

&__map {

    @media (min-width: $screen-md) {
    margin: 0;
    // margin-top: -90px;
    width: 399px;
    height: 522px;
    margin-right: -15px;
    margin-top: -45px;
    // margin-bottom: -4px;
    }

    @media (min-width: $screen-lg) {
    width: 798px;
    height: 580px;
    }

margin-top: 35px;
min-height: 300px;
width: 320px;
height: 300px;
margin-left: -7.5px;
}

&__map-img {
@media (min-width: $screen-md) {
    margin: 0;
    left: 15px;
}

position: relative;
display: block;
}

&__map-img::before {
position: absolute;
content: "";
background: url("/img/marker.svg") no-repeat;
width: 56px;
height: 69px;
top: 100px;
left: 130px;
}

&__title {
padding-top: 33px;
font-family: $font-family--rubik;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 33px;

    @media (min-width: $screen-md) {
        text-align: left;
}
}

&__subtitle {
font-family: $font-family;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 18px;
}

&__text {
font-family: $font-family;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 18px;
}
}

</style>