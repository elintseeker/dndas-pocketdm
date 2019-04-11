<template>
  <div class="content monstergen">
    <router-link :to="{ name: 'tools' }" class="button-back">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 256 512">
        <path fill="currentColor" d="M238 476l8-8c4-4 4-12 0-17L50 256 246 61c4-5 4-13 0-17l-8-8c-4-4-12-4-16 0L10 248c-4 4-4 12 0 16l212 212c4 4 12 4 16 0z"/>
      </svg>
    </router-link>

    <div class="mode">
      <strong class="red" v-if="difficulty == 3">Hard mode</strong>
      <strong class="blue" v-else-if="difficulty == 1">Easy mode</strong>
      <span v-else>&nbsp;</span>
    </div>

    <div class="monstercount">
      <strong v-if="monsterCount === null"> -- </strong>
      <strong v-else><span v-if="showCount">{{ monsterCount }} Monsters</span></strong>
    </div>

    <div class="footer-buttons">
      <button type="button" class="button is-primary is-large is-fullwidth" @click="pickMonsters">Get me some monsters</button>
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
      showCount: false
    }
  },
  methods: {
    pickMonsters: function(){
      const vm = this;
      let index;

      vm.showCount = false;

      if (vm.difficulty === '3') {
        index = Math.floor(Math.random() * vm.monsterTokensHard.length);
        console.error('hard mode');
        vm.monsterCount = vm.monsterTokensHard[index];
      } else if (vm.difficulty === '1') {
        index = Math.floor(Math.random() * vm.monsterTokensEasy.length);
        vm.monsterCount = vm.monsterTokensEasy[index];
        console.error('chicken!');
      } else {
        index = Math.floor(Math.random() * vm.monsterTokens.length);
        vm.monsterCount = vm.monsterTokens[index];
      }

      setTimeout(()=>{
        vm.showCount = true;
      }, 100);
    }
  }
}
</script>

<style lang="scss" scoped>
.monstergen {
  margin: 0 auto;
  padding: 16px;
  text-align: center;
  max-width: 480px;
}

.monstercount {
  min-height: 128px;

  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
  }
}

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


