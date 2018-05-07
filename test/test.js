var before = getMethods();

setTimeout(function () {
  new Vue({
    el: '#app',
    data: {
      after: getMethods(),
      before: before,
    },
    methods: {
      cellClass: function (val) {
        return val !== undefined ? 'ok' : 'ng';
      }
    }
  });
}, 20);
