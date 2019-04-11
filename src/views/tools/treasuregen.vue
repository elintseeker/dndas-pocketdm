<template>
  <div class="content generator">
    <router-link :to="{ name: 'tools' }" class="button-back">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 256 512">
        <path fill="currentColor" d="M238 476l8-8c4-4 4-12 0-17L50 256 246 61c4-5 4-13 0-17l-8-8c-4-4-12-4-16 0L10 248c-4 4-4 12 0 16l212 212c4 4 12 4 16 0z"/>
      </svg>
    </router-link>

    <div class="results">
      <strong v-if="treasureCount === null"> -- </strong>
      <strong v-else-if="treasureCount === 'card'" class="gold"><span v-if="showCount">Treasure Card</span></strong>
      <strong v-else><span v-if="showCount">{{ treasureCount }} GP</span></strong>
    </div>

    <div class="footer-buttons">
      <button type="button" class="button is-primary is-large is-fullwidth" @click="pickTreasure" :disabled="disableButton">Treasure!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "monstergen",
  data() {
    return {
      treasureCount: null,
      treasureTokens: [100, 100, 100, 100, 100, 200, 200, 300, 400, "card"],
      treasureLimit: null,
      showCount: false,
      disableButton: false
    };
  },
  methods: {
    pickTreasure: function(){
      const vm = this;
      let index;
      let seed = (Math.random() * 1).toFixed(2);

      vm.showCount = false;

      index = Math.floor(Math.random() * vm.treasureTokens.length);

      // Make treasure card rarer... randomize again
      if(vm.treasureTokens[index] === 'card' && seed <= 0.48) {
        console.log('Hmm, treasure card? Not quite... ', seed);
        vm.pickTreasure();
      } else {
        vm.treasureCount = vm.treasureTokens[index];
      }

      setTimeout(()=>{
        vm.showCount = true;
        vm.disableButton = true;

        setTimeout(()=>{
          vm.disableButton = false;
        }, 700);
      }, 100);
    }
  }
};
</script>

<style lang="scss" scoped>
.generator {
  margin: 0 auto;
  padding: 16px;
  text-align: center;
  max-width: 480px;
}

.results {
  min-height: 128px;

  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
  }

  .gold { color: #ebb43e; }
}
</style>