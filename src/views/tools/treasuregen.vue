<template>
  <div class="content generator">
    <div class="results">
      <strong v-if="treasureCount === null">&mdash;</strong>
      <strong v-else-if="treasureCount === 'card'" class="gold"><span v-if="showCount">Treasure Card</span></strong>
      <strong v-else><span v-if="showCount">{{ treasureCount }} GP</span></strong>
    </div>

    <div class="footer-buttons">
      <button type="button" class="button is-primary is-large is-fullwidth" @click="pickTreasure" :disabled="disableButton">What do I get?</button>
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
        }, 500);
      }, 100);
    }
  },
  mounted() {
    this.$nextTick(() => {
      // this.pickTreasure();
    });
  }
};
</script>

<style lang="scss" scoped>
.results {
  .gold { color: #b99b5c; }
}
</style>