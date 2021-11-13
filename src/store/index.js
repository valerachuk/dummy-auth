import Vue from 'vue';
import Vuex from 'vuex';
import stringHash from 'string-hash';

Vue.use(Vuex);

const LOCAL_STORAGE_USER_KEY = 'usersDatabase';
const PASSWORD_EXPIRATION_TIME_MS = 7 * 24 * 60 * 60;

export default new Vuex.Store({
  state: {
    users: null,
    currentUser: null
  },
  mutations: {
    SET_USERS (state, users) {
      state.users = users;
    },
    ADD_USER (state, user) {
      state.users.push(user);
    },
    SET_CURRENT_USER (state, user) {
      state.currentUser = user;
    }
  },
  actions: {
    ensureUsersLoaded ({ commit, state }) {
      if (state.users != null) {
        return;
      }

      const localStorageUsers = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (localStorageUsers == null) {
        commit('SET_USERS', []);
        return;
      }

      commit('SET_USERS', JSON.parse(localStorageUsers));
    },

    addUser ({ commit, state }, newUser) {
      commit('ADD_USER', newUser);
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(state.users));
    },

    async signIn ({ state, dispatch, commit, getters }, { login, password }) {
      await dispatch('ensureUsersLoaded');

      const passwordHash = stringHash(password);
      const userWithValidCredentials = state.users.find(user => user.login === login && user.passwordHash === passwordHash);
      if (userWithValidCredentials == null) {
        return false;
      }

      commit('SET_CURRENT_USER', userWithValidCredentials);

      if (getters.isPasswordExpired) {
        // push to change password form
        return true;
      }

      // push to profile page
      return true;
    },

    async signUp ({ dispatch, state, commit }, { login, password }) {
      await dispatch('ensureUsersLoaded');

      const userExists = state.users.some(user => user.login === login);
      if (userExists) {
        return false;
      }

      const newUser = {
        login,
        passwordHash: stringHash(password),
        passwordChangedDate: new Date().toISOString()
      };

      dispatch('addUser', newUser);
      commit('SET_CURRENT_USER', newUser);

      return true;
    },

    signOut ({ commit }) {
      commit('SET_CURRENT_USER', null);
      // push to login screen
    }
  },
  getters: {
    isSignedIn (state) {
      return state.currentUser != null;
    },

    isPasswordExpired (state, getters) {
      if (!getters.isSignedIn) {
        return null;
      }

      return (new Date() - new Date(state.currentUser.passwordChangedDate)) > PASSWORD_EXPIRATION_TIME_MS;
    }
  }
});
