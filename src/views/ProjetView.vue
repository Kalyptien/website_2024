<template>
    <div id="BG"></div>

    <section id="projet">
        <section v-for="(projline, index) in projets">

            <template v-if="index % 2 == 0">
                <div id="content-l">
                    <img src="../assets/logo.png">
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
                    <img src="../assets/logo.png">
                </div>
                <hr>
            </template>

        </section>

        <h2> Plus de projet sûr</h2>
    </section>
</template>

<script>
export default {
    data: () => {
        return {
            projets: {
                1: {
                    img: "",
                    name: "AAAAAAAAAAAAAAAAAA",
                    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, in voluptates. Omnis natus blanditiis eligendi illo incidunt libero corrupti suscipit, dolorem atque expedita temporibus fuga voluptatum obcaecati alias! Veniam, recusandae!",
                    etat: "F"
                },
                2: {
                    img: "",
                    name: "BBBBBBBBBBBBBBBBBB",
                    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, in voluptates. Omnis natus blanditiis eligendi illo incidunt libero corrupti suscipit, dolorem atque expedita temporibus fuga voluptatum obcaecati alias! Veniam, recusandae!",
                    etat: "E"
                },
                3: {
                    img: "",
                    name: "CCCCCCCCCCCCCCCCCC",
                    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, in voluptates. Omnis natus blanditiis eligendi illo incidunt libero corrupti suscipit, dolorem atque expedita temporibus fuga voluptatum obcaecati alias! Veniam, recusandae!",
                    etat: "V"
                },
                4: {
                    img: "",
                    name: "DDDDDDDDDDDDDDDDDDDDDDD",
                    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, in voluptates. Omnis natus blanditiis eligendi illo incidunt libero corrupti suscipit, dolorem atque expedita temporibus fuga voluptatum obcaecati alias! Veniam, recusandae!",
                    etat: "F"
                },
                5: {
                    img: "",
                    name: "EEEEEEEEEEEEE",
                    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, in voluptates. Omnis natus blanditiis eligendi illo incidunt libero corrupti suscipit, dolorem atque expedita temporibus fuga voluptatum obcaecati alias! Veniam, recusandae!",
                    etat: "V"
                }
            }
        }
    }
};
</script>

<style lang="scss">
@import "@/sass/projet.sass";
</style>
