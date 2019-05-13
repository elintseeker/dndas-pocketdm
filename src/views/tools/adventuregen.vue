<template>
  <div class="content generator adventure">
    <p class="description">{{ $route.meta.description }}</p>
    <a href="#" class="link red adv-optiontoggle" v-on:click.prevent="toggleOptions">Adventure Options</a>
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
        <label><input type="checkbox" v-model="quest.addTile"> Additional Named Tile</label>
        <button type="button" class="button is-primary is-large is-fullwidth" @click="generateAdventure" :disabled="disableButton">Generate adventure</button>
      </div>
    </div>

    <div v-if="quest.type !== null">
      <div class="xed-title" style="text-transform: capitalize;">The {{ quest.type }}</div>

      <blockquote>
        <div v-if="quest.type === 'fetch'">{{ quest.intro }} <strong>{{ quest.item }}</strong>.</div>
        <div v-else-if="quest.type === 'hunt'">{{ quest.intro }} <strong>{{ quest.villain }}</strong>!</div>
        <div v-else>
          {{ quest.intro }}
        </div>
      </blockquote>

      <div class="xed-title">Components</div>

      <ul class="components" v-if="quest.type === 'hunt'">
        <li>Starting tile</li>
        <li>{{ quest.tile }} tile</li>
        <li>{{ quest.villain }} monster card and figure</li>
        <li v-if="quest.addTreasure || quest.addTile">{{ quest.extraTile }} tile</li>
        <li v-if="quest.addTreasure">{{ quest.item }} card and token</li>
      </ul>

      <ul class="components" v-if="quest.type === 'fetch'">
        <li>Starting tile</li>
        <li>{{ quest.tile }} tile</li>
        <li v-if="quest.addVillain || quest.addTile">{{ quest.extraTile }} tile</li>
        <li>{{ quest.item }} card and token</li>
        <li v-if="quest.addVillain">{{ quest.villain }} monster card and figure</li>
      </ul>

      <ul class="components" v-if="quest.type === 'rescue'">
        <li>Starting tile</li>
        <li>{{ quest.tile }} tile</li>
        <li v-if="quest.addTreasure || quest.addTile">{{ quest.extraTile }} tile</li>
        <li>
          <span v-if="quest.game === 'CR'">Secret Stairway tile</span>
          <span v-if="quest.game === 'WoA'">Secure Exit tile</span>
          <span v-if="quest.game === 'LoD'">Surface Hollow tile</span>
        </li>
        <li>A Villager token/figure</li>
        <li>{{ quest.villain }} monster card and figure</li>
        <li v-if="quest.addTreasure">{{ quest.item }} card and token</li>
      </ul>

      <!-- SETUP -->
      <p>Place the <b>Starting Tile</b> on the table and place each hero on any square of the tile.</p>

      <div v-if="quest.type === 'hunt'">
        <p v-if="quest.addTreasure || quest.addTile">Shuffle the rest of the Dungeon tiles stack. Take 3 tiles from it, and shuffle the <b>{{ quest.tile }}</b> tile
          into those tiles to form the <b>{{ quest.tile }} stack</b>. Take the 3 more tiles from the Dungeon stack and shuffle with
          the <b>{{ quest.extraTile }}</b> tile to form the <b>{{ quest.extraTile }} stack</b>.
        </p>
        <p v-else>Shuffle the rest of the Dungeon tiles stack. Take 3 tiles from it, and shuffle the <b>{{ quest.tile }}</b> tile
          into those tiles. Then place the shuffled <b>{{ quest.tile }} stack</b> after the <b>8th</b> tile of
          the Dungeon tile stack. (The {{ quest.tile }} tile should appear between the 9th and 12th tile in the adventure.)</p>
      </div>

      <div v-if="quest.type === 'fetch'">
        <p v-if="quest.addVillain || quest.addTile">Shuffle the rest of the Dungeon tiles stack. Take 3 tiles from it, and shuffle the <b>{{ quest.tile }}</b> tile
          into those tiles to form the <b>{{ quest.tile }} stack</b>. Take the 3 more tiles from the Dungeon stack and shuffle with
          the <b>{{ quest.extraTile }}</b> tile to form the <b>{{ quest.extraTile }} stack</b>.
        </p>
        <p v-else>Shuffle the rest of the Dungeon tiles stack. Take 3 tiles from it, and shuffle the <b>{{ quest.tile }}</b> tile
          into those tiles. Then place the shuffled <b>{{ quest.tile }} stack</b> after the <b>8th</b> tile of
          the Dungeon tile stack. (The {{ quest.tile }} tile should appear between the 9th and 12th tile in the adventure.)</p>
      </div>

      <div v-if="quest.type === 'rescue'">
        <p v-if="quest.addTreasure || quest.addTile">Shuffle the rest of the Dungeon tiles stack. Take 3 tiles from it, and shuffle the <b>{{ quest.tile }}</b> tile
          into those tiles to form the <b>{{ quest.tile }} stack</b>. Take the 3 more tiles from the Dungeon stack and shuffle with
          the <b>{{ quest.extraTile }}</b> tile to form the <b>{{ quest.extraTile }} stack</b>.
        </p>
        <p v-else>Shuffle the rest of the Dungeon tiles stack. Take 3 tiles from it, and shuffle the <b>{{ quest.tile }}</b> tile
          into those tiles. Then place the shuffled <b>{{ quest.tile }} stack</b> after the <b>8th</b> tile of
          the Dungeon tile stack. (The {{ quest.tile }} tile should appear between the 9th and 12th tile in the adventure.)</p>

        <p>Take the <b>Surface Hollow</b> tile and three tiles from the <b>bottom</b> of the dungeon tile stack. Shuffle and place it after the 13th tile of the dungeon stack.</p>
      </div>


      <div class="xed-title">Special Rules</div>

      <!-- HUNT -->
      <div v-if="quest.type === 'hunt'">
        <p><b>{{ quest.tile }} tile:</b> When a Hero reveals the {{ quest.tile }}, instead of drawing Monster cards for the active tile, the active player takes the {{ quest.villain }} card and places the figure on this tile. Then draw an Encounter Card.</p>
        <p v-if="quest.addTreasure"><b>{{ quest.extraTile }} tile:</b> When a Hero reveals this tile, instead of drawing Monster cards, place <b>{{ quest.item }}</b> token on this tile instead then draw a Monster Card.</p>
        <p v-else-if="quest.addTile"><b>{{ quest.extraTile }} tile:</b> When a Hero reveals this tile, the active player draws 2 Monsters cards for this tile instead.</p>

        <p><b>Victory: </b> The heroes win the adventure when they defeat <b>{{ quest.villain }}</b>.</p>
      </div>

      <!-- FETCH -->
      <div v-if="quest.type === 'fetch'">
        <p><b>{{ quest.tile }} tile:</b> When a Hero reveals the {{ quest.tile }}, instead of drawing Monster cards for the active tile, place the {{ quest.item }} token on this tile instead then draw 2 Monster Cards.</p>
        <p v-if="quest.addVillain"><b>{{ quest.extraTile }} tile:</b> When a Hero reveals this tile, instead of drawing Monster cards, the active player takes the <b>{{ quest.villain }}</b> card and places the figure on this tile.</p>
        <p v-else-if="quest.addTile"><b>{{ quest.extraTile }} tile:</b> When a Hero reveals this tile, the active player draws 2 Monsters cards for this tile instead.</p>

        <p><b>Victory: </b> The heroes win the adventure when they acquire the <b>{{ quest.item }}</b>.</p>
      </div>

      <!-- RESCUE -->
      <div v-if="quest.type === 'rescue'">
        <p><b>{{ quest.tile }} tile:</b> When a Hero reveals the {{ quest.tile }}, place the <b>Villager token/figure</b> at the center of this tile, then read:</p>

        <blockquote class="is-serif is-italic">
          As you free the villager from the rusted shackles, "Get me out of here! Please! That... thing will be back soon!" Then something moved right behind the hapless villager.
        </blockquote>

        <p>Draw a Monster Card for each Hero (minimum of 2 Monsters) and place them on an unexplored space of the tile.</p>

        <p>Place <b>{{ quest.villain }}</b> on the dungeon start tile. <b>{{ quest.villain }}</b> activates every Hero's Villain phase.</p>

        <table class="table is-bordered is-narrow">
          <tr><th rowspan="2">Villager</th><th>AC</th><th>HP</th><th>Speed</th></tr>
          <tr><td>12</td><td>6</td><td>4</td></tr>
        </table>

        <!-- states -->
        <p v-if="quest.addTreasure"> <b>{{ quest.extraTile }} tile:</b> When a Hero reveals this tile, instead of drawing a Monster Card, place the <b>{{ quest.item }}</b> on this tile and draw 1 Monster Card or a Monster Token.</p>
        <p v-else-if="quest.addTile"><b>{{ quest.extraTile }} tile:</b> When a Hero reveals this tile, the active player draws 2 Monsters cards for this tile instead.</p>

        <!-- exit tile -->
        <p>
          <b v-if="quest.game === 'CR'">Secret Stairway tile:</b>
          <b v-if="quest.game === 'WoA'">Tunnel Exit tile:</b>
          <b v-if="quest.game === 'LoD'">Surface Hollow tile:</b>
          When a Hero reveals and placed this tile, read: </p>

        <blockquote class="is-serif is-italic">"Turning around the corner, you stumbled and tripped on a raised floor. Bracing for a trap, you realized a dungeon wall reveals what seems to be an exit from this foul dungeon."</blockquote>

        <p><b>Victory: </b> The heroes win the adventure when the Heroes and the Villager safely exits the dungeon from the start tile and/or escaping via the
          <span v-if="quest.game === 'CR'">Secret Stairway tile</span>
          <span v-if="quest.game === 'WoA'">Tunnel Exit tile</span>
          <span v-if="quest.game === 'LoD'">Surface Hollow tile</span>.</p>
      </div>

      <p><strong>Defeat:</strong> The Heroes lose the adventure if any Hero has 0 Hit Points at the start of his or her turn and there are no Healing Surge tokens remaining.</p>


      <!-- aftermath -->
      <div class="xed-title">Aftermath</div>

      <p>If the Heroes complete the adventure without using any Healing Surges, each hero receives 300 gold pieces.</p>

      <p>If the Heroes complete the adventure, but used at least one Healing Surge, they each receives 200 gold pieces.</p>

      <p><span v-if="quest.type === 'rescue'">If the Villager did not survive the adventure, each the hero <b>pays the town</b> 100 GP.</span></p>

      <!-- additional loot -->
      <p v-if="quest.type !== 'fetch' && quest.addTreasure">Aquiring the <b>{{ quest.item }}</b> will grant each hero 100 GP.</p>
      <p v-if="quest.type !== 'hunt' && quest.addVillain || quest.type === 'rescue'">Defeating <b>{{ quest.villain }}</b> will grant each hero 100 GP.</p>

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
      let q = vm.$getRandomNum(l);
      let plot = vm.type[q];
      let pl = Object.keys(vm.introList).length;
      let pq = vm.$getRandomNum(pl);

      // vm.questType = plot;
      // vm.questIntro = vm.introList[plot][pq];
      vm.$store.state.quest.type = plot;
      vm.$store.state.quest.intro = vm.introList[plot][pq];
    },
    getQuestItem: function(set){
      const vm = this;
      let seed = vm.$getRandomNum(vm.itemList[set].length);
      // vm.questItem = vm.itemList[set][seed];
      vm.$store.state.quest.item = vm.itemList[set][seed];
    },
    getQuestVillain: function(set){
      const vm = this;
      let seed = vm.$getRandomNum(vm.villainsList[set].length);
      // vm.questVillain = vm.villainsList[set][seed];
      vm.$store.state.quest.villain = vm.villainsList[set][seed];
    },
    getquestTile: function(set){
      const vm = this;
      let seed = vm.$getRandomNum(vm.tilesList[set].length);
      // vm.questTile = vm.tilesList[set][seed];
      vm.$store.state.quest.tile = vm.tilesList[set][seed];
    },
    getExtraTile: function(set) {
      const vm = this;
      let seed = vm.$getRandomNum(vm.tilesList[set].length);
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
    });
  },
  computed: {
    quest: function() {
      return this.$store.state.quest;
    }
  }
}
</script>