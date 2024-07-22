<template>
  <canvas id="webglHB"></canvas>
</template>

<script>
import initHBThreeJS from "@/js/HBThreejs.js";

export default {
  mounted: function () {
    initHBThreeJS()
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/hb.sass";
</style>
