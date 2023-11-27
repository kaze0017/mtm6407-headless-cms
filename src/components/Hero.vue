<template>
  <div v-editable="blok" class="hero-slide">
    <div class="wrapper">
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="blok.slide1.filename" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>{{ blok.headline }}</h1>
              <h2>{{ blok.subheadline }}</h2>
            </div>
          </div>
          <div class="carousel-item active">
            <img :src="blok.slide2.filename" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>{{ blok.headline }}</h1>
              <h2>{{ blok.subheadline }}</h2>
            </div>
          </div>
          <div class="carousel-item active">
            <img :src="blok.slide3.filename" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>{{ blok.headline }}</h1>
              <h2>{{ blok.subheadline }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "./hero.css";
defineProps({ blok: Object });
</script>
