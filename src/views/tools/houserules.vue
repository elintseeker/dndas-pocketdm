<template>
  <div class="content">

    <router-link :to="{ name: 'tools' }" class="button-back">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 256 512">
        <path fill="currentColor" d="M238 476l8-8c4-4 4-12 0-17L50 256 246 61c4-5 4-13 0-17l-8-8c-4-4-12-4-16 0L10 248c-4 4-4 12 0 16l212 212c4 4 12 4 16 0z"/>
      </svg>
    </router-link>

    <div class="card">
      <h2 class="subtitle is-5">Simple Initiative System I</h2>
      <p><strong>Hero Phase:</strong> Moving to an unexplored edge triggers placement of a new tile. After drawing a new tile, place a monster on the new tile. Roll a d20 for your Hero and roll again for the Monster(s) side.</p>
      <ul>
        <li><strong>Active Hero rolled higher than the Monster(s)</strong> - Use the remaining movement points and/or attack actions, if applicable.</li>
        <li><strong>Monster(s) rolled higher than the Active Hero</strong> - Hero Phase ends and start the Villain Phase.</li>
      </ul>

      <p>Notes: Active Hero can only explore one tile per turn.</p>
    </div>

    <div class="card">
      <h2 class="subtitle is-5">Simple Initiative System II</h2>
      <p><strong>Hero Phase:</strong> Moving to an unexplored edge triggers placement of a new tile. After drawing a new tile, check the arrow marker of the new tile.</p>
      <ul>
        <li><strong>White arrowed tile</strong> - Active Hero has initiative. Use the remaining movement points and/or attack actions, if applicable.</li>
        <li><strong>Black arrowed tile</strong> - Monster(s) has initiative. Proceed sequence of play as normal.</li>
      </ul>

      <p>Notes: Active Hero can only explore one tile per turn.</p>
    </div>

    <div class="card">
      <h2 class="subtitle is-5">Level Up/Progression System <small>(beyond Level 2)</small></h2>
      <table class="table is-striped is-narrow is-bordered">
        <tr>
          <th>Level</th>
          <th>Cost</th>
          <th>Powers</th>
          <th>Stats changes <small>(per level)</small></th>
        </tr>
        <tr>
          <td>2</td>
          <td>10&nbsp;XP</td>
          <td>+1 Daily Power</td>
          <td rowspan="4">+2 HP <br> +1 AC<br> +1 Surge Value</td>
        </tr> 
        <tr>
          <td>3</td>
          <td>20&nbsp;XP</td>
          <td>+1 Utility Power</td>
        </tr> 
        <tr>
          <td>4</td>
          <td>30&nbsp;XP</td>
          <td>+1 At-Will Power</td>
        </tr> 
        <tr>
          <td>5</td>
          <td>40&nbsp;XP</td>
          <td>+1 Daily Power</td>
        </tr> 
      </table>

      <p>Notes: Take note of XP between adventures, as Monster Cards need to be shuffled to the Monster Deck when starting a new adventure.
      You can only level up your Hero if all other heroes in the adventure are at equal levels. This is to avoid having a 5th level hero with 2nd level heroes in an adventure.</p>
    </div>
  </div>
</template>