<template>
  <q-layout view="lHh Lpr lff">
    <main-layout v-if="isLogged" />
    <auth-layout v-else />
  </q-layout>
</template>

<script src="./script.js" />
