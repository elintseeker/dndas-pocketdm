<template>
  <div id="app">
    <router-view />

    <div class="app-nav">
      <router-link to="/" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 576 512">
          <path fill="currentColor" d="M288 115L69.5 307.7c-1.7 1.5-3.7 2.1-5.5 3.4V496a16 16 0 0 0 16 16h149.2L192 439.2l104.1-64L236 256 384 392.8l-104.1 64 40 55.2H496a16 16 0 0 0 16-16V311.1c-1.7-1.2-3.7-1.8-5.3-3.2L288 114.9zm282.7 121.3L512 184.4V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v51.7L314.7 10.3a40 40 0 0 0-53.4 0l-256 226a16 16 0 0 0-1.2 22.6l21.4 23.8a16 16 0 0 0 22.6 1.2L277.4 81.6a16 16 0 0 1 21.2 0L527.9 284a16 16 0 0 0 22.6-1.2l21.4-23.8a16 16 0 0 0-1.2-22.6z"/>
        </svg>
        Home
      </router-link>
      <!-- <router-link :to="{ name: 'encounters' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 576 512">
          <path fill="currentColor" d="M32 256c18 0 32-13 32-28V0L1 221c-5 18 10 35 31 35zm543-35L512 0v228c0 15 14 28 32 28 21 0 36-17 31-35zm-95-10C480 90 288 0 288 0S96 90 96 211c0 83-23 146-31 181-4 14 3 29 16 35l175 85V256l-96-32v-32h256v32l-96 32v256l175-85c13-6 20-21 16-35-8-35-31-98-31-181z"/>
        </svg>
        Encounters
      </router-link> -->
      <router-link :to="{ name: 'tools' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 512 512">
          <path fill="currentColor" d="M512 161c-7-62-34-117-73-156-9-10-24-4-27 9-12 49-47 88-92 101v154c45 13 80 52 92 101 3 13 18 19 27 9 39-39 66-94 73-156l-63-31 63-31zM101 14C98 1 83-5 74 5 29 51 0 118 0 192s29 141 74 187c9 10 24 4 27-9 12-49 47-88 91-101V115c-44-13-79-52-91-101zm171 50h-32c-9 0-16 7-16 16v416c0 9 7 16 16 16h32c9 0 16-7 16-16V80c0-9-7-16-16-16z"/>
        </svg>
        Tools
      </router-link>
      <router-link :to="{ name: 'about' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 512 512">
          <path fill="currentColor" d="M256 8a248 248 0 1 0 0 496 248 248 0 0 0 0-496zm0 110a42 42 0 1 1 0 84 42 42 0 0 1 0-84zm56 254c0 7-5 12-12 12h-88c-7 0-12-5-12-12v-24c0-7 5-12 12-12h12v-64h-12c-7 0-12-5-12-12v-24c0-7 5-12 12-12h64c7 0 12 5 12 12v100h12c7 0 12 5 12 12v24z"/>
        </svg>
        About
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import './scss/app.scss';
</style>
