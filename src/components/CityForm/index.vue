<template>
  <q-form
    @submit="onSubmit(form)"
  >
    <q-input
      label="Nome"
      v-model="form.name"
      :rules="[$validations.required]"
    />
    <q-select
      option-label="name"
      option-value="_id"
      label="Estado"
      v-model="form.state"
      :rules="[$validations.required]"
      :options="options"
    />
    <div class="flex justify-end">
      <q-btn
        label="Salvar"
        type="submit"
      />
    </div>
  </q-form>
</template>

<script src="./script.js" />
