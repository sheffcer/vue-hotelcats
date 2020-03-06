<template>
<header class="page-header">
    <div class="page-header__inner">
    <div class="logo" v-on:click="logoCloseMenu">
        <router-link to="/">
        <picture>
            <source media="(min-width: 1366px)" srcset="/img/logo-desktop.svg">
            <source media="(min-width: 768px)" srcset="/img/logo-tablet.svg">
            <img class="logo__img" src="/img/logo.svg" alt="mobile-logo">
        </picture>
        </router-link>
        </div>
    <button class="nav-toggle" type="button" v-on:click="menuToggle">
        <span class="hamburger"></span>
    </button>
    <div class="navbar">
        <MainNav/>
        <div class="page-header__contact">
        <p class="page-header__contact-tel">8 (800) 333-55-99</p>
        <Social/>
        </div>
    </div>
    </div>
</header>
</template>

<script>
import Social from '@/components/Social.vue'
import MainNav from '@/components/MainNav.vue'
export default {
name: 'PageHeader',
components: {
    Social,
    MainNav
},
methods: {
    menuToggle: () => {
        // let navToggle = document.querySelector(".nav-toggle");
        let navLinks = document.querySelectorAll(".main-nav__link")
         document.body.classList.toggle("nav-open")

        // navToggle.addEventListener("click", () => {
        //     document.body.classList.toggle("nav-open");
        //     });
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
            document.body.classList.remove("nav-open")
            })
        })


        },
    closeMenu: () => {
        let navLinks = document.querySelectorAll(".main-nav__link")
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
            document.body.classList.remove("nav-open")
            })
        })
    },

    logoCloseMenu: () => {
        let logo = document.querySelector(".logo")
        console.log(logo)
        logo.addEventListener("click", () => {
            document.body.classList.toggle("nav-open")
        })
    }
    }

}
</script>

<style lang="scss">
@import "@/assets/sass/grid-mixins.scss";
@import "@/assets/sass/variables.scss";

.page-header {
min-height: 62px;
&__inner {
    @include container;
    // outline: 1px dotted #000000;
    min-height: 62px;
    display: flex;
    justify-content: space-between;

    @media (min-width: $screen-md) {
    min-height: 76px;
    }

    @media (min-width: $screen-lg) {
    justify-content: safe;
    }
}

&__contact {
    display: block;

    @media (min-width: $screen-md) {
    display: none;
    }
}

&__contact-tel {
    padding-top: 7px;
    padding-left: 15px;
}
}

</style>