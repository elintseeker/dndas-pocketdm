<template>
  <div class="content">
    <router-link :to="{ name: 'tools' }" class="button-back">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-icon" viewBox="0 0 256 512">
        <path fill="currentColor" d="M238 476l8-8c4-4 4-12 0-17L50 256 246 61c4-5 4-13 0-17l-8-8c-4-4-12-4-16 0L10 248c-4 4-4 12 0 16l212 212c4 4 12 4 16 0z"/>
      </svg>
    </router-link>


    <div class="dndcard">
      <div class="card-name">
        Strahd's Crypt
        <span>Event</span>
      </div>
      <div class="card-fluff">
        Beyond the shattered door you felt a chilly wind brushes past you...
      </div>
      <div class="card-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod minima rem libero eveniet unde temporibus, assumenda doloremque eius nemo iure nobis soluta vel! Magni cumque atque officia consequuntur illum!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tileevents',
  data: function(){
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.dndcard {
  margin: 0 auto;
  padding: 0 16px 16px;
  font-family: "Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif;
  font-weight: 640;
  font-size: 16px;
  line-height: 1.3;
  color: #444;
  max-width: 320px;
  min-height: 480px;
  background-color: #dcd6d6;
  border: 16px solid #111;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(#111, 60%);

  .card-name {
    margin: 0 -16px;
    padding: 16px;
    font-size: 22px;
    font-family: sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    background-color: rgba(25,25,25,0.6);

    span {
      display: block;
      font-size: 16px;
    }
  }

  .card-fluff {
    margin: 0 -16px 16px;
    padding: 16px;
    font-style: italic;
    color: #fff;
    background-color: rgba(133,0,0,0.6);
  }

  .card-content {
    padding-right: 32px;
  }
}
</style>





