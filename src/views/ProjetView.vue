<template>
    <div id="BG"></div>

    <section id="projet">
        <section v-for="(projline, index) in projets" id="content">

            <template v-if="index % 2 == 0">
                <div id="content-l">
                    <img :src="getImgUrl(projline.img)" :class="projline.class">
                    <div id="text">
                        <h1>{{ projline.name }}</h1>
                        <h3 v-if="projline.etat == 'F'" class="final">Finalisé</h3>
                        <h3 v-else-if="projline.etat == 'E'" class="running">En cours...</h3>
                        <h3 v-else-if="projline.etat == 'V'" class="comming">A venir</h3>
                        <h4>{{ projline.header }} </h4>
                        <section>{{ projline.desc }}</section>
                        <a v-if="projline.link != ''" :href="projline.link" target="_blank">Plus d'informations...</a>
                        <a v-else></a>
                    </div>
                </div>
                <hr>
            </template>

            <template v-else>
                <div id="content-r">
                    <div id="text">
                        <h1>{{ projline.name }}</h1>
                        <h3 v-if="projline.etat == 'F'" class="final">Finalisé</h3>
                        <h3 v-else-if="projline.etat == 'E'" class="running">En cours...</h3>
                        <h3 v-else-if="projline.etat == 'V'" class="comming">A venir</h3>
                        <h4>{{ projline.header }} </h4>
                        <section>{{ projline.desc }}</section>
                        <a v-if="projline.link != ''" :href="projline.link" target="_blank">Plus d'informations...</a>
                        <a v-else></a>
                    </div>
                    <img :src="getImgUrl(projline.img)" :class="projline.class">
                </div>
                <hr>
            </template>

        </section>

        <section id="footer">
            <h2> Plus de projets sur</h2>

            <div id="contact">
                <a href="https://github.com/Kalyptien" target="_blank"><img src="../assets/github-mark-white.svg" /></a>
            </div>
        </section>
    </section>
    <p id="CopyR">Copyright © 2023 - Tout droits réservés Pierre-Loup Costes-Pinget - France</p>
</template>

<script>
export default {
    data: () => {
        return {
            projets: [
                {
                    img: "Rutabagarre",
                    name: "Rutabgarre",
                    header: "Gamejam - 👨‍👩‍👧‍👦 4 Personnes - ⏰ 5 jours - 💻 Phyton - 👨‍💻 Intrégrateur Front-End & Graphiste",
                    desc: "Gamejam réalisée au cour de mes études en DUT Informatique, nous avons eu une petite semaine pour réaliser un jeu en Python. Deux thèmes étaient également imposés : 'Fruits & Légumes' et 'S'endormir et se réveiller'. C'est après une semaine de dur labeur que nous avons pu décrocher la 1ère place, avec les félicitations du Jury !",
                    etat: "F",
                    link: "https://github.com/mindstorm38/rutabagarre",
                    class: "border"
                },
                {
                    img: "AniGame",
                    name: "Ani'Game",
                    header: "Blindtest - 👨‍👩‍👧‍👦 2 Personnes - ⏰ 1 an - 💻 Electron / TS - 👨‍💻 Intrégrateur Front-End & Graphiste",
                    desc: "Je fais partie depuis quelques années d'une association étudiante : Ani'Grenoble. Elle tourne autour de la culture japonaise et asiatique de manière très générale. Après des années de loyaux services, leurs logiciels de Blindtest commençait à devenir un peu ancien. J'ai alors eu l'occasion de rejoindre un autre membre de l'association pour créer un nouveau logiciel, plus performant. Ce logiciel est utilisé par l'association lors de festivals.",
                    etat: "F",
                    link: "https://github.com/GaelGC/ani-grenoble-games-client",
                    class: "border"
                },
                {
                    img: "Lithopedion",
                    name: "Lithopedion",
                    header: "Mod Minecraft - 👨‍👩‍👧‍👦 1 Personne - 💻 Java - 👨‍💻 Développeur Java, Modélisateur 3D & Graphiste",
                    desc: "Un grand nombre de joueurs de ma génération ont été bercés par Minecraft. Ce projet est en attente depuis quelques temps, mais s'étoffe de jour en jour. Il aura pour but d'intégrer un nouvel univers en jeu, de nombreuses mécaniques, une ambiance japonisante et glauque.",
                    etat: "V",
                    link: "https://github.com/Kalyptien/forge-Lithopedion-1.18.2",
                    class: "border"
                },
                {
                    img: "HB",
                    name: "Herobrine.fr",
                    header: "Site internet - 👨‍👩‍👧‍👦 3 Personnes - 💻 TS - 👨‍💻 Développeur Front-End",
                    desc: "Herobrine est un jeu de rôle français, depuis 2012, accompagné d'un site internet, lié à un serveur Minecraft. Chaque jours, de nombreux joueurs se regroupent pour jouer ensemble et vivre diverses aventures. Cependant, il est parfois nécessaire de faire évoluer le site et certains systèmes. J'ai alors pu rejoindre l'équipe de développement pour participer à la refonte d'un élément clé du jeu de rôle.",
                    etat: "E",
                    link: "http://herobrine.fr/",
                    class: "border"
                },
                {
                    img: "null",
                    name: "Cerebrum",
                    header: "App Web - 👨‍👩‍👧‍👦 1 Personne - 💻 Three.js / TS - 👨‍💻 Développeur Web",
                    desc: "Ce projet est à l'état d'écriture depuis déjà quelques années. Son objectif est d'être capable, en web, de recréer un modèle 3D du cerveau à partir d'imagerie IRM fournit. De nombreux outils pourront être greffés à l'application : la possibilité d'ajouter des claques spécifiques pour mettre en évidence certains problèmes, un moyen de découper le cerveau couche par couche, ...",
                    etat: "V",
                    link: ""
                },
                {
                    img: "null",
                    name: "Kojiki",
                    header: "Jeux - 👨‍👩‍👧‍👦 1 Personne - 💻 Gamemaker Studio - 👨‍💻 Développeur",
                    desc: "Ce projet a pour but de prototyper une dynamisation d'un style de jeux très spécifique : Le Tour par tour. Ces jeux sont souvent lents, et demandent beaucoup de réflexion et son assez minimaliste. Mon envie est d'ajouter un peu d'énergie à ces jeux et de grandiose, tout en apportant des références à des univers que j'affectionne tant.",
                    etat: "V",
                    link: ""
                }
            ]
        }
    },
    methods: {
        getImgUrl(name) {
            var images = require.context('../assets/imgPJ/', false, /\.png$/)
            return images('./' + name + ".png")
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/sass/projet.sass";
</style>
