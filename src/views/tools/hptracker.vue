<template>
  <div class="content">
    <p class="description">{{ $route.meta.description }}</p>

    <div class="hp-track">
      <div class="is-centered">
        <h2 class="xed-title" v-if="heroes > 1">Hero 1</h2>
        <compHPTrack id="hero1" :herohp="$store.state.hp.hero1" />
      </div>
      <div class="is-centered" v-show="heroes > 1">
        <h2 class="xed-title">Hero 2</h2>
        <compHPTrack id="hero2" :herohp="$store.state.hp.hero2" />
      </div>
      <div class="is-centered" v-show="heroes > 2">
        <h2 class="xed-title">Hero 3</h2>
        <compHPTrack id="hero3" :herohp="$store.state.hp.hero3" />
      </div>
      <div class="is-centered" v-show="heroes > 3">
        <h2 class="xed-title">Hero 4</h2>
        <compHPTrack id="hero4" :herohp="$store.state.hp.hero4" />
      </div>
    </div>

    <div class="separator is-centered">
      <h2 class="xed-title">Number of heroes</h2>
      <div class="form-select">
        <select v-model="heroes" @change="numHeroes">
          <option value="1" selected>1 Hero</option>
          <option value="2">2 Heroes</option>
          <option value="3">3 Heroes</option>
          <option value="4">4 Heroes</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import hptrack from "@/components/HPtracker";
export default {
  name: 'hptracking',
  components: {
    'compHPTrack': hptrack
  },
  data: function(){
    return {
      heroes: this.$store.state.hp.heroes
    }
  },
  methods: {
    numHeroes: function() {
      this.$store.state.hp.heroes = this.heroes;
    }
  }
};
</script>
<style lang="scss" scoped>
.hp-track {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
  transition: width 300ms linear;

  & > div {
    flex: 1;
    padding: 16px;
  }
}

.separator {
  margin: 0 auto;

  .form-select {
    max-width: 288px;
  }
}
</style>
