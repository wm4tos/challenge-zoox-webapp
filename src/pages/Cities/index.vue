<template>
  <q-page>
    <div class="flex justify-between">
      <h1 class="text-h3">Cidades</h1>
      <div class="flex items-center">
        <q-btn
          color="primary"
          label="Novo"
          @click="redirect"
        />
      </div>
    </div>

    <q-form
      @submit="loadCities"
      class="row q-gutter-x-lg q-pb-md"
    >
      <h2 class="text-h4 col-12"> Busque por </h2>
      <q-input
        label="Nome"
        v-model="filter.name"
        outlined
      />
      <q-select
        label="Estado"
        option-label="name"
        option-value="_id"
        :options="options.states"
        v-model="filter.state"
        outlined
        clearable
        class="col-xs-4 col-md-2"
      />
      <q-btn
        icon="search"
        flat
        type="submit"
      />
    </q-form>

    <list-table
      @row-click="redirect"
      :data="cities"
      :columns="columns"
      @delete="deleteCity"
    />
  </q-page>
</template>

<script src="./script.js" />
