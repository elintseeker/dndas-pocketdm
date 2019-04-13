<template>
  <div class="content generator adventure">
    <a href="#" class="adv-optiontoggle" v-bind:class="{ 'xed-title': showOptions || quest.type === null }" v-on:click.prevent="toggleOptions"><span>Adventure Options</span></a>
    <div class="adv-options" v-show="showOptions || quest.type === null">
      <div>
        <div class="form-select">
          <select v-model="quest.game">
            <option value="CR">Castle Ravenloft</option>
            <option value="WoA">Wrath of Ashardalon</option>
            <option value="LoD">Legend of Drizzt</option>
          </select>
        </div>
        
        <label><input type="checkbox" v-model="quest.addVillain">  Additional Named Villain</label>
        <label><input type="checkbox" v-model="quest.addTreasure">  Additional Treasure Card</label>
        <label><input type="checkbox" v-model="quest.addExtraTile"> Extra Named Tile</label>
        <button type="button" class="button is-primary is-large is-fullwidth" @click="generateAdventure" :disabled="disableButton">Generate adventure</button>
      </div>
    </div>

    <div v-if="quest.type !== null">
      <div class="adv-intro">
        <div class="xed-title is-serif" style="text-transform: capitalize;">The {{ quest.type }}</div>
        <div v-if="quest.type === 'fetch'">{{ quest.intro }} <strong>{{ quest.item }}</strong>.</div>
        <div v-else-if="quest.type === 'hunt'">{{ quest.intro }} <strong>{{ quest.villain }}</strong>!</div>
        <div v-else>
          {{ quest.intro }}
        </div>
      </div>

      <h2 class="xed-title is-serif">Components</h2>

      <ul class="components">
        <li>Starting Tile</li>
        <li>{{ quest.tile }}</li>
        <li v-if="quest.addExtraTile">{{ quest.extraTile }}</li>
        <li v-if="quest.type === 'hunt'">{{ quest.villain }} monster card and figure</li>
        <li v-if="quest.type === 'fetch'">{{ quest.item }} card and token</li>
        <li v-if="quest.type === 'rescue'">A Villager token</li>
        <li v-if="quest.type !== 'fetch' && quest.addTreasure">{{ quest.item }} card and token</li>
        <li v-if="quest.type !== 'hunt'  && quest.addVillain">{{ quest.villain }} monster card and figure</li>
      </ul>

      <p>Place the <b>Starting Tile</b> on the table and place each hero on any square of the tile.</p>

      <div v-if="quest.addExtraTile">
        <p>Shuffle the rest of the Dungeon tiles stack. Take 3 tiles from it, and shuffle the <b>{{ quest.tile }}</b> tile
          into those tiles to form the <b>{{ quest.tile }} stack</b>. Take the 3 more tiles from the Dungeon stack and shuffle with 
          the <b>{{ quest.extraTile }}</b> tile to form the <b>{{ quest.extraTile }} stack</b>.</p>
          
        <p>Place the <b>{{ quest.extraTile }} stack</b> after the <b>6th tile</b> of the Dungeon stack. Then place the <b>{{ quest.tile }} stack</b> after the <b>10th</b> tile of the Dungeon tile stack.</p>
      </div>
      <div v-else>
        <p>Shuffle the rest of the Dungeon tiles stack. Take 3 tiles from it, and shuffle the <b>{{ quest.tile }}</b> tile
          into those tiles. Then place the shuffled <b>{{ quest.tile }} stack</b> after the <b>8th</b> tile of
          the Dungeon tile stack. (The {{ quest.tile }} tile should appear between the 9th and 12th tile in the adventure.)</p>
      </div>

      <h2 class="xed-title is-serif">Special Rules</h2>

      <p v-if="quest.addTile && !quest.addVillain"><b>{{ quest.extraTile }} tile:</b> When this tile has been revealed, instead of placing a Monster, draw 2 Monsters for this tile instead.</p>

      <p>
        <b>{{ quest.tile }} tile:</b> When this tile has been revealed. 
        <span v-if="quest.type == 'fetch'">
          Instead of placing a Monster, place <b>{{ quest.item }}</b> on this tile instead. Then draw 2 Monsters from the Monster Deck.
        </span>
        <span v-if="quest.type == 'hunt'">
          Instead of placing a Monster, place <b>{{ quest.villain }}</b> on this tile instead and then draw an <b>Encounter Card.</b>
        </span>
        <span v-if="quest.type === 'rescue'">Place the <b>Villager token</b> at the center of this tile. Draw 2 Monsters and place it on this tile.</span>
      </p>

      <p v-if="quest.addExtraTile && quest.addVillain">
        <b>{{ quest.extraTile }} tile:</b> When this tile has been revealed. Instead of placing a Monster, place <b>{{ quest.villain }}</b> on this tile instead.
      </p>

      <p>
        <strong>Victory: </strong> The heroes win the adventure when they
        <span v-if="quest.type === 'fetch'">acquire the <strong>{{ quest.item }}</strong>.</span>
        <span v-if="quest.type === 'hunt'">defeat <strong>{{ quest.villain }}</strong>.</span>
        <span v-if="quest.type === 'rescue'">rescued the <strong>Villager</strong> and safely exited the dungeon.</span>
      </p>

      <p><strong>Defeat:</strong> The heroes lose the adventure if any hero has 0 Hit Points remaining at the start of his or her
        turn and there are no Healing Surges remaining.</p>

      <p><strong>Aftermath:</strong> Completing the adventure without using any Healing Surges, each hero receives 300 gold pieces.</p>

      <p>Completing the adventure and used at least one Healing Surge, each hero instead receives 200 gold pieces.</p>

      <p v-if="quest.type === 'hunt'  && quest.addTreasure">Aquiring the <b>{{ quest.item }}</b> will grant the heroes 100 GP.</p>
      <p v-if="quest.type === 'fetch' && quest.addVillain">Defeating <b>{{ quest.villain }}</b> will grant the heroes 100 GP.</p>
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
      type: ['hunt', 'fetch', 'rescue'],
      introList: null,
      itemList: null,
      villainsList: null,
      tilesList: null,
      xTreasure: this.$store.state.quest.addTreasure,
      xVillain: this.$store.state.quest.addVillain,
      xExtraTile: this.$store.state.quest.addTile,
      showOptions: false,
      showAdv: false
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
        vm.getQuestItem(vm.quest.game);
        vm.getQuestVillain(vm.quest.game);
        vm.getquestTile(vm.quest.game);
        vm.getExtraTile(vm.quest.game);

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

      // vm.questType = plot;
      // vm.questIntro = vm.introList[plot][pq];
      vm.$store.state.quest.type = plot;
      vm.$store.state.quest.intro = vm.introList[plot][pq];
    },
    getQuestItem: function(set){
      const vm = this;
      let seed = vm.getRandomNum(vm.itemList[set].length);
      // vm.questItem = vm.itemList[set][seed];
      vm.$store.state.quest.item = vm.itemList[set][seed];
    },
    getQuestVillain: function(set){
      const vm = this;
      let seed = vm.getRandomNum(vm.villainsList[set].length);
      // vm.questVillain = vm.villainsList[set][seed];
      vm.$store.state.quest.villain = vm.villainsList[set][seed];
    },
    getquestTile: function(set){
      const vm = this;
      let seed = vm.getRandomNum(vm.tilesList[set].length);
      // vm.questTile = vm.tilesList[set][seed];
      vm.$store.state.quest.tile = vm.tilesList[set][seed];
    },
    getExtraTile: function(set) {
      const vm = this;
      let seed = vm.getRandomNum(vm.tilesList[set].length);
      vm.$store.state.quest.extraTile = vm.tilesList[set][seed];  

      // return;
      if (vm.quest.extraTile === vm.quest.tile) {
        console.log('rerolling');
        vm.getExtraTile(set);
        return;
      } 

      vm.$store.state.quest.extraTile = vm.tilesList[set][seed];  
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initData();
      // setTimeout(()=>{
      //   this.generateAdventure();
      // }, 500);
    });
  },
  computed: {
    quest: function() {
      return this.$store.state.quest;
    }
  }
}
</script>




