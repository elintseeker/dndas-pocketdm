<template>
  <div class="nav-tools">
    <div class="nav-item">
      <router-link :to="{ name: 'herogen' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 576 512">
          <path fill="currentColor" d="M32 256c18 0 32-13 32-28V0L1 221c-5 18 10 35 31 35zm543-35L512 0v228c0 15 14 28 32 28 21 0 36-17 31-35zm-95-10C480 90 288 0 288 0S96 90 96 211c0 83-23 146-31 181-4 14 3 29 16 35l175 85V256l-96-32v-32h256v32l-96 32v256l175-85c13-6 20-21 16-35-8-35-31-98-31-181z"/>
        </svg>
      </router-link>
      <span>Pick a Hero</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'monstergen' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 512 512">
          <path fill="currentColor" d="M193 223c31-9 47-50 35-94-7-24-20-43-36-54V0l-64 80c-15 18-20 48-12 79 12 43 47 72 77 64zm126 0c31 8 65-21 77-64 8-31 3-61-12-79L320 0v75a98 98 0 0 0-36 54c-12 44 4 85 35 94zm-63 33c-79 0-192 123-192 200 0 35 27 56 72 56 49 0 81-25 120-25 40 0 72 25 120 25 45 0 72-21 72-56 0-77-113-200-192-200zm-147-13c-7-24-25-42-45-48v-67l-46 62a96 96 0 0 0-18 57l3 22c11 34 43 57 72 50s44-41 34-76zm385-53l-46-62v67c-20 6-38 24-45 48-10 35 5 69 34 76s61-16 72-50l3-22a96 96 0 0 0-18-57z"/>
        </svg>
      </router-link>
      <span>Monster Generator</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'treasuregen' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 512 512">
          <path fill="currentColor" d="M192 96h128l47-71a16 16 0 0 0-13-25H158a16 16 0 0 0-13 25zm128 32H192C-10 243 0 397 0 416c0 53 49 96 110 96h292c61 0 110-43 110-96 0-19 9-173-192-288z"/>
        </svg>
      </router-link>
      <span>Treasure Generator</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'adventuregen' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 576 512">
          <path fill="currentColor" d="M0 117.66v346.32a16 16 0 0 0 21.94 14.86L160 416V32L20.12 87.95A32 32 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A32 32 0 0 0 576 394.34V48.02a16 16 0 0 0-21.94-14.86z"/>
        </svg>
      </router-link>
      <span>Adventure Generator</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'd20roller' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 480 512">
          <path fill="currentColor" d="M106.8 215L1.2 371a8 8 0 0 0 6 12l208.2 22.2L106.7 215zM7.3 315.5l75.3-122.3-76.6-46a4 4 0 0 0-6.1 3.4v162.8c0 4 5.3 5.6 7.4 2.1zm10.8 108.2l194.5 87.7A8 8 0 0 0 224 504v-65.7L20.4 416c-4.4-.5-6.2 5.6-2.2 7.6zm81.3-257.8l79.9-143c4.3-7-3.6-15.2-10.8-11L17.8 110.2a4 4 0 0 0 .1 6.8l81.6 48.7zM240 176h109.2L253.6 7.6c-3.1-5-8.3-7.6-13.6-7.6s-10.5 2.5-13.6 7.6L130.8 176H240zm234-28.9l-76.7 46 75.3 122.3c2.1 3.5 7.4 2 7.4-2V150.4a4 4 0 0 0-6-3.4zm-93.5 18.7l81.6-48.7a4 4 0 0 0 0-6.8L311.5 11.7c-7.2-4-15.1 4.1-10.8 11.2l80 143zm79 250.2L256 438.3V504a8 8 0 0 0 11.3 7.3l194.5-87.7c4-2 2.2-8-2.3-7.6zm-86.3-201L264.6 405.3 473 383a8 8 0 0 0 6-12.2L373.2 215.1zM240 208H139.6L240 383.8 340.4 208H240z"/>
        </svg>
      </router-link>
      <span>d20 Roller</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'seqplayref' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon has-svgshadow" viewBox="0 0 384 512">
          <path fill="currentColor" d="M360 0H24A24 24 0 0 0 0 24v16a24 24 0 0 0 24 24c0 91 51 167.7 120.8 192C75 280.3 24 357 24 448a24 24 0 0 0-24 24v16a24 24 0 0 0 24 24h336a24 24 0 0 0 24-24v-16a24 24 0 0 0-24-24c0-91-51-167.7-120.8-192C309 231.7 360 155 360 64a24 24 0 0 0 24-24V24a24 24 0 0 0-24-24zm-75 384H99c17.1-46.8 52.2-80 93-80s75.9 33.2 93 80zm0-256H99c-7-19.5-11-41.3-11-64h208c0 22.8-4 44.6-11 64z"/>
        </svg>
      </router-link>
      <span>Sequence of Play</span>
    </div>
    <div class="nav-item">
      <router-link :to="{ name: 'houserules' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 448 512">
          <path fill="currentColor" d="M448 360V24a24 24 0 0 0-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328a24 24 0 0 0 24-24v-16c0-7.5-3.5-14.3-8.9-18.7a223 223 0 0 1 0-74.7A23.8 23.8 0 0 0 448 360zM128 134a6 6 0 0 1 6-6h212a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H134a6 6 0 0 1-6-6v-20zm0 64a6 6 0 0 1 6-6h212a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H134a6 6 0 0 1-6-6v-20zm253.4 250H96a32 32 0 1 1 0-64h285.4a360 360 0 0 0 0 64z"/>
        </svg>
      </router-link>
      <span>House Rules</span>
    </div>
  </div>
</template>