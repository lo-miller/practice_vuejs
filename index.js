/* global Vue */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
    };
  },
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Click to capitalize!'
    // message: 'Click to capitalize!'
  },
  methods: {
    capitalizeMessage: function () {
      this.message = this.message.toUpperCase();
      // this.message = this.message.toUpperCase();
    }
  }
})