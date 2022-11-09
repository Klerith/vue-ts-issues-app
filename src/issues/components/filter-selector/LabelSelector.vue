<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';

</script>

<template>
  <LoaderSpinner size="50px" :thickness="1" :show-text="false" />

  <q-chip v-for="label of 10" :key="label" color="primary" outline clickable>
    Algun nombre
  </q-chip>


</template>


<style scoped>

</style>
