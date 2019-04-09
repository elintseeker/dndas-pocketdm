<template>
  <div class="content home">
    <div>
      <img src="../assets/logo.png" class="logo" alt="Pocket DM" />
      <h1 class="appname">{{ $route.meta.title  }}</h1>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'home',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style lang="scss" scoped>
.home {
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;

  .appname {
    margin: 16px 0 0;
    font-size: 18px;
  }
}
</style>


