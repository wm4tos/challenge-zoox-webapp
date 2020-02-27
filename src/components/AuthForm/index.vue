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
        class="col-12 input-password"
        label="Senha"
        v-model="value.password"
        @input="emitToFather(value)('password')($event)"
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
