<template>
  <div class="q-pa-md">
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-toolbar-title> Para assistir </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer elevated>
        <q-tabs
          class="bg-primary text-white"
          align="justify"
          narrow-indicator
          inline-label
        >
          <q-route-tab to="/" label="Favoritos" icon="favorite" />
          <q-route-tab to="/search" label="Pesquisar" icon="search" />
        </q-tabs>
      </q-footer>
    </q-layout>
  </div>
</template>
