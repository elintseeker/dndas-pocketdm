<template>
  <div class="content generator hptrack">
    <div class="hitpoints-score" v-if="hitpoints > 0">{{ hitpoints }} HP</div>
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" v-else>
      <use href="#icon-tombstone" />
    </svg>

    <div class="button-group">
      <button class="minusbtn" @click="hpDown" :disabled="hitpoints <= 0 || disableMinusButton">&minus;</button>
      <button class="plusbtn"  @click="hpUp"   :disabled="hitpoints >= 30 || disablePlusButton">&plus;</button>
    </div>

    <a href="#" @click.prevent="resetHitpoints" style="border: 0;">Reset</a>
  </div>
</template>

<script>
export default {
  name: 'hpTracker',
  props: ['herohp', 'id'],
  data: function(){
    return {
      hitpoints: this.herohp,
      showHP: true,
      showOptions: false,
      disablePlusButton: false,
      disableMinusButton: false,
    };
  },
  methods: {
    resetHitpoints: function() {
      this.hitpoints = 8;
      this.$store.state.hp[this.id] = this.hitpoints;
    },
    hpUp: function() {
      this.showHP = false;
      this.disablePlusButton = true;
      this.showOptions = false;

      setTimeout(()=>{
        this.$store.state.hp[this.id] = this.hitpoints++;
        this.showHP = true;
        this.disablePlusButton = false;
      }, 100);
    },
    hpDown: function() {
      this.showHP = false;
      this.disableMinusButton = true;
      this.showOptions = false;

      setTimeout(()=>{
        this.$store.state.hp[this.id] = this.hitpoints--;
        this.showHP = true;
        this.disableMinusButton = false;
      }, 100);
    }
  }
};
</script>
<style lang="scss" scoped>
  svg {
    display: block;
    margin: 0 auto;
    width: 95px;
    height: 80px;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  .hitpoints-score {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;

    margin: 0; padding: 0;
    font-size: 56px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    border: 0;
    outline: none;
  }

  .button-group {
    margin: 16px auto 32px;
    max-width: 150px;

    .plusbtn,
    .minusbtn {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0 8px;
      padding: 0;
      width: 88px;

      font-size: 44px;
      line-height: 1;
      color: #fff;
      text-decoration: none;
      background: transparent;
      border: 0;

      cursor: pointer;
      outline: none;
      appearance: none;
      user-select: none;

      &[disabled] {
        pointer-events: none;
        opacity: 0.5;
        background-color: transparent;
      }
    }
  }
</style>
