<template>
  <div>
    <router-link :to="{ name: 'tools' }"><img src="@/assets/logo.png" class="logo"></router-link>
    <p class="description">{{ $route.meta.description }}</p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'tools',
  data: function(){
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.logo {  
  margin: 0 auto 8px;
  width: 44px;
  height: 44px;
}

.description {
  margin: 0 auto;
  max-width: 800px;
  font-weight: bold;
  text-align: center;
}
</style>




