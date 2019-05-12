<template>
  <div class="content generator hptrack">
    <keep-alive></keep-alive>
    <div class="results" v-if="hitpoints > 0">
      <strong v-if="showHP">{{ hitpoints }} HP</strong>
      <strong v-else>&nbsp;</strong>
    </div>
    <div class="results" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
        <use href="#icon-tombstone" />
      </svg>
    </div>

    <div class="button-group">
      <button type="button" class="minusbtn" @click="hpDown" :disabled="hitpoints <= 0 || disableMinusButton"> - </button>
      <button type="button" class="plusbtn" @click="hpUp"   :disabled="hitpoints >= 20 || disablePlusButton"> + </button>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'hptracker',
  data: function(){
    return {
      id: null,
      numHeroes: this.$store.state.hp.heroes,
      hitpoints: 0,
      showHP: true,
      showOptions: false,
      disablePlusButton: false,
      disableMinusButton: false,
    };
  },
  methods: {
    hpUp: function() {
      this.showHP = false;
      this.disablePlusButton = true;
      this.showOptions = false;

      setTimeout(()=>{
        this.hitpoints++;
        // this.$store.state.hp.hitpoints = this.hitpoints++;
        this.showHP = true;
        this.disablePlusButton = false;
      }, 300);
    },
    hpDown: function() {
      this.showHP = false;
      this.disableMinusButton = true;
      this.showOptions = false;

      setTimeout(()=>{
        this.hitpoints--;
        // this.$store.state.hp.hitpoints = this.hitpoints--;
        this.showHP = true;
        this.disableMinusButton = false;
      }, 300);
    }
  },
  mounted () {
    this.id = this._uid;
  },
  // computed: {
  //   hp: function() {
  //     return this.$store.state.hp;
  //   }
  // }
};
</script>
<style lang="scss" scoped>
  .results {
    margin-bottom: 32px;
    min-height: 1px;
    white-space: nowrap;
    height: 80px;

    svg {
      max-width: 180px;
      max-height: 80px;
    }
  }

  .button-group {
    margin: 0 auto;
    max-width: 150px;

    .plusbtn,
    .minusbtn {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0 8px;
      padding: 0;
      width: 88px;
      // height: 44px;

      font-size: 44px;
      line-height: 1;
      color: #fff;
      background: transparent;
      border: 0;

      cursor: pointer;
      outline: none;

      &[disabled] {
        opacity: 0.5;
      }
    }
  }
  .hptrack {
    padding: 16px;
  }
</style>
