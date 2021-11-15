import { ShowablePasswordField } from '@components';
import { requiredValidator, commonPasswordValidator } from '@services';
import { mapActions } from 'vuex';

export default {
  name: 'ChangePassword',

  components: {
    ShowablePasswordField
  },

  data: () => ({
    password: '',
    passwordValidationRules: [
      requiredValidator('The password is required'),
      commonPasswordValidator('This password is too common')
    ],
    isPasswordTheSame: false
  }),

  methods: {
    ...mapActions(['changePassword', 'signOut']),
    async onChangePassword () {
      if (!this.$refs.form.validate()) {
        return;
      }

      this.isPasswordTheSame = !await this.changePassword(this.password);
    }
  }
};
