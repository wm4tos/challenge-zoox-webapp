<template>
  <q-page>
    <city-form
      v-if="isLoaded"
      :initialValues="city"
      :onSubmit="saveCity"
      labelSubmit="Editar"
      :options="options.states"
    />
  </q-page>
</template>

<script src="./script.js" />
