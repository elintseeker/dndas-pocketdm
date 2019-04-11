<template>
  <div class="roller">
    <router-link :to="{ name: 'tools' }" class="button-back">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 256 512">
        <path fill="currentColor" d="M238 476l8-8c4-4 4-12 0-17L50 256 246 61c4-5 4-13 0-17l-8-8c-4-4-12-4-16 0L10 248c-4 4-4 12 0 16l212 212c4 4 12 4 16 0z"/>
      </svg>
    </router-link>

    <div class="result" v-if="rolled !== 0">{{ rolled }}</div>
    <div class="result" v-else>d20</div>

    <button type="button" class="button is-primary is-large is-fullwidth" @click="roll()" :disabled="disableButton">Roll d20</button>

    <p>&nbsp;</p>

    <div class="roller-history" v-if="rolledHistory.length">
      <strong class="subtitle is-6">Roll History <small>({{ rollHistoryLimit }} max)</small>:</strong>

      <ul>
        <li v-for="item in rolledHistory" :key="item.id">{{ item }}</li>
      </ul>
    </div>

    <p class="is-centered" v-if="rolled !== 0">
      <a href="#" class="reset red" v-on:click.prevent="reset">Reset/Clear</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'd20roller',
  data: function(){
    return {
      rolled: 0,
      rolledHistory: [],
      rollHistoryLimit: 25,
      disableButton: false
    };
  },
  methods: {
    roll: function() {
      const vm = this;
      vm.rolled = Math.floor(Math.random() * 20 + 1);
      vm.rolledHistory.push(vm.rolled);

      vm.disableButton = true;

      setTimeout(()=>{
        vm.disableButton = false;
      }, 700);

      // last 25 rolls
      if (vm.rolledHistory.length >= vm.rollHistoryLimit) {
        vm.disableButton = true;
      }
    },
    reset: function() {
      const vm = this;
      vm.rolled = 0;
      vm.rolledHistory = [];
      vm.disableButton = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  .result {
    margin: 0 auto 32px;
    font-size: 8em;
  }

  .roller {
    margin: 32px auto 16px;
    max-width: 600px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;
  }

  .button {
    max-width: 480px;
  }

  .reset { text-decoration: none; border-bottom: 0; }

  .roller-history {
    margin: 16px auto 0;

    .subtitle {
      margin-bottom: 16px;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-gap: 8px;

      margin: 16px auto;
      padding: 0;
      list-style: none;
    }
  }
</style>


