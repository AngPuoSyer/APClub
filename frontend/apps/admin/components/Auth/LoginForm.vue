<template>
  <div class="md:w-auto">
    <div class="md:hidden mb-5">
      <NuxtImg src="/apu-logo.png" format="webp" class="my-4" width="400" />
    </div>
    <h1 class="text-3xl font-bold mt-3">Log in to your account</h1>
    <slot name="sub">
      <div></div>
    </slot>
    <form
      @submit.prevent="
        $emit('loginEvent', { email, password, rememberMe: checked })
      "
    >
      <div class="mt-7 flex flex-col justify-around items-center w-full h-full">
        <div class="w-full p-fluid">
          <span class="p-float-label">
            <InputText id="username" type="text" v-model="email" />
            <label for="username">Email</label>
          </span>
        </div>
        <div class="w-full p-fluid mt-8">
          <span class="p-float-label w-full p-fluid">
            <Password
              v-model="password"
              :toggle-mask="true"
              :feedback="false"
            />
            <label for="password">Password</label>
          </span>
        </div>
        <Button type="submit" class="mt-4 w-full p-button-sm p-button-raised" label="Sign in" />
      </div>
      <div class="mt-3 flex items-center">
        <Checkbox
          inputId="binary"
          v-model="checked"
          :binary="true"
          class="mr-3"
        />
        <label for="binary">Remember Me</label>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
export type LoginPayload = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type loginFormProps = {
  loading: boolean;
  error: boolean;
};

const props = withDefaults(defineProps<loginFormProps>(), {
  loading: false,
  error: false,
});

const loginEmit = defineEmits<{
  (e: "loginEvent", payload: LoginPayload): void;
}>();

const email = ref();
const password = ref();
const checked = ref(false);
</script>

<style scoped>
:deep .p-password-panel {
  display: none;
} 
</style>
