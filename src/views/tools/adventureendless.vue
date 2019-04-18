<template>
  <div class="content generator adventure">
    <blockquote class="adv-intro">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum impedit mollitia, debitis quo, reprehenderit modi tenetur nulla dolore molestias accusantium aperiam, in laborum beatae reiciendis cum deserunt aut molestiae minima?
    </blockquote>

    <div class="xed-title is-serif">Components</div>

    <ul class="components">
      <li>Starting tile</li>
      <li>Dungeon tile stack</li>
      <li>A Villain card and figure</li>
    </ul>

    <p>Place the <b>Starting Tile</b> on the table then place each Hero on any square of the tile.</p>

    <p>Shuffle the dungeon tile stack.</p>

    <div class="xed-title is-serif">Special Rules</div>
    <p>The adventure ends when any Hero has 0 Hit Points at the start of his/her turn and there are no Healing Surge tokens remaining.</p>
    <p>At the end of the adventure, count the number of dungeon tiles placed (not including the Start tile) as this is the groups adventure score.</p>

    <p>Optional: After placing the 5th tile, instead of placing a monster, roll a d20:</p>

    <table class="table is-narrow is-bordered">
      <tr><th>Result</th><th>Effect</th></tr>
      <tr>
        <td>1 - 8</td>
        <td>The Active Player takes a Named Villain Card and figure and place it on this tile.</td>
      </tr>
      <tr>
        <td>9-20</td>
        <td>Nothing Happens.</td>
      </tr>
    </table>

    <p><b>Victory: </b> The heroes win the adventure if the group's score reaches 15 or above.</p>
    <p><b>Defeat: </b> The heroes lose the adventure if the gruop's score is 14 or below.</p>

    <button type="button" @click="getthis">button</button>
  </div>
</template>

<script>
export default {
  name: 'endless',
  data: function(){
    return {

    };
  },
  methods: {
    getthis: function(){
      console.log(this.$getRandomNum(8));
    }
  }
};
</script>