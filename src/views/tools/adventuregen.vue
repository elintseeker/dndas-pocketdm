<template>
  <div class="content generator adventure">
    <div class="adv-intro">
      <div v-if="questType === 'fetch'">    {{ questIntro }} <strong>{{ questItem }}</strong>.</div>
      <div v-else-if="questType === 'hunt'">{{ questIntro }} <strong>{{ questVillain }}</strong>!</div>
      <div v-else>
        {{ questIntro }}...
      </div>
    </div>

    <h2>Setup</h2>

    <h3>Components for this Adventure</h3>

    <ul class="components">
      <li>Starting Tile</li>
      <li>{{ questTiles }}</li>
      <li v-if="questType === 'hunt'">{{ questVillain }} monster card and figure</li>
      <li v-if="questType === 'fetch'">{{ questItem }} card and token</li>
      <li v-if="questType === 'rescue'">[ objective ] token.</li>
    </ul>

    <p>Place the <strong>Starting Tile</strong> on the table and place each hero on any square of the tile.</p>

    <p>Shuffle the rest of the Dungeon tiles stack. Take 3 tiles from it, and shuffle the <strong>{{ questTiles }}</strong> tile
      into those tiles. Then place the shuffled <strong>{{ questTiles }} stack</strong> after the <strong>8th</strong> tile of
      the Dungeon tile stack. (The {{ questTiles }} tile should appear between the 9th and 12th tile in the adventure.)</p>

    <h3>Special Rules</h3>

    <p v-if="questType === 'rescue'"><strong>{{ questTiles }} tile:</strong> When this quest tile is drawn. Place the <b>[objective] token</b> at the center of this tile. Draw 2 Monsters and place it on this tile. Monsters activate after interacting with the [objective].</p>

    <p><strong>Victory: </strong> The heroes win the adventure when they
      <span v-if="questType === 'fetch'">acquire the <strong>{{ questItem }}</strong>.</span>
      <span v-else-if="questType === 'hunt'">defeat <strong>{{ questVillain }}</strong>.</span>
      <span v-else>rescued the <strong>[objective]</strong> and safely exited the dungeon.</span></p>

    <p><strong>Defeat:</strong> The heroes lose the adventure if any hero has 0 Hit Points remaining at the start of his or her
      turn and there are no Healing Surges remaining.</p>

    <p><strong>Aftermath:</strong> Completing the adventure without using any Healing Surges, each hero receives 400 gold pieces.</p>

    <p>Completing the adventure, but using at least one Healing Surge, they each receive 200 gold pieces.</p>

  </div>
</template>

<script>
export default {
  name: 'adventuregen',
  data: function(){
    return {
      type: ['hunt', 'fetch', 'rescue'],
      introList: null,
      itemList: null,
      villainsList: null,
      tilesList: null,
      questType: null,
      questIntro: null,
      questItem: null,
      questVillain: null,
      questTiles: null
    };
  },
  methods: {
    getRandomNum: function(max){
      return Math.floor(Math.random() * max);
    },
    initData: function(){
      // get fluff
      fetch('/data/adventure.json')
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          this.introList = data.plots;
          this.getIntro();
        });

      // get quest items
      fetch('/data/questitems.json')
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          this.itemList = data;
          this.getQuestItem('CR');
        });

      // get villains
      fetch('/data/villains.json')
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          this.villainsList = data;
          this.getQuestVillain('CR');
        });

      // get tiles
      fetch('/data/namedtiles.json')
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          this.tilesList = data;
          this.getQuestTiles('CR');
        });
    },
    getIntro: function(){
      const vm = this;
      let l = vm.type.length;
      let q = vm.getRandomNum(l);
      let plot = vm.type[q];
      let pl = Object.keys(vm.introList).length;
      let pq = vm.getRandomNum(pl);

      vm.questType = plot;
      vm.questIntro = vm.introList[plot][pq];
    },
    getQuestItem: function(set){
      const vm = this;
      let seed = vm.getRandomNum(vm.itemList[set].length);
      vm.questItem = vm.itemList[set][seed];
    },
    getQuestVillain: function(set){
      const vm = this;
      let seed = vm.getRandomNum(vm.villainsList[set].length);
      vm.questVillain = vm.villainsList[set][seed];
    },
    getQuestTiles: function(set, num = 1){
      const vm = this;
      let seed = vm.getRandomNum(vm.tilesList[set].length);
      vm.questTiles = vm.tilesList[set][seed];
    }

  },
  mounted() {
    this.$nextTick(() => {
      this.initData();
    });
  }
}
</script>

<style lang="scss" scoped>
</style>





