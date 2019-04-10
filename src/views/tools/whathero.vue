<template>
  <div class="container pickhero">
    <div class="welcome">{{ heading }} <strong>{{ hero }}</strong>!</div>

    <div class="powers">
      <table class="table is-narrow">
        <tr>
          <th>Daily Powers</th>
          <td><span v-for="power in heroDailyPowers" :key="power.id">{{ power }}</span></td>
        </tr>
        <tr>
          <th>At-Will Powers</th>
          <td><span v-for="power in heroAtWillPowers" :key="power.id">{{ power }}</span></td>
        </tr>
        <tr>
          <th>Utility Powers</th>
          <td><span v-for="power in heroUtilityPowers" :key="power.id">{{ power }}</span></td>
        </tr>
      </table>


      

      <button type="button" class="button is-primary is-large is-fullwidth" @click="pickHero">Pick another one</button>
    </div>
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

  .welcome {
    margin: 32px auto;
    font-size: 10vw;
    text-align: center;

    strong {
      text-transform: capitalize;
    }
  }

  .powers {
    margin: 0 auto;
    max-width: 480px;

    .table { 
      margin: 0 auto 32px; 
      background: transparent;

      tr, th, td {
        line-height: 1.5;
        background: transparent;
        border: 0;
      }

      td span {
        display: block;
      }
    }
  }
}
</style>

