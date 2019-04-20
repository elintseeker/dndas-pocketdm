export default {
  methods: {
    $getRandomNum: function(max){
      return Math.floor(Math.random() * max);
    },
    $backButton: function(e) {
      e.preventDefault();
      window.history.back();
    }
  }
};