<template>
<div>
  <p class="description">{{ $route.meta.description }}</p>
  <div class="nav-tools">
    <div class="nav-item">
      <router-link :to="{ name: 'herogen' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-helm" />
        </svg>
      </router-link>
      <span>Hero Generator</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'monstergen' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-paw" />
        </svg>
      </router-link>
      <span>Monster Generator</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'treasuregen' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-bag" />
        </svg>
      </router-link>
      <span>Treasure Generator</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'adventuregen' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-map" />
        </svg>
      </router-link>
      <span>Adventure Generator</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'endless' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-map-inf" />
        </svg>
      </router-link>
      <span>Endless Dungeon</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'keeper' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-keeper2" />
        </svg>
      </router-link>
      <span>Keeper</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'gauntlet' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-keeper" />
        </svg>
      </router-link>
      <span>Gauntlet</span>
    </div>
  </div>

  <div class="separator"></div>

  <div class="nav-tools">
    <div class="nav-item">
      <router-link :to="{ name: 'hptracker' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-hp" />
        </svg>
      </router-link>
      <span>Hero HP Tracker</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'd20roller' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-dice" />
        </svg>
      </router-link>
      <span>d20 Dice Roller</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'seqplayref' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-play" />
        </svg>
      </router-link>
      <span>Sequence of Play</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'houserules' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-houserules" />
        </svg>
      </router-link>
      <span>House Rules</span>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.separator {
  margin: 24px auto 16px;
  max-width: 90%;
  border-bottom: 1px solid rgba(0,0,0,0.3);
  border-top: 1px solid rgba(58, 58, 58, 0.8)
  // flex-basis: 100%;
  // height: 0;
}
</style>
