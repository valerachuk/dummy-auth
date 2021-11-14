import { ShowablePasswordField } from '@components';
import { requiredValidator, commonPasswordValidator } from '@services';
import { mapActions } from 'vuex';

export default {
  name: 'SignUp',

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
      requiredValidator('The password is required'),
      commonPasswordValidator('This password is too common')
    ],
    isUserExistsError: false
  }),

  methods: {
    ...mapActions(['signUp']),
    async onSignUp () {
      if (!this.$refs.form.validate()) {
        return;
      }

      this.isUserExistsError = !await this.signUp({
        login: this.login,
        password: this.password
      });
    }
  }
};
