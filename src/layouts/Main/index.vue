<template>
  <fragment>
    <q-header elevated>
      <q-toolbar class="flex justify-center relative-position">
        <q-btn
          class="absolute-left"
          :icon="drawerLeft ? 'close' : 'menu'"
          flat
          @click="drawerLeft = true"
          round
          v-show="!drawerLeft && $q.screen.lt.sm"
        />
        <q-tabs v-show="$q.screen.gt.xs">
          <q-route-tab
            v-for="tab in tabs"
            :key="tab.link"
            :label="tab.title"
            :to="tab.link"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-drawer
      v-if="$q.screen.lt.sm"
      v-model="drawerLeft"
      :breakpoint="599"
      content-class="bg-primary"
    >
      <div class="flex justify-end">
        <q-btn
          color="white"
          icon="close"
          flat
          round
          @click="drawerLeft = false"
        />
      </div>
      <div>
        <q-list>
          <q-item
            v-for="tab in tabs"
            :key="tab.link"
            v-ripple
            clickable
            @click="$router.push(tab.link)"
          >
            <q-item-section class="text-white">
              {{ tab.title }}
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>
  </fragment>
</template>

<script src="./script.js" />
