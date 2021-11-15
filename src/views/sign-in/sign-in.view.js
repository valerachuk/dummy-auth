import { ShowablePasswordField } from '@components';
import { requiredValidator } from '@services';
import { mapActions } from 'vuex';

export default {
  name: 'SignIn',

  components: {
    ShowablePasswordField
  },

  data: () => ({
    login: '',
    password: '',
    loginValidationRules: [
      requiredValidator('The login is required')
    ],
    passwordValidationRules: [
      requiredValidator('The password is required')
    ],
    isUsernameOrPasswordInvalid: false
  }),

  methods: {
    ...mapActions(['signIn']),
    async onSignIn () {
      if (!this.$refs.form.validate()) {
        return;
      }

      this.isUsernameOrPasswordInvalid = !await this.signIn({
        login: this.login,
        password: this.password
      });
    }
  }
};
