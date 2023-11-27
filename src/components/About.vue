<template>
  <div v-editable="blok">
    <section>
      <div class="wrapper">
        <div class="heroMessage">
          <div class="heroImages">
            <img class="heroImg1" :src="blok.image1.filename" alt="" />
            <img class="heroImg2" :src="blok.image2.filename" alt="" />
            <img class="heroImg3" :src="blok.image3.filename" alt="" />
          </div>
          <div class="heroContent">
            <h1>Delicious Persian Food Catering</h1>
            <p>
              Experience the rich flavors and aroma of traditional Persian
              cuisine for your special events.
            </p>
            <a href="#" class="btn btn-primary">Order Now</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import "./about.css";
defineProps({ blok: Object });
</script>
