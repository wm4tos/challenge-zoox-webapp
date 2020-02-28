<template>
  <auth-form
    @submit="onSubmit({ ...$event, name })"
    v-bind="{
      initialValueEmail,
      initialValuePassword,
      buttonLabel: 'Registrar',
    }"
  >
    <q-input
      class="col-12"
      label="Nome"
      v-model="name"
      :rules="[$validations.required]"
    />
  </auth-form>
</template>

<script src="./script.js" />
