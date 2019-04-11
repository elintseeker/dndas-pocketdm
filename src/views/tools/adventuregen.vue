<template>
  <div class="content generator adventure">
		<p>{{ intro }}</p>
  </div>
</template>

<script>
export default {
  name: 'adventuregen',
  data: function(){
    return {
      questIntro: null,
      intro: null,
      questitems: null,
      namedtiles: null,
      villains: null
    }
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
          this.questIntro = JSON.stringify(data);
          JSON.parse(this.questIntro);
          console.log(this.questIntro);
        });
    },
    loadItemData: function(){
      fetch('/data/questitems.json')
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          this.questitems = JSON.stringify(data);
          console.log(JSON.parse(this.questitems)['cr'][this.getRandomNum(3)]);
        });
    },
    getIntro: function(){
      console.log(this.jsonData.intro);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.loadData();
      this.loadItemData();
    });
  }
}
</script>

<style lang="scss" scoped>

</style>





