<template>
    <div id="BG"></div>

    <section id="projet">
        <section v-for="(projline, index) in projets">

            <template v-if="index % 2 == 0">
                <div id="content-l">
                    <img :src="getImgUrl(projline.img)">
                    <div id="text">
                        <h1>{{ projline.name }}</h1>
                        <h3 v-if="projline.etat == 'F'" class="final">Finalisé</h3>
                        <h3 v-else-if="projline.etat == 'E'" class="running">En cours...</h3>
                        <h3 v-else-if="projline.etat == 'V'" class="comming">A venir</h3>
                        <section>{{ projline.desc }}</section>
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
                        <section>{{ projline.desc }}</section>
                    </div>
                    <img :src="getImgUrl(projline.img)">
                </div>
                <hr>
            </template>

        </section>

        <section id="contact">
            <h2> Plus de projet sûr</h2>

            <img src="../assets/logo.png">
        </section>
    </section>
</template>

<script>
export default {
    data: () => {
        return {
            projets: [
                {
                    img: "logo",
                    name: "AAAAAAAAAAAAAAAAAA",
                    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, in voluptates. Omnis natus blanditiis eligendi illo incidunt libero corrupti suscipit, dolorem atque expedita temporibus fuga voluptatum obcaecati alias! Veniam, recusandae!",
                    etat: "F"
                },
                {
                    img: "logo",
                    name: "BBBBBBBBBBBBBBBBBB",
                    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, in voluptates. Omnis natus blanditiis eligendi illo incidunt libero corrupti suscipit, dolorem atque expedita temporibus fuga voluptatum obcaecati alias! Veniam, recusandae!",
                    etat: "E"
                },
                {
                    img: "logo",
                    name: "CCCCCCCCCCCCCCCCCC",
                    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, in voluptates. Omnis natus blanditiis eligendi illo incidunt libero corrupti suscipit, dolorem atque expedita temporibus fuga voluptatum obcaecati alias! Veniam, recusandae!",
                    etat: "V"
                },
                {
                    img: "logo",
                    name: "DDDDDDDDDDDDDDDDDDDDDDD",
                    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, in voluptates. Omnis natus blanditiis eligendi illo incidunt libero corrupti suscipit, dolorem atque expedita temporibus fuga voluptatum obcaecati alias! Veniam, recusandae!",
                    etat: "F"
                },
                {
                    img: "logo",
                    name: "EEEEEEEEEEEEE",
                    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, in voluptates. Omnis natus blanditiis eligendi illo incidunt libero corrupti suscipit, dolorem atque expedita temporibus fuga voluptatum obcaecati alias! Veniam, recusandae!",
                    etat: "V"
                }
            ]
        }
    },
    methods: {
        getImgUrl(name) {
            var images = require.context('../assets/', false, /\.png$/)
            return images('./' + name + ".png")
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/sass/projet.sass";
</style>
