export default {
  name: 'App',

  created () {
    this.$store.dispatch('loadDatabase');
  }
};
