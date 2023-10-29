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

    <section id="prog" class="section">
      <h2>De nombreuses technologies</h2>
      <table>
        <tr v-for="progline in prog">
          <td v-for="(value) in progline">{{ value }}</td>
        </tr>
      </table>
    </section>

    <section id="diplome" class="section">
      <h2>Mes diplômes</h2>
      <section v-for="dipline in diplomes">
        <h3>{{ dipline.name }}</h3>
        <h4>{{ dipline.spe }}</h4>
        <h4>{{ dipline.date }}</h4>
      </section>
    </section>

    <section id="projet" class="section">
      <h2>Mes projets</h2>
      <section v-for="projline in projets">
        <h3>{{ projline.name }}</h3>
        <h4>{{ projline.info }}</h4>
        <h4>{{ projline.job }}</h4>
        <h4>{{ projline.desc }}</h4>
        <h4><a :href=projline.link>Plus d'informations...</a></h4>
      </section>
    </section>

    <section id="pro" class="section">
      <h2>Mes expériences</h2>
      <section v-for="expline in experiences">
        <h3>{{ expline.name }}</h3>
        <h4>{{ expline.techno }}</h4>
        <h4>{{ expline.desc }}</h4>
        <h4>{{ expline.job }}</h4>
        <h4>{{ expline.date }}</h4>
        <h4><a :href=expline.link>Vers {{ expline.name }}</a></h4>
      </section>
    </section>

    <section id="hobbies" class="section">
      <h2>Je fais également...</h2>

      <section v-for="(name) in hobbies">
        <h3>{{ name }}</h3>
      </section>
    </section>

    <section id="footer" class="section">

      <h2>Retrouvez plus d'informations sur</h2>
      <div class="whitekBG"></div>

      <div id="logo">
      </div>
    </section>

  </div>
</template>

<script>
import onInitCVTHREE from "@/js/CVThreejs.js";

export default {
  mounted: function () {
    onInitCVTHREE()
  },
  data: () => {
    return {
      prog: {
        l1: ["HTML / CSS / SASS", "JS / TS", "Three.js"],
        l2: ["Angular / Vue.js", "SQL / PLPGSQL", "PHP / Symfony"],
        l3: ["Java / JEE", "Android (Java-XML)", "ADA"]
      },
      diplomes: {
        l1: {
          name: "Licence professionnelle",
          spe: "Spécialité Application Web",
          date: "2021-22 : IUT 2 - Grenoble"
        },
        l2: {
          name: "DUT",
          spe: "Spécialité Informatique",
          date: "2019-21 : IUT 2 - Grenoble"
        },
        l3: {
          name: "Baccalauréat général",
          spe: "Spécialité Science de l`Ingénieur",
          date: "2017-19 : Lycée Paul Héroult - Saint Jean de Maurienne"
        }
      },
      projets: {
        l1: {
          name: "Ani'Game",
          info: "2 personnes",
          job: "Graphiste & Développeur",
          desc: "Logiciel associatif de blind-test",
          link: "https://github.com/GaelGC/ani-grenoble-games-client",
        },
        l2: {
          name: "Rutabagarre",
          info: "4 personnes / 5 jours",
          job: "Graphiste & Intégrateur",
          desc: "GameJam - Arrivé en 1ere place",
          link: "https://github.com/mindstorm38/rutabagarre",
        },
        l3: {
          name: "Red Team",
          info: "3 personnes",
          job: "Spécialisé Forensic",
          desc: "Concours de Cyber-Sécurité - Arrivé en 3eme place",
          link: "https://esisar.grenoble-inp.fr/fr/l-ecole/csaw-2018-les-resultats",
        }
      },
      experiences: {
        l1: {
          name: "Alteca",
          techno: "Vue.js",
          desc: "Développement de projets clients",
          job: "Développeur Front-End",
          date: "Octobre 2023 - Alteca - Grenoble",
          link: "https://www.alteca.fr"
        },
        l2: {
          name: "PRO.TO.T.Y.PE.",
          techno: "Symfony & Marzipano",
          desc: "Développement d'un Serious-Game Européen",
          job: "Développeur, gestionnaire de projet & photographe",
          date: "Décembre 2022 à Mai 2023 - Grenoble INP - Grenoble",
          link: "http://prototype-project.eu"
        },
        l3: {
          name: "Lojii",
          techno: "PL/pgSQL",
          desc: "Développement d'un ERP de gestion immobiliaire",
          job: "Développeur Back-End",
          date: "Septembre 2021 à Octobre 2022 - Neoteem - Meylan",
          link: "https://neoteem.fr"
        },
        l4: {
          name: "PepinoixApp",
          techno: "Android (Java/XML)",
          desc: "Développement d'une logiciel de contrôle qualité",
          job: "Développeur mobile",
          date: "Mai 2021 à Juillet 2021 - Pepinoix - Poliénas",
          link: "http://www.pepinoix.com/fr/"
        }
      },
      hobbies: ["Du Pixel-Art", "De la Photographie", "De la Modélisation 3D", "De l'Escalade", "De la Randonnée"]
    }
  }
};
</script>

<style lang="scss">
@import "@/sass/cv.sass";
</style>
