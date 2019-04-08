<template>
  <div class="roller">
    <div class="result" v-if="rolled !== 0">{{ rolled }}</div>
    <div class="result" v-else>d20</div>
    <button type="button" @click="roll(20)" :disabled="disabledButton">Roll d20</button>
    <button type="button" @click="reset">Reset</button>

    <div class="roller-history" v-if="rolledHistory.length">
      <h3>Roll History (20 rolls max):</h3>
      <ul>
        <li v-for="item in rolledHistory">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'roller-d20',
  data: function(){
    return {
      disabledButton: false,
      rolled: 0,
      rolledHistory: []
    }
  },
  methods: {
    roll: function(max) {
      const vm = this;
      vm.rolled = Math.floor(Math.random() * max + 1);
      vm.rolledHistory.push(vm.rolled);

      if (vm.rolledHistory.length >= 20) {
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
    font-size: 8em;
  }

  .roller { text-align: center; }
  .roller-history { 
    margin: 0 auto; 
    max-width: 288px; 

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      display: flex;
      flex-wrap: wrap;
      align-items: center;

      li { 
        margin: 0 1px 8px 1px;
        min-width: 55px;
      }
    }
  }
</style>


