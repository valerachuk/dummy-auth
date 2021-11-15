import Vue from 'vue';
import Vuex from 'vuex';
import stringHash from 'string-hash';
import {
  LOCAL_STORAGE_USERS_DATABASE_KEY,
  PASSWORD_EXPIRATION_TIME_MS,
  LOCAL_STORAGE_CURRENT_USER_LOGIN_KEY,
  SystemState
} from '@constants';
import { navigateToDefaultSystemStatePath } from '@services';
import router from '../router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: null,
    currentUserLogin: null
  },
  mutations: {
    SET_USERS (state, users) {
      state.users = users;
    },
    UPDATE_USER (state, newUser) {
      state.users = state.users.filter(user => user.login !== newUser.login);
      state.users.push(newUser);
    },
    ADD_USER (state, user) {
      state.users.push(user);
    },
    SET_CURRENT_USER_LOGIN (state, login) {
      state.currentUserLogin = login;
    }
  },
  actions: {
    loadDatabase ({ state, commit }) {
      if (state.users == null) {
        const localStorageUsers = localStorage.getItem(LOCAL_STORAGE_USERS_DATABASE_KEY);
        commit('SET_USERS', localStorageUsers != null ? JSON.parse(localStorageUsers) : []);
      }

      if (state.currentUserLogin == null) {
        const currentUser = localStorage.getItem(LOCAL_STORAGE_CURRENT_USER_LOGIN_KEY);
        commit('SET_CURRENT_USER_LOGIN', currentUser ?? null);
      }

      navigateToDefaultSystemStatePath(router, store);
    },

    addUser ({ commit, state }, newUser) {
      commit('ADD_USER', newUser);
      localStorage.setItem(LOCAL_STORAGE_USERS_DATABASE_KEY, JSON.stringify(state.users));
    },

    updateCurrentUser ({ commit }, newUserLogin) {
      commit('SET_CURRENT_USER_LOGIN', newUserLogin);

      if (newUserLogin != null) {
        localStorage.setItem(LOCAL_STORAGE_CURRENT_USER_LOGIN_KEY, newUserLogin);
        return;
      }

      localStorage.removeItem(LOCAL_STORAGE_CURRENT_USER_LOGIN_KEY);
    },

    async signIn ({ state, dispatch }, { login, password }) {
      const passwordHash = stringHash(password);
      const userWithValidCredentials = state.users.find(user => user.login === login && user.passwordHash === passwordHash);
      if (userWithValidCredentials == null) {
        return false;
      }

      await dispatch('updateCurrentUser', userWithValidCredentials.login);

      navigateToDefaultSystemStatePath(router, store);
      return true;
    },

    async signUp ({ dispatch, state, commit }, { login, password }) {
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
      await dispatch('updateCurrentUser', newUser.login);
      navigateToDefaultSystemStatePath(router, store);

      return true;
    },

    async signOut ({ dispatch }) {
      await dispatch('updateCurrentUser', null);
      navigateToDefaultSystemStatePath(router, store);
    },

    changePassword ({ state, commit, getters }, password) {
      const passwordHash = stringHash(password);

      if (getters.currentUser.passwordHash === passwordHash) {
        return false;
      }

      commit('UPDATE_USER', {
        login: state.currentUserLogin,
        passwordHash,
        passwordChangedDate: new Date().toISOString()
      });
      navigateToDefaultSystemStatePath(router, store);
      return true;
    }
  },
  getters: {
    isSignedIn (state) {
      return state.currentUserLogin != null;
    },

    isPasswordExpired (_, getters) {
      if (!getters.isSignedIn) {
        return null;
      }

      return (new Date() - new Date(getters.currentUser.passwordChangedDate)) > PASSWORD_EXPIRATION_TIME_MS;
    },

    currentUser (state) {
      return state.users.find(user => user.login === state.currentUserLogin);
    },

    currentSystemState (_, getters) {
      if (!getters.isSignedIn) {
        return SystemState.signedOut;
      }

      if (getters.isPasswordExpired) {
        return SystemState.passwordChange;
      }

      return SystemState.signedIn;
    }
  }
});

export default store;
