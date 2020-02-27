<template>
  <q-page class="auth-page flex justify-center items-center">
    <div class="form-container flex justify-center">
      <auth-form
        v-model="form"
        class="auth-form q-pa-lg"
        :formAttrs="{ class: 'row justify-center q-gutter-y-md' }"
      />
    </div>
  </q-page>
</template>

<script src="./script.js" />

<style lang="sass" src="./styles.sass" />
