<template>
  <div class="content">
    <p>On your turn, complete these phases in order:</p>

    <ol>
      <li>Hero Phase</li>  
      <li>Exploration Phase</li>
      <li>Villain Phase</li>
    </ol>

    <hr>

    <h2 class="subtitle is-6">Hero Phase</h2>
    <ol>
      <li>If you have 0 Hit Points, use a Healing Surge token if one is available.</li>
      <li>Perform one of the following actions:
        <ul>
          <li>Move and then make an Attack</li>
          <li>Attack and then Move</li>
          <li>Make two moves</li>
        </ul>
      </li>
    </ol>

    <h2 class="subtitle is-6">Exploration Phase</h2>
    <ol>
      <li>If your Hero occupies a square adjacent to an unexplored edge, go to Step 2. Otherwise, go to Villain Phase.</li>
      <li>Draw a Dungeon Tile and place it with its triangle adjacent to the unexplored edge.</li>
      <li>Draw a Monster Card and place that Monster on the new tile.</li>
    </ol>

    <h2 class="subtitle is-6">Villain Phase</h2>
    <ol>
      <li>If you didn't place a tile during your Exploration Phase, or if you placed a tile with a black triangle, draw an Encounter Card.</li>
      <li>If a Villain in play, activate it.</li>
      <li>Activate each Monster and Trap you control, in turn, in the order you drew them.</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'sequenceofplayref',
  data: function(){
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.nav-tools {
  display: grid;
  grid-column: 1fr, 1fr, 1fr;
}
</style>



