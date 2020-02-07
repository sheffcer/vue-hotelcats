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
    Contacts
},
// methods: {
//   initModal: () => {
//     let modal = document.querySelector('.modal-cart--form')
//     let modalShadow = document.querySelector('.modal-cart--form .modal-cart__shadow')
//     let modalButtons = document.querySelectorAll(".room__grid a.btn--room")
//       modalButtons.forEach(button => {
//         button.addEventListener('click', () => {
//           modalShadow.style.cssText = 'display:block'
//           modal.style.cssText = 'display:block'
//           })
//     })
//   }

// }
// mounted: {
//   // initModal()

// }
}
</script>
