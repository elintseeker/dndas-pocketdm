<template>
  <div>
    <h1 class="title is-4 is-centered">{{ $route.meta.title }}</h1>
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



