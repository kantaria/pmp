<template lang="pug">
</template>

<script setup lang="ts">
useHead({
  title: "",
  meta: [],
});
const isLoading = ref(true);

onMounted(() => {
  isLoading.value = false;
});
</script>
