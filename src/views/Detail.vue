<template>
    <div>
    <h2>the product id is :{{this.$route.params.Pid}}</h2>
    <RoomSlider/>
    <!-- <Banner/> -->
    <Contacts/>
    </div>
</template>

<script>
import RoomSlider from '@/components/RoomSlider.vue'
// import Banner from '@/components/Banner.vue'
import Contacts from '@/components/Contacts.vue'
export default {
    name: 'Detail',
    components: {
        RoomSlider,
        // Banner,
        Contacts
    },
    data () {
        return {
            id:this.$route.params.Pid,
            title:"details"
            }
    }
}
</script>

<style lang="scss">

</style>