<template>
  <div>
    <p class="description">{{ $route.meta.description }}</p>

    <div class="hp-track">
      <div class="is-centered">
        <h2 class="xed-title" v-if="numHeroesTracker > 1">Hero 1</h2>
        <compHPTrack></compHPTrack>
      </div>
      <div class="is-centered" v-if="numHeroesTracker > 1">
        <h2 class="xed-title">Hero 2</h2>
        <compHPTrack></compHPTrack>
      </div>
      <div class="is-centered" v-if="numHeroesTracker > 2">
        <h2 class="xed-title">Hero 3</h2>
        <compHPTrack></compHPTrack>
      </div>
      <div class="is-centered" v-if="numHeroesTracker > 3">
        <h2 class="xed-title">Hero 4</h2>
        <compHPTrack></compHPTrack>
      </div>
    </div>

    <div class="separator is-centered">
      <h2 class="xed-title">Number of heroes</h2>
      <div class="form-select">
        <select v-model="numHeroesTracker">
          <option value="1" selected>1 Hero</option>
          <option value="2">2 Heroes</option>
          <option value="3">3 Heroes</option>
          <option value="4">4 Heroes</option>
        </select>
      </div>

      <em>*Does not save hero HP state (yet)</em>
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
      'numHeroesTracker': 1
    }
  },
  methods: {
  },
  computed: {
  }
};
</script>
<style lang="scss" scoped>
.hp-track {
  display: flex;
  flex-wrap: wrap;
  transition: width 300ms linear;

  & > div {
    flex: 1;
    padding: 16px 8px;
    min-width: 288px;
  }
}

.separator {
  margin: 0 auto;
  padding: 32px 0;

  .form-select {
    max-width: 288px;
  }
}
</style>
