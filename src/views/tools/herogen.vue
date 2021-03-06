<template>
  <div>
    <div class="container generator">
      <p class="description">{{ $route.meta.description }}</p>

      <div class="results">
        <div v-if="!showHero">&mdash;</div>
        <div v-else>{{ heading }} <strong>{{ hero }}</strong>!</div>
      </div>

      <div class="powers">
        <h2 class="xed-title is-serif">Powers</h2>
        <table class="table is-narrow">
          <tr>
            <th>Daily:</th>
            <td v-if="!showHero">&mdash;</td>
            <td v-else v-for="power in heroDailyPowers" :key="power.id">{{ power }}</td>
          </tr>
          <tr>
            <th>At-Will:</th>
            <td v-if="!showHero">&mdash;</td>
            <td v-else v-for="power in heroAtWillPowers" :key="power.id">{{ power }}</td>
          </tr>
          <tr>
            <th>Utility:</th>
            <td v-if="!showHero">&mdash;</td>
            <td v-else v-for="power in heroUtilityPowers" :key="power.id">{{ power }}</td>
          </tr>
        </table>

        <div class="button-group">
          <button type="button" class="button is-primary is-large" @click="pickHero" :disabled="disableButton">I need a hero!</button>
          <!-- <button type="button" class="button is-large" @click="saveHero">Save</button> -->
        </div>

        <div class="xed-title is-serif">Options</div>

        <div class="hero-options">
          <label><input type="checkbox" v-model="heroskills.CR">Castle Ravenloft</label>
          <label><input type="checkbox" v-model="heroskills.WoA">Wrath of Ashardalon</label>
          <label><input type="checkbox" v-model="heroskills.LoD">Legend of Drizzt</label>
          <label><input type="checkbox">Temple of Elemental Evil</label>
          <label><input type="checkbox">Tomb of Annihilation</label>
          <label><input type="checkbox">Dungeon of the Mad Mage</label>
        </div>
      </div>
    </div>
    <div class="note"><small>*ToEE, ToA, DMM are not available at the moment.<br> **If you're seeing "N/A" on some character classes, try enabling/disabling other sets.</small></div>
  </div>
</template>

<script>
export default {
  name: "herogen",
  data() {
    return {
      heroList: null,
      hero: null,
      heroDailyPowers: [],
      heroAtWillPowers: [],
      heroUtilityPowers: [],
      heading: null,
      showHero: false,
      disableButton: false
    };
  },
  methods: {
    reset: function(){
      this.heading= null;
      this.hero= null;
      this.heroDailyPowers= [];
      this.heroAtWillPowers= [];
      this.heroUtilityPowers= [];
    },
    loadHeroList: function() {
      const vm = this;

      fetch('/data/hero.json')
        .then(function(response) {
          return response.json();
        }).then((data)=>{
          vm.heroList = data;
        });
    },
    pickHeading: function() {
      const vm = this;
      let headingSeed = vm.$getRandomNum(vm.heroList.heading.length);
      vm.heading = vm.heroList.heading[headingSeed];
    },
    pickHero: function() {
      const vm = this;
      let dailies = [], atwills = [], utils = [];

      vm.showHero = false;
      vm.disableButton = true;

      vm.reset();
      vm.pickHeading();

      // get hero
      let heroSeed = vm.$getRandomNum(Object.keys(vm.heroList.herotype).length);
      // set hero
      vm.hero = Object.keys(vm.heroList.herotype)[heroSeed];
      // vm.hero = 'rogue';

      if (vm.hero === 'paladin' && !vm.heroskills.WoA) {
        // set to closest hero class
        vm.hero = 'fighter';
        console.log('paladin?!?');
      }

      const herodata = vm.heroList.herotype[vm.hero];

      // dirty! there is a better way of doing this
      if (vm.heroskills.CR) {
        // console.log('CR checked');
        const crdailies = herodata.CR.daily; // copies data to new arrays
        const cratwills = herodata.CR.atwill;
        const crutils   = herodata.CR.utility;

        dailies = dailies.concat(crdailies);
        atwills = atwills.concat(cratwills);
        utils   = utils.concat(crutils);
      }

      if (vm.heroskills.WoA) {
        // console.log('WoA checked');
        const woadailies = herodata.WoA.daily; // copies data to new arrays
        const woaatwills = herodata.WoA.atwill;
        const woautils   = herodata.WoA.utility;

        dailies = dailies.concat(woadailies);
        atwills = atwills.concat(woaatwills);
        utils = utils.concat(woautils);
      }

      if (vm.heroskills.LoD) {
        // console.log('LoD checked');
        const d = herodata.LoD.daily; // copies data to new arrays
        const a = herodata.LoD.atwill;
        const u = herodata.LoD.utility;

        dailies = dailies.concat(d);
        atwills = atwills.concat(a);
        utils = utils.concat(u);
      }

      // console.log(dailies);

      // roll for daily powers
      for(let i = 0; i < herodata.dailyNum; i++) {
        let r = vm.$getRandomNum(dailies.length);
        vm.heroDailyPowers.push(dailies[r]);
        dailies.splice(r, 1);
      }

      // roll for at-will powers
      for(let i = 0; i < herodata.atwillNum; i++) {
        let r = vm.$getRandomNum(atwills.length);
        vm.heroAtWillPowers.push(atwills[r]);
        atwills.splice(r, 1);
      }

      // roll for utility powers
      for(let i = 0; i < herodata.utilityNum; i++) {
        let r = vm.$getRandomNum(utils.length);
        vm.heroUtilityPowers.push(utils[r]);
        utils.splice(r, 1);
      }

      setTimeout(()=>{
        vm.showHero = true;
        vm.disableButton = false;
      }, 500);
    },
    saveHero: function(){

    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadHeroList();
    });
  },
  computed: {
    heroskills: function() {
      return this.$store.state.heroskills;
    }
  }
}
</script>

<style lang="scss" scoped>
.generator {
  .results {
    font-size: 52px;
    min-height: 128px;
  }

  strong {
    color: #fff;
  }
}

.powers {
  margin: 0 auto;
  max-width: 480px;

  .table {
    margin: 0 auto 24px;
    background: transparent;

    tr, th, td {
      text-align: left;
      background: transparent;
      border: 0;
    }

    td span {
      display: block;
    }
  }
}

.hero-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  max-width: 400px;

  margin: 0 auto;
  padding: 8px 0;
  font-size: 14px;
  text-align: left;
}

.note { margin-top: 16px; text-align: center; }
</style>

