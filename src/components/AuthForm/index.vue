<template>
  <q-card
    v-bind="$attrs"
  >
    <q-form
      v-bind="formAttrs"
      @submit="$emit('submit', $event)"
    >
      <slot />
      <q-input
        class="col-12"
        label="E-mail"
        v-model="value.email"
        @input="emitToFather(value)('email')($event)"
      />
      <q-input
        class="col-12"
        label="Senha"
        v-model="value.password"
        @input="emitToFather(value)('password')($event)"
      />
      <div class="col-12 flex justify-end">
        <q-btn
          color="black"
          outlined
          label="Entrar"
        />
      </div>
    </q-form>
  </q-card>
</template>

<script src="./script.js" />
