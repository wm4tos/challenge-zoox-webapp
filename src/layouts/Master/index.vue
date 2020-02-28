<template>
  <q-layout view="hHh Lpr fFf">
    <main-layout v-if="isLogged" />
    <auth-layout v-else />
  </q-layout>
</template>

<script src="./script.js" />
