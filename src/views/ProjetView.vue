<template>
    <div id="BG"></div>

    <section id="projet">
        <section v-for="(projline, index) in projets">

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
            <h2> Plus de projets sûr</h2>

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
                    desc: "Gamejam réalisé au court de mes études en DUT Informatique, nous avons eu une petite semaine pour réaliser un jeux en Python. Deux thèmes étaient également imposé : 'Fruits & Légumes' et 'S'endormir et se réveiller'. C'est après une semaine de dur labeur que nous avons pu décrocher la 1ere place, avec les félicitations du Jury !",
                    etat: "F",
                    link: "https://github.com/mindstorm38/rutabagarre",
                    class: "border"
                },
                {
                    img: "AniGame",
                    name: "Ani'Game",
                    header: "Blindtest - 👨‍👩‍👧‍👦 2 Personnes - ⏰ 1 an - 💻 Electron / TS - 👨‍💻 Intrégrateur Front-End & Graphiste",
                    desc: "Je fais partie depuis quelques années d'une association étudiante : Ani'Grenoble. Elle tourne autour de la culture japonaise et asiatique de manière très général. Après des années de loyaux services, leurs logiciles de Blindtest commencait à devenir un peu ancienne. J'ai alors eu l'occasion de rejoindre un autre membre de l'association pour créer un nouveau logiciel, plus perfomant. Ce logicile est utilisé par l'association lors de festivales.",
                    etat: "F",
                    link: "https://github.com/GaelGC/ani-grenoble-games-client",
                    class: "border"
                },
                {
                    img: "Lithopedion",
                    name: "Lithopedion",
                    header: "Mod Minecraft - 👨‍👩‍👧‍👦 1 Personne - 💻 Java - 👨‍💻 Développeur Java, Modélisateur 3D & Graphiste",
                    desc: "Un grand nombres de joueurs de ma génération ont étaient bercé par Minecraft. Ce projet est en attente depuis quelques temps, mais s'éttofe de jour en jour. Il aura pour but d'intégrer un nouvelle univers en jeux, de nombreuses mécaniques, une ambiance japonisante et glauque.",
                    etat: "V",
                    link: "https://github.com/Kalyptien/forge-Lithopedion-1.18.2",
                    class: "border"
                },
                {
                    img: "HB",
                    name: "Herobrine.fr",
                    header: "Site internet - 👨‍👩‍👧‍👦 3 Personnes - 💻 TS - 👨‍💻 Développeur Front-End",
                    desc: "Herobrine est un jeux de rôle français, depuis 2012, accompagné d'une site internet, lié à un server Minecraft. Chaque joueurs, de nombreux joueurs se regroupent ensemble pour jouer ensemble et vivre diverses aventures. Cependant, il est parfois nécéssaire de faire évoluer le site, certains systèmes. J'ai alors pu rejoindre l'épique de développement pour participer à la refonte d'une élément clé du jeux de rôle.",
                    etat: "E",
                    link: "http://herobrine.fr/",
                    class: "border"
                },
                {
                    img: "ShadowList",
                    name: "Shadow'List",
                    header: "App mobile - 👨‍👩‍👧‍👦 1 Personne - 💻 Kotlin - 👨‍💻 Développeur Mobile",
                    desc: "Il est parfois nécéssaire, en jeux de rôle, de compiler énormément d'informations. C'est dans cette objectif qu'il pourrait être intéréssent d'avoir une application mobile, facile d'accès, pour stocker ces informations. Cela me permettra aussi de découvrir pleinement Jetpack",
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
