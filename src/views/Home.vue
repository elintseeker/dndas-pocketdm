<template>
  <div class="content home">
    <div class="abscenter">
      <div>
        <router-link :to="{ name: 'tools' }">
          <img src="@/assets/logo.png" class="logo" alt="Pocket DM" />
        </router-link>
        <h1 class="appname">{{ $route.meta.title  }}</h1>
        <small>v0.1.2</small>
      </div>
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
.abscenter {
  position: fixed;
  top: 0; right: 0; left: 0; bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  > div { margin-top: -88px; }
}

.home {
  text-align: center;

  .appname {
    margin: 16px 0;
    font-size: 18px;
  }
}
</style>


