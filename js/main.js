const app = new Vue({
  el: '#app',
  data: {
    emails: [],
  },
  methods: {},
  created() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((elm) => {
        this.emails.push(elm.data.response);
        console.log(this.emails);
      });
  },
});
