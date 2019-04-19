<template>
  <div class="nav-tools">
    <div class="nav-item">
      <router-link :to="{ name: 'herogen' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon">
          <use href="#icon-helm" />
        </svg>
      </router-link>
      <span>Pick a Hero</span>
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
          <use href="#icon-map" />
        </svg>
      </router-link>
      <span>Keeper</span>
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
</template>