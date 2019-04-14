<template>
  <div class="content generator">
    <div class="results" v-if="rolled !== 0"><strong>{{ rolled }}</strong></div>
    <div class="results dice-icon" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
        <use href="#icon-dice" />
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