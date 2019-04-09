<template>
  <div class="roller">
    <div class="result" v-if="rolled !== 0">{{ rolled }}</div>
    <div class="result" v-else>d20</div>

    <button type="button" class="button is-primary is-large is-fullwidth" @click="roll()" :disabled="disabledButton">Roll d20</button>

    <div class="roller-history" v-if="rolledHistory.length">
      <strong class="subtitle is-6">Roll History <small>({{ rollHistoryLimit }} max)</small>:</strong>

      <ul>
        <li v-for="item in rolledHistory" :key="item.id">{{ item }}</li>
      </ul>
    </div>

    <p class="is-centered" v-if="rolled !== 0"><a href="#" class="button is-text" @click="reset">Reset/Clear</a></p>
  </div>
</template>

<script>
export default {
  name: 'd20roller',
  data: function(){
    return {
      disabledButton: false,
      rolled: 0,
      rolledHistory: [],
      rollHistoryLimit: 25
    }
  },
  methods: {
    roll: function() {
      const vm = this;
      vm.rolled = Math.floor(Math.random() * 20 + 1);
      vm.rolledHistory.push(vm.rolled);

      // last 25 rolls
      if (vm.rolledHistory.length >= vm.rollHistoryLimit) {
        vm.disabledButton = true;
      }
    },
    reset: function() {
      const vm = this;
      vm.rolled = 0;
      vm.rolledHistory = [];
      vm.disabledButton = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .result {
    margin: 0 auto;
    font-size: 8em;
  }

  .roller { 
    margin: 32px auto 16px;
    max-width: 288px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center; 
  }

  .roller-history { 
    margin: 16px auto 0; 

    .subtitle { 
      margin-bottom: 16px; 
    }

    ul {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 4px;

      margin: 16px 0;
      padding: 0;
      list-style: none;
    }
  }
</style>


