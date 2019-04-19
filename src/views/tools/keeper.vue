<template>
  <div class="content generator adventure">

    <p>One player will play as the <b>Keeper</b>. The Keeper controls all the Monsters and Encounters throughout the adventure.</p>

    <div class="xed-title is-serif">Setup</div>

    <p>Remaining players selects their Hero and Power cards for their chosen Hero.</p>

    <p>Take the Encounter, Treasure, and Monster Decks, shuffle each deck and set it aside for the Keeper's use for this adventure.*</p>

    <p>Place the Start tile on the table then place each Hero on any square of the tile.</p>

    <div class="xed-title is-serif">Hero Phase</div>

    <p>Each player rolls a d20 for initiative. Players will play their turns from highest to lowest.</p>

    <p>When a Hero defeats a Monster he or she draws one Treasure Card.</p>

    <p>Hero's Phase ends.</p>

    <div class="xed-title is-serif">Keeper Phase</div>

    <p>The Keeper Player draws 3 Monster cards and 3 Encounter Cards. Do not show these cards to the Hero players. The Keeper will always have 3 Monster cards and 3 Encounter cards in hand.</p>

    <p><b>Playing Monster cards:</b> When a Hero ends their movement on an unexplored edge, the Keeper draws a tile from the Dungeon Tile stack and places a Monster on that tile.     
    Drawing a black arrowed tile or a Named Dungeon tile, the Keeper can place "X" Monsters depending on the number of Active (non-zero HP) Heroes in the adventure.</p>

    <p><b>Encounter cards:</b> The Keeper can play an Encounter Card if any of the requirements in the card text are met. Read the card text and resolve the card effect then place the Encounter card into a discard pile.</p>

    <dl style="margin: 0 auto 16px; max-width: 90%;">
      <dt class="is-serif"><b>Event:</b></dt>
      <dd>Play this Encounter card if all Heroes did not reveal any new tile in the Hero Phase.</dd>
      <dt class="is-serif"><b>Event - Attack:</b></dt>
      <dd>Play this Encounter card if any of the Heroes explore a new tile and there are no Monsters on the tile.</dd>
      <dt class="is-serif"><b>Trap:</b></dt>
      <dd>Play this Encounter card whenever a Hero enters a newly revealed tile.</dd>
      <dt class="is-serif"><b>Environment:</b></dt>
      <dd>Play an Environment card whenever a player enters a new tile. Environment cards lasts only till the next Keeper Phase</dd>
    </dl>
    
    <p>Keeper's Phase ends.</p>

    <div class="xed-title is-serif">Aftermath</div>
    
    <p><strong>Victory:</strong> The Heroes complete the adventure if they complete objective from the Adventure Book.</p>
    <p><strong>Defeat:</strong> The Heroes lose the adventure if any Hero has 0 Hit Points at the start of his or her turn and there are no Healing Surge tokens remaining.</p>
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