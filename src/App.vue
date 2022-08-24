<script setup lang="ts">
interface ITitle {
  id: string;
  resultType: string;
  image: string;
  title: string;
  description: string;
}

interface ITitles {
  searchType: string;
  expression: string;
  results: ITitle[];
  errorMessage: string;
}

import { ref } from "vue";

const SearchText = ref<string>("");
const Loading = ref<boolean>(false);
const Lista = ref<ITitles>();

const searchTitles = () => {
  if (SearchText.value) {
    Lista.value = undefined;
    Loading.value = true;
    fetch(`https://imdb-api.com/en/API/Search/k_00ozclmc/${SearchText.value}`)
      .then((res) => res.json())
      .then((res) => (Lista.value = res))
      .finally(() => (Loading.value = false));
  }
};
</script>

<template>
  <div class="layout-demo">
    <a-layout style="height: 100vh">
      <a-layout-header>
        <a-page-header title="Fox Favorite">
          <template #extra>
            <a-radio-group type="button">
              <a-radio value="inicio">Início</a-radio>
            </a-radio-group>
          </template>
        </a-page-header>
      </a-layout-header>
      <a-layout-content>
        <div
          :style="{
            boxSizing: 'border-box',
            width: '100%',
            padding: '40px',
            backgroundColor: 'var(--color-fill-2)',
          }"
        >
          <a-input-search
            v-model="SearchText"
            placeholder="Digite o filme/série que deseja procurar..."
            button-text="Procurar"
            search-button
            v-on:click="searchTitles"
            :loading="Loading"
            :style="{ marginBottom: '20px' }"
          />
          <a-row v-if="Loading" :gutter="20" :style="{ marginBottom: '20px' }">
            <a-spin dot />
          </a-row>
          <a-row :gutter="20">
            <a-col
              :span="12"
              v-if="Lista"
              v-for="item in Lista.results"
              :style="{ marginBottom: '20px' }"
            >
              <a-card :bordered="false">
                <a-row :gutter="20">
                  <a-col :span="8">
                    <a-image width="100%" :src="item.image" :alt="item.title" />
                  </a-col>
                  <a-col :span="16">
                    {{ item.title }}
                    {{ item.description }}
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
            <a-empty description="Você precisa procurar algo..." v-else />
          </a-row>
        </div>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
.layout-demo {
  padding: 0 20px;
}
</style>
