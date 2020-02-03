<template>
  <div class="rooms">
    <Room/>
    <Banner/>
    <Contacts/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// import modal from "@/assets/js/modal.js"
import Room from '@/components/Room.vue'
import Banner from '@/components/Banner.vue'
import Contacts from '@/components/Contacts.vue'

export default {
  name: 'rooms',
  components: {
    Room,
    Banner,
    Contacts,
}
}
</script>
