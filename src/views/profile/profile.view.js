import { mapActions } from 'vuex';

export default {
  name: 'Profile',

  computed: {
    username () {
      return this.$store.state.currentUserLogin;
    }
  },

  methods: {
    ...mapActions(['signOut'])
  }
};
