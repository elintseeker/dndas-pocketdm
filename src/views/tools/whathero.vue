<template>
  <div class="container pickhero">
    <div class="welcome">{{ heading }} <strong>{{ hero }}</strong>!</div>

    <table class="table is-narrow powers">
      <tr><th>Daily Powers:</th><td v-for="power in heroDailyPowers" :key="power.id">{{ power }}</td></tr>
      <tr><th>At-Will Powers:</th><td v-for="power in heroAtWillPowers" :key="power.id">{{ power }}</td></tr>
      <tr><th>Utility Powers:</th><td v-for="power in heroUtilityPowers" :key="power.id">{{ power }}</td></tr>
    </table>

    <button type="button" class="button is-primary is-large is-fullwidth" @click="pickHero">Pick another one</button>
  </div>
</template>

<script>
import axios from 'axios';
import { setTimeout } from 'timers';

export default {
  name: "pickhero",
  data () {
    return {
      heroList: null,
      hero: null,
      heroDailyPowers: [],
      heroAtWillPowers: [],
      heroUtilityPowers: [],
      heading: null,
    }
  },
  methods: {
    reset: function(){
      this.heading= null;
      this.hero= null;
      this.heroDailyPowers= [];
      this.heroAtWillPowers= [];
      this.heroUtilityPowers= [];

      console.log('clear');
    },
    loadHeroList: function() {
      axios
        .get('/data/hero.json')
        .then(response => ( 
          this.heroList = response.data 
        ));

      setTimeout(() => {
        this.pickHero();
      }, 100);
    },
    pickHeading: function() {
      const vm = this;
      let headingSeed = Math.floor(Math.random() * vm.heroList.heading.length);
      vm.heading = vm.heroList.heading[headingSeed];
    },
    pickHero: function() {
      const vm = this;

      vm.reset();
      vm.pickHeading();
      
      // get hero
      let heroSeed = Math.floor(Math.random() * Object.keys(vm.heroList.herotype).length);
      vm.hero = Object.keys(vm.heroList.herotype)[heroSeed];

      const herodata = vm.heroList.herotype[vm.hero];
      let dailies = [...herodata.daily]; // copies data to new arrays
      let atwills = [...herodata.atwill];
      let utils = [...herodata.utility];

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
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.loadHeroList();
    });
  }
}
</script>

<style lang="scss" scoped>
.pickhero {
  margin: 0 auto;
  max-width: 480px;

  .welcome {
    margin: 64px 32px 32px;
    font-size: 4vw;
    text-align: center;

    strong {
      text-transform: capitalize;
    }
  }

  .powers {
    margin: 0 auto;
  }

  .table {
    margin-bottom: 32px;
    border: 0;
    background: transparent;

    tr, th, td { 
      font-weight: normal;
      border: 0; 
    }

    td { font-weight: bold; }
  }
}
</style>

