<template>
  <canvas id="webglHB">
  </canvas>
  
  <button id="switchMode">UV Light : ON</button>
</template>

<script>
import initHBThreeJS from "@/js/HBThreejs.js";

export default {
  mounted: function () {
    initHBThreeJS()
  }
};
</script>

<style lang="scss" scoped>
@import "@/sass/hb.sass";
</style>
