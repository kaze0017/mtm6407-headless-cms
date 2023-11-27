<template>
  <div v-editable="blok">
    <footer class="footer">
      <div class="copyright">
        <h5>{{ blok.copyright }}</h5>
      </div>
    </footer>
  </div>
</template>
<script setup>
import "./footer.css";
defineProps({ blok: Object });
</script>
