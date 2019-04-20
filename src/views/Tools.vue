<template>
  <div>
    <div class="top-bar">
      <router-link :to="{ name: 'tools' }"><img src="@/assets/logo.png" class="logo"></router-link>
    </div>
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