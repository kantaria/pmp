import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore();
  if (process.client) {
    store.isLogin();

    const isLoggedIn = store.getIsLoggedIn;
    console.log(isLoggedIn);

    if (!isLoggedIn) {
      if (to.name !== 'sign_in' && to.name !== 'sign_up') {
        return navigateTo('sign_in');
      }
    }
  }
});
