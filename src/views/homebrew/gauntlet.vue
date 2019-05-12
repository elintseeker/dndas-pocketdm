<template>
  <div class="content generator adventure">
    <p class="description">{{ $route.meta.description }}</p>

    <blockquote>
      A blood-drenched arena opens before you and your companions. With a faint trace of magic lingering in the air, rotting flesh, discarded weapons, and trinkets litter the ground. You're not the first ones here..."
    </blockquote>

    <div class="xed-title">Components</div>

    <ul class="components">
      <li>One Starting and one Exit tile (i.e. Secret Stairway, Tunnel Exit)</li>
      <li>Two Hallway tiles</li>
      <li>Dungeon tile stack</li>
      <li>Chamber start tiles, Horrid/Dire Chamber tiles, and Chamber Deck (Wrath of Ashardalon)</li>
      <li>A stack of Villain cards and figures</li>
    </ul>

    <div class="xed-title">Setup</div>
    <p>Place the <b>Starting/Exit Tile</b> on the table then place each Hero on any square of the tile. The first player places a Hallway Tile on an unexplored edge.</p>

    <p>Shuffle the dungeon tile stack</p>
    <p>Shuffle the Chamber Start tiles (if playing with WoA) into the dungeon tile stack, the Chamber tile stack, and the Chamber Deck.</p>

    <p><strong>Starting Items:</strong> Each Player draws a random Item Card and a Healing Surge for their Hero.</p>

    <div class="xed-title">Special Rules</div>
    <p>Players do not draw Encounter Cards while on the Starting/Exit Tile and the Hallway tiles. When all Heroes are on a "chamber" tile, draw Encounter Cards as normal.</p>

    <p><strong>Chamber construction:</strong> When a Hero reaches the unexplored edge of a Hallway Tile, draw 5 dungeon tiles to create a "chamber" and place a Hallway tile on the farthest unexplored edge. The active Hero's player takes a Named Villain card and figure and places the figure on any "chamber" square. The Villain then activates on every player's Villain Phase and worth 5 experience points.</p>

    <p><strong>Defeating a Villain: </strong> Each Active Hero draws an Item Card from the Treasure Deck and gains HP at half of their Surge Cost. Heroes carry a maximum of three items. When a Hero gains an item during the adventure, he/she must replace or discard an item card.</p>

    <p>When all Heroes are on a Hallway tile, the previous "chamber" collapses. Remove the "chamber" tiles and shuffle it again with the Dungeon Tiles Stack. Rebuild the "chamber" again.</p>

    <p>The adventure ends when any Hero has 0 Hit Points at the start of his/her turn and there are no Healing Surge tokens remaining. Count the number of defeated Villains as this will be the groups adventure score.</p>

    <p><b>Victory: </b> The heroes win the adventure if the heroes defeated at least 3 Villains or more.</p>

    <p><em>*Need more playtesting on these rules, get in touch on <a href="https://twitter.com/kevinn">Twitter</a>.</em></p>
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