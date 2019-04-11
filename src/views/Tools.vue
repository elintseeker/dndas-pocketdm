<template>
  <div>
    <img src="@/assets/logo.png" class="logo">
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
</style>




