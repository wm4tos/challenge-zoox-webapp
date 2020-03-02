<template>
  <q-page>
    <city-form
      v-if="isLoaded"
      :initialValues="city"
      :onSubmit="saveCity"
      :options="options.states"
    />
  </q-page>
</template>

<script src="./script.js" />
