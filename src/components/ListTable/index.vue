<template>
  <q-table
    class="list-table"
    v-bind="{ ...$props, grid: !$q.screen.gt.xs }"
    v-on="$listeners"
  >
    <template v-slot:body-cell-delete="props">
      <q-td class="flex justify-end">
        <q-btn
          icon="delete"
          color="red-9"
          @click.stop="$emit('delete', props.row)"
          flat
        />
      </q-td>
    </template>
  </q-table>
</template>

<script src="./script.js" />

<style src="./styles.sass" lang="sass" />
