<template>
  <div v-editable="blok" class="card">
    <img :src="blok.image.filename" class="card-img-top" alt="Image 1" />
    <div class="card-body">
      <h5 class="card-title">{{ blok.Name }}</h5>
      <p class="card-text">{{ blok.post }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
