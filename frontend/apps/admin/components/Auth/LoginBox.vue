<template>
  <div
    class="flex flex-row justify-center items-center m-auto w-screen h-screen"
  >
    <div
      class="flex justify-center w-1/2 border-r border-gray-500 h-full items-center login-left hidden md:flex"
    >
      <slot name="left">
        <div class="flex flex-col">
          <NuxtImg src="/apu-logo.png" format="webp" class="my-4" width="400" />
          <h1 class="text-3xl font-black mt-3">APClub Club Admin Panel</h1>
          <h2 class="container-sub">Manage Your Clubs Easily with APClub</h2>
          <h3 class="container-sub text-2xl">By Club Committee For Club Committees</h3>
        </div>
      </slot>
    </div>
    <div class="flex justify-center w-1/2 h-full items-center">
      <slot name="right">
        <AuthLoginForm
          @login-event="(e: LoginPayload) => $emit('loginEvent', e)" 
          :loading="loading"
          :error="error"
        ></AuthLoginForm>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LoginPayload } from "./LoginForm.vue";

export type loginFormProps = {
  loading: boolean
  error: boolean
}

const props = withDefaults(defineProps<loginFormProps>(), {
  loading: false,
  error: false,
})

const loginEmit = defineEmits<{ (e: "loginEvent", payload: LoginPayload):void }>();
</script>
