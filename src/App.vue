<template>
  <div id="app">
    <router-view />

    <div class="app-nav">
      <router-link :to="{ name: 'tools' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 512 512">
          <path fill="currentColor" d="M512 161c-7-62-34-117-73-156-9-10-24-4-27 9-12 49-47 88-92 101v154c45 13 80 52 92 101 3 13 18 19 27 9 39-39 66-94 73-156l-63-31 63-31zM101 14C98 1 83-5 74 5 29 51 0 118 0 192s29 141 74 187c9 10 24 4 27-9 12-49 47-88 91-101V115c-44-13-79-52-91-101zm171 50h-32c-9 0-16 7-16 16v416c0 9 7 16 16 16h32c9 0 16-7 16-16V80c0-9-7-16-16-16z"/>
        </svg>
        <span>Tools</span>
      </router-link>
      <router-link :to="{ name: 'about' }" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 512 512">
          <path fill="currentColor" d="M256 8a248 248 0 1 0 0 496 248 248 0 0 0 0-496zm0 110a42 42 0 1 1 0 84 42 42 0 0 1 0-84zm56 254c0 7-5 12-12 12h-88c-7 0-12-5-12-12v-24c0-7 5-12 12-12h12v-64h-12c-7 0-12-5-12-12v-24c0-7 5-12 12-12h64c7 0 12 5 12 12v100h12c7 0 12 5 12 12v24z"/>
        </svg>
        <span>About</span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import './scss/app.scss';
</style>
