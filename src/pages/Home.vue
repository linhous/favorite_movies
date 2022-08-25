<script setup lang="ts">
import { ref } from "vue";
import useStore from "../store";
import CardMovie from "../components/CardMovie.vue";

const store = useStore();
const tab = ref("unseen");
</script>

<template>
  <q-page>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="unseen" label="Assistir" />
      <q-tab name="seen" label="Assistido" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="unseen">
        <div class="row q-col-gutter-md">
          <div
            v-for="item in store.get.unseen()"
            class="col-12 col-md-6 col-lg-4"
          >
            <CardMovie :store="store" :inHome="true" :homeMovie="item" />
          </div>
        </div>
        <div class="empty" v-if="!store.get.unseen().length">
          <p>Sua lista para assistir está vazia!</p>
        </div>
      </q-tab-panel>

      <q-tab-panel name="seen">
        <div class="row q-col-gutter-md">
          <div
            v-for="item in store.get.seen()"
            class="col-12 col-md-6 col-lg-4"
          >
            <CardMovie :store="store" :inHome="true" :homeMovie="item" />
          </div>
        </div>
        <div class="empty" v-if="!store.get.seen().length">
          <p>Sua lista esta vazia!</p>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<style scoped>
.empty {
  text-align: center;
}
</style>
