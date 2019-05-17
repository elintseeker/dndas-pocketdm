<template>
  <div id="app">
    <div class="top-bar">
      <router-link :to="{ name: 'home' }"><img src="@/assets/logo.png" class="logo"></router-link>
    </div>

    <router-view />

    <div class="app-nav">
      <router-link :to="{ name: 'home' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-axe"></use>
        </svg>
        <span>Tools</span>
      </router-link>
      <!-- <router-link :to="{ name: 'homebrew' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-anvil"></use>
        </svg>
        <span>Homebrew</span>
      </router-link> -->
      <router-link :to="{ name: 'about' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-info"></use>
        </svg>
        <span>About</span>
      </router-link>
    </div>

    <transition name="fade">
      <div class="abscenter splash" v-if="splash">
        <div>
          <img src="@/assets/logo.png" class="logo" alt="Pocket DM" />
          <h1 class="appname">D&amp;D Adventure System - Pocket DM</h1>
          <small>v0.1.3</small>
        </div>
      </div>
    </transition>

    <icons></icons>
  </div>
</template>

<script>
import icons from '@/components/Icons';

export default {
  components: {
    'icons': icons
  },
  data(){
    return {
      splash: true
    }
  },
  mounted(){
    this.$nextTick(() => {
      setTimeout(()=>{
        this.splash = false;
      }, 2500);
    });
  }
}
</script>

<style lang="scss">
@import './scss/app.scss';
</style>
