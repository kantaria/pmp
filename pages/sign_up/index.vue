<template>
  <div
    class="px-4 py-8 md:px-6 lg:px-8"
    :style="{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div class="flex align-items-center justify-content-center">
      <div class="w-full lg:w-6 p-4 lg:p-7 surface-card">
        <div class="text-900 text-2xl font-medium mb-6">Create account</div>
        <form @submit.prevent="signUp">
          <div class="flex flex-direction-row align-items-center justify-content-between gap-2 form__inputsWrapper">
            <div class="form__inputItem">
              <label for="first-name" class="block text-900 font-medium mb-2"
                >First Name</label
              >
              <input
                class="p-inputtext p-component w-full mb-4"
                data-pc-name="inputtext"
                data-pc-section="root"
                id="first-name"
                type="text"
                autocomplete="given-name"
                required="true"
                placeholder=""
              />
            </div>
            <div class="form__inputItem">
              <label for="first-name" class="block text-900 font-medium mb-2"
                >Last Name</label
              >
              <input
                class="p-inputtext p-component w-full mb-4"
                data-pc-name="inputtext"
                data-pc-section="root"
                id="last-name"
                type="text"
                autocomplete="family-name"
                required="true"
                placeholder=""
              />
            </div>
          </div>
          <label for="email" class="block text-900 font-medium mb-2">Email</label
          ><input
            class="p-inputtext p-component w-full mb-4"
            data-pc-name="inputtext"
            data-pc-section="root"
            id="email"
            type="email"
            autocomplete="email"
            required="true"
            placeholder="Email address"
          />
          <label for="password" class="block text-900 font-medium mb-2">Password</label
          ><input
            class="p-inputtext p-component w-full mb-4"
            data-pc-name="inputtext"
            data-pc-section="root"
            id="password"
            required="true"
            type="password"
            placeholder="At least 6 characters"
            autocomplete="off"
          />
          <label for="password2" class="block text-900 font-medium mb-2"
            >Re-enter password</label
          ><input
            class="p-inputtext p-component w-full mb-4"
            data-pc-name="inputtext"
            data-pc-section="root"
            id="password2"
            required="true"
            type="password"
            placeholder="Password"
            autocomplete="off"
          />
          <button
            class="p-button p-component w-full"
            type="submit"
            aria-label="Login"
            data-pc-name="button"
            data-pc-section="root"
            data-pd-ripple="true"
          >
            <span
              class="p-button-icon p-button-icon-left pi pi-user-plus"
              data-pc-section="icon"
            ></span
            ><span class="p-button-label" data-pc-section="label">Sign up</span
            ><!----><span
              role="presentation"
              aria-hidden="true"
              data-p-ink="true"
              data-p-ink-active="false"
              class="p-ink"
              data-pc-name="ripple"
              data-pc-section="root"
            ></span>
          </button>
          <div class="mt-3 text-center text-xs">
            By creating an account, you agree to Website Conditions of Use and Privacy
            Notice.
          </div>
        </form>

        <div class="mt-6 text-center text-600">
          Already have an account?
          <nuxt-link  style="text-decoration: none;" to="/sign_in" class="font-medium text-blue-500">Sign in</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";
import backgroundImage from "~/assets/img/login_bg.jpeg";
definePageMeta({
  // layout: 'nav-bar-full-layout',
});
useHead({
  title: "",
  meta: [
    // {
    //   hid: 'description',
    //   name: 'description',
    //   content:
    //     'Бесплатный курс с главной информацией о вертикалях, офферах, источниках и принципах работы CPA-маркетинга.',
    // },
    // {
    //   hid: 'keywords',
    //   name: 'keywords',
    //   content:
    //     'арбитраж трафика бесплатно заработок интернет курсы новости интервью статьи для новичков',
    // },
  ],
});
const email = ref();
const password = ref();

const store = useAuthStore();

const login = () => {
  console.log(email.value);
  console.log(password.value);
  store.login();
};
</script>
<style src="./_sin_up.scss"  scoped lang="scss"></style>