<script setup lang="ts">
import { IMovie } from "../interfaces/Movie";
import { IStoreMovies, ILMovie } from "../interfaces/MovieList";

defineProps<{
  store: IStoreMovies;
  movie?: IMovie;
  inHome?: boolean;
  homeMovie?: ILMovie;
}>();
</script>

<template>
  <q-card v-if="inHome" flat bordered>
    <q-card-section horizontal>
      <q-img class="col" :src="homeMovie!.image" :ratio="16 / 9">
        <div class="absolute-bottom text-h6">{{ homeMovie!.title }}</div>
      </q-img>

      <q-card-actions vertical class="justify-around q-px-md">
        <q-btn
          flat
          round
          :color="homeMovie!.seen ? 'red' : 'green'"
          :icon="homeMovie!.seen ? 'close' : 'check'"
          v-on:click="() => store.set.toggle(homeMovie!.id)"
        >
          <q-tooltip v-if="homeMovie!.seen">
            Marcar como não assistido
          </q-tooltip>
          <q-tooltip v-else> Marcar como assistido </q-tooltip>
        </q-btn>
        <q-btn
          flat
          round
          color="red"
          icon="delete"
          v-on:click="() => store.set.remove(homeMovie!.id)"
        >
          <q-tooltip> Apagar título </q-tooltip>
        </q-btn>
        <q-btn
          flat
          :to="`/details/${homeMovie?.id}`"
          round
          color="primary"
          icon="info"
        >
          <q-tooltip> Ver Detalhes </q-tooltip>
        </q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>

  <q-card v-else flat bordered>
    <q-card-section horizontal>
      <q-img class="col" :src="movie!.image" :ratio="16 / 9">
        <div class="absolute-bottom text-h6">{{ movie!.title }}</div>
      </q-img>

      <q-card-actions vertical class="justify-around q-px-md">
        <q-btn
          flat
          round
          color="red"
          icon="favorite"
          v-on:click="() => store.set.add(movie!)"
        >
          <q-tooltip> Adicionar aos favoritos </q-tooltip>
        </q-btn>
        <q-btn
          flat
          round
          color="primary"
          icon="info"
          :to="`/details/${movie!.id}`"
        >
          <q-tooltip> Ver Detalhes </q-tooltip>
        </q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.absolute-bottom {
  background: rgba(0, 0, 0, 0.72);
}
.text-h6 {
  font-size: 1.08rem;
}
</style>
