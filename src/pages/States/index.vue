<template>
  <q-page>
    <div class="flex justify-between">
      <h1 class="text-h3">Estados</h1>
      <div class="flex items-center">
        <q-btn
          color="primary"
          label="Novo"
          @click="redirect"
        />
      </div>
    </div>

    <q-form
      @submit="loadStates"
      class="row q-gutter-x-lg q-pb-md"
    >
      <h2 class="text-h4 col-12"> Busque por </h2>
      <q-input
        label="Nome"
        v-model="filter.name"
        outlined
      />
      <q-btn
        icon="search"
        flat
        type="submit"
      />
    </q-form>

    <list-table
      @row-click="redirect"
      :data="states"
      :columns="columns"
      @delete="deleteState"
    />
  </q-page>
</template>

<script src="./script.js" />
