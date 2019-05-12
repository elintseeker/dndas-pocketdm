<template>
  <div class="content generator adventure">
    <p class="description">{{ $route.meta.description }}</p>

    <blockquote>A booming voice echoes throughout the dungeon... "You think you are safe here?! You think you can find what you seek? You're in my domain now!"</blockquote>

    <div class="xed-title is-serif">Setup</div>

    <p>Pick an adventure from the Adventure Book.

    <p>One player will play as <b>The Keeper</b>, who controls the Monsters and Encounters to thwart the Heroes in the adventure. The Keeper shuffles the Monster Cards into their own deck. Do the same for the Encounter Cards and Treasure Cards, and set it aside for use on this adventure.*</p>

    <p>Each player (other than the Keeper) chooses one of the 1st-level Heroes and selects Power Cards for their chosen Hero and draws an Item Card from the Treasure Deck. All Heroes gets one Healing Surge token for their character.</p>

    <p>Place the Start tile on the table then place each Hero on any square of the tile.</p>

    <footer><small>* Remove all Encounter Cards that are beneficial to the Heroes and place it back to the box.</small></footer>

    <div class="xed-title is-serif">Hero Phase</div>

    <p>Each player rolls the dice for initiative. Play progresses around the table, starting with the player who rolled with the highest initiative.</p>

    <p>When a Hero lands on a tile's unexplored edge, it doesn't end the Hero's turn. The active  Hero's player draws the top tile from the Dungeon Tile stack then he or she can use his or her remaining movement if available.</p>

    <p><b>Defeating Monsters: </b> When a Hero defeats a Monster the active Hero's player places its Monster Card into his or her own Experience Pile.</p>

    <p><b>Experience Pile:</b> Each player have their own Experience pile which can be used to level up their Hero for 10XP (or equivalent GP) to the next level. Players cannot spend experience points to cancel a Keepers Encounter Card.</p>

    <p><b>Treasure:</b> The active Hero's player who defeats a Monster draws one Treasure Card per turn, no matter how many Monsters he or she defeats during that turn.</p>

      <table class="table is-narrow is-bordered">
        <tr>
          <th>Level</th>
          <th>XP/GP Cost</th>
          <th>Powers</th>
          <th>Stats changes <small>(per level)</small></th>
        </tr>
        <tr>
          <td>2</td>
          <td>10&nbsp;XP or 2000 GP</td>
          <td>+1 Daily Power</td>
          <td rowspan="4">+2 HP <br> +1 AC<br> +1 Surge Value</td>
        </tr>
        <tr>
          <td>3</td>
          <td>20&nbsp;XP or 3000 GP</td>
          <td>+1 Utility Power</td>
        </tr>
        <tr>
          <td>4</td>
          <td>30&nbsp;XP or 4000 GP</td>
          <td>+1 At-Will Power</td>
        </tr>
        <tr>
          <td>5</td>
          <td>40&nbsp;XP or 5000 GP</td>
          <td>+1 Daily Power</td>
        </tr>
      </table>

    <p>When all players have played their turn, the Hero Phase ends.</p>

    <div class="xed-title is-serif">Keeper Phase</div>

    <p>The Keeper Player draws upto 5 Monster cards and 3 Encounter Cards. Do not show these cards to the Hero players. The Keeper will always have 5 Monster cards and 3 Encounter cards on their hand.</p>

    <p><b>Playing Monster cards:</b> When a Hero lands on an unexplored edge, the Keeper plays a single Monster Card of his choosing and places the figure on the revealed tile.

    <p>If the active Hero's player reveals a dungeon tile with a black arrow or a Named dungeon tile, the Keeper can place "X" amount Monsters depending on the number of Active (non-zero HP) Heroes in the adventure.</p>

    <p><b>Playing Encounter cards:</b> The Keeper can play an Encounter Card if any of the requirements in the card text are met. Read the card text and resolve the card effect then place the Encounter card into a discard pile.</p>

    <dl>
      <dt class="is-serif"><b>Event:</b></dt>
      <dd>Play this Encounter card if all Heroes did not reveal any new tile in the Hero Phase.</dd>
      <dt class="is-serif"><b>Event - Attack:</b></dt>
      <dd>Play this Encounter card if any of the Heroes explore a new tile and there are no Monsters within 1 tile.</dd>
      <dt class="is-serif"><b>Trap:</b></dt>
      <dd>Play this Encounter card whenever a Hero enters a newly revealed tile.</dd>
      <dt class="is-serif"><b>Environment:</b></dt>
      <dd>Play an Environment card whenever a Player's Hero enters a new tile. Environment cards lasts only until the next Keeper Players turn.</dd>
    </dl>

    <p>Keeper's Phase ends.</p>

    <div class="xed-title is-serif">Aftermath</div>

    <p><strong>Victory:</strong> The Heroes complete the adventure if they complete objective from the Adventure Book.</p>
    <p><strong>Defeat:</strong> The Heroes lose the adventure if any Hero has 0 Hit Points at the start of his or her turn and there are no Healing Surge tokens remaining.</p>

    <p><em>*Need playtesting on these rules, get in touch on <a href="https://twitter.com/kevinn">Twitter</a>.</em></p>
  </div>
</template>

<script>
export default {
  name: 'endless',
  data: function(){
    return {

    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
dl {
  margin: 0 32px 16px;
  dt { font-weight: bold; font-style: italic; }
  dd { margin: 0; padding: 8px 0 8px 16px; font-size: 14px; }
}
</style>
