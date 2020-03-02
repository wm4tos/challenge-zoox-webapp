<template>
  <q-page>
    <city-form
      v-if="isLoaded"
      :onSubmit="onSubmit"
      :options="options.states"
    />
  </q-page>
</template>

<script src="./script.js" />
