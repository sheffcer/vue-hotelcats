<template>
<div class="room">
    <div class="room__inner">
    <div class="room__header-wrap">
        <h3 class="room__header">Наши номера</h3>
        <div class="room__filters">
        <button class="btn  btn--filter">Фильтры</button>
        <label class="field-select">
            <div class="field-select__select-wrap">
            <select class="field-select__select">
                <option>По площади</option>
                <option>По площади</option>
                <option>По цене</option>
                <option>По цене</option>
            </select>
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
        <div class="room__grid">
        <div class="room__item">
            <div class="room__item-wrap">
            <picture class="room__img-wrap">
                <source media="(min-width: 1366px)" srcset="img/room_04-desktop.png">
                <source media="(min-width: 768px)" srcset="img/room_04-tablet.png">
                <img src="img/room_04.png" alt="">
            </picture>
            <div class="room__content">
                <h2 class="room__title">Эконом</h2>
                <ul class="room__content-list">
                <li>Размеры (ШхГхВ)90х100х180 см</li>
                <li>Площадь - 0,63 м2</li>
                <li>Оснащение номера <span class="room__icons"><img src="img/icon_01.svg" alt=""></span>
                </li>
                <li>Цена за сутки: <span>100₽</span></li>
                </ul>
            </div>
            <a href="#" class="btn  btn--room">Забронировать</a>
            </div>
        </div>
        <div class="room__item">
            <div class="room__item-wrap">
            <picture class="room__img-wrap">
                <source media="(min-width: 1366px)" srcset="img/room_05-desktop.png">
                <source media="(min-width: 768px)" srcset="img/room_05-tablet.png">
                <img src="img/room_05.png" alt="">
            </picture>
            <div class="room__content">
                <h2 class="room__title">Эконом плюс</h2>
                <ul class="room__content-list">
                <li>Размеры (ШхГхВ) - 90х100х180 см</li>
                <li>Площадь - 0,90 м2</li>
                <li>Оснащение номера <span class="room__icons"><img src="img/icon_02.svg" alt=""><img
                        src="img/icon_03.svg" alt=""></span>
                </li>
                <li>Цена за сутки: <span>200₽</span></li>
                </ul>
            </div>
            <a href="#" class="btn  btn--room">Забронировать</a>
            </div>
        </div>
        <div class="room__item">
            <div class="room__item-wrap">
            <picture class="room__img-wrap">
                <source media="(min-width: 1366px)" srcset="img/room_06-desktop.png">
                <source media="(min-width: 768px)" srcset="img/room_06-tablet.png">
                <img src="img/room_06.png" alt="">
            </picture>
            <div class="room__content">
                <h2 class="room__title">Комфорт</h2>
                <ul class="room__content-list">
                <li>Размеры (ШхГхВ) - 100х125х180 см</li>
                <li>Площадь - 1,13 м2</li>
                <li>Оснащение номера <span class="room__icons"><img src="img/icon_02.svg" alt=""><img
                        src="img/icon_03.svg" alt=""><img src="img/icon_04.svg" alt=""></span>
                </li>
                <li>Цена за сутки: <span>250₽</span></li>
                </ul>
            </div>
            <a href="#" class="btn  btn--room">Забронировать</a>
            </div>
        </div>
        <div class="room__item">
            <div class="room__item-wrap">
            <picture class="room__img-wrap">
                <source media="(min-width: 1366px)" srcset="img/room_07-desktop.png">
                <source media="(min-width: 768px)" srcset="img/room_07-tablet.png">
                <img src="img/room_07.png" alt="">
            </picture>
            <div class="room__content">
                <h2 class="room__title">Сьют</h2>
                <ul class="room__content-list">
                <li>Размеры (ШхГхВ) - 125х125х180 см</li>
                <li>Площадь - 1,56 м2</li>
                <li>Оснащение номера <span class="room__icons"><img src="img/icon_02.svg" alt=""><img
                        src="img/icon_03.svg" alt=""><img src="img/icon_04.svg" alt=""></span>
                </li>
                <li>Цена за сутки: <span>350₽</span></li>
                </ul>
            </div>
            <a href="#" class="btn  btn--room">Забронировать</a>
            </div>
        </div>
        <div class="room__item">
            <div class="room__item-wrap">
            <picture class="room__img-wrap">
                <source media="(min-width: 1366px)" srcset="img/room_08-desktop.png">
                <source media="(min-width: 768px)" srcset="img/room_08-tablet.png">
                <img src="img/room_08.png" alt="">
            </picture>
            <div class="room__content">
                <h2 class="room__title">Люкс</h2>
                <ul class="room__content-list">
                <li>Размеры (ШхГхВ) - 160х160х180 см</li>
                <li>Площадь - 2,56 м2</li>
                <li>Оснащение номера <span class="room__icons"><img src="img/icon_02.svg" alt=""><img
                        src="img/icon_03.svg" alt=""><img src="img/icon_04.svg" alt=""><img src="img/icon_05.svg"
                        alt=""></span>
                </li>
                <li>Цена за сутки: <span>500₽</span></li>
                </ul>
            </div>
            <a href="#" class="btn  btn--room">Забронировать</a>
            </div>
        </div>
        <div class="room__item">
            <div class="room__item-wrap">
            <picture class="room__img-wrap">
                <source media="(min-width: 1366px)" srcset="img/room_09-desktop.png">
                <source media="(min-width: 768px)" srcset="img/room_09-tablet.png">
                <img src="img/room_09.png" alt="">
            </picture>
            <div class="room__content">
                <h2 class="room__title">Супер-Люкс</h2>
                <ul class="room__content-list">
                <li>Размеры (ШхГхВ) - 180х160х180 см</li>
                <li>Площадь - 2,88 м2</li>
                <li>Оснащение номера <span class="room__icons"><img src="img/icon_02.svg" alt=""><img
                        src="img/icon_03.svg" alt=""><img src="img/icon_04.svg" alt=""><img src="img/icon_05.svg"
                        alt=""></span>
                </li>
                <li>Цена за сутки: <span>600₽</span></li>
                </ul>
            </div>
            <a href="#" class="btn  btn--room">Забронировать</a>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
name: 'Room',
props: {
    msg: String
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    min-height: 428px;;
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
