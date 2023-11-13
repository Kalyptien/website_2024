<template>
  <canvas id="webglHP"></canvas>

  <div id="void">

    <h1> Kalyptien.fr </h1>

  </div>

  <div id="contact">
    <a id="git" href="https://github.com/Kalyptien" target="_blank"><img src="../assets/github-mark-white.svg" /></a>
    <a id="lk" href="https://www.linkedin.com/in/pierre-loup-costes-pinget-8930b7205/" target="_blank"><img src="../assets/iconmonstr-linkedin-3.svg" /></a>
    <a id="insta" href="https://www.instagram.com/kalyptien_pixelart/" target="_blank"><img src="../assets/Instagram_simple_icon.svg" /></a>
  </div>
  <p id="CopyR">Copyright © 2023 - Tout droits réservés Pierre-Loup Costes-Pinget - France</p>
</template>

<script>
import initHPThreeJS from "@/js/HPThreejs.js";

export default {
  mounted: function () {
    initHPThreeJS()
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/homepage.sass";
</style>
