<template>
  <div
    class="h-screen bg-cover bg-no-repeat px-4 py-8 md:px-6 lg:px-8"
    :style="{
      backgroundImage: `url(${backgroundImage})`,
    }"
  >
    <div class="flex flex-wrap">
      <div
        class="w-full lg:w-6 p-4 lg:p-7"
        style="background-color: rgba(255, 255, 255, 0.7)"
      >
        <img
          src="/images/blocks/logos/bastion-purple.svg"
          alt="Image"
          height="50"
          class="mb-6"
        />
        <div class="text-xl text-900 font-500 mb-3">Welcome to Bastion</div>
        <p class="text-600 line-height-3 mt-0 mb-6">
          Quis vel eros donec ac odio tempor orci dapibus. In hac habitasse platea
          dictumst quisque.
        </p>
        <ul class="list-none p-0 m-0">
          <li class="flex align-items-start mb-4">
            <div>
              <span
                class="flex align-items-center justify-content-center bg-purple-400"
                style="width: 38px; height: 38px; border-radius: 10px"
                ><i class="text-xl text-white pi pi-inbox"></i
              ></span>
            </div>
            <div class="ml-3">
              <span class="font-medium text-900">Unlimited Inbox</span>
              <p class="mt-2 mb-0 text-600 line-height-3">
                Tincidunt nunc pulvinar sapien et. Vitae purus faucibus ornare suspendisse
                sed nisi lacus sed viverra.
              </p>
            </div>
          </li>
          <li class="flex align-items-start mb-4">
            <div>
              <span
                class="flex align-items-center justify-content-center bg-purple-400"
                style="width: 38px; height: 38px; border-radius: 10px"
                ><i class="text-xl text-white pi pi-shield"></i
              ></span>
            </div>
            <div class="ml-3">
              <span class="font-medium text-900">Premium Security</span>
              <p class="mt-2 mb-0 text-600 line-height-3">
                Scelerisque purus semper eget duis at tellus at urna. Sed risus pretium
                quam vulputate.
              </p>
            </div>
          </li>
          <li class="flex align-items-start">
            <div>
              <span
                class="flex align-items-center justify-content-center bg-purple-400"
                style="width: 38px; height: 38px; border-radius: 10px"
                ><i class="text-xl text-white pi pi-globe"></i
              ></span>
            </div>
            <div class="ml-3">
              <span class="font-medium text-900">Cloud Backups Inbox</span>
              <p class="mt-2 mb-0 text-600 line-height-3">
                Egestas sed tempus urna et. Auctor elit sed vulputate mi sit amet mauris
                commodo.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-full lg:w-6 p-4 lg:p-7 surface-card">
        <div class="text-900 text-2xl font-medium mb-6">Login</div>
        <form @submit.prevent="login">
          <label for="email3" class="block text-900 font-medium mb-2">Email</label
          ><input
            class="p-inputtext p-component w-full mb-4"
            data-pc-name="inputtext"
            data-pc-section="root"
            id="email3"
            type="email"
            autocomplete="email"
            required="true"
            placeholder="Email address"
          /><label for="password3" class="block text-900 font-medium mb-2">Password</label
          ><input
            class="p-inputtext p-component w-full mb-4"
            data-pc-name="inputtext"
            data-pc-section="root"
            id="password3"
            required="true"
            type="password"
            placeholder="Password"
            autocomplete="current-password"
          />
          <div class="flex align-items-center justify-content-end mb-6">
            <a
              class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
              >Forgot password?</a
            >
          </div>
          <button
            class="p-button p-component w-full"
            type="submit"
            aria-label="Login"
            data-pc-name="button"
            data-pc-section="root"
            data-pd-ripple="true"
          >
            <span
              class="p-button-icon p-button-icon-left pi pi-user"
              data-pc-section="icon"
            ></span
            ><span class="p-button-label" data-pc-section="label">Login</span
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
        </form>

        <div class="mt-6 text-center text-600">
          Don't have an account?
          <nuxt-link
            style="text-decoration: none"
            to="/sign_up"
            class="font-medium text-blue-500"
            >Sign up</nuxt-link
          >
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
