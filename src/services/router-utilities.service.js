import { SystemStateDefaultRouteNameMap } from '@constants';

export function navigateToDefaultSystemStatePath (router, store) {
  const newRouteName = SystemStateDefaultRouteNameMap[store.getters.currentSystemState];

  if (newRouteName !== router.currentRoute.name) {
    router.push({ name: SystemStateDefaultRouteNameMap[store.getters.currentSystemState] });
  }
}
