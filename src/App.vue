<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/rooms">Rooms</router-link>
    </div> -->
    <Modal/>
    <ModalSecond/>
    <PageHeader/>
    <transition name="moveInUp">
    <router-view/>
    </transition>
    <PageFooter/>
    <!-- <Modal/>
    <ModalSecond/> -->
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import Modal from '@/components/Modal.vue'
import ModalSecond from '@/components/ModalSecond.vue'
// import routes from '/router/index.js'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter,
    Modal,
    ModalSecond
  }
}
</script>

<style lang="scss">
@import "./assets/sass/style.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.moveInUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
 opacity: 0;
  }
  50%{
 opacity: 0.5;
  }
  100%{
 opacity: 1;
  }
}

.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}

</style>
