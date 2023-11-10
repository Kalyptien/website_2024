<template>
  <canvas id="webglHP"></canvas>

  <div id="void">

    <h1> Kalyptien.fr </h1>

  </div>

  <div id="contact">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <p id="CopyR">Copyright © 2023 - Tout droits réservés Pierre-Loup Costes-Pinget</p>
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
