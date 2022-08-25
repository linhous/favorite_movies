<script setup lang="ts">
import { ref } from "vue";
import { IMovies, IMovie } from "../interfaces/Movie";
import useStore from "../store";
import CardMovie from "../components/CardMovie.vue";

const store = useStore();
const SearchText = ref<string>(store.searchTerm);
const Loading = ref<boolean>(false);
const Lista = ref<IMovie[]>(store.searchList);

const searchTitles = () => {
  if (SearchText.value) {
    Lista.value = [];
    Loading.value = true;
    fetch(
      `https://imdb-api.com/pt-BR/API/Search/k_00ozclmc/${SearchText.value}`
    )
      .then((res) => res.json())
      .then((res) => {
        Lista.value = res.results;
        store.set.updateSearchTerm(SearchText.value);
        store.set.updateSearchList(Lista.value);
      })
      .finally(() => (Loading.value = false));
  }
};
</script>

<template>
  <div class="q-pa-lg">
    <q-form @submit="searchTitles">
      <q-input
        filled
        bottom-slots
        v-model="SearchText"
        hint="Digite o nome da série ou do filme..."
        label="Pesquisar"
        counter
        maxlength="30"
        lazy-rules
        :rules="[
          (val) =>
            (val && val.length > 0) ||
            'Por favor, digite um termo para pesquisar...',
        ]"
      >
        <q-btn round dense flat type="submit" icon="search" />
      </q-input>
    </q-form>

    <div class="list row q-col-gutter-md">
      <q-inner-loading
        :showing="Loading"
        label="Pesquisando..."
        label-style="font-size: 1.1em"
      />
      <div v-for="movie in Lista!" class="col-12 col-md-6 col-lg-4">
        <CardMovie :store="store" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  margin-top: 20px;
}
</style>
