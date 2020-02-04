<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Intro/>
    <Features/>
    <RoomSlider/>
    <Reviews/>
    <Contacts/>
    <!-- <PageFooter/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Intro from '@/components/Intro.vue'
import Features from '@/components/Features.vue'
import RoomSlider from '@/components/RoomSlider.vue'
import Reviews from '@/components/Reviews.vue'
import Contacts from '@/components/Contacts.vue'

export default {
  name: 'home',
  components: {
    Intro,
    Features,
    RoomSlider,
    Reviews,
    Contacts,
  }
}
</script>
