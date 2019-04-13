<template>
  <div class="content generator">
    <div class="results" v-if="rolled !== 0"><strong>{{ rolled }}</strong></div>
    <div class="results dice-icon" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 480 512">
        <path fill="currentColor" d="M106.8 215L1.2 371a8 8 0 0 0 6 12l208.2 22.2L106.7 215zM7.3 315.5l75.3-122.3-76.6-46a4 4 0 0 0-6.1 3.4v162.8c0 4 5.3 5.6 7.4 2.1zm10.8 108.2l194.5 87.7A8 8 0 0 0 224 504v-65.7L20.4 416c-4.4-.5-6.2 5.6-2.2 7.6zm81.3-257.8l79.9-143c4.3-7-3.6-15.2-10.8-11L17.8 110.2a4 4 0 0 0 .1 6.8l81.6 48.7zM240 176h109.2L253.6 7.6c-3.1-5-8.3-7.6-13.6-7.6s-10.5 2.5-13.6 7.6L130.8 176H240zm234-28.9l-76.7 46 75.3 122.3c2.1 3.5 7.4 2 7.4-2V150.4a4 4 0 0 0-6-3.4zm-93.5 18.7l81.6-48.7a4 4 0 0 0 0-6.8L311.5 11.7c-7.2-4-15.1 4.1-10.8 11.2l80 143zm79 250.2L256 438.3V504a8 8 0 0 0 11.3 7.3l194.5-87.7c4-2 2.2-8-2.3-7.6zm-86.3-201L264.6 405.3 473 383a8 8 0 0 0 6-12.2L373.2 215.1zM240 208H139.6L240 383.8 340.4 208H240z"/>
      </svg>
    </div>

    <button type="button" class="button is-primary is-large is-fullwidth" v-if="rolls === maxRolls" disabled>Roll d20</button>
    <button type="button" class="button is-primary is-large is-fullwidth" @click="roll()" :disabled="disableButton" v-else >Roll d20</button>

    <p>&nbsp;</p>

    <div class="roller-history" v-if="rolls > 0">
      <strong class="subtitle is-6">Roll History <small>({{ maxRolls }} max)</small>:</strong>

      <ul>
        <li v-for="item in rolledHistory" :key="item.id">{{ item }}</li>
      </ul>

      <p class="is-centered">
        <a href="#" class="reset red" v-on:click.prevent="reset">Reset/Clear</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'd20roller',
  data: function(){
    return {
      rolled: 0,
      maxRolls: 20,
      disableButton: false
    };
  },
  methods: {
    roll: function() {
      const vm = this;
      if (vm.rolls === vm.maxRolls) {
        vm.disableButton = true;
      } else {
        vm.rolled = Math.floor(Math.random() * vm.maxRolls + 1);
        vm.disableButton = true;
        vm.rolledHistory.push(vm.rolled);
        vm.$store.state.rolls++;

        setTimeout(()=>{
          vm.disableButton = false;
        }, 500);
      }
    },
    reset: function() {
      const vm = this;
      vm.rolled = 0;
      vm.disableButton = false;
      vm.$store.state.rolls = 0;
      vm.$store.state.rollHistory = [];
    }
  },
  computed: {
    rolledHistory: function(){
      return this.$store.state.rollHistory;
    },
    rolls: function(){
      return this.$store.state.rolls;
    }
  }
};
</script>