<template>
  <div class="page houserules">
    <h1>{{ $route.meta.title }}</h1>

    <div class="card">
      <h2 class="title">Simple Initiative System I</h2>
      <p><strong>Hero Phase:</strong> Moving to an unexplored edge triggers placement of a new tile. After drawing a new tile, place a monster on the new tile. Roll a d20 for your Hero and roll again for the Monster(s) side.</p>
      <ul>
        <li><strong>Active Hero rolled higher than the Monster(s)</strong> - Use the remaining movement points and/or attack actions, if applicable.</li>
        <li><strong>Monster(s) rolled higher than the Active Hero</strong> - Hero Phase ends and start the Villain Phase.</li>
      </ul>

      <p>Notes: Active Hero can only explore one tile per turn.</p>
    </div>
    <div class="card">
      <h2 class="title">Simple Initiative System II</h2>
      <p><strong>Hero Phase:</strong> Moving to an unexplored edge triggers placement of a new tile. After drawing a new tile, check the arrow marker of the new tile.</p>
      <ul>
        <li><strong>White arrowed tile</strong> - Active Hero has initiative. Use the remaining movement points and/or attack actions, if applicable.</li>
        <li><strong>Black arrowed tile</strong> - Monster(s) has initiative. Proceed sequence of play as normal.</li>
      </ul>

      <p>Notes: Active Hero can only explore one tile per turn.</p>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  margin-bottom: 16px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;

  .title {
    margin: 0 0 8px;
    font-size: 18px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
