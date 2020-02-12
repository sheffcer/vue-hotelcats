<template>
    <div>
    <h2>the product id is :{{this.$route.params.Pid}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
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