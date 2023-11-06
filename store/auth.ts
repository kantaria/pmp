import { defineStore } from 'pinia';

interface AuthState {
  isLoggedIn: boolean;
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => ({
    isLoggedIn: false, // Initialize as false
  }),
  getters: {
    getIsLoggedIn: (state) => state.isLoggedIn,
  },
  actions: {
    login() {
      if (process.client) {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');

        navigateTo('/');
      }
    },
    isLogin() {
      if (process.client) {
        if (localStorage.getItem('isLoggedIn') === 'true') {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }
    },
    logout() {
      if (process.client) {
        this.isLoggedIn = false;
        localStorage.setItem('isLoggedIn', 'false');

        navigateTo('/sign_in');
      }
    },
  },
});
