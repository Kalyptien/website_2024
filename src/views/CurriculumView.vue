<template>
  <div id="cv">

    <canvas id="webglCV"></canvas>

    <section id="header" class="section">
      <section>
        <h1>Pierre-Loup</h1>
        <h2>Costes-Pinget</h2>
        <h3>{{ age }} ans</h3>
        <h3>Français / Anglais</h3>
      </section>
    </section>

    <hr>

    <section id="prog" class="section whiteBG">
      <h2>De nombreuses technologies</h2>
      <table>
        <tr v-for="progline in prog">
          <td v-for="(value) in progline">{{ value }}</td>
        </tr>
      </table>
    </section>

    <hr>

    <section id="diplome" class="section whiteBG">
      <h2>Mes diplômes</h2>
      <section v-for="dipline in diplomes">
        <h3>{{ dipline.name }}</h3>
        <h4 class="bold">{{ dipline.spe }}</h4>
        <h4 class="italic">{{ dipline.date }}</h4>
      </section>
    </section>

    <hr>

    <section id="pro" class="section whiteBG">
      <h2>Mes expériences</h2>
      <section v-for="expline in experiences">
        <h3>{{ expline.name }}</h3>
        <h4 class="bold">{{ expline.techno }}</h4>
        <h4>{{ expline.desc }}</h4>
        <h4 class="bold">{{ expline.job }}</h4>
        <h4 class="italic">{{ expline.date }}</h4>
        <h4><a :href=expline.link>Vers {{ expline.name }}</a></h4>
      </section>
    </section>

    <hr>

    <section id="projet" class="section whiteBG">
      <h2>Mes projets</h2>
      <section v-for="projline in projets">
        <h3>{{ projline.name }}</h3>
        <h4 class="italic">{{ projline.info }}</h4>
        <h4 class="bold">{{ projline.job }}</h4>
        <h4>{{ projline.desc }}</h4>
        <h4><a :href=projline.link>Plus d'informations...</a></h4>
      </section>
    </section>

    <hr>

    <section id="footer">

      <h2>Plus d'informations sur</h2>

      <div id="contact">
        <a href="https://github.com/Kalyptien" target="_blank"><img src="../assets/github-mark-white.svg" /></a>
        <a href="https://www.linkedin.com/in/pierre-loup-costes-pinget-8930b7205/" target="_blank"><img
            src="../assets/iconmonstr-linkedin-3.svg" /></a>
      </div>
    </section>

  </div>
  <p id="CopyR">Copyright © 2023 - Tout droits réservés Pierre-Loup Costes-Pinget - France</p>
</template>

<script>
import initCVThreeJS from "@/js/CVThreejs.js";

export default {
  mounted: function () {
    initCVThreeJS()
    this.getAge()
  },
  data: () => {
    return {
      age: 0,
      prog: [
        ["HTML / CSS / SASS", "JS / TS", "Three.js"],
        ["Angular / Vue.js", "SQL / PLPGSQL", "PHP / Symfony"],
        ["Java / JEE", "Android (Java-XML)", "ADA"]
      ],
      diplomes: [
        {
          name: "Licence professionnelle",
          spe: "Spécialité Application Web",
          date: "2021-22 : IUT 2 - Grenoble"
        },
        {
          name: "DUT",
          spe: "Spécialité Informatique",
          date: "2019-21 : IUT 2 - Grenoble"
        },
        {
          name: "Baccalauréat général",
          spe: "Spécialité Science de l`Ingénieur",
          date: "2017-19 : Lycée Paul Héroult - Saint Jean de Maurienne"
        }
      ],
      projets: [
        {
          name: "Ani'Game",
          info: "2 personnes",
          job: "Graphiste & Développeur",
          desc: "Logiciel associatif de blind-test",
          link: "https://github.com/GaelGC/ani-grenoble-games-client",
        },
        {
          name: "Rutabagarre",
          info: "4 personnes / 5 jours",
          job: "Graphiste & Intégrateur",
          desc: "GameJam - Arrivé en 1ere place",
          link: "https://github.com/mindstorm38/rutabagarre",
        },
        {
          name: "Red Team",
          info: "3 personnes",
          job: "Spécialisé Forensic",
          desc: "Concours de Cyber-Sécurité - Arrivé en 3eme place",
          link: "https://esisar.grenoble-inp.fr/fr/l-ecole/csaw-2018-les-resultats",
        }
      ],
      experiences: [
        {
          name: "Alteca",
          techno: "Vue.js",
          desc: "Développement de projets clients",
          job: "Développeur Front-End",
          date: "Octobre 2023 - Alteca - Grenoble",
          link: "https://www.alteca.fr"
        },
        {
          name: "PRO.TO.T.Y.PE.",
          techno: "Symfony & Marzipano",
          desc: "Développement d'un Serious-Game Européen",
          job: "Développeur, gestionnaire de projet & photographe",
          date: "Décembre 2022 à Mai 2023 - Grenoble INP - Grenoble",
          link: "http://prototype-project.eu"
        },
        {
          name: "Lojii",
          techno: "PL/pgSQL",
          desc: "Développement d'un ERP de gestion immobilière",
          job: "Développeur Back-End",
          date: "Septembre 2021 à Octobre 2022 - Neoteem - Meylan",
          link: "https://neoteem.fr"
        },
        {
          name: "PepinoixApp",
          techno: "Android (Java/XML)",
          desc: "Développement d'une logiciel de contrôle qualité",
          job: "Développeur mobile",
          date: "Mai 2021 à Juillet 2021 - Pepinoix - Poliénas",
          link: "http://www.pepinoix.com/fr/"
        }
      ]
    }
  },
  methods: {
    getAge() {
      var today = new Date();
      var birthDate = new Date('08/11/2001');
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.age = age
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/sass/cv.sass";
</style>
