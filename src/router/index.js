import Vue from 'vue';
import VueRouter from 'vue-router';
import { SignIn, SignUp, Profile, ChangePassword } from '@views';
import { SystemState } from '@constants';
import { navigateToDefaultSystemStatePath } from '@services';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: {
      name: 'SignIn'
    }
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
    meta: {
      allowedSystemStates: [SystemState.signedOut]
    }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
    meta: {
      allowedSystemStates: [SystemState.signedOut]
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      allowedSystemStates: [SystemState.signedIn]
    }
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword,
    meta: {
      allowedSystemStates: [SystemState.passwordChange]
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (!('allowedSystemStates' in to.meta)) {
    next();
    return;
  }

  if (to.meta.allowedSystemStates.some(systemState => systemState === store.getters.currentSystemState)) {
    next();
    return;
  }

  navigateToDefaultSystemStatePath(router, store);
});

export default router;
