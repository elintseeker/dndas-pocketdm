<template>
  <div class="content houserules">

    <div class="card" id="dierolls">
      <h2 class="xed-title is-serif">d20 Rolls</h2>
      <p>Rolling a 20 on d20 is always Critical Hit (+1 damage) and a success. Rolling a 1 is a Critical Miss and always a failure, this includes the Monsters "Miss: X" damage.</p>
    </div>
    
    <div class="card" id="initiative">
      <h2 class="xed-title is-serif">Simple Initiative System I</h2>
      <p><strong>Hero Phase:</strong> Moving to an unexplored edge triggers placement of a new tile. After drawing a new tile, place a monster on the new tile. Roll a d20 for your Hero and roll again for the Monster(s) side.</p>
      <ul>
        <li><strong>Active Hero rolled higher than the Monster(s)</strong> - Use the remaining movement points and/or attack actions, if applicable.</li>
        <li><strong>Monster(s) rolled higher than the Active Hero</strong> - Hero Phase ends and start the Villain Phase.</li>
      </ul>

      <p class="notes"><b>Notes:</b> Active Hero can only explore one tile per turn.</p>
    </div>

    <div class="card" id="initiative2">
      <h2 class="xed-title is-serif">Simple Initiative System II</h2>
      <p><strong>Hero Phase:</strong> Moving to an unexplored edge triggers placement of a new tile. After drawing a new tile, check the arrow marker of the new tile.</p>
      <ul>
        <li><strong>White arrowed tile</strong> - Active Hero has initiative. Use the remaining movement points and/or attack actions, if applicable.</li>
        <li><strong>Black arrowed tile</strong> - Monster(s) has initiative. Proceed sequence of play as normal.</li>
      </ul>

      <p class="notes"><b>Notes:</b> Active Hero can only explore one tile per turn.</p>
    </div>

    <div class="card" id="basiclevelup">
      <h2 class="xed-title is-serif">Level Up/Progression System <small>(beyond Level 2)</small></h2>
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

      <p class="notes"><b>Notes:</b> Take note and record of XP between adventures. You can only level up your Hero if all other heroes in the adventure are at equal levels. This is to avoid having a 5th level hero with 2nd level heroes in an adventure. Either use XP cost or GP cost when leveling up your heroes.</p>
    </div>
    <div class="card" id="monstertokens">
      <h2 class="xed-title is-serif">Monster tokens</h2>
      <p>When revealing a tile, use the Monster Tokens (from Castle Ravenloft) instead of drawing a Monster Card. This is to add a random number of Monsters for each revealed tile.</p> 
      <p>Shuffle the Monster Tokens (in a container or bag), draw and flip over the token then draw that many Monster Cards for that tile.</p>
      
      <table class="table is-narrow is-bordered isfloat">
        <tr><th colspan="2">Normal (5 tokens)</th></tr>
        <tr><td>1 token</td><td>Zero Monster</td></tr>
        <tr><td>3 tokens</td><td>One Monster</td></tr>
        <tr><td>1 tokens</td><td>Two Monster</td></tr>
      </table>

      <table class="table is-narrow is-bordered isfloat">
        <tr><th colspan="2">Normal/Hard (5 tokens)</th></tr>
        <tr><td>2 tokens</td><td>One Monster</td></tr>
        <tr><td>2 tokens</td><td>Two Monsters</td></tr>
        <tr><td>1 token</td><td>Three Monsters</td></tr>
      </table>

      <table class="table is-narrow is-bordered isfloat">
        <tr><th colspan="2">Hard (5 tokens)</th></tr>
        <tr><td>1 tokens</td><td>One Monster</td></tr>
        <tr><td>2 tokens</td><td>Two Monsters</td></tr>
        <tr><td>2 token</td><td>Three Monsters</td></tr>
      </table>
    </div>

    <div class="card" id="encounters">
      <h2 class="xed-title is-serif">Encounter Cards</h2>
      <p>Draw an Encounter Card only when the Active Hero's player drew and placed a Black Arrowed tile in his or her Exploration Phase.</p>
    </div>

    <div class="card" id="tiles">
      <h2 class="xed-title is-serif">Extended Game/Tile Distribution</h2>
      <p>When setting up an adventure: Draw the number of dungeon tiles (minimum of 3) equal to the number of heroes and the Named tile. i.e. If there are 5 heroes playing, draw five dungeon tiles and the Named tile. Shuffle the tiles then place the tile stack according to the Adventure Book.</p>
    </div>
  </div>
</template>