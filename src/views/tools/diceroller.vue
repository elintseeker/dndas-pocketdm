<template>
  <div class="content generator">
    <p class="desc">A d20 dice roller</p>

    <div class="results" v-if="rolled !== 0"><strong>{{ rolled }}</strong></div>
    <div class="results dice-icon" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 480 512">
        <path fill="currentColor" d="M106.8 215L1.2 371a8 8 0 0 0 6 12l208.2 22.2L106.7 215zM7.3 315.5l75.3-122.3-76.6-46a4 4 0 0 0-6.1 3.4v162.8c0 4 5.3 5.6 7.4 2.1zm10.8 108.2l194.5 87.7A8 8 0 0 0 224 504v-65.7L20.4 416c-4.4-.5-6.2 5.6-2.2 7.6zm81.3-257.8l79.9-143c4.3-7-3.6-15.2-10.8-11L17.8 110.2a4 4 0 0 0 .1 6.8l81.6 48.7zM240 176h109.2L253.6 7.6c-3.1-5-8.3-7.6-13.6-7.6s-10.5 2.5-13.6 7.6L130.8 176H240zm234-28.9l-76.7 46 75.3 122.3c2.1 3.5 7.4 2 7.4-2V150.4a4 4 0 0 0-6-3.4zm-93.5 18.7l81.6-48.7a4 4 0 0 0 0-6.8L311.5 11.7c-7.2-4-15.1 4.1-10.8 11.2l80 143zm79 250.2L256 438.3V504a8 8 0 0 0 11.3 7.3l194.5-87.7c4-2 2.2-8-2.3-7.6zm-86.3-201L264.6 405.3 473 383a8 8 0 0 0 6-12.2L373.2 215.1zM240 208H139.6L240 383.8 340.4 208H240z"/>
      </svg>
    </div>

    <button type="button" class="button is-primary is-large is-fullwidth" @click="roll()" :disabled="disableButton">Roll em!</button>

    <p>&nbsp;</p>

    <div class="roller-history" v-if="rolledHistory.length">
      <strong class="subtitle is-6">Roll History <small>({{ rollHistoryLimit }} max)</small>:</strong>

      <ul>
        <li v-for="item in rolledHistory" :key="item.id">{{ item }}</li>
      </ul>
    </div>

    <p class="is-centered" v-if="rolled !== 0">
      <a href="#" class="reset red" v-on:click.prevent="reset">Reset/Clear</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'd20roller',
  data: function(){
    return {
      rolled: 0,
      rolledHistory: [],
      rollHistoryLimit: 20,
      disableButton: false
    };
  },
  methods: {
    roll: function() {
      const vm = this;
      vm.rolled = Math.floor(Math.random() * 20 + 1);
      vm.rolledHistory.push(vm.rolled);

      vm.disableButton = true;

      // last 25 rolls
      if (vm.rolledHistory.length >= vm.rollHistoryLimit) {
        vm.disableButton = true;
      } else {
        setTimeout(()=>{
          vm.disableButton = false;
        }, 500);
      }
    },
    reset: function() {
      const vm = this;
      vm.rolled = 0;
      vm.rolledHistory = [];
      vm.disableButton = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  .dice-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    .svg-icon {
      width: 48px;
      height: 48px;
    }
  }
  .reset { text-decoration: none; border-bottom: 0; }

  .roller-history {
    margin: 16px auto 0;
    max-width: 320px;

    .subtitle {
      margin-bottom: 16px;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-gap: 8px;

      margin: 16px auto;
      padding: 0;
      list-style: none;
    }
  }
</style>


