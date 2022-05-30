const app = new Vue({
  el: '#app',
  data: {
    emails: [],
  },
  methods: {},
  created() {
    for (let i = 0; i < 10; i++) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((elm) => {
          this.emails.push(elm.data.response);
          console.log(this.emails);
        });
    }
  },
});
