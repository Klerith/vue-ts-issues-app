<script setup lang="ts">

</script>

<template>
  <q-btn-toggle toggle-color="primary" push spread :options="[
    { label: 'All', value: '' },
    { label: 'Open', value: 'open' },
    { label: 'Closed', value: 'closed' },
  ]" />
</template>


<style scoped>

</style>
