<template>
  <div>
    <div class="container generator">
      <div class="results">
        <div>{{ heading }} <strong>{{ hero }}</strong>!</div>
      </div>

      <div class="powers">
        <h2 class="xed-title is-serif">Powers</h2>
        <table class="table is-narrow">
          <tr>
            <th>Daily:</th>
            <td v-for="power in heroDailyPowers" :key="power.id">{{ power }}</td>
          </tr>
          <tr>
            <th>At-Will:</th>
            <td v-for="power in heroAtWillPowers" :key="power.id">{{ power }}</td>
          </tr>
          <tr>
            <th>Utility:</th>
            <td v-for="power in heroUtilityPowers" :key="power.id">{{ power }}</td>
          </tr>
        </table>

        <button type="button" class="button is-primary is-large is-fullwidth" @click="pickHero" :disabled="disableButton">Pick another one</button>

        <p>&nbsp;</p>

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


      setTimeout(() => {
        vm.pickHero();
      }, 350);
    },
    pickHeading: function() {
      const vm = this;
      let headingSeed = Math.floor(Math.random() * vm.heroList.heading.length);
      vm.heading = vm.heroList.heading[headingSeed];
    },
    pickHero: function() {
      const vm = this;
      let dailies = [], atwills = [], utils = [];

      vm.disableButton = true;

      vm.reset();
      vm.pickHeading();

      // get hero
      let heroSeed = Math.floor(Math.random() * Object.keys(vm.heroList.herotype).length);
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
        let r = Math.floor(Math.random() * dailies.length);
        vm.heroDailyPowers.push(dailies[r]);
        dailies.splice(r, 1);
      }

      // roll for at-will powers
      for(let i = 0; i < herodata.atwillNum; i++) {
        let r = Math.floor(Math.random() * atwills.length);
        vm.heroAtWillPowers.push(atwills[r]);
        atwills.splice(r, 1);
      }

      // roll for utility powers
      for(let i = 0; i < herodata.utilityNum; i++) {
        let r = Math.floor(Math.random() * utils.length);
        vm.heroUtilityPowers.push(utils[r]);
        utils.splice(r, 1);
      }

      setTimeout(()=>{
        vm.disableButton = false;
      }, 500);
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
    margin-bottom: 32px;
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
    margin: 0 auto 32px;
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

.xed-title {
  margin-top: 32px;
}

.hero-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  max-width: 400px;

  margin: 0 auto;
  padding: 16px 0;
  font-size: 14px;
  text-align: left;
}

.note { text-align: center; }
</style>

