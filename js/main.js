const app = new Vue({
  el: '#app',
  data: {
    maxDataThreshold: 10,
    emails: [],
  },
  methods: {},
  created() {
    for (let i = 0; i < this.maxDataThreshold; i++) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((elm) => {
          this.emails.push(elm.data.response);
        });
    }
  },
});
