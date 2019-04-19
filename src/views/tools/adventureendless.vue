<template>
  <div class="content generator adventure">
    <blockquote class="adv-intro">
      "Glad we used that scroll huh? That was a long way down." your companion muttered. Amidst the dust and broken floors around you, apparently you and your 
      companions stumbled upon a network of tunnels and unfinished caverns bored thru solid rock. "Be prepared people! I don't think we're welcomed here..."
    </blockquote>

    <div class="xed-title is-serif">Components</div>

    <ul class="components">
      <li>Starting tile</li>
      <li>Dungeon tile stack</li>
      <li>A Villain card and figure</li>
    </ul>

    <p>Place the <b>Starting Tile</b> on the table then place each Hero on any square of the tile.</p>

    <p>Shuffle the dungeon tile stack.</p>

    <div class="xed-title is-serif">Special Rules</div>
    <p>The adventure ends when any Hero has 0 Hit Points at the start of his/her turn and there are no Healing Surge tokens remaining.</p>
    <p>At the end of the adventure, count the number of dungeon tiles placed (not including the Start tile) as this is the groups adventure score.</p>

    <p><b>Victory: </b> The heroes win the adventure if the group's score reaches 15 or above.</p>
    <p><b>Defeat: </b> The heroes lose the adventure if the group's score is 14 or below.</p>

    <div class="xed-title is-serif">Optional Rules</div>

    <p><b>Dungeon Lord:</b> When every 5th tile is placed, instead of placing a Monster, roll a d20:</p>
    <table class="table is-narrow is-bordered">
      <tr><th style="min-width: 70px;">Result</th><th>Effect</th></tr>
      <tr>
        <td>1 &mdash; 5</td>
        <td><b>He's here!</b> The Active Player takes a Named Villain Card and figure and place it on this tile. This Villain activates every Hero's Villain Phase.</td>
      </tr>
      <tr>
        <td>5 &mdash; 10</td>
        <td>Nothing Happens... Draw an Encounter Card.</td>
      </tr>
      <tr>
        <td>11 &mdash; 15</td>
        <td>Draw 2 Monster cards for this tile.</td>
      </tr>
      <tr>
        <td>16 &mdash; 20</td>
        <td>Nothing Happens...</td>
      </tr>
    </table>

    <p>When the 15th tile is placed and the Dungeon Lord hasn't appeared yet. The Active Hero takes the Villain Card and figure and places it on this tile for the final battle.</p>

    <p><b>Monster Placement I:</b> Instead of placing a Monster on a revealed tile, use Monster Tokens (available with Castle Ravenloft).</p>
    <p><b>Monster Placement II:</b> Instead of placing a Monster on a revealed tile, draw a Monster card for each Hero in the adventure.</p>

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