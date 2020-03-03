<template>
  <q-form
    @submit="onSubmit(form)"
  >
    <q-input
      label="Nome"
      v-model="form.name"
      :rules="[$validations.required]"
    />
    <q-input
      label="UF"
      v-model="form.UF"
      :rules="[$validations.required]"
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
