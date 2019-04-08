<template>
  <div class="page houserules">
    <h1>House rules for any DnD Adventure System Games</h1>

    <dl>
      <dt>Simple Initiative System I</dt>
      <dd>
        <p><strong>Hero Phase:</strong> Moving to an unexplored edge triggers placement of a new tile. After drawing a new tile, place a monster on the new tile. Roll a d20 for your Hero and roll again for the Monster(s) side.</p>
        <ul>
          <li><strong>Active Hero rolled higher than the Monster(s)</strong> - Use the remaining movement points and/or attack actions, if applicable.</li>
          <li><strong>Monster(s) rolled higher than the Active Hero</strong> - Hero Phase ends and start the Villain Phase.</li>
        </ul>

        <p>Notes: Active Hero can only explore one tile per turn.</p>
      </dd>
      <dt>Simple Initiative System II</dt>
      <dd>
        <p><strong>Hero Phase:</strong> Moving to an unexplored edge triggers placement of a new tile. After drawing a new tile, check the arrow marker of the new tile.</p>
        <ul>
          <li><strong>White arrowed tile</strong> - Active Hero has initiative. Use the remaining movement points and/or attack actions, if applicable.</li>
          <li><strong>Black arrowed tile</strong> - Monster(s) has initiative. Proceed sequence of play as normal.</li>
        </ul>

        <p>Notes: Active Hero can only explore one tile per turn.</p>
      </dd>
    </dl>
  </div>
</template>

<style lang="scss">
  dl {
    dt {
      font-weight: bold;
    }

    dd {
      margin-left: 0;
    }
  }
</style>
