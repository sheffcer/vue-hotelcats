<template>
<div class="room-slider">
    <div class="room-slider__inner">
    <h3 class="room-slider__header">Номера</h3>
    <div id="rooms" class="owl-carousel owl-theme room-slider__grid">
        <div class="room-slider__item">
        <div class="room-slider__item-wrap">
            <picture class="room-slider__item-img">
            <source media="(min-width: 1366px)" srcset="img/room_01-desktop.png">
            <source media="(min-width: 768px)" srcset="img/room_01-tablet.png">
            <img src="img/room_01.png" alt="">
            </picture>
            <div class="room-slider__content">
            <h2 class="room-slider__title">Эконом плюс</h2>
            <ul class="list-bullet">
                <li>Площадь - 0,90 м2</li>
                <li>Размеры (ШхГхВ)
                90х100х180 см</li>
                <li>Цена за сутки: 200₽</li>
            </ul>
            <a href="#" class="btn  btn--slider">Забронировать</a>
            </div>
        </div>
        </div>
        <div class="room-slider__item">
        <div class="room-slider__item-wrap">
            <picture class="room-slider__item-img">
            <source media="(min-width: 1366px)" srcset="img/room_02-desktop.png">
            <source media="(min-width: 768px)" srcset="img/room_02-tablet.png">
            <img src="img/room_02.png" alt="">
            </picture>
            <div class="room-slider__content">
            <h2 class="room-slider__title">Комфорт</h2>
            <ul class="list-bullet">
                <li>Площадь - 1,13 м2</li>
                <li>Размеры (ШхГхВ)
                100х125х180 см</li>
                <li>Цена за сутки: 250₽</li>
            </ul>
            <a href="#" class="btn  btn--slider">Забронировать</a>
            </div>
        </div>
        </div>
        <div class="room-slider__item">
        <div class="room-slider__item-wrap">
            <picture class="room-slider__item-img">
            <source media="(min-width: 1366px)" srcset="img/room_03-desktop.png">
            <source media="(min-width: 768px)" srcset="img/room_03-tablet.png">
            <img src="img/room_03.png" alt="">
            </picture>
            <div class="room-slider__content">
            <h2 class="room-slider__title">Сьют</h2>
            <ul class="list-bullet">
                <li>Площадь - 1,56 м2</li>
                <li>Размеры (ШхГхВ)
                125х125х180 см</li>
                <li>Цена за сутки: 350₽</li>
            </ul>
            <a href="#" class="btn  btn--slider">Забронировать</a>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
name: 'RoomSlider',
props: {
    msg: String
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>