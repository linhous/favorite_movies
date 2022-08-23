<script setup lang="ts"></script>

<template>
  <h1>Componente Box</h1>

  <div class="test">
    <p>Um componente fixo apenas!</p>
    <div class="redtext">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.test {
  font-size: 28px;
  text-align: center;
}
.redtext {
  color: brown;
}
</style>
