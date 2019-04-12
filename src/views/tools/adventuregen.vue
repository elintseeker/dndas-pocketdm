<template>
  <div class="content generator adventure">
    <a href="#" class="adv-optiontoggle" v-bind:class="{ 'xed-title': showOptions }" v-on:click.prevent="toggleOptions"><span>Adventure Options</span></a>

    <div class="adv-options" v-show="showOptions">
      <div>
        <div class="form-select">
          <select v-model="game">
            <option value="CR">Castle Ravenloft</option>
            <option value="WoA">Wrath of Ashardalon</option>
            <option value="LoD">Legend of Drizzt</option>
          </select>
        </div>
        <label><input type="checkbox" v-model="addTreasure"> Include Treasure Cards</label>
        <label><input type="checkbox" v-model="addVillains"> Include Villains</label>
        <label><input type="checkbox" v-model="addExtraTile"> Include Extra Named Tile</label>
        <button type="button" class="button is-primary is-fullwidth" @click="generateAdventure">Generate adventure</button>
      </div>
    </div>

    <div v-show="showAdv">
      <div class="adv-intro">
        <div v-if="questType === 'fetch'">    {{ questIntro }} <strong>{{ questItem }}</strong>.</div>
        <div v-else-if="questType === 'hunt'">{{ questIntro }} <strong>{{ questVillain }}</strong>!</div>
        <div v-else>
          {{ questIntro }}
        </div>
      </div>

      <h2>Setup</h2>

      <h3 class="xed-title">Components for this Adventure</h3>

      <ul class="components">
        <li>Starting Tile</li>
        <li>{{ questTiles }}</li>
        <li v-if="addExtraTile">{{ questExtraTile }}</li>
        <li v-if="questType === 'hunt'">{{ questVillain }} monster card and figure</li>
        <li v-if="questType === 'fetch'">{{ questItem }} card and token</li>
        <li v-if="questType === 'rescue'">[ objective ] token.</li>
        <li v-if="questType !== 'fetch' && addTreasure === true">{{ questItem }} card and token</li>
        <li v-if="questType !== 'hunt'  && addVillains  === true">{{ questVillain }} monster card and figure</li>
      </ul>

      <p>Place the <b>Starting Tile</b> on the table and place each hero on any square of the tile.</p>

      <div v-if="addExtraTile">
        <p>Shuffle the rest of the Dungeon tiles stack. Take 3 tiles from it, and shuffle the <b>{{ questTiles }}</b> tile
          into those tiles to form the <b>{{ questTiles }} stack</b>. Take the 3 more tiles from the Dungeon stack and shuffle with 
          the <b>{{ questExtraTile }}</b> tile to form the <b>{{ questExtraTile }} stack</b>.</p>
          
        <p>Place the <b>{{ questExtraTile }} stack</b> after the <b>6th tile</b> of the Dungeon stack. Then place the <b>{{ questTiles }} stack</b> after the <b>10th</b> tile of the Dungeon tile stack.</p>
      </div>
      <div v-else>
        <p>Shuffle the rest of the Dungeon tiles stack. Take 3 tiles from it, and shuffle the <b>{{ questTiles }}</b> tile
          into those tiles. Then place the shuffled <b>{{ questTiles }} stack</b> after the <b>8th</b> tile of
          the Dungeon tile stack. (The {{ questTiles }} tile should appear between the 9th and 12th tile in the adventure.)</p>
      </div>

      <h3 class="xed-title">Special Rules</h3>

      <p v-if="addExtraTile && !addVillains"><b>{{ questExtraTile }} tile:</b> When {{ addExtraTile }} tile has been revealed, draw 2 Monsters for this tile.</p>

      <p>
        <b>{{ questTiles }} tile:</b> When this tile has been revealed. 
        <span v-if="questType == 'fetch'">
          Instead of placing a Monster, place <b>{{ questItem }}</b> on this tile instead. Then draw 2 Monsters from the Monster Deck.
        </span>
        <span v-if="questType == 'hunt'">
          Instead of placing a Monster, place <b>{{ questVillain }}</b> on this tile instead and then draw an <b>Encounter Card.</b>
        </span>
        <span v-if="questType === 'rescue'">Place the <b>[objective] token</b> at the center of this tile. Draw 2 Monsters and place it on this tile.</span>
      </p>

      <p v-if="addExtraTile && addVillains">
        <b>{{ questExtraTile }} tile:</b> When {{ addExtraTile }} tile has been revealed. Instead of placing a Monster, place <b>{{ questVillain }}</b> on this tile instead.
      </p>

      <p>
        <strong>Victory: </strong> The heroes win the adventure when they
        <span v-if="questType === 'fetch'">acquire the <strong>{{ questItem }}</strong>.</span>
        <span v-else-if="questType === 'hunt'">defeat <strong>{{ questVillain }}</strong>.</span>
        <span v-else>rescued the <strong>[objective]</strong> and safely exited the dungeon.</span>
      </p>

      <p><strong>Defeat:</strong> The heroes lose the adventure if any hero has 0 Hit Points remaining at the start of his or her
        turn and there are no Healing Surges remaining.</p>

      <p><strong>Aftermath:</strong> Completing the adventure without using any Healing Surges, each hero receives 300 gold pieces.</p>

      <p>Completing the adventure and used at least one Healing Surge, each hero receives 200 gold pieces.</p>

      <p v-if="questType === 'hunt'  && addTreasure === true">Aquiring the {{ questItem }} will grant the heroes 100 GP.</p>
      <p v-if="questType === 'fetch' && addVillains === true">Defeating {{ questVillain }} will grant the heroes 100 GP.</p>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'adventuregen',
  data: function(){
    return {
      disableButton: false,
      showOptions: false,
      showAdv: false,
      game: "CR",
      type: ['hunt', 'fetch', 'rescue'],
      introList: null,
      itemList: null,
      villainsList: null,
      tilesList: null,
      questType: null,
      questIntro: null,
      questItem: null,
      questVillain: null,
      questTiles: null,
      questExtraTile: null,
      addTreasure: false,
      addVillains: false,
      addExtraTile: false
    };
  },
  methods: {
    getRandomNum: function(max){
      return Math.floor(Math.random() * max);
    },
    toggleOptions: function(){
      this.showOptions = !this.showOptions;
    },
    initData: function(){
      // get fluff
      fetch('/data/adventure.json')
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          this.introList = data.plots;
        });

      // get quest items
      fetch('/data/questitems.json')
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          this.itemList = data;
        });

      // get villains
      fetch('/data/villains.json')
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          this.villainsList = data;
        });

      // get tiles
      fetch('/data/namedtiles.json')
        .then((response) => {
          return response.json();
        })
        .then((data)=>{
          this.tilesList = data;
        });
    },
    generateAdventure: function() {
      const vm = this;
      vm.disableButton = true;
      vm.showAdv = false;

      setTimeout(()=>{
        vm.getIntro();
        vm.getQuestItem(vm.game);
        vm.getQuestVillain(vm.game);
        vm.getQuestTiles(vm.game);
        vm.getExtraTile(vm.game);

        vm.disableButton = false;
        vm.showAdv = true;
      },500);
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
    getQuestTiles: function(set, num){
      const vm = this;
      let seed = vm.getRandomNum(vm.tilesList[set].length);

      if (num === undefined) {
        vm.questTiles = vm.tilesList[set][seed];  
      } else {
        vm.questTiles.push(vm.tilesList[set][seed]);
      }
    },
    getExtraTile: function(set) {
      const vm = this;
      let seedx = vm.getRandomNum(vm.tilesList[set].length);
      vm.questExtraTile = vm.tilesList[set][seedx];  
      console.log(vm.questExtraTile);

      if (vm.questExtraTile !== vm.questTiles) {
        vm.questExtraTile = vm.tilesList[set][seedx];  
      } else {
        vm.getExtraTile(set);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initData();
      setTimeout(()=>{
        this.generateAdventure();
      }, 700);
    });
  }
}
</script>




