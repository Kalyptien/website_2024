<template>
  <canvas id="webglHP"></canvas>

  <div id="void">

  </div>

  <div id="collinesBG"></div>
  <div id="ground">
    <hr>
    <section>
      <h3>Bienvenue</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente rerum voluptatem ipsam, quidem vero tenetur cum
        assumenda sit reprehenderit illo quasi praesentium nihil recusandae eos sequi voluptatum officia, neque sunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio beatae aliquam dolor culpa ducimus doloribus harum.
        Incidunt aperiam, reprehenderit officia quibusdam ipsa, inventore, quam recusandae nesciunt eveniet veniam quo!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium numquam ad quod eum, sequi laboriosam aliquam
        qui quisquam necessitatibus cumque, illo deserunt dolorem? Sit ducimus nostrum sed nulla vero debitis
      </p>
    </section>
    <hr>

    <div id="contact">
      <img alt="Vue logo" src="../assets/logo.png" />
      <img alt="Vue logo" src="../assets/logo.png" />
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
  </div>
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
