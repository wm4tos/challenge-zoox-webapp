<template>
  <q-page class="auth-page flex justify-center items-center">
    <div class="form-container flex justify-center">
      <register-form
        v-if="isRegistering"
        class="register-form q-pa-lg"
        v-bind="{ initialValueEmail, initialValuePassword }"
        :onSubmit="register"
      />
      <auth-form
        v-else
        :onSubmit="auth"
        class="auth-form q-pa-lg"
      >
        <template v-slot:footer>
          <a
            class="text-light-blue-4"
            href="#"
            @click="isRegistering = true"
          >
            Registrar
          </a>
        </template>
      </auth-form>
    </div>
  </q-page>
</template>

<script src="./script.js" />

<style lang="sass" src="./styles.sass" />
