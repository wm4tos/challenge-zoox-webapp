<template>
  <q-card
    v-bind="$attrs"
  >
    <q-form
      @submit="onSubmit ? onSubmit(form) : $emit('submit', form)"
      class="row"
    >
      <slot />
      <q-input
        class="col-12"
        label="E-mail"
        v-model="form.email"
      />
      <q-input
        class="col-12 input-password"
        label="Senha"
        v-model="form.password"
        :type="!visible ? 'password' : 'text'"
      >
        <template v-slot:append>
          <q-icon
            ref="visibleIcon"
            :name="visibleIcon"
            class="cursor-pointer"
            @mouseover="hovering = true"
            @mouseleave="hovering = false"
            @click="visible = !visible"
          />
        </template>
      </q-input>
      <div class="col-12 flex justify-between">
        <div class="flex items-center justify-center">
          <slot name="footer" />
        </div>
        <q-btn
          color="black"
          outlined
          type="submit"
          label="Entrar"
        />
      </div>
    </q-form>
  </q-card>
</template>

<script src="./script.js" />
