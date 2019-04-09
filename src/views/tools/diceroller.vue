<template>
  <div class="roller">
    <div class="wrap">
      <div class="result" v-if="rolled !== 0">{{ rolled }}</div>
      <div class="result" v-else>d20</div>

      <button type="button" @click="roll()" :disabled="disabledButton">Roll d20</button>
      <button type="button" @click="reset">Reset</button>

      <div class="roller-history" v-if="rolledHistory.length">
        <strong class="sub-title">Roll History ({{ rollHistoryLimit }} rolls max):</strong>

        <ul>
          <li v-for="item in rolledHistory" :key="item.id">{{ item }}</li>
        </ul>
      </div>
    </div>
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
    font-size: 8em;
  }

  .roller { 
    margin-top: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center; 

    .wrap {
      max-width: 320px;
    }
  }

  .roller-history { 
    margin: 16px auto; 
    max-width: 288px; 

    .sub-title { 
      display: block;
      margin-bottom: 16px; 
    }

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


