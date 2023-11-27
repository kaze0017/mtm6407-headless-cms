<template>
  <div v-editable="blok">
    <section class="testimonial">
      <h1 class="section-header">{{ blok.header }}</h1>
      <div class="wrapper">
        <div class="testimonial">
          <div class="imgContainer">
            <img :src="blok.image.filename" alt="" />
          </div>
          <div class="testimony">
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item">
                  <div class="flexContainer">
                    <p>
                      {{ blok.testimonydesc1 }}
                    </p>
                    <h3>{{ blok.testimonyname1 }}</h3>
                  </div>
                </div>
                <div class="carousel-item active">
                  <div class="flexContainer">
                    <p>
                      {{ blok.testimonydesc2 }}
                    </p>
                    <h3>{{ blok.testimonyname2 }}</h3>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="flexContainer">
                    <p>
                      {{ blok.testimonydesc3 }}
                    </p>
                    <h3>{{ blok.testimonyname3 }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import "./testimonial.css";
defineProps({ blok: Object });
</script>
