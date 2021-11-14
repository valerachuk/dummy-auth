export const LOCAL_STORAGE_USERS_DATABASE_KEY = 'usersDatabase';
export const LOCAL_STORAGE_CURRENT_USER_LOGIN_KEY = 'currentUserLogin';
export const PASSWORD_EXPIRATION_TIME_MS = 7 * 24 * 60 * 60;

export const SystemState = Object.create(null, {
  signedOut: {
    configurable: false,
    writable: false,
    value: 'signedOut'
  },
  signedIn: {
    configurable: false,
    writable: false,
    value: 'signedIn'
  },
  passwordChange: {
    configurable: false,
    writable: false,
    value: 'passwordChange'
  }
});

export const SystemStateDefaultRouteNameMap = {
  [SystemState.signedOut]: 'SignIn',
  [SystemState.signedIn]: 'Profile',
  [SystemState.passwordChange]: 'ChangePassword'
};
