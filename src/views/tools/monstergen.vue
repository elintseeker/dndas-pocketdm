<template>
  <div class="content generator">
    <div class="mode">
      <strong class="red" v-if="difficulty == 3">Hard mode</strong>
      <strong class="blue" v-else-if="difficulty == 1">Easy mode</strong>
      <span v-else>&nbsp;</span>
    </div>

    <div class="results">
      <strong v-if="monsterCount === null">&mdash;</strong>
      <strong v-else><span v-if="showCount">{{ monsterCount }} Monsters</span></strong>
    </div>

    <div class="footer-buttons">
      <button type="button" class="button is-primary is-large is-fullwidth" @click="pickMonsters" :disabled="disableButton">Give me something to slay!</button>
    </div>

    <input type="range" min="1" max="3" steps="1" list="tickmarks" v-model="difficulty">
    <datalist id="tickmarks">
      <option value="1" label="Chicken" />
      <option value="2" label="Normal" />
      <option value="3" label="Hardcore" class="red" />
    </datalist>
  </div>
</template>

<script>
export default {
  name: "monstergen",
  data() {
    return {
      monsterCount: null,
      difficulty: null,
      monsterTokens:     [0, 1, 1, 1, 1, 1, 2, 2, 2, 3],
      monsterTokensHard: [1, 1, 2, 2, 2, 2, 3, 3, 3, 4],
      monsterTokensEasy: [0, 0, 0, 0, 0, 1, 1, 1, 1, 2],
      showCount: false,
      disableButton: false
    }
  },
  methods: {
    pickMonsters: function(){
      const vm = this;
      let index;

      vm.showCount = false;

      if (vm.difficulty === '3') {
        index = vm.$getRandomNum(vm.monsterTokensHard.length);
        console.error('hard mode');
        vm.monsterCount = vm.monsterTokensHard[index];
      } else if (vm.difficulty === '1') {
        index = vm.$getRandomNum(vm.monsterTokensEasy.length);
        vm.monsterCount = vm.monsterTokensEasy[index];
        console.error('chicken!');
      } else {
        index = vm.$getRandomNum(vm.monsterTokens.length);
        vm.monsterCount = vm.monsterTokens[index];
      }

      setTimeout(()=>{
        vm.showCount = true;
        vm.disableButton = true;
        setTimeout(()=>{
          vm.disableButton = false;
        }, 500);
      }, 100);
    }
  },
  mounted() {
    this.$nextTick(() => {
      // this.pickMonsters();
    });
  }
}
</script>

<style lang="scss" scoped>
.mode {
  font-size: 18px;
  text-transform: uppercase;

  .blue { color: skyblue; }
}

input[type="range"] {
  margin-top: 32px;
  width: 100%;
}

datalist {
  display: flex;
  align-items: center;
  font-size: 12px;

  option {
    width: 33.333%;
    font-weight: bold;
    &:first-child { color: skyblue; text-align: left; }
    &:last-child { text-align: right; }
  }
}
</style>