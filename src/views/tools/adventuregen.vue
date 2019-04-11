<template>
  <div class="content generator adventure">
		<p class="adv-intro" v-if="plot === 'retrieve'">{{ intro }} <strong>{{ questItem }}</strong></p>
    <p class="adv-intro" v-else-if="plot === 'hunt'">{{ intro }} <strong>{{ questVillain }}</strong></p>
    <p class="adv-intro" v-else>{{ intro }} <strong>{{ questVillain }}</strong></p>
  </div>
</template>

<script>
export default {
  name: 'adventuregen',
  data: function(){
    return {
      plots: ['retrieve', 'hunt', 'rescue'],
      plot: null,
      questIntrosList: null,
      intro: null,
      questItemList: null,
      questItem: null,
      namedtiles: null,
      villains: null,
      questVillain: null
    };
  },
  methods: {
    getRandomNum: function(max){
      return Math.floor(Math.random() * max);
    },
    loadData: function(){
      fetch('/data/adventure.json')
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          this.questIntrosList = data;
          console.log(this.questIntrosList);

          this.getIntro();
        });

      fetch('/data/questitems.json')
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          this.questItemList = data;
          this.getQuestItem();
        });

      fetch('/data/villains.json')
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          this.villains = data;
          this.getQuestVillain();
        });
    },
    getIntro: function(){
      const vm = this;
      let seed = vm.getRandomNum(vm.plots.length);
      let plot = vm.plots[seed];
      let sel  = vm.getRandomNum(vm.questIntrosList[plot].length);

      vm.plot = plot;
      console.log(plot);
      console.log(vm.intro = vm.questIntrosList[plot][sel]);
    },
    getQuestItem: function(){
      const vm = this;
      let seed = vm.getRandomNum(vm.questItemList['cr'].length);
      console.log(seed);
      vm.questItem = vm.questItemList['cr'][seed];
    },
    getQuestVillain: function(){
      const vm = this;
      let seed = vm.getRandomNum(vm.villains['CR'].length);
      console.log(seed);
      vm.questVillain = vm.villains['CR'][seed];
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadData();
    });
  }
}
</script>

<style lang="scss" scoped>
</style>





