<script setup lang="ts"></script>

<template>
  <div class="layout-demo">
    <a-layout style="height: 100vh">
      <a-layout-header>
        <a-page-header title="ArcoDesign" subtitle="ArcoDesign Vue 2.0">
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
          <a-row :gutter="20" :style="{ marginBottom: '20px' }">
            <a-col :span="8">
              <a-card
                title="Arco Card"
                :bordered="false"
                :style="{ width: '100%' }"
              >
                <template #extra>
                  <a-link>More</a-link>
                </template>
                Card content
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card
                title="Arco Card"
                :bordered="false"
                :style="{ width: '100%' }"
              >
                <template #extra>
                  <a-link>More</a-link>
                </template>
                Card content
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card
                title="Arco Card"
                :bordered="false"
                :style="{ width: '100%' }"
              >
                <template #extra>
                  <a-link>More</a-link>
                </template>
                Card content
              </a-card>
            </a-col>
          </a-row>
          <a-row :gutter="20">
            <a-col :span="16">
              <a-card
                title="Arco Card"
                :bordered="false"
                :style="{ width: '100%' }"
              >
                <template #extra>
                  <a-link>More</a-link>
                </template>
                Card content
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card
                title="Arco Card"
                :bordered="false"
                :style="{ width: '100%' }"
              >
                <template #extra>
                  <a-link>More</a-link>
                </template>
                Card content
              </a-card>
            </a-col>
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
