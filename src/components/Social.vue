<template>
        <ul class="social">
            <li class="social__link-wrap social__link-wrap--fb">
            <a href="" class="social__link">
                <img src="img/fb.svg" alt="fb">
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
        </ul>
</template>

<script>
export default {
name: 'Social',
props: {
    msg: String
}
}
</script>

<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";
@import "@/assets/sass/mixins.scss";

.social {

display: flex;
flex-wrap: wrap;
align-items: center;
  // margin-top: $typo-margin-vertical;
  // margin-bottom: $typo-margin-vertical;
padding: 0;
padding-left: 10px;
list-style: none;

&__link-wrap {
    margin-right: 10px;
}

&__link {
    display: block;
    padding: 5px;
    // background-color: $gray;

    // #{$block-name}__link-wrap--fb & {
    //   background-color: $color-fb;
    // }

    // #{$block-name}__link-wrap--vk & {
    //   background-color: $color-vk;
    // }

    // #{$block-name}__link-wrap--tw & {
    //   background-color: $color-tw;
    // }

    // #{$block-name}__link-wrap--gh & {
    //   background-color: $color-gh;
    // }

    svg {
    display: block;
      // width: 16px;
      // height: 16px;
      // fill: #fff;
    }
}

&__text {
    @include hide-text;
}
}


</style>