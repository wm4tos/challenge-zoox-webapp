<template>
  <q-page>
    <state-form
      v-if="isLoaded"
      :initialValues="state"
      :onSubmit="saveState"
    />
  </q-page>
</template>

<script src="./script.js" />
