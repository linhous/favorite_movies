<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { IMovieDetails } from "../interfaces/Movie";
import useStore from "../store";

const store = useStore();
const route = useRoute();
const Loading = ref<boolean>(true);
const Movie = ref<IMovieDetails>();

onMounted(() => {
  getMovie(route.params.id);
});

const getMovie = (id: string | string[]) => {
  Loading.value = true;

  fetch(`https://imdb-api.com/pt-BR/API/Title/k_00ozclmc/${id}`)
    .then((res) => res.json())
    .then((res) => (Movie.value = res))
    .finally(() => (Loading.value = false));
};
</script>

<template>
  <q-layout view="lHh lpr lFf" container style="height: 100vh">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-on:click="$router.back()"
          flat
          round
          dense
          icon="arrow_back"
          class="q-mr-sm"
        />
        <q-toolbar-title>{{ Movie?.title }}</q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="favorite"
          v-on:click="() => store.set.add(Movie!)"
        >
          <q-tooltip> Adicionar aos favoritos </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-md">
        <q-inner-loading
          :showing="Loading"
          label="Carregando..."
          label-style="font-size: 1.1em"
        />
        <div v-if="!Loading" class="row">
          <div class="col-12 col-md-4 col-lg-2">
            <q-img :src="Movie?.image" style="width: 100%">
              <div class="absolute-bottom-right text-h6">
                <q-icon size="sm" name="star" /> {{ Movie?.imDbRating }}/10.0
              </div>
            </q-img>
            <q-separator style="margin-bottom: 20px" />
          </div>
          <div class="col-12 col-md-8 col-lg-10">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label>Título completo</q-item-label>
                  <q-item-label caption lines="2">{{
                    Movie?.fullTitle
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Descrição</q-item-label>
                  <q-item-label caption lines="3">{{
                    Movie?.plot
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator spaced inset />
              <q-item>
                <q-item-section>
                  <q-item-label>Gênero</q-item-label>
                  <q-item-label caption lines="2">{{
                    Movie?.genres
                  }}</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Ano</q-item-label>
                  <q-item-label caption lines="1">{{
                    Movie?.year
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator spaced inset />
              <q-item v-if="Movie?.actorList.length">
                <q-item-section>
                  <q-item-label>Atores</q-item-label>
                  <q-scroll-area style="min-height: 170px">
                    <div class="list-img row no-wrap">
                      <q-img
                        class="img-actor"
                        v-for="actor in Movie?.actorList"
                        :key="actor.id"
                        :src="actor.image"
                        :ratio="1"
                      >
                        <div class="name-actor absolute-bottom">
                          <span>{{ actor.name }}</span>
                        </div>
                      </q-img>
                    </div>
                  </q-scroll-area>
                </q-item-section>
              </q-item>
              <q-item v-if="Movie?.similars.length">
                <q-item-section>
                  <q-item-label>Títulos similares</q-item-label>
                  <q-scroll-area style="min-height: 170px">
                    <div class="list-img row no-wrap">
                      <q-img
                        class="img-actor"
                        v-for="similar in Movie?.similars"
                        :key="similar.id"
                        :src="similar.image"
                        :ratio="1"
                        v-on:click="() => getMovie(similar.id)"
                      >
                        <div class="name-actor absolute-bottom">
                          <span>{{ similar.title }}</span>
                        </div>
                      </q-img>
                    </div>
                  </q-scroll-area>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.absolute-bottom-right {
  background: rgba(0, 0, 0, 0.72);
}
.text-h6 {
  font-size: 1.08rem;
}

.list-img {
  margin-top: 10px;
}

.img-actor {
  margin-right: 10px;
  width: 150px;
  border-radius: 5px;
}

.name-actor {
  background: rgba(0, 0, 0, 0.72);
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 8px;
}
</style>
