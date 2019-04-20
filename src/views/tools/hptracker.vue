<template>
  <div class="content generator">
    <p class="description">{{ $route.meta.description }}</p>

    <div class="results" v-if="hitpoints !== 0">
      <strong v-if="showHP">{{ hitpoints }} HP</strong>
      <strong v-else>&nbsp;</strong>
    </div>
    <div class="results" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
        <use href="#icon-tombstone" />
      </svg>
    </div>

    <div class="button-group">
      <button type="button" class="button is-primary is-large" @click="hpDown" :disabled="hitpoints === 0"> - </button>
      <button type="button" class="button is-primary is-large" @click="hpUp"   :disabled="hitpoints === 20"> + </button>
    </div>

    <p class="is-centered">
      <br /><br />
      <a href="#" class="link red" v-on:click.prevent="toggleOptions">Select/Reset Hero</a>
    </p>

    <div class="select-hero" v-show="showOptions || hitpoints === 0">
      <div class="form-select">
        <select v-model="hitpoints">
          <option value="0" selected>Select hero...</option>
          <option v-for="(value, key) in hp.hero" v-bind:key="key" v-bind:value="value.hp">{{ value.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'hptracker',
  data: function(){
    return {
      hitpoints: this.$store.state.hp.hitpoints,
      showHP: true,
      showOptions: false,
      disablePlusButton: false,
      disableMinusButton: false
    };
  },
  methods: {
    hpUp: function() {
      this.showHP = false;
      this.disablePlusButton = true;
      this.showOptions = false;

      setTimeout(()=>{
        this.$store.state.hp.hitpoints = this.hitpoints++;
        this.showHP = true;
        this.disablePlusButton = false;
      }, 300);
    },
    hpDown: function() {
      this.showHP = false;
      this.disableMinusButton = true;
      this.showOptions = false;

      setTimeout(()=>{
        this.$store.state.hp.hitpoints = this.hitpoints--;
        this.showHP = true;
        this.disableMinusButton = false;
      }, 300);
    },
    toggleOptions: function(){
      if (this.showOptions) {
        this.showOptions = false;
      } else {
        this.showOptions = true;
      }
    }
  },
  computed: {
    hp: function() {
      return this.$store.state.hp;
    }
  }
};
</script>
<style lang="scss" scoped>
  .results svg {
    max-height: 80px;
  }

  .button-group,
  .select-hero {
    margin: 0 auto;
    max-width: 320px;

    button {
      padding-top: 4px;
      font-size: 22px;
    }
  }
</style>
