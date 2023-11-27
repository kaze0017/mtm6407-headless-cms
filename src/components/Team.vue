<template>
  <div v-editable="blok">
    <section class="people">
      <h2 class="section-header">{{ blok.title }}</h2>
      <div class="wrapper">
        <div class="foodsContainer">
          <div class="row">
            <div
              v-for="blok in blok.columns"
              :key="blok._uid"
              class="col-md-3 mb-3"
            >
              <StoryblokComponent :blok="blok" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
